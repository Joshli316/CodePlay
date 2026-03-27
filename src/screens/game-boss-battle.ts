import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { renderResults } from './results';

interface BossScenario {
  question_zh: string;
  question_en: string;
  correctCommand: string;
  commandOptions: string[];
  keywords: string[];
}

const ALL_SCENARIOS: BossScenario[] = [
  {
    question_zh: '你会怎样开始一个新项目？',
    question_en: 'How would you start a new project?',
    correctCommand: '/init',
    commandOptions: ['/init', '/setup', '/new', '/config'],
    keywords: ['scaffold', 'CLAUDE.md', 'initialize'],
  },
  {
    question_zh: '代码库太大，放不进上下文窗口。你会怎么做？',
    question_en: 'The codebase is too large for context. What do you do?',
    correctCommand: '/compact',
    commandOptions: ['/compact', '/clear', '/shrink', '/trim'],
    keywords: ['context', 'compact', 'window'],
  },
  {
    question_zh: '你需要撤销一个最近的改动。怎么办？',
    question_en: 'You need to undo a recent change. How?',
    correctCommand: '/rewind',
    commandOptions: ['/rewind', '/undo', '/rollback', '/restore'],
    keywords: ['revert', 'undo', 'checkpoint'],
  },
  {
    question_zh: '你想查看 API 用量。怎么操作？',
    question_en: 'How do you check your API usage?',
    correctCommand: '/usage',
    commandOptions: ['/usage', '/cost', '/billing', '/stats'],
    keywords: ['token', 'cost', 'usage'],
  },
  {
    question_zh: '代码审查流程是怎样的？',
    question_en: 'Code review process?',
    correctCommand: '/review',
    commandOptions: ['/review', '/lint', '/check', '/audit'],
    keywords: ['review', 'quality', 'feedback'],
  },
  {
    question_zh: '如何简化复杂的代码？',
    question_en: 'How to simplify complex code?',
    correctCommand: '/simplify',
    commandOptions: ['/simplify', '/explain', '/easy', '/translate'],
    keywords: ['refactor', 'simplify', 'clean'],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function renderBossBattle(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL_SCENARIOS = 3;
  const POINTS_PER_SCENARIO = 100;
  const scenarios = shuffle(ALL_SCENARIOS).slice(0, TOTAL_SCENARIOS);

  let currentIndex = 0;
  let totalScore = 0;
  let showingPepTalk = true;

  function renderPepTalk() {
    container.innerHTML = `
      ${renderHeader('面试模拟 Boss Battle', true)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          ${renderMascot('bossStart')}
          <div style="text-align:center;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-xl);font-weight:700;color:var(--gold);">面试模拟 Interview Simulation</div>
            <p style="color:var(--text-secondary);margin-top:var(--space-sm);">回答 ${TOTAL_SCENARIOS} 个场景题，选择正确命令并解释原因</p>
            <p style="color:var(--text-secondary);">Answer ${TOTAL_SCENARIOS} scenarios: pick the right command and explain why</p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-gold btn-block" id="start-btn">开始挑战 Start Challenge</button>
        </div>
      </div>
    `;

    container.querySelector('#start-btn')?.addEventListener('click', () => {
      showingPepTalk = false;
      renderScenario();
    });
  }

  function renderScenario() {
    if (currentIndex >= scenarios.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: totalScore,
        total: TOTAL_SCENARIOS * POINTS_PER_SCENARIO,
        gameType: 'boss-battle',
      });
      return;
    }

    const s = scenarios[currentIndex];
    const progress = currentIndex + 1;
    const shuffledOptions = shuffle(s.commandOptions);

    container.innerHTML = `
      ${renderHeader('面试模拟 Boss Battle', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>场景 ${progress}/${TOTAL_SCENARIOS}</span>
          <span>得分: ${totalScore}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${(progress / TOTAL_SCENARIOS) * 100}%"></div>
        </div>
        <div class="game-question">
          ${s.question_zh}
          <div class="game-question-sub">${s.question_en}</div>
        </div>
        <div class="game-body">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-xs);">
            选择正确的命令 Pick the correct command:
          </div>
          <div class="option-list" id="cmd-options">
            ${shuffledOptions.map((cmd, i) => `
              <button class="option-btn" data-cmd="${cmd}">
                <span class="option-label">${['A', 'B', 'C', 'D'][i]}</span>
                <span style="font-family:var(--font-mono);">${cmd}</span>
              </button>
            `).join('')}
          </div>
          <div id="explain-section" style="display:none;margin-top:var(--space-md);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-xs);">
              解释你的选择 Explain your choice:
            </div>
            <input type="text" class="search-input" id="explanation-input"
              placeholder="用英文简要解释... Briefly explain in English..."
              autocomplete="off" />
            <div id="cmd-feedback" style="display:none;margin-top:var(--space-sm);padding:var(--space-sm);border-radius:var(--radius-md);font-size:var(--text-sm);"></div>
            <button class="btn btn-primary btn-block" id="submit-explain" style="margin-top:var(--space-md);">
              提交 Submit
            </button>
          </div>
        </div>
      </div>
    `;

    let selectedCommand = '';
    let commandCorrect = false;
    const cmdBtns = container.querySelectorAll('#cmd-options .option-btn');

    cmdBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (selectedCommand) return;
        selectedCommand = (btn as HTMLElement).dataset.cmd || '';
        commandCorrect = selectedCommand === s.correctCommand;

        // Highlight selection
        cmdBtns.forEach(b => b.classList.add('disabled'));
        if (commandCorrect) {
          btn.classList.add('correct');
          playSound('correct');
        } else {
          btn.classList.add('wrong');
          // Show correct one
          cmdBtns.forEach(b => {
            if ((b as HTMLElement).dataset.cmd === s.correctCommand) {
              b.classList.add('correct');
            }
          });
          playSound('wrong');
        }

        // Show explanation section
        const explainSection = container.querySelector('#explain-section') as HTMLElement;
        explainSection.style.display = 'block';

        // Show command feedback
        const cmdFeedback = container.querySelector('#cmd-feedback') as HTMLElement;
        cmdFeedback.style.display = 'block';
        if (commandCorrect) {
          cmdFeedback.style.background = 'rgba(0, 212, 170, 0.1)';
          cmdFeedback.style.border = '1px solid var(--green)';
          cmdFeedback.innerHTML = `<strong>+50 命令正确！ Command correct!</strong>`;
        } else {
          cmdFeedback.style.background = 'rgba(255, 107, 107, 0.1)';
          cmdFeedback.style.border = '1px solid var(--red)';
          cmdFeedback.innerHTML = `<strong>命令错误。正确答案: ${s.correctCommand}</strong>`;
        }

        // Focus explanation input
        const input = container.querySelector('#explanation-input') as HTMLInputElement;
        input?.focus();
      });
    });

    container.querySelector('#submit-explain')?.addEventListener('click', () => {
      const input = container.querySelector('#explanation-input') as HTMLInputElement;
      const explanation = (input?.value || '').toLowerCase();

      // Score command
      let scenarioScore = 0;
      if (commandCorrect) {
        scenarioScore += 50;
      }

      // Score explanation on keyword matching
      const matchedKeywords = s.keywords.filter(kw => explanation.includes(kw.toLowerCase()));
      if (matchedKeywords.length > 0) {
        scenarioScore += 50;
      }

      totalScore += scenarioScore;

      // Show explanation feedback
      const feedbackArea = container.querySelector('#cmd-feedback') as HTMLElement;
      const keywordStatus = matchedKeywords.length > 0
        ? `<br><strong style="color:var(--green);">+50 解释命中关键词: ${matchedKeywords.join(', ')}</strong>`
        : `<br><strong style="color:var(--red);">解释缺少关键词。参考: ${s.keywords.join(', ')}</strong>`;

      feedbackArea.innerHTML += keywordStatus;
      feedbackArea.innerHTML += `<br><span style="color:var(--gold);">本题得分: ${scenarioScore}/${POINTS_PER_SCENARIO}</span>`;

      // Disable submit
      const submitBtn = container.querySelector('#submit-explain') as HTMLButtonElement;
      submitBtn.disabled = true;
      submitBtn.textContent = `下一题 Next (${scenarioScore} pts)`;

      // Auto-advance
      setTimeout(() => {
        currentIndex++;
        renderScenario();
      }, 2500);
    });
  }

  if (showingPepTalk) {
    renderPepTalk();
  } else {
    renderScenario();
  }
}
