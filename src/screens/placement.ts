import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { placementQuestions } from '../data/quizzes';
import { router } from '../router';
import { setupQuizOptions } from '../utils';

export function renderPlacement(container: HTMLElement) {
  let currentQ = 0;
  let score = 0;

  function showIntro() {
    container.innerHTML = `
      ${renderHeader('能力测试', false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${renderMascot('firstLogin')}
        <h2 style="text-align:center;">让我看看你已经知道多少！</h2>
        <p style="color:var(--text-secondary);text-align:center;">10道题，帮你找到最合适的起点</p>
        <button class="btn btn-primary btn-block" id="start-placement">开始测试 Start Test</button>
        <button class="btn btn-secondary btn-block" id="skip-placement" style="font-size:var(--text-sm);">我是新手，从头开始 I'm a beginner</button>
      </div>
    `;
    container.querySelector('#start-placement')?.addEventListener('click', () => showQuestion());
    container.querySelector('#skip-placement')?.addEventListener('click', () => {
      state.completePlacement(0);
      state.updateStreak();
      router.navigate('/');
    });
  }

  function showQuestion() {
    if (currentQ >= placementQuestions.length) {
      showResults();
      return;
    }
    const q = placementQuestions[currentQ];
    container.innerHTML = `
      ${renderHeader(`${currentQ + 1} / ${placementQuestions.length}`, false)}
      <div class="game-screen">
        <div class="progress-bar" style="margin-top:var(--space-md);">
          <div class="progress-bar-fill" style="width:${(currentQ / placementQuestions.length) * 100}%"></div>
        </div>
        <div class="game-question">${q.question_zh}</div>
        <div class="game-question-sub">${q.question_en}</div>
        <div class="option-list" id="options">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);"></div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">下一题 Next →</button>
        </div>
      </div>
    `;

    const showExplanation = () => {
      const exp = container.querySelector('#explanation') as HTMLElement;
      if (exp) {
        exp.style.display = 'block';
        exp.innerHTML = `<p>${q.explanation_zh}</p><p style="color:var(--text-secondary);font-size:var(--text-sm);">${q.explanation_en}</p>`;
      }
      const nextBtn = container.querySelector('#next-btn') as HTMLElement;
      if (nextBtn) nextBtn.style.display = 'block';
    };

    setupQuizOptions(container, q.correctIndex,
      () => { score++; showExplanation(); },
      () => { showExplanation(); },
    );

    container.querySelector('#next-btn')?.addEventListener('click', () => {
      currentQ++;
      showQuestion();
    });
  }

  function showResults() {
    state.completePlacement(score);
    state.updateStreak();
    let message = '';
    let mascotTrigger = 'correctAnswer';
    if (score <= 3) {
      message = '从头开始也很棒！让我们一步一步来。';
      mascotTrigger = 'retry';
    } else if (score <= 6) {
      message = '不错！你已经有一些基础了。我帮你跳过了入门关卡。';
    } else {
      message = '太厉害了！你已经是高手了。直接进入命令王国！';
      mascotTrigger = 'perfectScore';
    }

    container.innerHTML = `
      ${renderHeader('测试结果', false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${renderMascot(mascotTrigger)}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${score}/10</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-sm);">${message}</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">开始学习 Start Learning →</button>
      </div>
    `;
    container.querySelector('#go-home')?.addEventListener('click', () => router.navigate('/'));
    if (score >= 7) playSound('perfect');
    else playSound('levelUp');
  }

  showIntro();
}
