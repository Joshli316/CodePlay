export function renderProgressBar(percent: number, variant?: 'default' | 'gold'): string {
  const clamped = Math.max(0, Math.min(100, percent));
  const goldClass = variant === 'gold' ? ' progress-bar-gold' : '';

  return `
    <div class="progress-bar${goldClass}">
      <div class="progress-bar-fill" style="width: ${clamped}%"></div>
    </div>
  `;
}
