export function renderProgressBar(percent: number, variant?: 'default' | 'gold'): string {
  const clamped = Math.max(0, Math.min(100, percent));
  const goldClass = variant === 'gold' ? ' progress-bar-gold' : '';

  return `
    <div class="progress-bar${goldClass}" role="progressbar" aria-valuenow="${clamped}" aria-valuemin="0" aria-valuemax="100" aria-label="${clamped}% complete">
      <div class="progress-bar-fill" style="width: ${clamped}%"></div>
    </div>
  `;
}
