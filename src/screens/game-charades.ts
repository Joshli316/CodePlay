import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { commands } from '../data/commands';
import { renderTerminal, initTerminal } from '../components/terminal';
import { renderResults } from './results';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function renderCharades(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL = 8;
  const scenarios = shuffle([...commands]).slice(0, TOTAL);

  let currentIndex = 0;
  let correctCount = 0;

  function renderScenario() {
    if (currentIndex >= scenarios.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: TOTAL,
        gameType: 'charades',
      });
      return;
    }

    const cmd = scenarios[currentIndex];
    const progress = currentIndex + 1;

    // Build 4 options: 1 correct + 3 wrong
    const options = shuffle([
      cmd.command + ' — ' + cmd.zhName,
      ...cmd.wrongChoices,
    ]);
    const correctOption = cmd.command + ' — ' + cmd.zhName;
    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      ${renderHeader('场景猜谜 Charades', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${TOTAL}</span>
          <span>✓ ${correctCount}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${(progress / TOTAL) * 100}%"></div>
        </div>
        <div class="game-question">
          ${cmd.scenario}
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${options.map((opt, i) => `
              <button class="option-btn" data-index="${i}" data-text="${opt}">
                <span class="option-label">${labels[i]}</span>
                <span style="font-family:var(--font-mono);font-size:var(--text-sm);">${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="feedback-area" style="display:none;"></div>
        </div>
      </div>
    `;

    let answered = false;
    const optionBtns = container.querySelectorAll('.option-btn');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const text = (btn as HTMLElement).dataset.text || '';
        const isCorrect = text === correctOption;
        const feedbackArea = container.querySelector('#feedback-area') as HTMLElement;

        // Disable all and highlight
        optionBtns.forEach(b => {
          b.classList.add('disabled');
          const bText = (b as HTMLElement).dataset.text || '';
          if (bText === correctOption) b.classList.add('correct');
          if (bText === text && !isCorrect) b.classList.add('wrong');
        });

        feedbackArea.style.display = 'block';

        if (isCorrect) {
          correctCount++;
          playSound('correct');
          feedbackArea.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(0,212,170,0.1);border:1px solid var(--green);margin-bottom:var(--space-md);line-height:1.6;font-size:var(--text-sm);">
              <strong>正确！ Correct!</strong><br>${cmd.zhDescription}
            </div>
            <button class="btn btn-secondary btn-block" id="try-terminal">试试看 Try It</button>
            <div id="terminal-sandbox" style="display:none;margin-top:var(--space-md);"></div>
            <button class="btn btn-primary btn-block" id="next-btn" style="margin-top:var(--space-sm);">下一题 Next →</button>
          `;

          container.querySelector('#try-terminal')?.addEventListener('click', () => {
            const sandbox = container.querySelector('#terminal-sandbox') as HTMLElement;
            sandbox.style.display = 'block';
            sandbox.innerHTML = renderTerminal(cmd.command);
            initTerminal(sandbox);
            (container.querySelector('#try-terminal') as HTMLElement).style.display = 'none';
          });
        } else {
          playSound('wrong');
          state.addToReviewQueue({ id: cmd.id, type: 'command' });
          feedbackArea.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(255,107,107,0.1);border:1px solid var(--red);margin-bottom:var(--space-md);line-height:1.6;font-size:var(--text-sm);">
              <strong>正确答案: ${cmd.command}</strong><br>${cmd.zhDescription}
            </div>
            <button class="btn btn-primary btn-block" id="next-btn">下一题 Next →</button>
          `;
        }

        container.querySelector('#next-btn')?.addEventListener('click', () => {
          currentIndex++;
          renderScenario();
        });
      });
    });
  }

  renderScenario();
}
