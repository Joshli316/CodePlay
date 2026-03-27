import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { commands } from '../data/commands';
import { renderResults } from './results';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface MemoryCard {
  id: string;
  pairId: string;
  text: string;
  type: 'en' | 'zh';
}

export function renderMemoryMatch(container: HTMLElement, worldId: number, levelIndex: number) {
  const PAIRS = 8;

  // Pick 8 commands, create EN/ZH pairs
  const selected = shuffle([...commands]).slice(0, PAIRS);
  const cards: MemoryCard[] = shuffle([
    ...selected.map(cmd => ({
      id: cmd.id + '-en',
      pairId: cmd.id,
      text: cmd.command,
      type: 'en' as const,
    })),
    ...selected.map(cmd => ({
      id: cmd.id + '-zh',
      pairId: cmd.id,
      text: cmd.zhName,
      type: 'zh' as const,
    })),
  ]);

  let flippedCards: number[] = [];
  let matchedPairs: string[] = [];
  let moves = 0;
  let startTime = Date.now();
  let lockBoard = false;

  function render() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;

    container.innerHTML = `
      ${renderHeader('记忆配对 Memory Match', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>步数 Moves: ${moves}</span>
          <span>配对 Pairs: ${matchedPairs.length}/${PAIRS}</span>
          <span id="timer">${mins}:${secs.toString().padStart(2, '0')}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${(matchedPairs.length / PAIRS) * 100}%"></div>
        </div>
        <div class="game-body" style="justify-content:center;">
          <div class="memory-grid">
            ${cards.map((card, i) => {
              const isFlipped = flippedCards.includes(i);
              const isMatched = matchedPairs.includes(card.pairId);
              const classes = ['memory-card'];
              if (isFlipped || isMatched) classes.push('flipped');
              if (isMatched) classes.push('matched');
              return `
                <div class="${classes.join(' ')}" data-index="${i}">
                  <div class="memory-card-inner">
                    <div class="memory-card-front">?</div>
                    <div class="memory-card-back" style="font-size:${card.type === 'en' ? 'var(--text-sm)' : 'var(--text-base)'};">
                      ${card.text}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Card click handlers
    container.querySelectorAll('.memory-card').forEach(el => {
      el.addEventListener('click', () => {
        if (lockBoard) return;
        const idx = parseInt((el as HTMLElement).dataset.index || '-1');
        if (idx < 0 || flippedCards.includes(idx) || matchedPairs.includes(cards[idx].pairId)) return;

        flippedCards.push(idx);
        el.classList.add('flipped');
        playSound('cardFlip');

        if (flippedCards.length === 2) {
          moves++;
          lockBoard = true;
          const [first, second] = flippedCards;
          const card1 = cards[first];
          const card2 = cards[second];

          if (card1.pairId === card2.pairId && card1.type !== card2.type) {
            // Match found
            matchedPairs.push(card1.pairId);
            playSound('correct');
            flippedCards = [];
            lockBoard = false;

            // Mark matched
            container.querySelectorAll(`.memory-card[data-index="${first}"], .memory-card[data-index="${second}"]`).forEach(
              c => c.classList.add('matched')
            );

            // Check if all matched
            if (matchedPairs.length === PAIRS) {
              const totalTime = Math.floor((Date.now() - startTime) / 1000);
              const score = Math.max(20, 100 - (moves - PAIRS) * 5);

              setTimeout(() => {
                renderResults(container, {
                  worldId,
                  levelIndex,
                  score,
                  total: 100,
                  gameType: 'memory-match',
                });
              }, 800);
            }
          } else {
            // No match — flip back after delay
            setTimeout(() => {
              flippedCards = [];
              lockBoard = false;
              render();
            }, 800);
          }
        }
      });
    });
  }

  // Update timer every second
  const timerInterval = setInterval(() => {
    const timerEl = container.querySelector('#timer');
    if (!timerEl) {
      clearInterval(timerInterval);
      return;
    }
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);

  render();
}
