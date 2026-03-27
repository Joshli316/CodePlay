import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { showHongbao } from '../components/hongbao';
import { showBadgeToast } from '../components/badge';
import { playSound } from '../components/audio';
import { badges } from '../data/badges';
import { router } from '../router';

export function renderResults(container: HTMLElement, params: {
  worldId: number;
  levelIndex: number;
  score: number;
  total: number;
  gameType: string;
}) {
  const { worldId, levelIndex, score, total, gameType } = params;
  const pct = Math.round((score / Math.max(1, total)) * 100);
  const stars = pct >= 100 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
  const isPerfect = pct >= 100;
  const passed = pct >= 40;

  // Save progress
  if (passed) {
    state.completeLevel(worldId, levelIndex, pct);
  }

  // Check badges
  const newBadges: typeof badges[0][] = [];
  function checkBadge(id: string, condition: boolean) {
    if (condition && state.addBadge(id)) {
      const b = badges.find(x => x.id === id);
      if (b) newBadges.push(b);
    }
  }

  checkBadge('first-step', state.getTotalLevelsCompleted() >= 1);
  checkBadge('quick-learner', isPerfect && levelIndex === 0);
  checkBadge('command-king', state.getWorldCompletion(2) >= 100);
  checkBadge('prompt-sage', isPerfect && gameType === 'prompt-builder');
  checkBadge('interview-ready', gameType === 'boss-battle' && passed);
  checkBadge('completionist', [1, 2, 3, 4].every(w => state.getWorldCompletion(w) >= 100));
  checkBadge('speed-demon', isPerfect); // simplified
  checkBadge('practice-master', state.getStreak().current >= 7);
  checkBadge('unstoppable', state.getStreak().current >= 21);

  // Check world completion for mascot
  const worldComplete = state.getWorldCompletion(worldId) >= 100;

  let mascotTrigger = 'correctAnswer';
  if (isPerfect) mascotTrigger = 'perfectScore';
  else if (!passed) mascotTrigger = 'retry';
  else if (worldComplete) mascotTrigger = 'worldComplete';

  container.innerHTML = `
    ${renderHeader('结果 Results', false)}
    <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
      ${renderMascot(mascotTrigger)}
      <div style="text-align:center;">
        <div class="stars" style="justify-content:center;font-size:var(--text-3xl);margin-bottom:var(--space-md);">
          ${[1, 2, 3].map(s => `<span class="star ${s <= stars ? 'earned' : ''}" style="animation:${s <= stars ? `bounceIn 0.3s ${s * 0.2}s both` : 'none'}">★</span>`).join('')}
        </div>
        <div style="font-size:var(--text-4xl);font-weight:700;color:${isPerfect ? 'var(--gold)' : 'var(--teal)'};">${pct}%</div>
        <p style="color:var(--text-secondary);margin-top:var(--space-xs);">${score}/${total} 正确</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">+${pct} XP</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);width:100%;">
        ${passed ? `<button class="btn btn-primary btn-block" id="next-level">下一关 Next Level →</button>` : ''}
        <button class="btn btn-secondary btn-block" id="retry">再试一次 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">返回首页 Home</button>
      </div>
    </div>
  `;

  // Show badges
  newBadges.forEach((b, i) => {
    setTimeout(() => showBadgeToast(b), (i + 1) * 800);
  });

  // Hongbao on perfect
  if (isPerfect) {
    setTimeout(() => showHongbao(), 500);
    playSound('perfect');
  } else if (passed) {
    playSound('levelUp');
  } else {
    playSound('wrong');
  }

  container.querySelector('#next-level')?.addEventListener('click', () => {
    const nextLevel = levelIndex + 1;
    const totalLevels = state.getWorldLevelCount(worldId);
    if (nextLevel < totalLevels) {
      router.navigate(`/world/${worldId}`);
    } else if (worldId < 4) {
      router.navigate(`/world/${worldId + 1}`);
    } else {
      router.navigate('/');
    }
  });

  container.querySelector('#retry')?.addEventListener('click', () => {
    router.navigate(`/game/${gameType}/${worldId}/${levelIndex}`);
  });

  container.querySelector('#go-home')?.addEventListener('click', () => router.navigate('/'));
}
