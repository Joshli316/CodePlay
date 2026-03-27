import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { promptExamples } from '../data/prompts';
import { renderResults } from './results';
import { shuffle } from '../utils';

export function renderPromptDuel(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL_DUELS = 10;
  // Use all examples, shuffle, allow repeats if needed
  const pool = shuffle(promptExamples);
  const duels: typeof promptExamples = [];
  while (duels.length < TOTAL_DUELS) {
    duels.push(...pool);
  }
  const examples = duels.slice(0, TOTAL_DUELS);

  let duelIndex = 0;
  let score = 0;

  function renderDuel() {
    const ex = examples[duelIndex];
    // Randomize which side gets the good prompt
    const goodOnLeft = Math.random() < 0.5;
    const leftPrompt = goodOnLeft ? ex.goodPrompt : ex.badPrompt;
    const rightPrompt = goodOnLeft ? ex.badPrompt : ex.goodPrompt;
    const correctSide = goodOnLeft ? 'left' : 'right';

    container.innerHTML = `
      ${renderHeader('提示词对决 Prompt Duel', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>第 ${duelIndex + 1}/${TOTAL_DUELS} 题</span>
          <span>得分: ${score}/${TOTAL_DUELS}</span>
        </div>
        <div class="game-question" style="font-size:var(--text-base);">${ex.task_zh}</div>
        <div class="game-instruction">哪个提示词更好？点击选择</div>
        <div class="game-body">
          <div class="duel-container">
            <div class="duel-card" id="card-left" data-side="left">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">A</div>
              ${leftPrompt}
            </div>
            <div class="duel-card" id="card-right" data-side="right">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">B</div>
              ${rightPrompt}
            </div>
          </div>
          <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;" id="explanation-text"></p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">${duelIndex + 1 < TOTAL_DUELS ? '下一题 Next' : '查看结果 Results'}</button>
        </div>
      </div>
    `;

    const cardLeft = container.querySelector('#card-left') as HTMLElement;
    const cardRight = container.querySelector('#card-right') as HTMLElement;
    const explanationDiv = container.querySelector('#explanation') as HTMLElement;
    const explanationText = container.querySelector('#explanation-text') as HTMLElement;
    const nextBtn = container.querySelector('#next-btn') as HTMLElement;
    let voted = false;

    function handleVote(side: string) {
      if (voted) return;
      voted = true;

      const isCorrect = side === correctSide;
      if (isCorrect) {
        score++;
        playSound('correct');
      } else {
        playSound('wrong');
        state.addToReviewQueue({ id: ex.id, type: 'prompt' });
      }

      // Highlight cards
      const correctCard = correctSide === 'left' ? cardLeft : cardRight;
      const wrongCard = correctSide === 'left' ? cardRight : cardLeft;
      correctCard.classList.add('correct');
      wrongCard.classList.add('wrong');

      // Disable further clicks
      cardLeft.style.pointerEvents = 'none';
      cardRight.style.pointerEvents = 'none';

      // Show explanation
      explanationText.textContent = ex.explanation_zh;
      explanationDiv.style.display = '';
      nextBtn.style.display = '';
    }

    cardLeft.addEventListener('click', () => handleVote('left'));
    cardRight.addEventListener('click', () => handleVote('right'));

    nextBtn.addEventListener('click', () => {
      duelIndex++;
      if (duelIndex < TOTAL_DUELS) {
        renderDuel();
      } else {
        renderResults(container, { worldId, levelIndex, score, total: TOTAL_DUELS, gameType: 'prompt-duel' });
      }
    });
  }

  renderDuel();
}
