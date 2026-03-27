# Implementation Plan: CodeQuest 码途

## Overview
Build a Duolingo-style bilingual SPA that teaches Chinese international students Claude Code through 4 worlds of interactive games. Vanilla TypeScript on Cloudflare Pages, dark mode, mobile-first, all content bundled (no backend).

## Steps

### Phase 1: Foundation
1. **Project scaffold** — Create `package.json`, `tsconfig.json`, `index.html` shell (dark mode, meta tags, mobile viewport), and directory structure (`src/`, `src/data/`, `src/screens/`, `src/components/`, `src/styles/`, `assets/audio/`, `dist/`)
2. **CSS design system** — Write `variables.css` (navy #0a1628, teal #00d4aa, gold #ffc857, typography scale, spacing, tap targets), `base.css` (reset, dark mode body, global styles), `components.css` (card, button, badge, progress bar shared styles), `games.css` (game layout patterns)
3. **Router** — Hash-based SPA router in `router.ts`. Routes: `#/` (home), `#/world/:id`, `#/game/:type/:worldId/:levelId`, `#/profile`, `#/results`, `#/glossary`, `#/review`, `#/placement`
4. **State manager** — `state.ts` with localStorage. Track: world/level progress, streak (current + longest), scores per game, badges earned, daily login timestamps, review queue (items + last-seen dates), placement test completed flag. All keys prefixed `cq_`
5. **App bootstrap** — `main.ts` wires up router, loads state, checks if placement test completed (if not → redirect to `#/placement`), renders initial screen. Build step: esbuild bundle to `dist/`

### Phase 2: Content Data
6. **Vocabulary data** — `data/vocabulary.ts`: all 20+ terms from the spec. Each entry: `{ id, en, pinyin, zh, explanation, world }`. Includes: Terminal, CLI, Agentic, Context Window, Prompt, Repository, Directory, CLAUDE.md, Sub-agent, Hook, Scaffold, Diff, Compaction, etc.
7. **Commands data** — `data/commands.ts`: all 11 slash commands. Each entry: `{ id, command, zhName, zhDescription, scenario, wrongChoices[], terminalResponse }`. The `terminalResponse` field holds the simulated output shown in the Terminal Sandbox. Covers: /init, /help, /clear, /compact, /rewind, /copy, /debug, /usage, /review, /simplify, /model
8. **Quiz data** — `data/quizzes.ts`: question banks for Worlds 1–4 plus 10 placement test questions (mix of vocab, commands, concepts). Each question: `{ id, world, question_zh, question_en, options[], correctIndex, explanation_zh, explanation_en }`
9. **Prompt data** — `data/prompts.ts`: good/bad prompt examples for World 3. Each entry: `{ id, task_zh, badPrompt, goodPrompt, rating: { clarity, specificity, context, tone }, explanation_zh }`
10. **Badge data** — `data/badges.ts`: 12 achievement badges, each with Chinese idiom:
    - 千里之行始于足下 (First Step) — Complete first level
    - 一点即通 (Quick Learner) — Perfect score on first try
    - 铁杵磨成针 (Persistent) — Retry and pass a failed level
    - 熟能生巧 (Practice Master) — 7-day streak
    - 博学多才 (Word Collector) — Learn all vocabulary
    - 运筹帷幄 (Command King) — Complete World 2
    - 妙笔生花 (Prompt Sage) — Score 5/5 on Prompt Builder
    - 胸有成竹 (Interview Ready) — Complete Boss Battle
    - 势如破竹 (Unstoppable) — 21-day streak
    - 功德圆满 (Completionist) — Finish all 4 worlds
    - 一目十行 (Speed Demon) — Finish timed quiz with >50% time remaining
    - 教学相长 (Sharing is Caring) — Send a Peer Challenge
    Each entry: `{ id, idiom, pinyin, enName, meaning, unlockCondition, icon }`
11. **Mascot dialogue data** — `data/mascot-dialogue.ts`: contextual lines for 码小码 keyed by trigger event:
    - `firstLogin`: "欢迎来到码途！我是码小码，你的AI学习伙伴。"
    - `wrongAnswer`: "没关系，再试一次！这个词很多人都会搞混。"
    - `correctAnswer`: "太棒了！你越来越厉害了！"
    - `streak7`: "连续7天！你比90%的学习者都厉害！"
    - `streak21`: "21天！你的坚持让我感动！"
    - `worldComplete`: ["终端之门已经打开了！接下来我们去命令王国。", "命令王国已经征服！提示宫殿在等你。", "提示宫殿通关！最后的擂台准备好了吗？", "恭喜你通关了码途！你已经准备好了！"]
    - `perfectScore`: "满分！你是天才吗？🎉"
    - `retry`: "失败是成功之母。再来一次！"
    - `bossStart`: "深呼吸。你已经学了这么多，面试官应该紧张才对。"
    - `certificate`: "毕业快乐！去征服世界吧！"
    Each entry: `{ trigger, lines: string | string[] }`

### Phase 3: Shared Components
12. **Header component** — `components/header.ts`: back button, screen title (bilingual), streak fire icon + count. Sticky top bar
13. **Progress bar** — `components/progress-bar.ts`: animated fill bar showing level/world completion percentage
14. **Card component** — `components/card.ts`: reusable flip card (front/back) for flashcards and memory match. CSS 3D flip animation
15. **Terminal Sandbox component** — `components/terminal.ts`: simulated terminal UI. Dark background, monospace font, blinking cursor. Student types a command → component pattern-matches against known commands → displays pre-scripted response from `commands.ts` `terminalResponse` field. Unknown commands show: "码小码说：这个命令我还不认识哦！试试 /help？" Used in World 2 as "Try It" mode after Command Charades levels
16. **Mascot component** — `components/mascot.ts`: 码小码 robot character rendered as CSS/SVG. Has expression states (celebrate, encourage, neutral, thinking) AND a speech bubble that displays contextual dialogue from `mascot-dialogue.ts`. Speech bubble animates in with a typewriter effect. Appears on: results screens, home screen greeting, placement test intro/outro, world transitions
17. **Hongbao animation** — `components/hongbao.ts`: red envelope burst animation on perfect scores. CSS keyframes + particle effect
18. **Badge component** — `components/badge.ts`: achievement badge showing Chinese idiom title, English name, and icon. Locked state (greyed, idiom hidden) / unlocked state (full color, idiom revealed). Toast notification component for when a badge is newly earned
19. **Audio component** — `components/audio.ts`: Web Audio API wrapper for sound effects (correct, wrong, level-up, perfect, card-flip) and placeholder for pronunciation playback

### Phase 4: Home & Navigation Screens
20. **Placement test screen** — `screens/placement.ts`: shown on first launch only. 码小码 introduces itself ("让我看看你已经知道多少！"). 10 mixed questions (vocab, commands, concepts) from the placement bank in `quizzes.ts`. After completion, score determines starting point: 0-3 → World 1 Level 1; 4-6 → World 1 with first 2 Flash Match levels pre-completed; 7-10 → World 2 unlocked immediately. Mascot gives personalized encouragement based on result
21. **Home screen** — `screens/home.ts`: world map showing 4 worlds as a vertical path (like Duolingo). Each world node shows: Chinese name, English name, lock/unlock state, completion %. Streak counter prominent at top. Mascot greeting with contextual dialogue. **Review Queue button** — if there are items due for review, show a pulsing "复习" button with item count (e.g., "复习 · 8个词"). Tapping goes to `#/review`. **Glossary button** — always visible, labeled "词典"
22. **World detail screen** — `screens/world.ts`: list of levels/games within a world. Each level shows: game type icon, title (bilingual), star rating (0-3), lock state. Progress bar at top
23. **Glossary screen** — `screens/glossary.ts`: searchable dictionary of all terms the student has encountered. Search box accepts English, pinyin, or Chinese input. Each entry shows full breakdown: English → Pinyin → Chinese → Plain explanation → which World it's from. Locked terms (from unstarted worlds) appear greyed with "???". Tapping a term plays pronunciation (if available). Useful both in-app and as a reference while using Claude Code docs externally
24. **Review Queue screen** — `screens/review.ts`: cross-world spaced repetition session. Pulls 5-10 items the student got wrong or hasn't reviewed in 3+ days, from any completed world. Mix of formats: flashcard flip (vocab), quick multiple choice (commands), mini prompt rating (prompts). Shows "due" count before starting. After completion: stats on items reviewed, accuracy, items mastered vs. still learning. Accessible from home screen's "复习" button
25. **Profile screen** — `screens/profile.ts`: player stats (streak current + longest, total score, levels completed, time spent, review accuracy), badge collection grid (locked/unlocked), world completion percentages
26. **Results screen** — `screens/results.ts`: post-game score display, stars earned (1-3), XP gained, mascot reaction with dialogue bubble, "Next Level" / "Retry" buttons, hongbao animation trigger on perfect. If a badge was earned during this game, show badge unlock animation before the score

### Phase 5: World 1 Games — The Terminal Gate 终端之门
27. **Flash Match game** — `screens/game-flash-match.ts`: flashcard vocabulary drill. Show English term, tap to flip and reveal Chinese + pinyin + explanation. Swipe right = know it, swipe left = review again. Spaced repetition: cards marked "review" reappear sooner AND are added to the cross-world Review Queue. 20 terms per level, scored on % correct
28. **Bilingual Trivia game** — `screens/game-trivia.ts`: multiple choice quiz. Question shown in both languages. 4 options, tap to select. Timer bar (15 seconds). Correct: green flash + mini-explanation in ZH+EN. Wrong: red flash + correct answer shown + item added to Review Queue. 10 questions per round, scored on accuracy + speed

### Phase 6: World 2 Games — Command Kingdom 命令王国
29. **Command Charades game** — `screens/game-charades.ts`: animated scenario description (text + icon), player picks correct slash command from 4 choices. Wrong answer shows why it's wrong in Chinese. Right answer shows when to use it. **After each correct answer, offer a "试试看" (Try It) button** that opens the Terminal Sandbox with the command pre-loaded — student presses Enter and sees the simulated response. 10 scenarios per level
30. **Drag & Drop Workflow game** — `screens/game-drag-drop.ts`: task description shown in Chinese. Draggable command blocks below. Player drags into numbered slots to build correct workflow sequence. Validate order on submit. Touch-friendly drag with visual snap zones
31. **Memory Match game** — `screens/game-memory-match.ts`: 4×4 grid of face-down cards. Tap to flip. Match English command with Chinese description. Matched pairs stay face-up. Timer + move counter. Score based on speed and fewest moves

### Phase 7: World 3 Games — Prompt Palace 提示宫殿
32. **Prompt Builder game** — `screens/game-prompt-builder.ts`: task goal shown in Chinese at top. Below: draggable English word/phrase blocks. Player assembles a prompt by ordering blocks. Submit to see rating (clarity/specificity/context/tone radar chart). Multiple valid orderings accepted
33. **Prompt Repair Shop game** — `screens/game-prompt-repair.ts`: bad prompt shown at top. Player edits it by tapping words to replace/add/remove from a word bank. Before/after comparison shown on submit. Scored on improvement delta
34. **Prompt Duel game** — `screens/game-prompt-duel.ts`: two prompts shown side by side. Player votes which is better. Explanation reveals why. 10 duels per round, scored on accuracy

### Phase 8: World 4 Games — Agent Arena 智能体擂台
35. **Boss Battle game** — `screens/game-boss-battle.ts`: interview scenario with multi-step questions. Player selects commands AND types brief explanation. Scored on accuracy + explanation quality (keyword matching). 3 scenarios per boss battle. 码小码 gives a pep talk before each battle: "深呼吸。你已经学了这么多，面试官应该紧张才对。"
36. **Daily Mission game** — `screens/game-daily-mission.ts`: one guided task per day. Step-by-step walkthrough in both languages (e.g., "Use /review to check a Python script"). Player taps through steps, answers check-questions along the way. New mission each day (rotate through pool of 30)
37. **Peer Challenge game** — `screens/game-peer-challenge.ts`: generate a shareable quiz link (URL with encoded quiz params). Recipient plays same quiz. Compare scores displayed on results screen. Share via copy-link button (WeChat/general)

### Phase 9: Gamification & Polish
38. **Streak system** — In `state.ts`: track daily login, increment streak on consecutive days, reset on miss. Show streak on home screen with fire animation. Streak milestones (7, 14, 21, 30) trigger badge unlocks + mascot dialogue + hongbao
39. **Badge/achievement system** — Check badge unlock conditions (from `badges.ts`) after each game completion. Toast notification on unlock with idiom reveal animation. Badge grid on profile screen
40. **Hongbao rewards** — Trigger red envelope animation on: perfect game scores, streak milestones (7, 14, 21, 30 days), world completion
41. **Sound effects** — Add Web Audio generated sounds: correct answer ding, wrong answer buzz, level complete fanfare, perfect score celebration, card flip click, terminal keystroke click, badge unlock chime
42. **Final assessment & certificate** — End-of-course quiz pulling questions from all 4 worlds. 30 questions. Generates completion certificate in two shareable formats:
    - **WeChat Moments card** (1080×1080px square): student name (bilingual), completion date, 4-world badge row, top 3 stats, QR code linking to app URL, tagline "学会用AI，赢得未来"
    - **LinkedIn card** (1200×628px landscape): same content, professional tone, "Completed CodeQuest 码途 — 30-day Claude Code Fluency Program"
    Both rendered client-side as HTML/CSS → canvas → downloadable PNG

### Phase 10: Build & Verify
43. **Build pipeline** — Configure esbuild to bundle TS → JS, copy static assets to `dist/`. Verify `index.html` loads correctly, all routes work, no console errors
44. **Mobile testing** — Verify all tap targets ≥ 48px, games playable on 375px width, drag-and-drop works with touch events, Terminal Sandbox keyboard works on mobile, scroll behavior correct
45. **Content review** — Verify all vocabulary terms, commands, quiz questions, prompt examples, badge unlock conditions, mascot dialogue triggers, and placement test scoring are accurate and complete per the spec

## Files to Create/Modify
- `index.html` — SPA shell with meta tags, CSS imports, JS bundle script tag
- `package.json` — project config, esbuild dev dependency
- `tsconfig.json` — strict TS config targeting ES2020
- `src/main.ts` — app entry point
- `src/router.ts` — hash-based SPA router
- `src/state.ts` — localStorage state manager
- `src/data/vocabulary.ts` — 20+ vocabulary terms
- `src/data/commands.ts` — 11 slash commands with terminal responses
- `src/data/quizzes.ts` — quiz question banks + placement test questions
- `src/data/prompts.ts` — prompt examples
- `src/data/badges.ts` — 12 achievement badges with Chinese idioms
- `src/data/mascot-dialogue.ts` — contextual 码小码 dialogue lines
- `src/screens/home.ts` — home/world map screen with review queue + glossary buttons
- `src/screens/world.ts` — world detail screen
- `src/screens/placement.ts` — first-launch placement test
- `src/screens/glossary.ts` — searchable bilingual dictionary
- `src/screens/review.ts` — cross-world spaced repetition review
- `src/screens/profile.ts` — player profile with badge grid
- `src/screens/results.ts` — post-game results with badge unlock
- `src/screens/game-flash-match.ts` — Game 1
- `src/screens/game-trivia.ts` — Game 2
- `src/screens/game-charades.ts` — Game 3 (with Terminal Sandbox integration)
- `src/screens/game-drag-drop.ts` — Game 4
- `src/screens/game-memory-match.ts` — Game 5
- `src/screens/game-prompt-builder.ts` — Game 6
- `src/screens/game-prompt-repair.ts` — Game 7
- `src/screens/game-prompt-duel.ts` — Game 8
- `src/screens/game-boss-battle.ts` — Game 9
- `src/screens/game-daily-mission.ts` — Game 10
- `src/screens/game-peer-challenge.ts` — Game 11
- `src/components/header.ts` — header bar
- `src/components/progress-bar.ts` — progress indicator
- `src/components/card.ts` — flip card
- `src/components/terminal.ts` — simulated terminal sandbox
- `src/components/mascot.ts` — 码小码 character with dialogue bubbles
- `src/components/hongbao.ts` — reward animation
- `src/components/badge.ts` — achievement badge + unlock toast
- `src/components/audio.ts` — sound effects
- `src/styles/variables.css` — design tokens
- `src/styles/base.css` — global styles
- `src/styles/components.css` — component styles
- `src/styles/games.css` — game layouts

## Open Questions
- None — spec is comprehensive. Decisions can be made during build.
