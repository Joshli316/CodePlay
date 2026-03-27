import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderBadge } from '../components/badge';
import { badges } from '../data/badges';
import { WORLDS } from '../data/worlds';

export function renderProfile(container: HTMLElement) {
  const s = state.get();
  const streak = state.getStreak();
  const totalLevels = state.getTotalLevelsCompleted();
  const reviewAccuracy = s.reviewQueue.length > 0
    ? Math.round(s.reviewQueue.reduce((sum, r) => sum + r.correctCount, 0) / Math.max(1, s.reviewQueue.reduce((sum, r) => sum + r.correctCount + r.wrongCount, 0)) * 100)
    : 100;

  container.innerHTML = `
    ${renderHeader('我的档案 Profile', true)}
    <div class="screen">
      <!-- Stats -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-sm);margin-bottom:var(--space-lg);">
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--gold);font-weight:700;">🔥 ${streak.current}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">连续天数 Streak</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--teal);font-weight:700;">⭐ ${totalLevels}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">已完成关卡 Levels</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--green);font-weight:700;">📊 ${s.totalScore}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">总分 Total Score</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);font-weight:700;">${reviewAccuracy}%</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">复习准确率 Review</div>
        </div>
      </div>

      <!-- World Progress -->
      <h3 style="margin-bottom:var(--space-sm);">世界进度 World Progress</h3>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-lg);">
        ${[1, 2, 3, 4].map(w => {
          const pct = state.getWorldCompletion(w);
          const names: Record<number, string> = Object.fromEntries(WORLDS.map(w => [w.id, w.zh]));
          return `
            <div>
              <div style="display:flex;justify-content:space-between;font-size:var(--text-sm);margin-bottom:var(--space-xs);">
                <span>${names[w]}</span><span style="color:var(--text-secondary);">${pct}%</span>
              </div>
              <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Badges -->
      <h3 style="margin-bottom:var(--space-sm);">成就徽章 Badges (${s.badges.length}/${badges.length})</h3>
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-sm);">
        ${badges.map(b => renderBadge(b, s.badges.includes(b.id))).join('')}
      </div>
    </div>
  `;
}
