import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { promptExamples } from '../data/prompts';
import { renderResults } from './results';
import { shuffle } from '../utils';

export function renderPromptRepair(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL_ROUNDS = 5;
  const examples = shuffle(promptExamples).slice(0, TOTAL_ROUNDS);
  let round = 0;
  let score = 0;

  function renderRound() {
    const ex = examples[round];
    const badWords = ex.badPrompt.split(/\s+/);
    const goodWords = ex.goodPrompt.split(/\s+/);

    // Words in goodPrompt not in badPrompt -> word bank
    const badSet = new Set(badWords.map(w => w.toLowerCase()));
    const bankWords = goodWords.filter(w => !badSet.has(w.toLowerCase()));
    const shuffledBank = shuffle(bankWords);

    // Track state: each bad word can be toggled removed, bank words can be inserted
    const tokenStates: { word: string; removed: boolean }[] = badWords.map(w => ({ word: w, removed: false }));
    const insertedWords: { word: string; afterIndex: number }[] = [];

    container.innerHTML = `
      ${renderHeader('提示词修复 Prompt Repair', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>第 ${round + 1}/${TOTAL_ROUNDS} 题</span>
          <span>得分: ${score}/${TOTAL_ROUNDS}</span>
        </div>
        <div class="game-question">${ex.task_zh}</div>
        <div class="game-instruction">修复下面的提示词：点击删除多余的词，从词库添加缺少的词</div>
        <div class="game-body">
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">点击词语切换删除状态</p>
          <div class="editable-prompt" id="editable">
            ${badWords.map((w, i) => `<span class="word-token" data-index="${i}">${w}</span>`).join('')}
          </div>
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">词库 — 点击添加到提示词末尾</p>
          <div class="word-bank" id="bank">
            ${shuffledBank.map((w, i) => `<span class="word-token" data-bank="${i}" data-word="${w}">${w}</span>`).join('')}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn">提交 Submit</button>
        </div>
      </div>
    `;

    const editable = container.querySelector('#editable')!;
    const bank = container.querySelector('#bank')!;

    // Toggle removed state on bad words
    editable.addEventListener('click', (e) => {
      const token = (e.target as HTMLElement).closest('.word-token') as HTMLElement;
      if (!token) return;
      const idx = token.dataset.index;
      const bankIdx = token.dataset.bank;

      if (idx !== undefined) {
        // Toggle remove on original word
        const i = parseInt(idx);
        tokenStates[i].removed = !tokenStates[i].removed;
        token.classList.toggle('removed', tokenStates[i].removed);
        playSound('keystroke');
      } else if (bankIdx !== undefined) {
        // Remove inserted bank word
        playSound('keystroke');
        const word = token.dataset.word!;
        const insIdx = insertedWords.findIndex(w => w.word === word);
        if (insIdx !== -1) insertedWords.splice(insIdx, 1);
        token.remove();
        // Restore in bank
        const bankToken = bank.querySelector(`[data-bank="${bankIdx}"]`) as HTMLElement;
        if (bankToken) {
          bankToken.classList.remove('selected');
          bankToken.style.display = '';
        }
      }
    });

    // Add bank words to editable area
    bank.addEventListener('click', (e) => {
      const token = (e.target as HTMLElement).closest('.word-token') as HTMLElement;
      if (!token || token.classList.contains('selected')) return;
      playSound('keystroke');

      const word = token.dataset.word!;
      const bankIdx = token.dataset.bank!;
      token.classList.add('selected');
      token.style.display = 'none';

      insertedWords.push({ word, afterIndex: tokenStates.length });

      const newToken = document.createElement('span');
      newToken.className = 'word-token selected';
      newToken.textContent = word;
      newToken.dataset.bank = bankIdx;
      newToken.dataset.word = word;
      editable.appendChild(newToken);
    });

    container.querySelector('#submit-btn')!.addEventListener('click', () => {
      // Build result prompt
      const resultWords: string[] = [];
      tokenStates.forEach(t => {
        if (!t.removed) resultWords.push(t.word);
      });
      insertedWords.forEach(w => resultWords.push(w.word));
      const resultPrompt = resultWords.join(' ').toLowerCase();

      // Score: how many words from goodPrompt appear in result
      const goodSet = new Set(goodWords.map(w => w.toLowerCase()));
      const resultSet = new Set(resultWords.map(w => w.toLowerCase()));

      let matches = 0;
      goodSet.forEach(w => { if (resultSet.has(w)) matches++; });

      // Also penalize keeping bad-only words
      const badOnlyWords = badWords.filter(w => !goodSet.has(w.toLowerCase()));
      let keptBad = 0;
      badOnlyWords.forEach(w => {
        if (resultSet.has(w.toLowerCase())) keptBad++;
      });

      const accuracy = Math.max(0, (matches / goodSet.size) - (keptBad * 0.1));
      const passed = accuracy >= 0.5;

      if (passed) {
        score++;
        playSound('correct');
      } else {
        playSound('wrong');
        state.addToReviewQueue({ id: ex.id, type: 'prompt' });
      }

      // Show before/after comparison
      container.innerHTML = `
        ${renderHeader('提示词修复 Prompt Repair', true)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>第 ${round + 1}/${TOTAL_ROUNDS} 题</span>
            <span>得分: ${score}/${TOTAL_ROUNDS}</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${passed ? '<span style="color:var(--green);">修复成功!</span>' : '<span style="color:var(--red);">还需改进!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">修复前 Before:</p>
            <div class="editable-prompt" style="border:1px solid var(--red);margin-bottom:var(--space-md);opacity:0.7;">${ex.badPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">你的修复 Your fix:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${resultWords.join(' ')}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">参考答案 Reference:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${ex.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;">${ex.explanation_zh}</p>
          </div>
          <div class="game-footer">
            <button class="btn btn-primary btn-block" id="next-btn">${round + 1 < TOTAL_ROUNDS ? '下一题 Next' : '查看结果 Results'}</button>
          </div>
        </div>
      `;

      container.querySelector('#next-btn')!.addEventListener('click', () => {
        round++;
        if (round < TOTAL_ROUNDS) {
          renderRound();
        } else {
          renderResults(container, { worldId, levelIndex, score, total: TOTAL_ROUNDS, gameType: 'prompt-repair' });
        }
      });
    });
  }

  renderRound();
}
