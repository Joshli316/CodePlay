import { state } from '../state';
import { renderMascot } from '../components/mascot';
import { router } from '../router';

const WORLDS = [
  { id: 1, zh: '终端之门', en: 'The Terminal Gate', icon: '🚪', color: '#00d4aa' },
  { id: 2, zh: '命令王国', en: 'Command Kingdom', icon: '⚔️', color: '#ffc857' },
  { id: 3, zh: '提示宫殿', en: 'Prompt Palace', icon: '🏰', color: '#ff6b6b' },
  { id: 4, zh: '智能体擂台', en: 'Agent Arena', icon: '🤖', color: '#a78bfa' },
];

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
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md);">
        <div>
          <h1 style="font-size:var(--text-2xl);font-weight:700;">码途</h1>
          <p style="font-size:var(--text-sm);color:var(--text-secondary);">CodeQuest</p>
        </div>
        <div style="display:flex;gap:var(--space-md);align-items:center;">
          <button class="btn btn-secondary" id="btn-glossary" style="font-size:var(--text-sm);padding:var(--space-xs) var(--space-md);">📖 词典</button>
          <button class="btn btn-secondary" id="btn-profile" style="font-size:var(--text-sm);padding:var(--space-xs) var(--space-md);">👤</button>
        </div>
      </div>

      <!-- Streak -->
      <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-lg);padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);">
        <span style="font-size:var(--text-2xl);">🔥</span>
        <div>
          <div style="font-weight:700;color:var(--gold);font-size:var(--text-lg);">${streak.current} 天连续</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">最长记录: ${streak.longest} 天</div>
        </div>
      </div>

      <!-- Mascot -->
      ${renderMascot(mascotTrigger)}

      <!-- Review Queue -->
      ${reviewCount > 0 ? `
        <button class="btn btn-gold btn-block" id="btn-review" style="margin:var(--space-md) 0;animation:pulse 2s infinite;">
          复习 · ${reviewCount}个词 Review Queue
        </button>
      ` : ''}

      <!-- World Map -->
      <div style="display:flex;flex-direction:column;gap:var(--space-md);margin-top:var(--space-lg);position:relative;">
        <div style="position:absolute;left:28px;top:40px;bottom:40px;width:3px;background:var(--bg-card);border-radius:2px;"></div>
        ${WORLDS.map(w => {
          const unlocked = state.isWorldUnlocked(w.id);
          const completion = state.getWorldCompletion(w.id);
          return `
            <div class="card ${unlocked ? '' : 'locked'}" data-world="${w.id}"
                 style="display:flex;align-items:center;gap:var(--space-md);position:relative;z-index:1;${!unlocked ? 'opacity:0.4;' : ''}cursor:${unlocked ? 'pointer' : 'default'};">
              <div style="width:56px;height:56px;border-radius:var(--radius-full);background:${unlocked ? w.color : 'var(--bg-secondary)'};display:flex;align-items:center;justify-content:center;font-size:var(--text-2xl);flex-shrink:0;">
                ${unlocked ? w.icon : '🔒'}
              </div>
              <div style="flex:1;">
                <div style="font-weight:600;">${w.zh}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);">${w.en}</div>
                ${unlocked ? `
                  <div class="progress-bar" style="margin-top:var(--space-xs);">
                    <div class="progress-bar-fill" style="width:${completion}%"></div>
                  </div>
                  <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:2px;">${completion}%</div>
                ` : '<div style="font-size:var(--text-xs);color:var(--text-muted);">完成上一个世界解锁</div>'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Events
  container.querySelectorAll('[data-world]').forEach(el => {
    el.addEventListener('click', () => {
      const wid = el.getAttribute('data-world');
      if (wid && state.isWorldUnlocked(parseInt(wid))) {
        router.navigate(`/world/${wid}`);
      }
    });
  });

  container.querySelector('#btn-glossary')?.addEventListener('click', () => router.navigate('/glossary'));
  container.querySelector('#btn-profile')?.addEventListener('click', () => router.navigate('/profile'));
  container.querySelector('#btn-review')?.addEventListener('click', () => router.navigate('/review'));
}
