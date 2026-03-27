// Run: node generate-og.js
// Generates a 1200x630 OG image as og-image.svg in dist/

const fs = require('fs');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1a2a4a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#ffc857" stroke-width="3" rx="12"/>
  <text x="600" y="200" text-anchor="middle" fill="#ffc857" font-family="system-ui,sans-serif" font-size="60" font-weight="bold">🎓 CodePlay 码玩</text>
  <text x="600" y="280" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="28">Learn Claude Code Through Games</text>
  <text x="600" y="330" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="system-ui,sans-serif" font-size="22">游戏化学习 Claude Code · 中英双语 · 4个世界 · 11个游戏</text>
  <text x="600" y="420" text-anchor="middle" fill="#00d4aa" font-family="system-ui,sans-serif" font-size="24">🚪 终端之门 · ⚔️ 命令王国 · 🏰 提示宫殿 · 🤖 智能体擂台</text>
  <text x="600" y="520" text-anchor="middle" fill="#ffc857" font-family="system-ui,sans-serif" font-size="26" font-weight="bold">学会用AI，赢得未来</text>
  <text x="600" y="570" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="system-ui,sans-serif" font-size="16">codequest-b1p.pages.dev</text>
</svg>`;

fs.writeFileSync('dist/og-image.svg', svg);
console.log('OG image SVG written to dist/og-image.svg');
