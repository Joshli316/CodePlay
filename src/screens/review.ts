import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { vocabulary } from '../data/vocabulary';
import { commands } from '../data/commands';
import { router } from '../router';
import { setupQuizOptions, shuffle } from '../utils';

export function renderReview(container: HTMLElement) {
  const dueItems = state.getDueReviewItems(10);
  let currentIdx = 0;
  let correctCount = 0;

  if (dueItems.length === 0) {
    container.innerHTML = `
      ${renderHeader('复习 Review', true)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--space-lg);">
        ${renderMascot('correctAnswer')}
        <h2 style="text-align:center;">没有需要复习的内容！</h2>
        <p style="color:var(--text-secondary);text-align:center;">No items due for review. Keep learning!</p>
        <button class="btn btn-primary" id="go-back">返回 Back</button>
      </div>
    `;
    container.querySelector('#go-back')?.addEventListener('click', () => router.navigate('/'));
    return;
  }

  function showItem() {
    if (currentIdx >= dueItems.length) {
      showSummary();
      return;
    }

    const item = dueItems[currentIdx];
    let questionHtml = '';
    let correctAnswer = '';
    let options: string[] = [];
    let correctIndex = 0;

    if (item.type === 'vocab') {
      const v = vocabulary.find(x => x.id === item.id);
      if (v) {
        questionHtml = `<div class="game-question">${v.en}</div><div class="game-question-sub">这个英文术语的中文是什么？</div>`;
        correctAnswer = v.zh;
        const wrongOpts = shuffle(vocabulary.filter(x => x.id !== v.id)).slice(0, 3).map(x => x.zh);
        options = shuffle([...wrongOpts, v.zh]);
        correctIndex = options.indexOf(v.zh);
      }
    } else if (item.type === 'command') {
      const c = commands.find(x => x.id === item.id);
      if (c) {
        questionHtml = `<div class="game-question">${c.scenario}</div><div class="game-question-sub">选择正确的命令</div>`;
        correctAnswer = c.command;
        options = shuffle([c.command, ...c.wrongChoices.slice(0, 3)]);
        correctIndex = options.indexOf(c.command);
      }
    }

    if (options.length === 0) {
      currentIdx++;
      showItem();
      return;
    }

    container.innerHTML = `
      ${renderHeader(`复习 ${currentIdx + 1}/${dueItems.length}`, true)}
      <div class="game-screen">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${(currentIdx / dueItems.length) * 100}%"></div></div>
        ${questionHtml}
        <div class="option-list" id="options">
          ${options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">下一题 Next →</button>
        </div>
      </div>
    `;

    const showNext = () => {
      const nextBtn = container.querySelector('#next-btn') as HTMLElement;
      if (nextBtn) nextBtn.style.display = 'block';
    };

    setupQuizOptions(container, correctIndex,
      () => { correctCount++; state.markReviewCorrect(item.id); showNext(); },
      () => { showNext(); },
    );

    container.querySelector('#next-btn')?.addEventListener('click', () => {
      currentIdx++;
      showItem();
    });
  }

  function showSummary() {
    const accuracy = Math.round((correctCount / dueItems.length) * 100);
    container.innerHTML = `
      ${renderHeader('复习完成', false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${renderMascot(accuracy >= 80 ? 'correctAnswer' : 'retry')}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${accuracy}%</div>
          <p style="color:var(--text-secondary);">${correctCount}/${dueItems.length} 正确</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">返回首页 Home</button>
      </div>
    `;
    container.querySelector('#go-home')?.addEventListener('click', () => router.navigate('/'));
    playSound('levelUp');
  }

  showItem();
}
