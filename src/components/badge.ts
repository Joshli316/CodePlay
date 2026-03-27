export function renderBadge(
  badge: { id: string; idiom: string; pinyin: string; enName: string; icon: string },
  unlocked: boolean
): string {
  const stateClass = unlocked ? 'unlocked' : 'locked';
  const idiomText = unlocked ? badge.idiom : '???';
  const pinyinText = unlocked ? badge.pinyin : '';

  return `
    <div class="badge-item" data-badge-id="${badge.id}">
      <div class="badge-icon ${stateClass}">${badge.icon}</div>
      <div class="badge-idiom">${idiomText}</div>
      ${pinyinText ? `<div class="badge-pinyin">${pinyinText}</div>` : ''}
      <div class="badge-name">${badge.enName}</div>
    </div>
  `;
}

export function showBadgeToast(badge: { idiom: string; enName: string; icon: string }): void {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-badge';
  toast.innerHTML = `
    <span style="font-size: 1.5em;">${badge.icon}</span>
    <div>
      <div style="font-weight: 600; color: var(--gold);">${badge.idiom}</div>
      <div style="font-size: 0.85em; opacity: 0.8;">${badge.enName} unlocked!</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
