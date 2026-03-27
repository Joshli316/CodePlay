import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { vocabulary } from '../data/vocabulary';
import { renderResults } from './results';
import { shuffle, renderScoreBar } from '../utils';

export function renderFlashMatch(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL = 10;

  // Filter vocab by world, fall back to all if not enough
  let pool = vocabulary.filter(v => v.world === worldId);
  if (pool.length < TOTAL) pool = [...vocabulary];
  const cards = shuffle(pool).slice(0, TOTAL);

  let currentIndex = 0;
  let knownCount = 0;

  function renderCard() {
    if (currentIndex >= cards.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: knownCount,
        total: TOTAL,
        gameType: 'flash-match',
      });
      return;
    }

    const v = cards[currentIndex];
    const progress = currentIndex + 1;

    container.innerHTML = `
      ${renderHeader('词卡练习 Flash Match', true)}
      <div class="game-screen">
        ${renderScoreBar(progress, TOTAL, knownCount)}
        <div class="game-instruction">点击卡片翻转 / Tap to flip</div>
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          <div class="flip-card" id="flashcard">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div style="font-size:var(--text-2xl);font-weight:700;">${v.en}</div>
              </div>
              <div class="flip-card-back">
                <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${v.zh}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-xs);">${v.pinyin}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-sm);line-height:1.5;text-align:center;">${v.explanation}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="game-footer" id="action-btns" style="display:none;">
          <div style="display:flex;gap:var(--space-sm);">
            <button class="btn btn-danger" id="btn-review" style="flex:1;">✗ 复习 Review</button>
            <button class="btn btn-primary" id="btn-know" style="flex:1;">✓ 认识 Know it</button>
          </div>
        </div>
      </div>
    `;

    const card = container.querySelector('#flashcard') as HTMLElement;
    const actionBtns = container.querySelector('#action-btns') as HTMLElement;

    card.addEventListener('click', () => {
      if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        playSound('cardFlip');
        actionBtns.style.display = 'flex';
      }
    });

    container.querySelector('#btn-know')?.addEventListener('click', () => {
      knownCount++;
      playSound('correct');
      currentIndex++;
      renderCard();
    });

    container.querySelector('#btn-review')?.addEventListener('click', () => {
      state.addToReviewQueue({ id: v.id, type: 'vocab' });
      playSound('wrong');
      currentIndex++;
      renderCard();
    });
  }

  renderCard();
}
