import { router } from './router';
import { state } from './state';
import { renderHome } from './screens/home';
import { renderWorld } from './screens/world';
import { renderPlacement } from './screens/placement';
import { renderGlossary } from './screens/glossary';
import { renderReview } from './screens/review';
import { renderProfile } from './screens/profile';
import { renderFlashMatch } from './screens/game-flash-match';
import { renderTrivia } from './screens/game-trivia';
import { renderCharades } from './screens/game-charades';
import { renderDragDrop } from './screens/game-drag-drop';
import { renderMemoryMatch } from './screens/game-memory-match';
import { renderPromptBuilder } from './screens/game-prompt-builder';
import { renderPromptRepair } from './screens/game-prompt-repair';
import { renderPromptDuel } from './screens/game-prompt-duel';
import { renderBossBattle } from './screens/game-boss-battle';
import { renderDailyMission } from './screens/game-daily-mission';
import { renderPeerChallenge } from './screens/game-peer-challenge';
import { renderCertificate } from './screens/game-certificate';

const app = document.getElementById('app')!;

const GAME_RENDERERS: Record<string, (container: HTMLElement, worldId: number, levelIndex: number) => void> = {
  'flash-match': renderFlashMatch,
  'trivia': renderTrivia,
  'charades': renderCharades,
  'drag-drop': renderDragDrop,
  'memory-match': renderMemoryMatch,
  'prompt-builder': renderPromptBuilder,
  'prompt-repair': renderPromptRepair,
  'prompt-duel': renderPromptDuel,
  'boss-battle': renderBossBattle,
  'daily-mission': renderDailyMission,
  'peer-challenge': renderPeerChallenge,
  'certificate': renderCertificate,
};

// Routes
router.addRoute('/', () => {
  if (!state.isPlacementDone()) {
    router.navigate('/placement');
    return;
  }
  state.updateStreak();
  renderHome(app);
});

router.addRoute('/placement', () => {
  renderPlacement(app);
});

router.addRoute('/world/:id', (params) => {
  const worldId = parseInt(params.id);
  if (worldId >= 1 && worldId <= 4) {
    renderWorld(app, worldId);
  } else {
    router.navigate('/');
  }
});

router.addRoute('/game/:type/:worldId/:levelId', (params) => {
  const gameType = params.type;
  const worldId = parseInt(params.worldId);
  const levelIndex = parseInt(params.levelId);
  const renderer = GAME_RENDERERS[gameType];
  if (renderer) {
    if (!state.isLevelUnlocked(worldId, levelIndex)) {
      router.navigate(`/world/${worldId}`);
      return;
    }
    renderer(app, worldId, levelIndex);
  } else {
    router.navigate('/');
  }
});

router.addRoute('/glossary', () => {
  renderGlossary(app);
});

router.addRoute('/review', () => {
  renderReview(app);
});

router.addRoute('/profile', () => {
  renderProfile(app);
});

// Start
router.start();
