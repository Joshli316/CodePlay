import { mascotDialogue } from '../data/mascot-dialogue';

export function renderMascot(trigger: string, expressionOverride?: string): string {
  let dialogue = '';
  const expression = expressionOverride || 'neutral';

  const entry = mascotDialogue[trigger];
  if (entry) {
    if (typeof entry === 'string') {
      dialogue = entry;
    } else if (Array.isArray(entry)) {
      dialogue = entry[Math.floor(Math.random() * entry.length)];
    }
  }

  if (!dialogue) {
    dialogue = '你好！我是码小码，你的编程小伙伴！';
  }

  return `
    <div class="mascot-container" role="region" aria-label="码小码">
      <div class="mascot-avatar" aria-hidden="true" style="font-size:var(--text-3xl);">🤖</div>
      <div class="mascot-bubble" role="status">${dialogue}</div>
    </div>
  `;
}
