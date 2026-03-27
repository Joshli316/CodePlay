export interface WorldProgress {
  levelsCompleted: number[];
  scores: Record<number, number>;
  stars: Record<number, number>;
}

export interface ReviewItem {
  id: string;
  type: 'vocab' | 'command' | 'prompt';
  lastSeen: number;
  wrongCount: number;
  correctCount: number;
}

export interface GameState {
  placementCompleted: boolean;
  placementScore: number;
  worlds: Record<number, WorldProgress>;
  streak: { current: number; longest: number; lastLogin: string };
  badges: string[];
  reviewQueue: ReviewItem[];
  totalScore: number;
  dailyMissionIndex: number;
  dailyMissionDate: string;
}

const DEFAULT_STATE: GameState = {
  placementCompleted: false,
  placementScore: 0,
  worlds: {
    1: { levelsCompleted: [], scores: {}, stars: {} },
    2: { levelsCompleted: [], scores: {}, stars: {} },
    3: { levelsCompleted: [], scores: {}, stars: {} },
    4: { levelsCompleted: [], scores: {}, stars: {} },
  },
  streak: { current: 0, longest: 0, lastLogin: '' },
  badges: [],
  reviewQueue: [],
  totalScore: 0,
  dailyMissionIndex: 0,
  dailyMissionDate: '',
};

const STORAGE_KEY = 'cq_state';

class StateManager {
  private state: GameState;

  constructor() {
    this.state = this.load();
  }

  private load(): GameState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        return {
          ...DEFAULT_STATE,
          ...saved,
          worlds: {
            1: { levelsCompleted: [], scores: {}, stars: {}, ...(saved.worlds?.[1] || {}) },
            2: { levelsCompleted: [], scores: {}, stars: {}, ...(saved.worlds?.[2] || {}) },
            3: { levelsCompleted: [], scores: {}, stars: {}, ...(saved.worlds?.[3] || {}) },
            4: { levelsCompleted: [], scores: {}, stars: {}, ...(saved.worlds?.[4] || {}) },
          },
        };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
    return { ...DEFAULT_STATE, worlds: { ...DEFAULT_STATE.worlds } };
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  get(): GameState {
    return this.state;
  }

  isPlacementDone(): boolean {
    return this.state.placementCompleted;
  }

  completePlacement(score: number) {
    this.state.placementCompleted = true;
    this.state.placementScore = score;
    if (score >= 4 && score <= 6) {
      this.state.worlds[1].levelsCompleted = [0, 1];
      this.state.worlds[1].scores = { 0: 80, 1: 80 };
      this.state.worlds[1].stars = { 0: 2, 1: 2 };
    } else if (score >= 7) {
      this.state.worlds[1].levelsCompleted = [0, 1, 2, 3];
      this.state.worlds[1].scores = { 0: 90, 1: 90, 2: 90, 3: 90 };
      this.state.worlds[1].stars = { 0: 3, 1: 3, 2: 3, 3: 3 };
    }
    this.save();
  }

  isWorldUnlocked(worldId: number): boolean {
    if (worldId === 1) return true;
    const prevWorld = this.state.worlds[worldId - 1];
    if (!prevWorld) return false;
    const totalLevels = this.getWorldLevelCount(worldId - 1);
    return prevWorld.levelsCompleted.length >= totalLevels;
  }

  getWorldLevelCount(worldId: number): number {
    const counts: Record<number, number> = { 1: 4, 2: 6, 3: 6, 4: 6 };
    return counts[worldId] || 4;
  }

  isLevelUnlocked(worldId: number, levelIndex: number): boolean {
    if (levelIndex === 0) return this.isWorldUnlocked(worldId);
    const world = this.state.worlds[worldId];
    return world?.levelsCompleted.includes(levelIndex - 1) || false;
  }

  completeLevel(worldId: number, levelIndex: number, score: number) {
    const world = this.state.worlds[worldId];
    if (!world) return;
    if (!world.levelsCompleted.includes(levelIndex)) {
      world.levelsCompleted.push(levelIndex);
    }
    const prev = world.scores[levelIndex] || 0;
    world.scores[levelIndex] = Math.max(prev, score);
    const stars = score >= 100 ? 3 : score >= 70 ? 2 : score >= 40 ? 1 : 0;
    const prevStars = world.stars[levelIndex] || 0;
    world.stars[levelIndex] = Math.max(prevStars, stars);
    this.state.totalScore += Math.max(0, score - prev);
    this.save();
  }

  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this.state.streak.lastLogin;
    if (last === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last === yesterday) {
      this.state.streak.current++;
    } else if (last !== today) {
      this.state.streak.current = 1;
    }
    this.state.streak.longest = Math.max(this.state.streak.longest, this.state.streak.current);
    this.state.streak.lastLogin = today;
    this.save();
  }

  getStreak(): { current: number; longest: number } {
    return this.state.streak;
  }

  addBadge(badgeId: string): boolean {
    if (this.state.badges.includes(badgeId)) return false;
    this.state.badges.push(badgeId);
    this.save();
    return true;
  }

  hasBadge(badgeId: string): boolean {
    return this.state.badges.includes(badgeId);
  }

  addToReviewQueue(item: Omit<ReviewItem, 'lastSeen' | 'wrongCount' | 'correctCount'>) {
    const existing = this.state.reviewQueue.find(r => r.id === item.id);
    if (existing) {
      existing.wrongCount++;
      existing.lastSeen = Date.now();
    } else {
      this.state.reviewQueue.push({
        ...item,
        lastSeen: Date.now(),
        wrongCount: 1,
        correctCount: 0,
      });
    }
    this.save();
  }

  markReviewCorrect(id: string) {
    const item = this.state.reviewQueue.find(r => r.id === id);
    if (item) {
      item.correctCount++;
      item.lastSeen = Date.now();
      if (item.correctCount >= 3) {
        this.state.reviewQueue = this.state.reviewQueue.filter(r => r.id !== id);
      }
    }
    this.save();
  }

  getDueReviewItems(limit = 10): ReviewItem[] {
    const threeDaysAgo = Date.now() - 3 * 86400000;
    return this.state.reviewQueue
      .filter(item => item.lastSeen < threeDaysAgo || item.wrongCount >= item.correctCount)
      .slice(0, limit);
  }

  getWorldCompletion(worldId: number): number {
    const world = this.state.worlds[worldId];
    if (!world) return 0;
    const total = this.getWorldLevelCount(worldId);
    return Math.round((world.levelsCompleted.length / total) * 100);
  }

  getTotalLevelsCompleted(): number {
    return Object.values(this.state.worlds).reduce((sum, w) => sum + w.levelsCompleted.length, 0);
  }

  getDailyMissionIndex(): number {
    const today = new Date().toISOString().split('T')[0];
    if (this.state.dailyMissionDate !== today) {
      this.state.dailyMissionIndex = (this.state.dailyMissionIndex + 1) % 30;
      this.state.dailyMissionDate = today;
      this.save();
    }
    return this.state.dailyMissionIndex;
  }

  resetProgress() {
    this.state = { ...DEFAULT_STATE, worlds: {
      1: { levelsCompleted: [], scores: {}, stars: {} },
      2: { levelsCompleted: [], scores: {}, stars: {} },
      3: { levelsCompleted: [], scores: {}, stars: {} },
      4: { levelsCompleted: [], scores: {}, stars: {} },
    }};
    this.save();
  }
}

export const state = new StateManager();
