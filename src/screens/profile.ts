import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderBadge } from '../components/badge';
import { badges } from '../data/badges';
import { WORLD_NAMES_ZH } from '../data/worlds';
import { iconFlame, iconStar, iconBarChart, iconTarget, iconAward, iconTrophy } from '../components/icons';

export function renderProfile(container: HTMLElement) {
  const s = state.get();
  const streak = state.getStreak();
  const totalLevels = state.getTotalLevelsCompleted();
  const reviewAccuracy = s.reviewQueue.length > 0
    ? Math.round(s.reviewQueue.reduce((sum, r) => sum + r.correctCount, 0) / Math.max(1, s.reviewQueue.reduce((sum, r) => sum + r.correctCount + r.wrongCount, 0)) * 100)
    : 100;

  const unlockedBadges = s.badges.length;
  const totalBadges = badges.length;

  container.innerHTML = `
    ${renderHeader('我的档案 Profile', true)}
    <div class="screen">
      <!-- Stats -->
      <div class="stat-grid" style="margin-bottom:var(--space-lg);">
        <div class="stat-card">
          <div class="stat-value" style="color:var(--gold);">${iconFlame('md', 'var(--gold)')} ${streak.current}</div>
          <div class="stat-label">连续天数 Streak</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--teal);">${iconStar(true, 'md', 'var(--teal)')} ${totalLevels}</div>
          <div class="stat-label">已完成关卡 Levels</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--green);">${iconBarChart('md')} ${s.totalScore}</div>
          <div class="stat-label">总分 Total Score</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${iconTarget('md')} ${reviewAccuracy}%</div>
          <div class="stat-label">复习准确率 Review</div>
        </div>
      </div>

      ${totalLevels === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">${iconStar(false, '2xl', 'var(--text-muted)')}</div>
          <div class="empty-state-title">开始你的学习之旅</div>
          <div class="empty-state-text">完成关卡来解锁成就和积累分数<br>Complete levels to earn badges and score</div>
        </div>
      ` : `
        <!-- World Progress -->
        <h3 class="section-title">${iconBarChart('sm')} 世界进度 World Progress</h3>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-lg);">
          ${[1, 2, 3, 4].map(w => {
            const pct = state.getWorldCompletion(w);
            const names = WORLD_NAMES_ZH;
            return `
              <div>
                <div style="display:flex;justify-content:space-between;font-size:var(--text-sm);margin-bottom:var(--space-xs);">
                  <span>${names[w]}</span><span style="color:var(--text-secondary);">${pct}%</span>
                </div>
                <div class="progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar-fill" style="width:${pct}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

      <!-- Badges -->
      <h3 class="section-title">${iconAward('sm', 'var(--gold)')} 成就徽章 Badges (${unlockedBadges}/${totalBadges})</h3>
      ${unlockedBadges === 0 ? `
        <div class="card" style="text-align:center;padding:var(--space-lg);color:var(--text-muted);">
          <div style="margin-bottom:var(--space-sm);">${iconTrophy('xl', 'var(--text-muted)')}</div>
          <div style="font-size:var(--text-sm);">完成关卡来解锁你的第一个徽章<br>Complete levels to unlock your first badge</div>
        </div>
      ` : ''}
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-sm);${unlockedBadges === 0 ? 'margin-top:var(--space-sm);' : ''}">
        ${badges.map(b => renderBadge(b, s.badges.includes(b.id))).join('')}
      </div>
    </div>
  `;
}
