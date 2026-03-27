import { state } from '../state';

export function renderHeader(title: string, showBack?: boolean, backPath?: string): string {
  const streak = state.getStreak();
  const backBtn = showBack
    ? `<button class="header-back" aria-label="返回 Go back" onclick="window.location.hash='${backPath || '/'}'">←</button>`
    : '';

  return `
    <div class="header">
      ${backBtn}
      <div class="header-title">${title}</div>
      <div class="header-streak">
        <span>🔥</span>
        <span>${streak.current}</span>
      </div>
    </div>
  `;
}
