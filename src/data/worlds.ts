export interface WorldDef {
  id: number;
  zh: string;
  en: string;
  icon: string;
  color: string;
}

export interface LevelDef {
  title_zh: string;
  title_en: string;
  gameType: string;
  icon: string;
}

export const WORLDS: WorldDef[] = [
  { id: 1, zh: '终端之门', en: 'The Terminal Gate', icon: '🚪', color: '#00d4aa' },
  { id: 2, zh: '命令王国', en: 'Command Kingdom', icon: '⚔️', color: '#ffc857' },
  { id: 3, zh: '提示宫殿', en: 'Prompt Palace', icon: '🏰', color: '#ff6b6b' },
  { id: 4, zh: '智能体擂台', en: 'Agent Arena', icon: '🤖', color: '#a78bfa' },
];

export const WORLD_LEVELS: Record<number, LevelDef[]> = {
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

export function getWorldLevelCount(worldId: number): number {
  return WORLD_LEVELS[worldId]?.length ?? 0;
}

export function getWorldName(worldId: number): { zh: string; en: string } {
  const w = WORLDS[worldId - 1];
  return w ? { zh: w.zh, en: w.en } : { zh: '未知', en: 'Unknown' };
}

/** Pre-computed world name lookup for templates */
export const WORLD_NAMES_ZH: Record<number, string> = Object.fromEntries(WORLDS.map(w => [w.id, w.zh]));
