import { state } from '../state';
import { router } from '../router';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { vocabulary } from '../data/vocabulary';
import { renderResults } from './results';
import { shuffle, setupQuizOptions, renderFeedback } from '../utils';

interface TriviaQuestion {
  question_zh: string;
  question_en: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function generateQuestionsFromVocab(worldId: number, count: number): TriviaQuestion[] {
  // Try to import quizzes data; fall back to auto-generated questions from vocabulary
  let pool = vocabulary.filter(v => v.world === worldId);
  if (pool.length < 4) pool = [...vocabulary];
  const selected = shuffle(pool).slice(0, count);

  return selected.map(term => {
    const others = shuffle(vocabulary.filter(v => v.id !== term.id)).slice(0, 3);
    const options = shuffle([term, ...others]);
    const correctIndex = options.findIndex(o => o.id === term.id);

    return {
      question_zh: `「${term.zh}」的英文是什么？`,
      question_en: `What is "${term.zh}" in English?`,
      options: options.map(o => o.en),
      correctIndex,
      explanation: term.explanation,
    };
  });
}

export function renderTrivia(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL = 10;
  const TIME_PER_QUESTION = 15;

  const questions = generateQuestionsFromVocab(worldId, TOTAL);

  let currentIndex = 0;
  let correctCount = 0;
  let timerInterval: ReturnType<typeof setInterval> | null = null;

  function clearTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function renderQuestion() {
    clearTimer();

    if (currentIndex >= questions.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: questions.length,
        gameType: 'trivia',
      });
      return;
    }

    const q = questions[currentIndex];
    const progress = currentIndex + 1;
    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      ${renderHeader('知识问答 Trivia', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${questions.length}</span>
          <span>✓ ${correctCount}</span>
        </div>
        <div class="timer-bar">
          <div class="timer-bar-fill" id="timer-fill" style="width:100%"></div>
        </div>
        <div class="game-question">
          ${q.question_zh}
          <div class="game-question-sub">${q.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${q.options.map((opt, i) => `
              <button class="option-btn" data-index="${i}">
                <span class="option-label">${labels[i]}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="feedback" style="display:none;padding:var(--space-md);border-radius:var(--radius-md);line-height:1.6;font-size:var(--text-sm);"></div>
        </div>
      </div>
    `;

    // Timer
    let timeLeft = TIME_PER_QUESTION * 10; // tenths of seconds
    const timerFill = container.querySelector('#timer-fill') as HTMLElement;

    timerInterval = setInterval(() => {
      timeLeft--;
      const pct = (timeLeft / (TIME_PER_QUESTION * 10)) * 100;
      timerFill.style.width = `${pct}%`;

      if (pct <= 20) {
        timerFill.className = 'timer-bar-fill danger';
      } else if (pct <= 50) {
        timerFill.className = 'timer-bar-fill warning';
      }

      if (timeLeft <= 0) {
        clearTimer();
        handleTimeout();
      }
    }, 100);

    router.setCleanup(() => clearTimer());

    function showResult(correct: boolean, prefix = '') {
      clearTimer();
      const feedback = container.querySelector('#feedback') as HTMLElement;
      feedback.style.display = 'block';
      if (correct) {
        correctCount++;
        feedback.innerHTML = renderFeedback(true, `<strong>正确！ Correct!</strong><br>${q.explanation}`);
      } else {
        const term = vocabulary.find(v => v.en === q.options[q.correctIndex]);
        if (term) state.addToReviewQueue({ id: term.id, type: 'vocab' });
        feedback.innerHTML = renderFeedback(false, `<strong>${prefix}正确答案: ${q.options[q.correctIndex]}</strong><br>${q.explanation}`);
      }
      setTimeout(() => { currentIndex++; renderQuestion(); }, 2500);
    }

    function handleTimeout() {
      clearTimer();
      const btns = container.querySelectorAll('.option-btn');
      btns.forEach((b, i) => { b.classList.add('disabled'); if (i === q.correctIndex) b.classList.add('correct'); });
      playSound('wrong');
      showResult(false, "时间到！ Time's up! ");
    }

    setupQuizOptions(container, q.correctIndex,
      () => showResult(true),
      () => showResult(false),
    );
  }

  renderQuestion();
}
