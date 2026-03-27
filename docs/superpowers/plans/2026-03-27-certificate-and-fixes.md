# CodePlay 码玩 — Certificate Generator & Remaining Fixes

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the certificate generator (plan step 42), fix 3 broken badge unlocks, add quiz content, wire missing sounds, and add OG image — completing all remaining open items.

**Architecture:** New `game-certificate.ts` screen handles a 20-question final assessment followed by client-side Canvas API certificate generation (WeChat 1080×1080 + LinkedIn 1200×628 PNG downloads). State gets retry tracking and vocab-learned counting for the 3 broken badges. No new dependencies — all native Canvas.

**Tech Stack:** TypeScript, Canvas API, existing CSS design system, localStorage state

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/screens/game-certificate.ts` | Final assessment quiz + certificate generation + PNG download |
| Modify | `src/state.ts` | Add retry tracking, vocab-learned count, student name storage |
| Modify | `src/screens/results.ts` | Fix 3 broken badge checks (persistent, word-collector, speed-demon) |
| Modify | `src/screens/game-trivia.ts` | Track time remaining, pass to results for speed-demon |
| Modify | `src/data/worlds.ts` | Change Certificate level gameType to `'certificate'` |
| Modify | `src/main.ts` | Register certificate renderer |
| Modify | `src/data/quizzes.ts` | Add 5 more questions per world (20 new questions) |
| Modify | `src/styles/games.css` | Add certificate screen styles |
| Modify | `index.html` | Add og:image meta tag |
| Modify | `src/screens/game-peer-challenge.ts` | Add missing sound effects |

---

## Task 1: State Enhancements — Retry Tracking, Vocab Count, Student Name

**Files:**
- Modify: `src/state.ts`

This task adds 3 capabilities the badge system needs: knowing if a level was previously failed, counting vocabulary learned, and storing the student name for the certificate.

- [ ] **Step 1: Add `failedLevels` and `studentName` to GameState interface and default**

In `src/state.ts`, add to the `GameState` interface (after `dailyMissionDate: string;`):

```typescript
  failedLevels: string[]; // keys like "2-3" (worldId-levelIndex)
  studentName: string;
```

And in `DEFAULT_STATE` (after `dailyMissionDate: ''`):

```typescript
  failedLevels: [],
  studentName: '',
```

- [ ] **Step 2: Add `markLevelFailed()` method**

Add after the `completeLevel()` method:

```typescript
  markLevelFailed(worldId: number, levelIndex: number) {
    const key = `${worldId}-${levelIndex}`;
    if (!this.state.failedLevels.includes(key)) {
      this.state.failedLevels.push(key);
      this.save();
    }
  }

  hasFailedLevel(worldId: number, levelIndex: number): boolean {
    return this.state.failedLevels.includes(`${worldId}-${levelIndex}`);
  }
```

- [ ] **Step 3: Add `getLearnedVocabCount()` method**

Add after `getTotalLevelsCompleted()`:

```typescript
  getLearnedVocabCount(): number {
    // Count flash-match levels completed (each teaches ~10 vocab terms)
    // World 1 has 2 flash-match levels (indices 0, 1)
    let count = 0;
    const w1 = this.state.worlds[1];
    if (w1.levelsCompleted.includes(0)) count += 10;
    if (w1.levelsCompleted.includes(1)) count += 10;
    // Also count review queue items that have been mastered (correctCount >= 3 means removed from queue)
    // Plus items currently in queue with correctCount > 0
    count += this.state.reviewQueue.filter(r => r.type === 'vocab' && r.correctCount > 0).length;
    return count;
  }
```

- [ ] **Step 4: Add `setStudentName()` and `getStudentName()` methods**

Add after `getLearnedVocabCount()`:

```typescript
  setStudentName(name: string) {
    this.state.studentName = name.trim().slice(0, 50);
    this.save();
  }

  getStudentName(): string {
    return this.state.studentName;
  }
