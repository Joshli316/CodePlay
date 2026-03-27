import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { vocabulary } from '../data/vocabulary';
import { renderResults } from './results';

interface TriviaQuestion {
  question_zh: string;
  question_en: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

  let questions: TriviaQuestion[] = [];

  // Try dynamic import of quizzes; fall back to vocab-generated
  try {
    // quizzes may not exist yet — use vocab-based fallback
    questions = generateQuestionsFromVocab(worldId, TOTAL);
  } catch {
    questions = generateQuestionsFromVocab(worldId, TOTAL);
  }

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
        handleAnswer(-1); // time's up
      }
    }, 100);

    // Option clicks
    const optionBtns = container.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt((btn as HTMLElement).dataset.index || '-1');
        handleAnswer(idx);
      });
    });

    let answered = false;

    function handleAnswer(selectedIndex: number) {
      if (answered) return;
      answered = true;
      clearTimer();

      const isCorrect = selectedIndex === q.correctIndex;
      const feedback = container.querySelector('#feedback') as HTMLElement;
      const optBtns = container.querySelectorAll('.option-btn');

      // Disable all options
      optBtns.forEach(btn => btn.classList.add('disabled'));

      // Highlight correct/wrong
      optBtns.forEach((btn, i) => {
        if (i === q.correctIndex) btn.classList.add('correct');
        if (i === selectedIndex && !isCorrect) btn.classList.add('wrong');
      });

      if (isCorrect) {
        correctCount++;
        playSound('correct');
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(0, 212, 170, 0.1)';
        feedback.style.border = '1px solid var(--green)';
        feedback.innerHTML = `<strong>正确！ Correct!</strong><br>${q.explanation}`;
      } else {
        playSound('wrong');
        // Add to review queue based on vocabulary match
        const term = vocabulary.find(v => v.en === q.options[q.correctIndex]);
        if (term) {
          state.addToReviewQueue({ id: term.id, type: 'vocab' });
        }
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(255, 107, 107, 0.1)';
        feedback.style.border = '1px solid var(--red)';
        const timeUp = selectedIndex === -1 ? '时间到！ Time\'s up! ' : '';
        feedback.innerHTML = `<strong>${timeUp}正确答案: ${q.options[q.correctIndex]}</strong><br>${q.explanation}`;
      }

      // Auto-advance after delay
      setTimeout(() => {
        currentIndex++;
        renderQuestion();
      }, 2500);
    }
  }

  renderQuestion();
}
