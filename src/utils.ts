export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Render a correct/wrong feedback box. Eliminates duplication across 6+ game screens. */
export function renderFeedback(correct: boolean, message: string): string {
  const bg = correct ? 'rgba(0,212,170,0.1)' : 'rgba(255,107,107,0.1)';
  const border = correct ? 'var(--green)' : 'var(--red)';
  return `<div style="padding:var(--space-md);border-radius:var(--radius-md);background:${bg};border:1px solid ${border};line-height:1.6;font-size:var(--text-sm);">${message}</div>`;
}

/** Render a score bar showing progress and correct count. */
export function renderScoreBar(current: number, total: number, correctCount: number): string {
  const pct = Math.round((current / total) * 100);
  return `
    <div class="game-score-bar">
      <span>${current}/${total}</span>
      <span>✓ ${correctCount}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-bar-fill" style="width:${pct}%"></div>
    </div>
  `;
}
