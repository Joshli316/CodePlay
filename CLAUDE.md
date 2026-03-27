# CodeQuest 码途

Duolingo-style bilingual (English/Chinese) gamified learning app that teaches Chinese international students how to use Claude Code — from terminal basics to job-interview-ready fluency.

## Tech Stack
- TypeScript/HTML single-page app on Cloudflare Pages
- No framework — vanilla TS with modular architecture
- CSS custom properties for theming (dark mode default)
- localStorage for progress persistence (no backend for MVP)
- Audio via Web Audio API for pronunciation and sound effects

## Structure
```
codequest/
├── index.html              # Entry point — SPA shell
├── src/
│   ├── main.ts             # App bootstrap, router
│   ├── router.ts           # Hash-based SPA router
│   ├── state.ts            # Progress, streaks, scores, review queue in localStorage
│   ├── data/
│   │   ├── vocabulary.ts   # All vocab terms with EN/ZH/pinyin/explanation
│   │   ├── commands.ts     # Slash commands data
│   │   ├── quizzes.ts      # Quiz question banks per world
│   │   ├── prompts.ts      # Prompt examples (good/bad) for World 3
│   │   ├── badges.ts       # 12 achievement badges with Chinese idioms
│   │   └── mascot-dialogue.ts  # 码小码 contextual dialogue lines
│   ├── screens/
│   │   ├── home.ts         # Home screen — world map, streak, review queue, progress
│   │   ├── world.ts        # World detail — level list
│   │   ├── placement.ts    # First-launch placement test (10 questions)
│   │   ├── glossary.ts     # Searchable bilingual term dictionary
│   │   ├── review.ts       # Cross-world spaced repetition review queue
│   │   ├── game-flash-match.ts      # Game 1: Flashcard vocab drill
│   │   ├── game-trivia.ts           # Game 2: Bilingual trivia quiz
│   │   ├── game-charades.ts         # Game 3: Scenario → pick command
│   │   ├── game-drag-drop.ts        # Game 4: Drag command workflow
│   │   ├── game-memory-match.ts     # Game 5: Flip card matching
│   │   ├── game-prompt-builder.ts   # Game 6: Assemble prompt from blocks
│   │   ├── game-prompt-repair.ts    # Game 7: Fix bad prompts
│   │   ├── game-prompt-duel.ts      # Game 8: Compare two prompts
│   │   ├── game-boss-battle.ts      # Game 9: Interview simulation
│   │   ├── game-daily-mission.ts    # Game 10: Daily guided task
│   │   ├── game-peer-challenge.ts   # Game 11: Share quiz via link
│   │   ├── profile.ts      # Profile — badges, stats, streak
│   │   └── results.ts      # Post-game results screen
│   ├── components/
│   │   ├── header.ts       # Top bar — back, title, streak
│   │   ├── progress-bar.ts # Level progress indicator
│   │   ├── card.ts         # Reusable flashcard component
│   │   ├── terminal.ts     # Simulated terminal sandbox (type command → see response)
│   │   ├── mascot.ts       # 码小码 mascot with dialogue bubbles
│   │   ├── hongbao.ts      # Red envelope reward animation
│   │   ├── badge.ts        # Achievement badge display
│   │   └── audio.ts        # Sound effects + pronunciation
│   └── styles/
│       ├── variables.css   # Color palette, typography, spacing
│       ├── base.css        # Reset, dark mode, global styles
│       ├── components.css  # Shared component styles
│       └── games.css       # Game-specific layouts
├── assets/
│   └── audio/              # Pronunciation MP3s (placeholder)
├── dist/                   # Build output for deployment
├── tsconfig.json
├── package.json
└── plan.md
```

## Entry Point
`index.html` — loads compiled JS bundle

## Build
`npx tsc && cp index.html dist/ && cp -r assets dist/`
(Or use esbuild for bundling if needed)

## Deployment
`wrangler pages deploy dist/`

## Conventions
- Bilingual everything: Chinese primary, English secondary in UI
- Technical terms always show: English → Pinyin → Chinese → Plain explanation
- Dark mode default (navy #0a1628, teal #00d4aa, gold #ffc857)
- Mobile-first: min tap target 48px, responsive breakpoints
- All game screens follow pattern: instruction → interaction → feedback → score
- localStorage keys prefixed with `cq_` (e.g., `cq_progress`, `cq_streak`)
- No external API calls — all content is bundled in data files
- Mascot 码小码 has contextual Chinese dialogue (not just expressions) — speaks to the student like a companion
- Completion certificates render client-side as HTML/CSS → canvas → downloadable PNG (no backend)
