import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { quizzes } from '../data/quizzes';
import { renderResults } from './results';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getAllQuestions() {
  const all: typeof quizzes[1] = [];
  for (const worldId of [1, 2, 3, 4]) {
    if (quizzes[worldId]) {
      all.push(...quizzes[worldId]);
    }
  }
  return all;
}

function encodeChallenge(questionIds: string[], score: number): string {
  const data = { q: questionIds, s: score };
  return btoa(JSON.stringify(data));
}

function decodeChallenge(hash: string): { questionIds: string[]; peerScore: number } | null {
  try {
    const raw = hash.startsWith('#peer=') ? hash.slice(6) : null;
    if (!raw) return null;
    const data = JSON.parse(atob(raw));
    return { questionIds: data.q || [], peerScore: data.s || 0 };
  } catch {
    return null;
  }
}

export function renderPeerChallenge(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL = 5;

  // Check if we're in comparison mode (opened from a shared link)
  const peerData = decodeChallenge(window.location.hash);

  let questions: typeof quizzes[1];

  if (peerData && peerData.questionIds.length > 0) {
    // Comparison mode: use the same questions from the shared link
    const allQ = getAllQuestions();
    questions = peerData.questionIds
      .map(id => allQ.find(q => q.id === id))
      .filter((q): q is typeof allQ[0] => !!q);
    if (questions.length === 0) {
      questions = shuffle(getAllQuestions()).slice(0, TOTAL);
    }
  } else {
    // Normal mode: pick random questions
    questions = shuffle(getAllQuestions()).slice(0, TOTAL);
  }

  let currentIndex = 0;
  let correctCount = 0;

  function renderQuiz() {
    if (currentIndex >= questions.length) {
      // Quiz done — show share screen
      renderShareScreen();
      return;
    }

    const q = questions[currentIndex];
    const progress = currentIndex + 1;
    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      ${renderHeader('同伴挑战 Peer Challenge', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${questions.length}</span>
          <span>✓ ${correctCount}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${(progress / questions.length) * 100}%"></div>
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

    let answered = false;
    const optBtns = container.querySelectorAll('.option-btn');

    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx = parseInt((btn as HTMLElement).dataset.index || '-1');
        const isCorrect = idx === q.correctIndex;

        optBtns.forEach(b => b.classList.add('disabled'));

        if (isCorrect) {
          correctCount++;
          btn.classList.add('correct');
          playSound('correct');
        } else {
          btn.classList.add('wrong');
          optBtns.forEach((b, i) => {
            if (i === q.correctIndex) b.classList.add('correct');
          });
          playSound('wrong');
        }

        const feedback = container.querySelector('#feedback') as HTMLElement;
        feedback.style.display = 'block';
        if (isCorrect) {
          feedback.style.background = 'rgba(0, 212, 170, 0.1)';
          feedback.style.border = '1px solid var(--green)';
          feedback.innerHTML = `<strong>正确！ Correct!</strong><br>${q.explanation_zh}`;
        } else {
          feedback.style.background = 'rgba(255, 107, 107, 0.1)';
          feedback.style.border = '1px solid var(--red)';
          feedback.innerHTML = `<strong>正确答案: ${q.options[q.correctIndex]}</strong><br>${q.explanation_zh}`;
        }

        setTimeout(() => {
          currentIndex++;
          renderQuiz();
        }, 2000);
      });
    });
  }

  function renderShareScreen() {
    const questionIds = questions.map(q => q.id);
    const encoded = encodeChallenge(questionIds, correctCount);
    const baseUrl = window.location.origin + window.location.pathname;
    const shareLink = `${baseUrl}#peer=${encoded}`;
    const pct = Math.round((correctCount / questions.length) * 100);

    // Award badge
    state.addBadge('sharing-caring');

    // Determine comparison text
    let comparisonHtml = '';
    if (peerData) {
      const peerPct = Math.round((peerData.peerScore / questions.length) * 100);
      const diff = pct - peerPct;
      let compMsg = '';
      if (diff > 0) {
        compMsg = `你赢了！ You won by ${diff}%!`;
      } else if (diff < 0) {
        compMsg = `朋友赢了！ Your friend won by ${Math.abs(diff)}%!`;
      } else {
        compMsg = `平局！ It\'s a tie!`;
      }

      comparisonHtml = `
        <div class="card" style="margin-top:var(--space-md);text-align:center;">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);">
            对比 Comparison
          </div>
          <div style="display:flex;justify-content:center;gap:var(--space-xl);margin-bottom:var(--space-sm);">
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--teal);">${pct}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">你 You</div>
            </div>
            <div style="font-size:var(--text-2xl);color:var(--text-muted);align-self:center;">VS</div>
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--gold);">${peerPct}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">朋友 Friend</div>
            </div>
          </div>
          <div style="font-size:var(--text-lg);font-weight:700;color:var(--gold);">${compMsg}</div>
        </div>
      `;
    }

    container.innerHTML = `
      ${renderHeader('同伴挑战 Peer Challenge', true)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;">
          ${renderMascot('correctAnswer')}
          <div style="text-align:center;margin-top:var(--space-md);">
            <div style="font-size:var(--text-3xl);font-weight:700;color:var(--teal);">${correctCount}/${questions.length}</div>
            <div style="font-size:var(--text-lg);color:var(--text-secondary);margin-top:var(--space-xs);">${pct}% 正确率</div>
          </div>
          ${comparisonHtml}
          <div class="card" style="width:100%;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);text-align:center;">
              分享给朋友挑战 Share with a friend to challenge them
            </div>
            <div style="display:flex;gap:var(--space-sm);">
              <input type="text" class="search-input" id="share-link" value="${shareLink}" readonly
                style="font-size:var(--text-xs);flex:1;" />
              <button class="btn btn-primary" id="copy-link" style="white-space:nowrap;">复制 Copy</button>
            </div>
            <div id="copy-feedback" style="display:none;text-align:center;margin-top:var(--space-sm);font-size:var(--text-sm);color:var(--green);"></div>
          </div>
          <div class="card" style="width:100%;margin-top:var(--space-sm);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);text-align:center;line-height:1.8;">
              <strong>WeChat 分享说明:</strong><br>
              1. 点击「复制 Copy」按钮<br>
              2. 打开微信，发送链接给朋友<br>
              3. 朋友打开链接即可挑战同样的题目！
              <br><br>
              <strong>WeChat sharing:</strong><br>
              1. Tap "Copy" above<br>
              2. Open WeChat and send the link<br>
              3. Your friend opens it to take the same quiz!
            </div>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-secondary btn-block" id="view-results">查看成绩 View Results</button>
        </div>
      </div>
    `;

    // Copy link handler
    container.querySelector('#copy-link')?.addEventListener('click', () => {
      const input = container.querySelector('#share-link') as HTMLInputElement;
      const feedbackEl = container.querySelector('#copy-feedback') as HTMLElement;

      navigator.clipboard.writeText(input.value).then(() => {
        feedbackEl.style.display = 'block';
        feedbackEl.textContent = '已复制！ Copied!';
        playSound('correct');
        setTimeout(() => {
          feedbackEl.style.display = 'none';
        }, 2000);
      }).catch(() => {
        // Fallback: select input text
        input.select();
        feedbackEl.style.display = 'block';
        feedbackEl.textContent = '请手动复制 Please copy manually (Ctrl+C)';
        feedbackEl.style.color = 'var(--gold)';
      });
    });

    // View results handler
    container.querySelector('#view-results')?.addEventListener('click', () => {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: questions.length,
        gameType: 'peer-challenge',
      });
    });
  }

  // Show intro
  container.innerHTML = `
    ${renderHeader('同伴挑战 Peer Challenge', true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot(peerData ? 'peerChallenge' : 'correctAnswer')}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">
            ${peerData ? '朋友向你发起了挑战！' : '同伴挑战 Peer Challenge'}
          </div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">
            ${peerData ? 'A friend challenged you!' : 'Generate a shareable quiz'}
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            ${TOTAL} 道题 · 答完后可分享给朋友
            <br>${TOTAL} questions · Share with friends after completing
          </p>
          ${peerData ? `
            <div class="card" style="margin-top:var(--space-md);padding:var(--space-sm);">
              <span style="font-size:var(--text-sm);color:var(--gold);">
                朋友的成绩: ${peerData.peerScore}/${questions.length} · Friend's score: ${peerData.peerScore}/${questions.length}
              </span>
            </div>
          ` : ''}
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-challenge">
          ${peerData ? '接受挑战 Accept Challenge' : '开始挑战 Start Challenge'}
        </button>
      </div>
    </div>
  `;

  container.querySelector('#start-challenge')?.addEventListener('click', () => {
    renderQuiz();
  });
}
