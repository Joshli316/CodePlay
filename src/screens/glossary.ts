import { renderHeader } from '../components/header';
import { vocabulary } from '../data/vocabulary';
import { state } from '../state';
import { playSound } from '../components/audio';
import { iconSearch, iconLock, iconBook } from '../components/icons';

export function renderGlossary(container: HTMLElement) {
  let searchTerm = '';

  function render() {
    const filtered = vocabulary.filter(v => {
      if (!searchTerm) return true;
      const q = searchTerm.toLowerCase();
      return v.en.toLowerCase().includes(q) || v.pinyin.toLowerCase().includes(q) ||
             v.zh.includes(q) || v.explanation.includes(q);
    });

    container.innerHTML = `
      ${renderHeader('词典 Glossary', true)}
      <div class="screen">
        <label for="glossary-search" class="sr-only">搜索词条 Search terms</label>
        <input type="text" class="search-input" id="glossary-search" placeholder="搜索 Search (English, 拼音, 中文)" value="${searchTerm}">
        <p style="color:var(--text-muted);font-size:var(--text-xs);margin:var(--space-sm) 0;">${filtered.length} 个词条</p>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-top:var(--space-sm);">
          ${filtered.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${iconSearch('xl')}</div><div class="empty-state-title">没有找到匹配的词条</div><div class="empty-state-text">No matching terms found</div></div>` : ''}
          ${filtered.map(v => {
            const worldUnlocked = state.isWorldUnlocked(v.world);
            return `
              <div class="card" style="${!worldUnlocked ? 'opacity:0.5;' : ''}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                  <div style="font-weight:700;color:var(--teal);font-size:var(--text-lg);">${worldUnlocked ? v.en : `${iconLock('sm')} ???`}</div>
                  <span style="font-size:var(--text-xs);color:var(--text-muted);background:var(--bg-secondary);padding:2px 8px;border-radius:var(--radius-full);">W${v.world}</span>
                </div>
                ${worldUnlocked ? `
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">${v.pinyin}</div>
                  <div style="font-size:var(--text-base);margin-top:var(--space-xs);">${v.zh}</div>
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);line-height:1.5;">${v.explanation}</div>
                ` : '<div style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--space-xs);">完成世界 ${v.world} 解锁</div>'}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const input = container.querySelector('#glossary-search') as HTMLInputElement;
    input?.addEventListener('input', () => {
      searchTerm = input.value;
      playSound('keystroke');
      render();
    });
    input?.focus();
  }

  render();
}
