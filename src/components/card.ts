export function renderFlipCard(front: string, back: string, id?: string): string {
  const idAttr = id ? ` id="${id}"` : '';
  return `
    <div class="flip-card"${idAttr} data-flip-card>
      <div class="flip-card-inner">
        <div class="flip-card-front">${front}</div>
        <div class="flip-card-back">${back}</div>
      </div>
    </div>
  `;
}

export function initFlipCards(container: HTMLElement): void {
  const cards = container.querySelectorAll<HTMLElement>('[data-flip-card]');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}
