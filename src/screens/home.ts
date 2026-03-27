import { state } from '../state';
import { renderMascot } from '../components/mascot';
import { router } from '../router';
import { WORLDS } from '../data/worlds';
import { iconFlame, iconBook, iconUser, iconLock, iconWorld, iconStar } from '../components/icons';

export function renderHome(container: HTMLElement) {
  const streak = state.getStreak();
  const reviewCount = state.getDueReviewItems().length;

  let mascotTrigger = 'firstLogin';
  if (streak.current >= 21) mascotTrigger = 'streak21';
  else if (streak.current >= 7) mascotTrigger = 'streak7';
  else if (state.getTotalLevelsCompleted() > 0) mascotTrigger = 'correctAnswer';

  container.innerHTML = `
    <div class="screen" style="padding-top:var(--space-lg);">
      <!-- Header area -->
      <div class="page-header">
        <div>
          <h1 class="page-title">码玩</h1>
          <p class="page-subtitle">用游戏学会Claude Code</p>
        </div>
        <div class="page-actions">
          <button class="icon-btn" id="btn-glossary" aria-label="词典 Glossary">${iconBook('sm')} 词典</button>
          <button class="icon-btn" id="btn-profile" aria-label="个人资料 Profile">${iconUser('sm')}</button>
        </div>
      </div>

      <!-- Streak -->
      <div class="streak-banner">
        <div class="streak-icon">${iconFlame('lg', 'var(--red)')}</div>
        <div>
          <div class="streak-value">${streak.current} 天连续</div>
          <div class="streak-label">最长记录: ${streak.longest} 天</div>
        </div>
      </div>

      <!-- Mascot -->
      ${renderMascot(mascotTrigger)}

      <!-- Review Queue -->
      ${reviewCount > 0 ? `
        <div class="review-cta">
          <button class="btn btn-gold btn-block" id="btn-review">
            复习 Review · ${reviewCount} ${reviewCount === 1 ? 'item' : 'items'}
          </button>
        </div>
      ` : ''}

      <!-- World Map -->
      <div class="world-timeline">
        ${WORLDS.map(w => {
          const unlocked = state.isWorldUnlocked(w.id);
          const completion = state.getWorldCompletion(w.id);
          const isNext = unlocked && completion < 100;
          return `
            <div class="card world-card ${unlocked ? '' : 'locked'} ${isNext ? 'card-highlight' : ''}" data-world="${w.id}"
                 role="${unlocked ? 'button' : 'presentation'}" tabindex="${unlocked ? '0' : '-1'}"
                 aria-label="${w.zh} ${w.en}${unlocked ? ` ${completion}%` : ' 已锁定'}">
              <div class="world-icon" style="background:${unlocked ? w.color : 'var(--bg-secondary)'};">
                ${unlocked ? iconWorld(w.id) : iconLock('lg')}
              </div>
              <div class="world-info">
                <div class="world-name">${w.zh}</div>
                <div class="world-name-en">${w.en}</div>
                ${unlocked ? `
                  <div class="progress-bar" role="progressbar" aria-valuenow="${completion}" aria-valuemin="0" aria-valuemax="100" style="margin-top:var(--space-xs);">
                    <div class="progress-bar-fill" style="width:${completion}%"></div>
                  </div>
                  <div class="world-progress-text">${completion}% 完成</div>
                ` : '<div class="world-progress-text">完成上一世界后解锁 Complete previous world</div>'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Events — click + keyboard for world cards
  container.querySelectorAll('[data-world]').forEach(el => {
    const handler = () => {
      const wid = el.getAttribute('data-world');
      if (wid && state.isWorldUnlocked(parseInt(wid))) {
        router.navigate(`/world/${wid}`);
      }
    };
    el.addEventListener('click', handler);
    el.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === 'Enter') handler(); });
  });

  container.querySelector('#btn-glossary')?.addEventListener('click', () => router.navigate('/glossary'));
  container.querySelector('#btn-profile')?.addEventListener('click', () => router.navigate('/profile'));
  container.querySelector('#btn-review')?.addEventListener('click', () => router.navigate('/review'));
}
