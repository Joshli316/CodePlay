import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderProgressBar } from '../components/progress-bar';
import { router } from '../router';

interface LevelDef {
  title_zh: string;
  title_en: string;
  gameType: string;
  icon: string;
}

const WORLD_LEVELS: Record<number, LevelDef[]> = {
  1: [
    { title_zh: '基础词汇 A', title_en: 'Basic Vocab A', gameType: 'flash-match', icon: '🃏' },
    { title_zh: '基础词汇 B', title_en: 'Basic Vocab B', gameType: 'flash-match', icon: '🃏' },
    { title_zh: '终端知识测验', title_en: 'Terminal Quiz', gameType: 'trivia', icon: '❓' },
    { title_zh: '综合测验', title_en: 'Comprehensive Quiz', gameType: 'trivia', icon: '🏆' },
  ],
  2: [
    { title_zh: '命令猜猜看 A', title_en: 'Command Charades A', gameType: 'charades', icon: '🎭' },
    { title_zh: '命令猜猜看 B', title_en: 'Command Charades B', gameType: 'charades', icon: '🎭' },
    { title_zh: '工作流排序', title_en: 'Workflow Builder', gameType: 'drag-drop', icon: '🔀' },
    { title_zh: '记忆配对 A', title_en: 'Memory Match A', gameType: 'memory-match', icon: '🧠' },
    { title_zh: '记忆配对 B', title_en: 'Memory Match B', gameType: 'memory-match', icon: '🧠' },
    { title_zh: '命令大师测验', title_en: 'Command Master Quiz', gameType: 'trivia', icon: '👑' },
  ],
  3: [
    { title_zh: '提示词组装 A', title_en: 'Prompt Builder A', gameType: 'prompt-builder', icon: '🧩' },
    { title_zh: '提示词组装 B', title_en: 'Prompt Builder B', gameType: 'prompt-builder', icon: '🧩' },
    { title_zh: '提示词修复', title_en: 'Prompt Repair', gameType: 'prompt-repair', icon: '🔧' },
    { title_zh: '提示词对决 A', title_en: 'Prompt Duel A', gameType: 'prompt-duel', icon: '⚔️' },
    { title_zh: '提示词对决 B', title_en: 'Prompt Duel B', gameType: 'prompt-duel', icon: '⚔️' },
    { title_zh: '提示词大师', title_en: 'Prompt Master', gameType: 'prompt-builder', icon: '✨' },
  ],
  4: [
    { title_zh: 'Boss挑战 A', title_en: 'Boss Battle A', gameType: 'boss-battle', icon: '🐉' },
    { title_zh: 'Boss挑战 B', title_en: 'Boss Battle B', gameType: 'boss-battle', icon: '🐉' },
    { title_zh: '每日任务', title_en: 'Daily Mission', gameType: 'daily-mission', icon: '📋' },
    { title_zh: '好友挑战', title_en: 'Peer Challenge', gameType: 'peer-challenge', icon: '🤝' },
    { title_zh: '终极Boss', title_en: 'Final Boss', gameType: 'boss-battle', icon: '👹' },
    { title_zh: '毕业证书', title_en: 'Certificate', gameType: 'boss-battle', icon: '🎓' },
  ],
};

const WORLD_NAMES: Record<number, { zh: string; en: string }> = {
  1: { zh: '终端之门', en: 'The Terminal Gate' },
  2: { zh: '命令王国', en: 'Command Kingdom' },
  3: { zh: '提示宫殿', en: 'Prompt Palace' },
  4: { zh: '智能体擂台', en: 'Agent Arena' },
};

export function renderWorld(container: HTMLElement, worldId: number) {
  const world = WORLD_NAMES[worldId];
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
            <div class="card" data-level="${i}" style="${!unlocked ? 'opacity:0.4;pointer-events:none;' : 'cursor:pointer;'}">
              <div style="display:flex;align-items:center;gap:var(--space-md);">
                <div style="width:44px;height:44px;border-radius:var(--radius-md);background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;font-size:var(--text-xl);">
                  ${unlocked ? level.icon : '🔒'}
                </div>
                <div style="flex:1;">
                  <div style="font-weight:600;font-size:var(--text-base);">${level.title_zh}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-secondary);">${level.title_en}</div>
                </div>
                <div class="stars">
                  ${[1, 2, 3].map(s => `<span class="star ${s <= stars ? 'earned' : ''}">★</span>`).join('')}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('[data-level]').forEach(el => {
    el.addEventListener('click', () => {
      const levelIdx = parseInt(el.getAttribute('data-level') || '0');
      const level = levels[levelIdx];
      if (level && state.isLevelUnlocked(worldId, levelIdx)) {
        router.navigate(`/game/${level.gameType}/${worldId}/${levelIdx}`);
      }
    });
  });
}
