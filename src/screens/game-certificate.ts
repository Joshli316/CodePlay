import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { showHongbao } from '../components/hongbao';
import { quizzes } from '../data/quizzes';
import { badges } from '../data/badges';
import { WORLDS } from '../data/worlds';
import { shuffle, setupQuizOptions, renderFeedback, escapeHtml } from '../utils';
import { router } from '../router';
import { iconGraduationCap, iconSmartphone, iconBriefcase, iconHome, iconRefresh } from '../components/icons';

const TOTAL_QUESTIONS = 20;

function gatherQuestions(): typeof quizzes[1] {
  const all: typeof quizzes[1] = [];
  for (const worldId of [1, 2, 3, 4]) {
    if (quizzes[worldId]) all.push(...quizzes[worldId]);
  }
  return shuffle(all).slice(0, TOTAL_QUESTIONS);
}

export function renderCertificate(container: HTMLElement, worldId: number, levelIndex: number) {
  // Phase 1: Intro
  container.innerHTML = `
    ${renderHeader('毕业证书 Certificate', true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot('bossStart')}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--gold);">
            🎓 毕业考试 Final Assessment
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);line-height:1.8;">
            ${TOTAL_QUESTIONS} 道题，涵盖所有4个世界的知识<br>
            ${TOTAL_QUESTIONS} questions covering all 4 worlds<br><br>
            通过后即可获得毕业证书！<br>
            Pass to receive your completion certificate!
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-assessment">开始考试 Start Assessment</button>
      </div>
    </div>
  `;

  container.querySelector('#start-assessment')?.addEventListener('click', () => {
    runQuiz(container, worldId, levelIndex);
  });
}