```

- [ ] **Step 5: Verify the build compiles**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No TypeScript errors, `dist/bundle.js` updated.

- [ ] **Step 6: Commit**

```bash
git add src/state.ts
git commit -m "feat: add retry tracking, vocab count, and student name to state"
```

---

## Task 2: Fix Broken Badge Unlocks

**Files:**
- Modify: `src/screens/results.ts`

Three badges are defined but never checked: `persistent` (retry+pass), `word-collector` (learn all vocab), `speed-demon` (timed quiz with >50% time left). This task fixes all three.

- [ ] **Step 1: Update renderResults signature to accept optional `timeRemainingPct`**

Change the params type at the top of `renderResults`:

```typescript
export function renderResults(container: HTMLElement, params: {
  worldId: number;
  levelIndex: number;
  score: number;
  total: number;
  gameType: string;
  timeRemainingPct?: number; // 0-100, percentage of time left when quiz ended
}) {
```

- [ ] **Step 2: Mark level as failed when score < 40%**

After `const passed = pct >= 40;` (line 21), add:

```typescript
  // Track failed attempts for "persistent" badge
  if (!passed) {
    state.markLevelFailed(worldId, levelIndex);
  }
```

- [ ] **Step 3: Fix the three badge checks**

Replace the existing `speed-demon` check:

```typescript
  checkBadge('speed-demon', isPerfect && gameType === 'trivia');
```

With:

```typescript
  checkBadge('speed-demon', gameType === 'trivia' && passed && (params.timeRemainingPct ?? 0) > 50);
```

Add the two missing badge checks after the `unstoppable` check:

```typescript
  checkBadge('persistent', passed && state.hasFailedLevel(worldId, levelIndex));
  checkBadge('word-collector', state.getLearnedVocabCount() >= 29);
```

Note: 29 is the total vocab count in vocabulary.ts. The word-collector badge triggers when the user has encountered all terms through flash-match levels and review.

- [ ] **Step 4: Verify build compiles**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/screens/results.ts
git commit -m "fix: enable persistent, word-collector, and speed-demon badge unlocks"
```

---

## Task 3: Track Time Remaining in Trivia for Speed-Demon Badge

**Files:**
- Modify: `src/screens/game-trivia.ts`

The trivia game has a timer but doesn't pass the remaining time to the results screen. This task adds that tracking.

- [ ] **Step 1: Add cumulative time tracking**

After `let timerInterval: ReturnType<typeof setInterval> | null = null;` (line 46), add:

```typescript
  let totalTimeUsed = 0;
  const totalTimeAvailable = TOTAL * TIME_PER_QUESTION * 10; // in tenths
```

- [ ] **Step 2: Track time consumed per question**

Inside `renderQuestion()`, after `let timeLeft = TIME_PER_QUESTION * 10;` (line 102), the `showResult` function needs to record time used. Replace the `showResult` function:

```typescript
    function showResult(correct: boolean, prefix = '') {
      clearTimer();
      totalTimeUsed += (TIME_PER_QUESTION * 10) - timeLeft;
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
```

- [ ] **Step 3: Pass `timeRemainingPct` to results**

In the `renderQuestion()` function, where results are called (lines 58-66), update the renderResults call:

```typescript
    if (currentIndex >= questions.length) {
      const timeRemainingPct = Math.round(((totalTimeAvailable - totalTimeUsed) / totalTimeAvailable) * 100);
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: questions.length,
        gameType: 'trivia',
        timeRemainingPct,
      });
      return;
    }
```

- [ ] **Step 4: Verify build compiles**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/screens/game-trivia.ts
git commit -m "feat: track time remaining in trivia for speed-demon badge"
```

---

## Task 4: Certificate Screen — Final Assessment + Certificate Generation

**Files:**
- Create: `src/screens/game-certificate.ts`

This is the main new feature. The screen has two phases:
1. **Quiz phase**: 20-question final assessment pulling from all 4 worlds
2. **Certificate phase**: Name input, certificate preview, WeChat + LinkedIn PNG download

- [ ] **Step 1: Create `src/screens/game-certificate.ts` with quiz phase**

```typescript
import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { showHongbao } from '../components/hongbao';
import { quizzes } from '../data/quizzes';
import { badges } from '../data/badges';
import { WORLDS } from '../data/worlds';
import { shuffle, setupQuizOptions, renderFeedback } from '../utils';
import { router } from '../router';

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
        <button class="btn btn-primary btn-block" id="retry">再试一次 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">返回首页 Home</button>
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
          <label style="font-size:var(--text-sm);color:var(--text-secondary);display:block;margin-bottom:var(--space-xs);">
            输入你的名字 Enter your name (for the certificate)
          </label>
          <input type="text" class="search-input" id="student-name" placeholder="你的名字 / Your Name"
            value="${savedName}" maxlength="50" style="width:100%;" />
        </div>

        <!-- Certificate preview -->
        <div class="certificate-preview" id="cert-preview">
          <div style="font-size:12px;color:#666;margin-bottom:8px;">🎓 CodePlay 码玩</div>
          <div style="font-size:20px;font-weight:700;color:#0a1628;" id="cert-name-display">${savedName || '你的名字'}</div>
          <div style="font-size:12px;color:#444;margin-top:4px;">
            已完成 CodePlay 码玩 全部课程
          </div>
          <div style="font-size:11px;color:#666;margin-top:8px;">
            ${worldIcons}
          </div>
          <div style="font-size:11px;color:#666;margin-top:4px;">
            考试成绩 ${pct}% · ${totalLevels} 关卡 · ${earnedBadges.length} 枚徽章
          </div>
          <div style="font-size:10px;color:#999;margin-top:8px;">${dateStr}</div>
          <div style="font-size:10px;color:#aaa;margin-top:2px;">学会用AI，赢得未来</div>
        </div>

        <!-- Download buttons -->
        <div style="display:flex;gap:var(--space-sm);width:100%;margin-top:var(--space-md);">
          <button class="btn btn-primary" id="dl-wechat" style="flex:1;">
            📱 微信卡片<br><span style="font-size:var(--text-xs);">1080×1080</span>
          </button>
          <button class="btn btn-secondary" id="dl-linkedin" style="flex:1;">
            💼 LinkedIn<br><span style="font-size:var(--text-xs);">1200×628</span>
          </button>
        </div>

        <button class="btn btn-secondary btn-block" id="go-home" style="margin-top:var(--space-sm);">返回首页 Home</button>
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
    // WeChat square layout (1080×1080)
    // Top section: Logo + title
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 36px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 CodePlay 码玩', cx, 120);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '20px system-ui, sans-serif';
    ctx.fillText('COMPLETION CERTIFICATE', cx, 160);

    // Decorative line
    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 190);
    ctx.lineTo(cx + 160, 190);
    ctx.stroke();

    // Student name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 52px system-ui, sans-serif';
    ctx.fillText(name, cx, 280);

    // Completion text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '22px system-ui, sans-serif';
    ctx.fillText('已完成 CodePlay 码玩 全部课程', cx, 340);
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Has completed the CodePlay Claude Code Fluency Program', cx, 375);

    // World badges row
    const worlds = ['🚪 终端之门', '⚔️ 命令王国', '🏰 提示宫殿', '🤖 智能体擂台'];
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '18px system-ui, sans-serif';
    const worldsText = worlds.join('  ·  ');
    ctx.fillText(worldsText, cx, 440);

    // Stats boxes
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
      // Box background
      ctx.fillStyle = 'rgba(255, 200, 87, 0.1)';
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, 100, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 200, 87, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, 100, 12);
      ctx.stroke();
      // Value
      ctx.fillStyle = '#00d4aa';
      ctx.font = 'bold 36px system-ui, sans-serif';
      ctx.fillText(s.value, bx + boxW / 2, by + 50);
      // Label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '16px system-ui, sans-serif';
      ctx.fillText(s.label, bx + boxW / 2, by + 80);
    });

    // Date
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText(dateZh, cx, 680);

    // Decorative line
    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 720);
    ctx.lineTo(cx + 160, 720);
    ctx.stroke();

    // Tagline
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.fillText('学会用AI，赢得未来', cx, 780);

    // App URL
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('codequest-b1p.pages.dev', cx, 820);

    // Mascot
    ctx.font = '60px system-ui, sans-serif';
    ctx.fillText('🤖', cx, 920);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('码小码说：毕业快乐！去征服世界吧！', cx, 970);

  } else {
    // LinkedIn landscape layout (1200×628)
    // Left section: text, Right section: stats

    // Title
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 CodePlay 码玩 — COMPLETION CERTIFICATE', cx, 70);

    // Decorative line
    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 200, 95);
    ctx.lineTo(cx + 200, 95);
    ctx.stroke();

    // Student name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px system-ui, sans-serif';
    ctx.fillText(name, cx, 170);

    // Completion text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Completed CodePlay 码玩 — Claude Code Fluency Program', cx, 215);

    // World badges row
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('🚪 Terminal Gate  ·  ⚔️ Command Kingdom  ·  🏰 Prompt Palace  ·  🤖 Agent Arena', cx, 260);

    // Stats row (horizontal)
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

    // Date
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText(dateEn, cx, 430);

    // Decorative line
    ctx.strokeStyle = '#ffc857';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 160, 455);
    ctx.lineTo(cx + 160, 455);
    ctx.stroke();

    // Tagline
    ctx.fillStyle = '#ffc857';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('学会用AI，赢得未来', cx, 495);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('Learn to use AI, win the future', cx, 520);

    // URL + mascot
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
```

- [ ] **Step 2: Verify the file is syntactically correct**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: Build succeeds (it won't be wired up yet, but TS should compile if imports are correct).

- [ ] **Step 3: Commit**

```bash
git add src/screens/game-certificate.ts
git commit -m "feat: add certificate screen with final assessment and PNG generation"
```

---

## Task 5: Register Certificate Route + Update Worlds

**Files:**
- Modify: `src/data/worlds.ts`
- Modify: `src/main.ts`

- [ ] **Step 1: Change Certificate level gameType in worlds.ts**

In `src/data/worlds.ts`, line 52, change:

```typescript
    { title_zh: '毕业证书', title_en: 'Certificate', gameType: 'boss-battle', icon: '🎓' },
