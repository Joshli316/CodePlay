import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderProgressBar } from '../components/progress-bar';
import { router } from '../router';
import { WORLD_LEVELS, getWorldName } from '../data/worlds';
import { iconLock, iconStar } from '../components/icons';

export function renderWorld(container: HTMLElement, worldId: number) {
  const world = getWorldName(worldId);
  const levels = WORLD_LEVELS[worldId] || [];
  const completion = state.getWorldCompletion(worldId);
  const worldState = state.get().worlds[worldId];

  container.innerHTML = `
    ${renderHeader(`${world.zh} ${world.en}`, true)}
    <div class="screen">
      ${renderProgressBar(completion)}
      <p style="text-align:center;color:var(--text-secondary);font-size:var(--text-sm);margin:var(--space-sm) 0 var(--space-lg);">${completion}% 完成</p>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
        ${levels.map((level, i) => {
          const unlocked = state.isLevelUnlocked(worldId, i);
          const completed = worldState?.levelsCompleted.includes(i);
          const stars = worldState?.stars[i] || 0;
          return `
            <div class="card level-card ${!unlocked ? 'locked' : ''}" data-level="${i}" role="${unlocked ? 'button' : 'presentation'}" tabindex="${unlocked ? '0' : '-1'}"
                 aria-label="${level.title_zh} ${level.title_en}${unlocked ? ` ${stars}星` : ' 已锁定'}">
              <div class="level-icon">
                ${unlocked ? `<span style="font-size:var(--text-xl);">${level.icon}</span>` : iconLock('md')}
              </div>
              <div class="level-info">
                <div class="level-title">${level.title_zh}</div>
                <div class="level-subtitle">${level.title_en}</div>
              </div>
              <div class="stars">
                ${[1, 2, 3].map(s => `<span style="display:inline-flex;">${iconStar(s <= stars, 'sm', s <= stars ? 'var(--gold)' : 'var(--text-muted)')}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('[data-level]').forEach(el => {
    const handler = () => {
      const levelIdx = parseInt(el.getAttribute('data-level') || '0');
      const level = levels[levelIdx];
      if (level && state.isLevelUnlocked(worldId, levelIdx)) {
        router.navigate(`/game/${level.gameType}/${worldId}/${levelIdx}`);
      }
    };
    el.addEventListener('click', handler);
    el.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === 'Enter') handler(); });
  });
}
