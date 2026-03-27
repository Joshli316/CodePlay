import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { promptExamples } from '../data/prompts';
import { renderResults } from './results';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function renderPromptBuilder(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL_ROUNDS = 5;
  const examples = shuffle(promptExamples).slice(0, TOTAL_ROUNDS);
  let round = 0;
  let score = 0;

  function renderRound() {
    const ex = examples[round];
    const blocks = ex.goodPrompt.split(/\s+/);
    const shuffled = shuffle(blocks);
    const assembled: string[] = [];

    container.innerHTML = `
      ${renderHeader('提示词拼装 Prompt Builder', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>第 ${round + 1}/${TOTAL_ROUNDS} 题</span>
          <span>得分: ${score}/${TOTAL_ROUNDS}</span>
        </div>
        <div class="game-question">${ex.task_zh}</div>
        <div class="game-instruction">把下面的词块拼成一个好的提示词</div>
        <div class="game-body">
          <div class="prompt-assembly" id="assembly">
            <span style="color:var(--text-muted);font-size:var(--text-sm);" id="assembly-placeholder">点击下方词块拼出提示词...</span>
          </div>
          <div class="block-tray" id="tray">
            ${shuffled.map((b, i) => `<div class="prompt-block" data-index="${i}" data-word="${b}">${b}</div>`).join('')}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn" disabled>提交 Submit</button>
        </div>
      </div>
    `;

    const tray = container.querySelector('#tray')!;
    const assembly = container.querySelector('#assembly')!;
    const submitBtn = container.querySelector('#submit-btn') as HTMLButtonElement;
    const placeholder = container.querySelector('#assembly-placeholder') as HTMLElement;

    function updatePlaceholder() {
      if (placeholder) {
        placeholder.style.display = assembled.length > 0 ? 'none' : '';
      }
      submitBtn.disabled = assembled.length === 0;
    }

    // Tap block in tray -> add to assembly
    tray.addEventListener('click', (e) => {
      const block = (e.target as HTMLElement).closest('.prompt-block') as HTMLElement;
      if (!block || block.classList.contains('placed')) return;
      playSound('keystroke');
      block.classList.add('placed');
      const word = block.dataset.word!;
      assembled.push(word);

      const aBlock = document.createElement('div');
      aBlock.className = 'prompt-block';
      aBlock.textContent = word;
      aBlock.dataset.trayIndex = block.dataset.index!;
      assembly.appendChild(aBlock);

      // Tap assembled block to remove
      aBlock.addEventListener('click', () => {
        playSound('keystroke');
        const idx = assembled.indexOf(word);
        if (idx !== -1) assembled.splice(idx, 1);
        aBlock.remove();
        block.classList.remove('placed');
        updatePlaceholder();
      });

      updatePlaceholder();
    });

    submitBtn.addEventListener('click', () => {
      const correctBlocks = blocks;
      let correctCount = 0;
      const total = correctBlocks.length;

      for (let i = 0; i < Math.min(assembled.length, total); i++) {
        if (assembled[i] === correctBlocks[i]) correctCount++;
      }

      const accuracy = correctCount / total;
      const passed = accuracy >= 0.8;

      if (passed) {
        score++;
        playSound('correct');
      } else {
        playSound('wrong');
        state.addToReviewQueue({ id: ex.id, type: 'prompt' });
      }

      // Show feedback with rating bars
      const r = ex.rating;
      const ratingLabels: [string, number][] = [
        ['清晰度 Clarity', r.clarity],
        ['具体性 Specificity', r.specificity],
        ['上下文 Context', r.context],
        ['语气 Tone', r.tone],
      ];

      container.innerHTML = `
        ${renderHeader('提示词拼装 Prompt Builder', true)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>第 ${round + 1}/${TOTAL_ROUNDS} 题</span>
            <span>得分: ${score}/${TOTAL_ROUNDS}</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${passed ? '<span style="color:var(--green);">正确!</span>' : '<span style="color:var(--red);">再加油!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">你的拼装:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${assembled.join(' ')}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">参考答案:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${ex.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-sm);">提示词评分 Rating</p>
            <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
              ${ratingLabels.map(([label, val]) => `
                <div style="display:flex;align-items:center;gap:var(--space-sm);">
                  <span style="font-size:var(--text-xs);color:var(--text-secondary);min-width:100px;">${label}</span>
                  <div class="progress-bar" style="flex:1;">
                    <div class="progress-bar-fill" style="width:${val * 20}%;"></div>
                  </div>
                  <span style="font-size:var(--text-xs);color:var(--teal);min-width:24px;">${val}/5</span>
                </div>
              `).join('')}
            </div>
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
          renderResults(container, { worldId, levelIndex, score, total: TOTAL_ROUNDS, gameType: 'prompt-builder' });
        }
      });
    });
  }

  renderRound();
}