function runQuiz(container: HTMLElement, worldId: number, levelIndex: number) {
  const questions = gatherQuestions();
  let currentIndex = 0;
  let correctCount = 0;

  function renderQuestion() {
    if (currentIndex >= questions.length) {
      const pct = Math.round((correctCount / questions.length) * 100);
      const passed = pct >= 40;
      if (passed) {
        state.completeLevel(worldId, levelIndex, pct);
        playSound('perfect');
        showCertificateScreen(container, correctCount, questions.length);
      } else {
        playSound('wrong');
        showFailScreen(container, correctCount, questions.length, worldId, levelIndex);
      }
      return;
    }

    const q = questions[currentIndex];
    const progress = currentIndex + 1;
    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      ${renderHeader('毕业考试 Final Assessment', true)}
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
          <div id="feedback" style="display:none;"></div>
        </div>
      </div>
    `;

    const showFeedbackAndAdvance = (correct: boolean) => {
      const feedback = container.querySelector('#feedback') as HTMLElement;
      feedback.style.display = 'block';
      feedback.innerHTML = correct
        ? renderFeedback(true, `<strong>正确！ Correct!</strong><br>${q.explanation_zh}`)
        : renderFeedback(false, `<strong>正确答案: ${q.options[q.correctIndex]}</strong><br>${q.explanation_zh}`);
      setTimeout(() => { currentIndex++; renderQuestion(); }, 2000);
    };

    setupQuizOptions(container, q.correctIndex,
      () => { correctCount++; showFeedbackAndAdvance(true); },
      () => { showFeedbackAndAdvance(false); },
    );
  }

  renderQuestion();
}

function showFailScreen(container: HTMLElement, score: number, total: number, worldId: number, levelIndex: number) {
  const pct = Math.round((score / total) * 100);
  container.innerHTML = `
    ${renderHeader('毕业考试 Final Assessment', true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot('retry')}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-3xl);font-weight:700;color:var(--red);">${pct}%</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-xs);">${score}/${total} 正确</p>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            需要40%以上才能通过<br>Need 40% or above to pass
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="retry">${iconRefresh('sm')} 再试一次 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">${iconHome('sm')} 返回首页 Home</button>
      </div>
    </div>
  `;

  container.querySelector('#retry')?.addEventListener('click', () => {
    renderCertificate(container, worldId, levelIndex);
  });
  container.querySelector('#go-home')?.addEventListener('click', () => router.navigate('/'));
}

function showCertificateScreen(container: HTMLElement, score: number, total: number) {
  const pct = Math.round((score / total) * 100);
  const streak = state.getStreak();
  const totalLevels = state.getTotalLevelsCompleted();
  const earnedBadges = badges.filter(b => state.hasBadge(b.id));
  const worldIcons = WORLDS.map(w => `${w.icon} ${w.zh}`).join(' · ');
  const savedName = state.getStudentName();
  const dateStr = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  const dateStrEn = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  showHongbao();

  container.innerHTML = `
    ${renderHeader('毕业证书 Certificate', true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;">
        ${renderMascot('certificate')}

        <div style="text-align:center;margin-top:var(--space-md);">
          <div style="font-size:var(--text-3xl);font-weight:700;color:var(--gold);">🎉 恭喜毕业！</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-xs);">Congratulations!</p>
        </div>

        <!-- Name input -->
        <div class="card" style="width:100%;margin-top:var(--space-md);">
          <label for="student-name" style="font-size:var(--text-sm);color:var(--text-secondary);display:block;margin-bottom:var(--space-xs);">
            输入你的名字 Enter your name (for the certificate)
          </label>
          <input type="text" class="search-input" id="student-name" placeholder="你的名字 / Your Name"
            value="${escapeHtml(savedName)}" maxlength="50" style="width:100%;" />
        </div>

        <!-- Certificate preview -->
        <div class="certificate-preview" id="cert-preview">
          <div style="font-size:12px;color:rgba(255,200,87,0.8);margin-bottom:8px;">${iconGraduationCap('sm')} CodePlay 码玩</div>
          <div style="font-size:20px;font-weight:700;color:#ffffff;" id="cert-name-display">${escapeHtml(savedName) || '你的名字'}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:4px;">
            已完成 CodePlay 码玩 全部课程
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:8px;">
            ${worldIcons}
          </div>
          <div style="font-size:11px;color:var(--teal);margin-top:4px;">
            考试成绩 ${pct}% · ${totalLevels} 关卡 · ${earnedBadges.length} 枚徽章
          </div>
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:8px;">${dateStr}</div>
          <div style="font-size:10px;color:var(--gold);margin-top:2px;">学会用AI，赢得未来</div>
        </div>

        <!-- Download buttons -->
        <div style="display:flex;gap:var(--space-sm);width:100%;margin-top:var(--space-md);">
          <button class="btn btn-primary" id="dl-wechat" style="flex:1;">
            ${iconSmartphone('sm')} 微信卡片<br><span style="font-size:var(--text-xs);">1080×1080</span>
          </button>
          <button class="btn btn-secondary" id="dl-linkedin" style="flex:1;">
            ${iconBriefcase('sm')} LinkedIn<br><span style="font-size:var(--text-xs);">1200×628</span>
          </button>
        </div>

        <button class="btn btn-secondary btn-block" id="go-home" style="margin-top:var(--space-sm);">${iconHome('sm')} 返回首页 Home</button>
      </div>
    </div>
  `;

  // Update preview when name changes
  const nameInput = container.querySelector('#student-name') as HTMLInputElement;
  const nameDisplay = container.querySelector('#cert-name-display') as HTMLElement;
  nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim() || '你的名字';
    nameDisplay.textContent = name;
    state.setStudentName(nameInput.value);
  });

  // Download handlers
  container.querySelector('#dl-wechat')?.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'CodePlay Student';
    state.setStudentName(name);
    generateCertificatePNG(name, pct, totalLevels, earnedBadges.length, dateStr, dateStrEn, 1080, 1080, 'wechat');
  });

  container.querySelector('#dl-linkedin')?.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'CodePlay Student';
    state.setStudentName(name);
    generateCertificatePNG(name, pct, totalLevels, earnedBadges.length, dateStr, dateStrEn, 1200, 628, 'linkedin');
  });

  container.querySelector('#go-home')?.addEventListener('click', () => router.navigate('/'));
}

function generateCertificatePNG(
  name: string,
  scorePct: number,
  levelsCompleted: number,
  badgeCount: number,
  dateZh: string,
  dateEn: string,
  width: number,
  height: number,
  format: 'wechat' | 'linkedin',
) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, '#0a1628');
  grad.addColorStop(1, '#1a2a4a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Gold border
  ctx.strokeStyle = '#ffc857';
  ctx.lineWidth = 4;
  const m = 24;
  ctx.strokeRect(m, m, width - m * 2, height - m * 2);

  // Inner border
  ctx.strokeStyle = 'rgba(255, 200, 87, 0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(m + 12, m + 12, width - (m + 12) * 2, height - (m + 12) * 2);

  const cx = width / 2;

  if (format === 'wechat') {
    // WeChat square layout (1080x1080)
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 36px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 CodePlay 码玩', cx, 120);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '20px system-ui, sans-serif';
    ctx.fillText('COMPLETION CERTIFICATE', cx, 160);

    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 190);
    ctx.lineTo(cx + 160, 190);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 52px system-ui, sans-serif';
    ctx.fillText(name, cx, 280);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '22px system-ui, sans-serif';
    ctx.fillText('已完成 CodePlay 码玩 全部课程', cx, 340);
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Has completed the CodePlay Claude Code Fluency Program', cx, 375);

    const worlds = ['🚪 终端之门', '⚔️ 命令王国', '🏰 提示宫殿', '🤖 智能体擂台'];
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '18px system-ui, sans-serif';
    const worldsText = worlds.join('  ·  ');
    ctx.fillText(worldsText, cx, 440);

    const stats = [
      { label: '考试成绩', value: `${scorePct}%` },
      { label: '完成关卡', value: `${levelsCompleted}` },
      { label: '获得徽章', value: `${badgeCount}` },
    ];
    const boxW = 200;
    const boxGap = 30;
    const startX = cx - (boxW * 3 + boxGap * 2) / 2;

    stats.forEach((s, i) => {
      const bx = startX + i * (boxW + boxGap);
      const by = 490;
      ctx.fillStyle = 'rgba(255, 200, 87, 0.1)';
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, 100, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 200, 87, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, 100, 12);
      ctx.stroke();
      ctx.fillStyle = '#00d4aa';
      ctx.font = 'bold 36px system-ui, sans-serif';
      ctx.fillText(s.value, bx + boxW / 2, by + 50);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '16px system-ui, sans-serif';
      ctx.fillText(s.label, bx + boxW / 2, by + 80);
    });

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText(dateZh, cx, 680);

    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 720);
    ctx.lineTo(cx + 160, 720);
    ctx.stroke();

    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.fillText('学会用AI，赢得未来', cx, 780);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('codequest-b1p.pages.dev', cx, 820);

    ctx.font = '60px system-ui, sans-serif';
    ctx.fillText('🤖', cx, 920);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('码小码说：毕业快乐！去征服世界吧！', cx, 970);

  } else {
    // LinkedIn landscape layout (1200x628)
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 CodePlay 码玩 — COMPLETION CERTIFICATE', cx, 70);

    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 200, 95);
    ctx.lineTo(cx + 200, 95);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px system-ui, sans-serif';
    ctx.fillText(name, cx, 170);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Completed CodePlay 码玩 — Claude Code Fluency Program', cx, 215);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('🚪 Terminal Gate  ·  ⚔️ Command Kingdom  ·  🏰 Prompt Palace  ·  🤖 Agent Arena', cx, 260);

    const stats = [
      { label: 'Score', value: `${scorePct}%` },
      { label: 'Levels', value: `${levelsCompleted}` },
      { label: 'Badges', value: `${badgeCount}` },
    ];
    const boxW = 180;
    const boxH = 80;
    const boxGap = 30;
    const startX = cx - (boxW * 3 + boxGap * 2) / 2;
    const boxY = 290;

    stats.forEach((s, i) => {
      const bx = startX + i * (boxW + boxGap);
      ctx.fillStyle = 'rgba(255, 200, 87, 0.1)';
      ctx.beginPath();
      ctx.roundRect(bx, boxY, boxW, boxH, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 200, 87, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, boxY, boxW, boxH, 10);
      ctx.stroke();

      ctx.fillStyle = '#00d4aa';
      ctx.font = 'bold 30px system-ui, sans-serif';
      ctx.fillText(s.value, bx + boxW / 2, boxY + 38);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '14px system-ui, sans-serif';
      ctx.fillText(s.label, bx + boxW / 2, boxY + 62);
    });

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText(dateEn, cx, 430);

    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 455);
    ctx.lineTo(cx + 160, 455);
    ctx.stroke();

    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('学会用AI，赢得未来', cx, 495);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('Learn to use AI, win the future', cx, 520);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '13px system-ui, sans-serif';
    ctx.fillText('🤖 codequest-b1p.pages.dev', cx, 580);
  }

  // Download
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codeplay-certificate-${format}.png`;
    a.click();
    URL.revokeObjectURL(url);
    playSound('badgeUnlock');
  }, 'image/png');
}