```

To:

```typescript
    { title_zh: '毕业证书', title_en: 'Certificate', gameType: 'certificate', icon: '🎓' },
```

- [ ] **Step 2: Import and register certificate renderer in main.ts**

Add import at the top of `src/main.ts` (after the peer-challenge import):

```typescript
import { renderCertificate } from './screens/game-certificate';
```

Add to `GAME_RENDERERS` (after `'peer-challenge'`):

```typescript
  'certificate': renderCertificate,
```

- [ ] **Step 3: Build and verify**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors. Certificate level now routes to the new screen.

- [ ] **Step 4: Commit**

```bash
git add src/data/worlds.ts src/main.ts
git commit -m "feat: register certificate game type and route"
```

---

## Task 6: Certificate CSS Styles

**Files:**
- Modify: `src/styles/games.css`

- [ ] **Step 1: Expand the certificate CSS**

Replace the existing `.certificate-preview` block (lines 335-343) with:

```css
/* Certificate */
.certificate-preview {
  background: linear-gradient(135deg, #0a1628, #1a2a4a);
  color: #ffffff;
  padding: var(--space-xl) var(--space-lg);
  border-radius: var(--radius-md);
  text-align: center;
  margin: var(--space-md) 0;
  border: 2px solid var(--gold);
  width: 100%;
}
```

- [ ] **Step 2: Build and verify**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/styles/games.css
git commit -m "style: update certificate preview to match generated PNG theme"
```

---

## Task 7: Add Quiz Content — 5 More Questions Per World

**Files:**
- Modify: `src/data/quizzes.ts`

Currently each world has 8-10 questions. Adding 5 per world (20 total) improves randomization and makes the certificate assessment less repetitive.

- [ ] **Step 1: Add 5 questions to World 1 (after w1q8)**

```typescript
    {
      id: "w1q9",
      world: 1,
      question_zh: "什么是「脚本 (Script)」？",
      question_en: "What is a 'Script'?",
      options: ["一种字体", "自动执行一系列命令的程序文件", "一个网站", "一种数据库"],
      correctIndex: 1,
      explanation_zh: "脚本是一系列自动执行的命令，写在文件里。Claude Code 可以帮你写和运行各种脚本。",
      explanation_en: "A script is a file containing a series of automated commands. Claude Code can help you write and run various scripts.",
    },
    {
      id: "w1q10",
      world: 1,
      question_zh: "在终端中，「路径 (Path)」指什么？",
      question_en: "What does 'Path' mean in the terminal?",
      options: ["一条走廊", "文件或文件夹在系统中的位置地址", "一个快捷键", "网页的 URL"],
      correctIndex: 1,
      explanation_zh: "路径是文件或目录在文件系统中的地址，比如 /Users/me/project/src/index.ts。",
      explanation_en: "A path is the address of a file or directory in the file system, like /Users/me/project/src/index.ts.",
    },
    {
      id: "w1q11",
      world: 1,
      question_zh: "「开源 (Open Source)」是什么意思？",
      question_en: "What does 'Open Source' mean?",
      options: ["免费软件", "源代码公开，任何人可以查看和贡献", "只能在线使用", "没有版权"],
      correctIndex: 1,
      explanation_zh: "开源意味着代码公开，任何人都可以查看、使用和贡献。Claude Code 本身就是开源的。",
      explanation_en: "Open source means the code is public — anyone can view, use, and contribute. Claude Code itself is open source.",
    },
    {
      id: "w1q12",
      world: 1,
      question_zh: "Markdown (.md) 文件是什么？",
      question_en: "What is a Markdown (.md) file?",
      options: ["图片格式", "用简单语法写格式化文本的文件", "数据库文件", "可执行程序"],
      correctIndex: 1,
      explanation_zh: "Markdown 用简单的符号（#标题、**加粗**、-列表）来写格式化文本。README.md 和 CLAUDE.md 都是 Markdown 文件。",
      explanation_en: "Markdown uses simple symbols (#headings, **bold**, -lists) for formatted text. README.md and CLAUDE.md are Markdown files.",
    },
    {
      id: "w1q13",
      world: 1,
      question_zh: "「权限 (Permission)」在 Claude Code 中指什么？",
      question_en: "What does 'Permission' mean in Claude Code?",
      options: ["用户密码", "Claude Code 执行特定操作的授权", "文件大小限制", "网络速度"],
      correctIndex: 1,
      explanation_zh: "Claude Code 执行敏感操作（如写文件、运行命令）前会请求你的许可，确保安全。",
      explanation_en: "Claude Code asks for your permission before sensitive operations (writing files, running commands) to ensure safety.",
    },
```

- [ ] **Step 2: Add 5 questions to World 2 (after w2q10)**

```typescript
    {
      id: "w2q11",
      world: 2,
      question_zh: "Claude Code 运行 bash 命令前会怎么做？",
      question_en: "What does Claude Code do before running a bash command?",
      options: ["直接运行", "先显示命令，等你批准后再执行", "发送到云端验证", "自动备份文件"],
      correctIndex: 1,
      explanation_zh: "Claude Code 会先显示要执行的命令，你可以批准或拒绝。这是安全机制的一部分。",
      explanation_en: "Claude Code shows the command first and waits for your approval. This is part of its safety mechanism.",
    },
    {
      id: "w2q12",
      world: 2,
      question_zh: "在终端中如何退出 Claude Code？",
      question_en: "How do you exit Claude Code in the terminal?",
      options: ["关闭电脑", "输入 /exit 或按 Ctrl+C", "点击 X 按钮", "输入 quit()"],
      correctIndex: 1,
      explanation_zh: "你可以输入 /exit 或按 Ctrl+C 来结束 Claude Code 会话。",
      explanation_en: "You can type /exit or press Ctrl+C to end a Claude Code session.",
    },
    {
      id: "w2q13",
      world: 2,
      question_zh: "Claude Code 的 /debug 命令做什么？",
      question_en: "What does Claude Code's /debug command do?",
      options: ["删除 bug", "帮助诊断和修复代码中的错误", "调试 Claude Code 本身", "显示调试日志"],
      correctIndex: 1,
      explanation_zh: "/debug 帮你诊断代码中的问题，分析错误信息，找出根本原因并提供修复建议。",
      explanation_en: "/debug helps diagnose code issues, analyze error messages, find root causes, and suggest fixes.",
    },
    {
      id: "w2q14",
      world: 2,
      question_zh: "Claude Code 能同时编辑多个文件吗？",
      question_en: "Can Claude Code edit multiple files at once?",
      options: ["不能，一次只能编辑一个", "可以，它能理解文件之间的关系并同时修改", "只能在同一个文件夹内", "需要特殊插件"],
      correctIndex: 1,
      explanation_zh: "Claude Code 可以同时编辑多个文件，理解它们之间的依赖关系，确保修改一致性。",
      explanation_en: "Claude Code can edit multiple files simultaneously, understanding their dependencies and ensuring consistency.",
    },
    {
      id: "w2q15",
      world: 2,
      question_zh: "什么时候应该用 /compact 而不是 /clear？",
      question_en: "When should you use /compact instead of /clear?",
      options: ["永远不需要", "当你想保留上下文但释放空间时", "当你想删除所有代码时", "每次对话开始时"],
      correctIndex: 1,
      explanation_zh: "当对话很长但你还需要之前讨论的上下文时，用 /compact。如果要完全重新开始，用 /clear。",
      explanation_en: "Use /compact when the conversation is long but you still need prior context. Use /clear for a completely fresh start.",
    },
```

- [ ] **Step 3: Add 5 questions to World 3 (after w3q9)**

```typescript
    {
      id: "w3q10",
      world: 3,
      question_zh: "为什么在提示词中提供文件路径很重要？",
      question_en: "Why is providing file paths in prompts important?",
      options: ["让提示词更长", "帮助 Claude Code 精确定位要修改的代码", "没有区别", "文件路径是可选的"],
      correctIndex: 1,
      explanation_zh: "提供具体文件路径让 Claude Code 不用猜测你要修改哪个文件，直接精准定位。",
      explanation_en: "Specific file paths let Claude Code locate exactly which file to modify without guessing.",
    },
    {
      id: "w3q11",
      world: 3,
      question_zh: "「多轮对话」在 Claude Code 中有什么优势？",
      question_en: "What is the advantage of 'multi-turn conversations' in Claude Code?",
      options: ["没有优势", "可以逐步细化需求，每轮迭代改进结果", "浪费 token", "只是聊天"],
      correctIndex: 1,
      explanation_zh: "多轮对话让你逐步细化需求。先给大方向，看结果后再调整细节，比一次性写完美提示词更有效。",
      explanation_en: "Multi-turn conversations let you iteratively refine. Start with direction, adjust details after seeing results — more effective than one perfect prompt.",
    },
    {
      id: "w3q12",
      world: 3,
      question_zh: "下面哪种方式最能帮助 Claude Code 理解你的代码风格？",
      question_en: "Which best helps Claude Code understand your coding style?",
      options: ["口头描述风格", "在 CLAUDE.md 中写明编码规范", "什么都不做", "给它一个 YouTube 教程链接"],
      correctIndex: 1,
      explanation_zh: "在 CLAUDE.md 中写明编码规范（缩进、命名规则、框架偏好），Claude Code 每次启动都会读取并遵循。",
      explanation_en: "Writing coding conventions in CLAUDE.md (indentation, naming rules, framework preferences) ensures Claude Code follows them every session.",
    },
    {
      id: "w3q13",
      world: 3,
      question_zh: "当 Claude Code 的回答不够好时，最有效的做法是？",
      question_en: "When Claude Code's response isn't good enough, the most effective approach is?",
      options: ["重新启动 Claude Code", "给出具体反馈说明哪里不对、需要怎么改", "换一个 AI 工具", "多试几次同样的提示词"],
      correctIndex: 1,
      explanation_zh: "给具体反馈（「这个函数缺少错误处理」而不是「不好」）让 Claude Code 精准改进。",
      explanation_en: "Specific feedback ('this function lacks error handling' not 'bad') helps Claude Code improve precisely.",
    },
    {
      id: "w3q14",
      world: 3,
      question_zh: "Claude Code 的「工具 (Tools)」是什么概念？",
      question_en: "What are 'Tools' in Claude Code?",
      options: ["硬件设备", "Claude Code 可以调用的能力，如读文件、写代码、运行命令", "第三方插件", "编程语言"],
      correctIndex: 1,
      explanation_zh: "工具是 Claude Code 的内置能力。它可以调用 Read（读文件）、Write（写文件）、Bash（运行命令）等工具来完成任务。",
      explanation_en: "Tools are Claude Code's built-in capabilities. It can call Read (read files), Write (write files), Bash (run commands) and more to complete tasks.",
    },
```

- [ ] **Step 4: Add 5 questions to World 4 (after w4q8)**

```typescript
    {
      id: "w4q9",
      world: 4,
      question_zh: "「代码审查 (Code Review)」的目的是什么？",
      question_en: "What is the purpose of 'Code Review'?",
      options: ["检查代码运行速度", "团队成员互相检查代码质量和正确性", "计算代码行数", "测试用户界面"],
      correctIndex: 1,
      explanation_zh: "代码审查是团队成员互相检查代码的过程，找出潜在问题、提升质量。Claude Code 的 /review 可以自动做这件事。",
      explanation_en: "Code review is when team members check each other's code for issues and quality. Claude Code's /review can automate this.",
    },
    {
      id: "w4q10",
      world: 4,
      question_zh: "什么是「持续集成 (CI)」？",
      question_en: "What is 'Continuous Integration (CI)'?",
      options: ["手动测试代码", "每次代码提交后自动运行测试和检查", "持续写代码不休息", "自动部署到生产环境"],
      correctIndex: 1,
      explanation_zh: "CI 是每次代码提交后自动运行测试、lint 检查等流程，确保新代码不会破坏已有功能。",
      explanation_en: "CI automatically runs tests and checks after each commit, ensuring new code doesn't break existing functionality.",
    },
    {
      id: "w4q11",
      world: 4,
      question_zh: "「合并冲突 (Merge Conflict)」是什么？",
      question_en: "What is a 'Merge Conflict'?",
      options: ["两个人吵架", "两个分支修改了同一处代码，Git 不知道保留哪个", "文件被删除", "网络错误"],
      correctIndex: 1,
      explanation_zh: "当两个分支修改了同一行代码时，Git 无法自动决定保留哪个版本，需要人工（或 Claude Code）解决。",
      explanation_en: "When two branches modify the same line, Git can't auto-decide which to keep. A human (or Claude Code) must resolve it.",
    },
    {
      id: "w4q12",
      world: 4,
      question_zh: "Claude Code 如何帮助你学习新的代码库？",
      question_en: "How can Claude Code help you learn a new codebase?",
      options: ["它不能帮助学习", "它能阅读整个代码库并回答你关于代码结构和逻辑的问题", "只能读 README", "需要你先学会才能用"],
      correctIndex: 1,
      explanation_zh: "Claude Code 能一次性读取整个项目，帮你理解架构、找到关键文件、解释复杂逻辑。就像有个资深同事带你 onboard。",
      explanation_en: "Claude Code can read an entire project at once, helping you understand architecture, find key files, and explain complex logic — like a senior colleague onboarding you.",
    },
    {
      id: "w4q13",
      world: 4,
      question_zh: "在面试中，展示你会用 Claude Code 的最佳方式是？",
      question_en: "In interviews, what's the best way to showcase Claude Code skills?",
      options: ["说你什么都让 AI 写", "展示你如何用 AI 提高效率，同时理解代码做了什么", "隐藏你用过 AI", "只用 AI 写简历"],
      correctIndex: 1,
      explanation_zh: "面试官看重的是你理解代码、能解释决策、用 AI 提升效率的能力——而不是盲目依赖 AI。",
      explanation_en: "Interviewers value your ability to understand code, explain decisions, and use AI for efficiency — not blind AI dependence.",
    },
```

- [ ] **Step 5: Build and verify**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors. Quiz bank now has ~55 questions total.

- [ ] **Step 6: Commit**

```bash
git add src/data/quizzes.ts
git commit -m "content: add 20 new quiz questions (5 per world) for better variety"
```

---

## Task 8: Add OG Image

**Files:**
- Modify: `index.html`

Since the app is client-side only and we can't generate images at build time, we'll use a simple data URI SVG as the OG image placeholder, plus reference the deployed SVG logo if it exists.

- [ ] **Step 1: Add og:image meta tag**

In `index.html`, after the existing `og:url` meta tag (line 13), add:

```html
  <meta property="og:image" content="https://codequest-b1p.pages.dev/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:image" content="https://codequest-b1p.pages.dev/og-image.png">
```

- [ ] **Step 2: Create a simple OG image using canvas at build time**

Create a small Node.js script at project root: `generate-og.js`

```javascript
// Run: node generate-og.js
// Generates a 1200x630 OG image as og-image.png in dist/
// Requires: none (uses built-in canvas-less approach — just generates an SVG and notes to convert)

const fs = require('fs');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1a2a4a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#ffc857" stroke-width="3" rx="12"/>
  <text x="600" y="200" text-anchor="middle" fill="#ffc857" font-family="system-ui,sans-serif" font-size="60" font-weight="bold">🎓 CodePlay 码玩</text>
  <text x="600" y="280" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="28">Learn Claude Code Through Games</text>
  <text x="600" y="330" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="system-ui,sans-serif" font-size="22">游戏化学习 Claude Code · 中英双语 · 4个世界 · 11个游戏</text>
  <text x="600" y="420" text-anchor="middle" fill="#00d4aa" font-family="system-ui,sans-serif" font-size="24">🚪 终端之门 · ⚔️ 命令王国 · 🏰 提示宫殿 · 🤖 智能体擂台</text>
  <text x="600" y="520" text-anchor="middle" fill="#ffc857" font-family="system-ui,sans-serif" font-size="26" font-weight="bold">学会用AI，赢得未来</text>
  <text x="600" y="570" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="system-ui,sans-serif" font-size="16">codequest-b1p.pages.dev</text>
</svg>`;

fs.writeFileSync('dist/og-image.svg', svg);
console.log('OG image SVG written to dist/og-image.svg');
console.log('Note: For full PNG support, convert this SVG to PNG using any online tool,');
console.log('or update the meta tags to point to the SVG directly.');
```

After running, update the meta tags to use `.svg` instead of `.png` (or convert the SVG to PNG manually).

Alternatively, just update the meta tags to point to the SVG:

```html
  <meta property="og:image" content="https://codequest-b1p.pages.dev/og-image.svg">
```

- [ ] **Step 3: Build and verify**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build && node generate-og.js`
Expected: `dist/og-image.svg` created.

- [ ] **Step 4: Commit**

```bash
git add index.html generate-og.js
git commit -m "feat: add OG image for social sharing"
```

---

## Task 9: Wire Missing Sound Effects

**Files:**
- Modify: `src/screens/game-peer-challenge.ts`

The peer challenge game doesn't play any sounds during the quiz. Add sound feedback.

- [ ] **Step 1: Add sounds to peer challenge feedback**

In `src/screens/game-peer-challenge.ts`, the `showFeedbackAndAdvance` function (line 101) doesn't play sounds. Update it:

```typescript
    const showFeedbackAndAdvance = (correct: boolean) => {
      playSound(correct ? 'correct' : 'wrong');
      const feedback = container.querySelector('#feedback') as HTMLElement;
      feedback.style.display = 'block';
      feedback.innerHTML = correct
        ? renderFeedback(true, `<strong>正确！ Correct!</strong><br>${q.explanation_zh}`)
        : renderFeedback(false, `<strong>正确答案: ${q.options[q.correctIndex]}</strong><br>${q.explanation_zh}`);
      setTimeout(() => { currentIndex++; renderQuiz(); }, 2000);
    };
```

(The only change is adding `playSound(correct ? 'correct' : 'wrong');` as the first line.)

- [ ] **Step 2: Build and verify**

Run: `cd /Users/zhihuang/Desktop/Projects/CodePlay && npm run build`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/screens/game-peer-challenge.ts
git commit -m "fix: add sound effects to peer challenge quiz"
```

---

## Task 10: Build, Copy to Dist, Verify, Final Commit

**Files:**
- All modified files should already be committed individually

- [ ] **Step 1: Full build**

```bash
cd /Users/zhihuang/Desktop/Projects/CodePlay
npm run build
```

- [ ] **Step 2: Copy updated index.html and styles to dist**

The build script should handle this, but verify:
- `dist/index.html` has the new og:image meta tags
- `dist/styles/games.css` has the updated certificate styles
- `dist/bundle.js` includes the certificate screen

- [ ] **Step 3: Open in browser and verify**

Open `dist/index.html` in browser. Check:
1. Home screen loads, no console errors
2. Navigate to World 4 → Certificate level shows 🎓 icon
3. Certificate level opens the final assessment (not boss battle)
4. Quiz works (20 questions from all worlds)
5. After passing, certificate screen shows with name input
6. Both download buttons generate PNG files
7. Test responsive at 375px, 768px, 1024px

- [ ] **Step 4: Verify badge system**

In browser console, manually test:
- `localStorage.setItem('cq_state', JSON.stringify({...}))` with a failed level, then pass it → persistent badge should unlock
- Complete all flash-match levels → word-collector badge should be checkable
- Speed-demon: complete trivia with >50% time remaining

- [ ] **Step 5: Tag as ready**

```bash
git log --oneline -10  # verify all commits look good
```

---

## Summary of Changes

| # | Task | Files Changed | Purpose |
|---|------|---------------|---------|
| 1 | State enhancements | `state.ts` | Retry tracking, vocab count, student name |
| 2 | Fix badge unlocks | `results.ts` | Enable persistent, word-collector, speed-demon |
| 3 | Trivia time tracking | `game-trivia.ts` | Pass time remaining for speed-demon |
| 4 | Certificate screen | `game-certificate.ts` (new) | Final assessment + Canvas PNG generation |
| 5 | Route registration | `worlds.ts`, `main.ts` | Wire certificate game type |
| 6 | Certificate CSS | `games.css` | Dark theme certificate preview |
| 7 | Quiz content | `quizzes.ts` | 20 new questions (5 per world) |
| 8 | OG image | `index.html`, `generate-og.js` | Social sharing image |
| 9 | Sound effects | `game-peer-challenge.ts` | Missing audio feedback |
| 10 | Verification | — | Full build + browser testing |
