import { state } from '../state';
import { renderHeader } from '../components/header';
import { renderMascot } from '../components/mascot';
import { playSound } from '../components/audio';
import { renderResults } from './results';

interface MissionStep {
  instruction_zh: string;
  instruction_en: string;
  question?: string;
  options?: string[];
  correctIndex?: number;
}

interface DailyMission {
  title_zh: string;
  title_en: string;
  steps: MissionStep[];
}

const MISSIONS: DailyMission[] = [
  {
    title_zh: '使用 /review 检查代码',
    title_en: 'Use /review to check code',
    steps: [
      { instruction_zh: '/review 让 Claude Code 像代码审查员一样检查你的改动。', instruction_en: '/review lets Claude Code review your changes like a code reviewer.' },
      { instruction_zh: '它会检查潜在的 bug、代码风格和最佳实践。', instruction_en: 'It checks for potential bugs, code style, and best practices.' },
      { instruction_zh: '适合在提交 PR 之前使用，确保代码质量。', instruction_en: 'Best used before submitting a PR to ensure code quality.',
        question: 'When should you use /review?',
        options: ['After deploying', 'Before submitting a PR', 'When installing packages', 'When creating a new file'],
        correctIndex: 1 },
      { instruction_zh: '/review 会分析 git diff 中的改动内容。', instruction_en: '/review analyzes the changes in your git diff.',
        question: 'What does /review analyze?',
        options: ['Your entire codebase', 'Changes in git diff', 'Package.json only', 'README file'],
        correctIndex: 1 },
      { instruction_zh: '审查结果会标注严重程度：警告和建议。', instruction_en: 'Review results show severity levels: warnings and suggestions.',
        question: 'What does /review output include?',
        options: ['Only errors', 'Warnings and suggestions', 'Only line counts', 'File sizes'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /init 开始新项目',
    title_en: 'Use /init to start a new project',
    steps: [
      { instruction_zh: '/init 在当前目录创建 CLAUDE.md 配置文件。', instruction_en: '/init creates a CLAUDE.md configuration file in the current directory.' },
      { instruction_zh: 'CLAUDE.md 包含项目的技术栈、编码规范和偏好。', instruction_en: 'CLAUDE.md contains your tech stack, coding conventions, and preferences.' },
      { instruction_zh: 'Claude Code 每次启动都会自动读取这个文件。', instruction_en: 'Claude Code reads this file automatically every time it starts.',
        question: 'What file does /init create?',
        options: ['README.md', 'package.json', 'CLAUDE.md', '.gitignore'],
        correctIndex: 2 },
      { instruction_zh: '你可以手动编辑 CLAUDE.md 来调整 Claude 的行为。', instruction_en: 'You can manually edit CLAUDE.md to adjust Claude\'s behavior.',
        question: 'Can you edit CLAUDE.md after /init creates it?',
        options: ['No, it is read-only', 'Yes, you can edit it anytime', 'Only Claude can edit it', 'Only during init'],
        correctIndex: 1 },
      { instruction_zh: '每个项目只需运行一次 /init。', instruction_en: 'You only need to run /init once per project.',
        question: 'How many times should you run /init per project?',
        options: ['Every session', 'Once', 'Twice', 'Never'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /debug 排查错误',
    title_en: 'Use /debug to troubleshoot errors',
    steps: [
      { instruction_zh: '/debug 显示 Claude Code 的内部调试信息。', instruction_en: '/debug shows Claude Code\'s internal debug information.' },
      { instruction_zh: '包括 API 请求详情、token 使用量和延迟数据。', instruction_en: 'Includes API request details, token usage, and latency data.' },
      { instruction_zh: '当 Claude Code 行为异常时，/debug 帮你找原因。', instruction_en: 'When Claude Code behaves unexpectedly, /debug helps you find the cause.',
        question: 'What does /debug show?',
        options: ['Code syntax errors', 'API requests and token usage', 'File permissions', 'Git history'],
        correctIndex: 1 },
      { instruction_zh: '你可以看到每次请求消耗了多少 token。', instruction_en: 'You can see how many tokens each request consumed.',
        question: '/debug is useful when:',
        options: ['Writing new code', 'Claude Code is running slowly', 'Creating a new project', 'Reading documentation'],
        correctIndex: 1 },
      { instruction_zh: '调试完后，正常使用即可，不需要关闭调试模式。', instruction_en: 'After debugging, just continue using Claude Code normally.',
        question: 'What information helps diagnose slow responses?',
        options: ['File count', 'Latency data', 'Git branch name', 'OS version'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /compact 管理上下文',
    title_en: 'Use /compact to manage context',
    steps: [
      { instruction_zh: '上下文窗口有大小限制，对话太长会被截断。', instruction_en: 'The context window has a size limit — long conversations get truncated.' },
      { instruction_zh: '/compact 把对话压缩成关键摘要，释放空间。', instruction_en: '/compact compresses the conversation into key summaries, freeing space.' },
      { instruction_zh: '和 /clear 不同，/compact 保留重要信息。', instruction_en: 'Unlike /clear, /compact preserves important information.',
        question: 'What is the difference between /compact and /clear?',
        options: ['No difference', '/compact keeps key info, /clear erases all', '/clear is faster', '/compact deletes files'],
        correctIndex: 1 },
      { instruction_zh: '当 Claude Code 提示上下文快满时，用 /compact。', instruction_en: 'Use /compact when Claude Code warns context is almost full.',
        question: 'When should you use /compact?',
        options: ['At the start of every session', 'When context is almost full', 'After every commit', 'Before running tests'],
        correctIndex: 1 },
      { instruction_zh: '压缩后你可以继续当前任务，不会丢失进度。', instruction_en: 'After compacting, you can continue your current task without losing progress.',
        question: 'After running /compact, what happens?',
        options: ['Session ends', 'All files are deleted', 'You continue working with freed space', 'You must restart Claude Code'],
        correctIndex: 2 },
    ],
  },
  {
    title_zh: '使用 /model 切换模型',
    title_en: 'Use /model to switch models',
    steps: [
      { instruction_zh: 'Claude Code 支持多个模型：Opus、Sonnet、Haiku。', instruction_en: 'Claude Code supports multiple models: Opus, Sonnet, Haiku.' },
      { instruction_zh: 'Opus 最强，Sonnet 均衡，Haiku 最快最便宜。', instruction_en: 'Opus is most capable, Sonnet is balanced, Haiku is fastest and cheapest.' },
      { instruction_zh: '简单任务可以用 Haiku 省钱，复杂任务用 Opus。', instruction_en: 'Use Haiku for simple tasks to save cost, Opus for complex ones.',
        question: 'Which model is the cheapest?',
        options: ['Opus', 'Sonnet', 'Haiku', 'They cost the same'],
        correctIndex: 2 },
      { instruction_zh: '用 /model 命令可以随时切换模型。', instruction_en: 'Use /model to switch models at any time.',
        question: 'Can you switch models mid-session?',
        options: ['No, only at start', 'Yes, with /model', 'Only admins can', 'Only with /restart'],
        correctIndex: 1 },
      { instruction_zh: '选择模型要考虑：任务难度、速度需求、预算。', instruction_en: 'When choosing a model, consider: task difficulty, speed needs, budget.',
        question: 'For a quick formatting task, which model is best?',
        options: ['Opus', 'Haiku', 'Always use Sonnet', 'It does not matter'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /rewind 撤销改动',
    title_en: 'Use /rewind to undo changes',
    steps: [
      { instruction_zh: 'Claude Code 修改代码后，有时结果不理想。', instruction_en: 'Sometimes Claude Code\'s changes don\'t turn out as expected.' },
      { instruction_zh: '/rewind 恢复到 Claude Code 最近修改之前的状态。', instruction_en: '/rewind restores files to the state before Claude Code\'s last changes.' },
      { instruction_zh: '比手动用 git checkout 更方便安全。', instruction_en: 'More convenient and safer than manually using git checkout.',
        question: 'What does /rewind undo?',
        options: ['Your manual edits', 'Claude Code\'s last changes', 'Git commits', 'Package installs'],
        correctIndex: 1 },
      { instruction_zh: '恢复后你可以给出新的指令重新尝试。', instruction_en: 'After rewinding, you can give new instructions and try again.',
        question: 'After /rewind, what should you do?',
        options: ['Close Claude Code', 'Give new instructions', 'Run /clear', 'Delete the project'],
        correctIndex: 1 },
      { instruction_zh: '养成习惯：不确定改动时，先记住可以 /rewind。', instruction_en: 'Good habit: when unsure about changes, remember you can /rewind.',
        question: '/rewind is like which everyday action?',
        options: ['Saving a file', 'Pressing Ctrl+Z to undo', 'Closing a window', 'Opening a new tab'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /usage 追踪开销',
    title_en: 'Use /usage to track spending',
    steps: [
      { instruction_zh: 'Claude Code 按 token 收费，了解用量很重要。', instruction_en: 'Claude Code charges by token — understanding usage is important.' },
      { instruction_zh: '/usage 显示当前会话的 token 用量和费用。', instruction_en: '/usage shows current session token usage and costs.' },
      { instruction_zh: '输入和输出的 token 分开计费。', instruction_en: 'Input and output tokens are billed separately.',
        question: 'What does /usage display?',
        options: ['File sizes', 'Token usage and cost', 'CPU usage', 'Network speed'],
        correctIndex: 1 },
      { instruction_zh: '长对话消耗更多 token，注意管理上下文。', instruction_en: 'Longer conversations consume more tokens — manage your context.',
        question: 'What increases token usage?',
        options: ['Short prompts', 'Long conversations', 'Small files', 'Using Haiku'],
        correctIndex: 1 },
      { instruction_zh: '定期检查用量，避免意外的高额账单。', instruction_en: 'Check usage regularly to avoid unexpected high bills.',
        question: 'How can you reduce token costs?',
        options: ['Use longer prompts', 'Never use /compact', 'Use /compact and choose smaller models for simple tasks', 'Always use Opus'],
        correctIndex: 2 },
    ],
  },
  {
    title_zh: '使用 /copy 保存回复',
    title_en: 'Use /copy to save responses',
    steps: [
      { instruction_zh: '/copy 把 Claude Code 最后的回复复制到剪贴板。', instruction_en: '/copy copies Claude Code\'s last response to your clipboard.' },
      { instruction_zh: '方便把代码或解释粘贴到文档、聊天工具等。', instruction_en: 'Convenient for pasting code or explanations into docs, chat tools, etc.' },
      { instruction_zh: '比手动选择文字更快更准确。', instruction_en: 'Faster and more accurate than manually selecting text.',
        question: 'What does /copy put in your clipboard?',
        options: ['The entire conversation', 'The last response only', 'Your last prompt', 'The CLAUDE.md file'],
        correctIndex: 1 },
      { instruction_zh: '复制后直接 Ctrl+V / Cmd+V 粘贴即可。', instruction_en: 'After copying, just Ctrl+V / Cmd+V to paste.',
        question: 'When is /copy most useful?',
        options: ['When starting a session', 'When sharing code with teammates', 'When deleting files', 'When switching models'],
        correctIndex: 1 },
      { instruction_zh: '搭配 /simplify 使用：先简化，再复制给同事看。', instruction_en: 'Combine with /simplify: simplify first, then copy for colleagues.',
        question: 'What is a good workflow before sharing Claude\'s explanation?',
        options: ['/clear then /copy', '/simplify then /copy', '/debug then /copy', '/init then /copy'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /simplify 简化回复',
    title_en: 'Use /simplify to simplify responses',
    steps: [
      { instruction_zh: 'Claude Code 有时会用太多技术术语回复。', instruction_en: 'Sometimes Claude Code responds with too much technical jargon.' },
      { instruction_zh: '/simplify 让它用更简单的语言重新解释。', instruction_en: '/simplify asks it to re-explain using simpler language.' },
      { instruction_zh: '非常适合学习新概念时使用。', instruction_en: 'Great to use when learning new concepts.',
        question: 'What does /simplify do?',
        options: ['Deletes code', 'Re-explains in simpler language', 'Compresses context', 'Switches model'],
        correctIndex: 1 },
      { instruction_zh: '简化不会改变代码，只改变解释方式。', instruction_en: 'Simplifying doesn\'t change the code, only the explanation.',
        question: 'Does /simplify modify your code?',
        options: ['Yes, it removes complex code', 'No, only the explanation changes', 'It deletes comments', 'It rewrites everything'],
        correctIndex: 1 },
      { instruction_zh: '如果还是不懂，可以多次使用 /simplify。', instruction_en: 'If still unclear, you can use /simplify multiple times.',
        question: 'Can you use /simplify more than once?',
        options: ['No, only once per response', 'Yes, as many times as needed', 'Only twice', 'Only with Opus model'],
        correctIndex: 1 },
    ],
  },
  {
    title_zh: '使用 /help 探索命令',
    title_en: 'Use /help to explore commands',
    steps: [
      { instruction_zh: '/help 显示所有可用的斜杠命令列表。', instruction_en: '/help shows all available slash commands.' },
      { instruction_zh: '每个命令都有简短的说明和用法。', instruction_en: 'Each command has a brief description and usage.' },
      { instruction_zh: '新手或忘记命令时，先试 /help。', instruction_en: 'When new or forgetful, try /help first.',
        question: 'What should a beginner type first?',
        options: ['/init', '/help', '/debug', '/model'],
        correctIndex: 1 },
      { instruction_zh: '你不需要记住所有命令，/help 随时可查。', instruction_en: 'You don\'t need to memorize all commands — /help is always there.',
        question: '/help is most like:',
        options: ['A calculator', 'A dictionary or manual', 'A compiler', 'A debugger'],
        correctIndex: 1 },
      { instruction_zh: '掌握 /help 是使用 Claude Code 的第一步。', instruction_en: 'Mastering /help is the first step to using Claude Code.',
        question: 'How often can you use /help?',
        options: ['Once per session', 'Anytime you need it', 'Only at the start', 'Only when there is an error'],
        correctIndex: 1 },
    ],
  },
];

export function renderDailyMission(container: HTMLElement, worldId: number, levelIndex: number) {
  const missionIndex = state.getDailyMissionIndex() % MISSIONS.length;
  const mission = MISSIONS[missionIndex];

  let currentStep = 0;
  let questionsAnswered = 0;
  let questionsCorrect = 0;
  let totalQuestions = 0;

  // Count total questions in this mission
  mission.steps.forEach(step => {
    if (step.question) totalQuestions++;
  });

  function renderStep() {
    if (currentStep >= mission.steps.length) {
      // Mission complete
      const score = totalQuestions > 0 ? questionsCorrect : 0;
      const total = totalQuestions > 0 ? totalQuestions : 1;
      renderResults(container, {
        worldId,
        levelIndex,
        score,
        total,
        gameType: 'daily-mission',
      });
      return;
    }

    const step = mission.steps[currentStep];
    const progress = currentStep + 1;
    const hasQuestion = !!step.question;

    container.innerHTML = `
      ${renderHeader('每日任务 Daily Mission', true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>步骤 ${progress}/${mission.steps.length}</span>
          <span>✓ ${questionsCorrect}/${totalQuestions}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${(progress / mission.steps.length) * 100}%"></div>
        </div>
        <div style="text-align:center;padding:var(--space-sm) 0;">
          <span style="font-size:var(--text-sm);color:var(--gold);font-weight:600;">${mission.title_zh}</span>
          <span style="font-size:var(--text-xs);color:var(--text-secondary);margin-left:var(--space-xs);">${mission.title_en}</span>
        </div>
        <div class="game-body">
          <div class="card" style="line-height:1.8;">
            <p style="font-size:var(--text-base);margin-bottom:var(--space-sm);">${step.instruction_zh}</p>
            <p style="font-size:var(--text-sm);color:var(--text-secondary);">${step.instruction_en}</p>
          </div>
          ${hasQuestion ? `
            <div style="margin-top:var(--space-md);">
              <div class="game-question" style="font-size:var(--text-base);">
                ${step.question}
              </div>
              <div class="option-list" id="quiz-options">
                ${(step.options || []).map((opt, i) => `
                  <button class="option-btn" data-index="${i}">
                    <span class="option-label">${['A', 'B', 'C', 'D'][i]}</span>
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div id="step-feedback" style="display:none;margin-top:var(--space-sm);padding:var(--space-md);border-radius:var(--radius-md);font-size:var(--text-sm);line-height:1.6;"></div>
            </div>
          ` : `
            <div class="game-footer">
              <button class="btn btn-primary btn-block" id="next-step">
                ${currentStep < mission.steps.length - 1 ? '下一步 Next Step' : '完成 Complete'} →
              </button>
            </div>
          `}
        </div>
      </div>
    `;

    if (hasQuestion) {
      let answered = false;
      const optBtns = container.querySelectorAll('#quiz-options .option-btn');

      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          questionsAnswered++;

          const idx = parseInt((btn as HTMLElement).dataset.index || '-1');
          const isCorrect = idx === step.correctIndex;

          optBtns.forEach(b => b.classList.add('disabled'));

          if (isCorrect) {
            questionsCorrect++;
            btn.classList.add('correct');
            playSound('correct');
          } else {
            btn.classList.add('wrong');
            optBtns.forEach((b, i) => {
              if (i === step.correctIndex) b.classList.add('correct');
            });
            playSound('wrong');
          }

          const feedback = container.querySelector('#step-feedback') as HTMLElement;
          feedback.style.display = 'block';
          feedback.style.background = isCorrect ? 'rgba(0, 212, 170, 0.1)' : 'rgba(255, 107, 107, 0.1)';
          feedback.style.border = isCorrect ? '1px solid var(--green)' : '1px solid var(--red)';
          feedback.innerHTML = isCorrect
            ? '<strong>正确！ Correct!</strong>'
            : `<strong>错误。正确答案: ${(step.options || [])[step.correctIndex || 0]}</strong>`;

          setTimeout(() => {
            currentStep++;
            renderStep();
          }, 1800);
        });
      });
    } else {
      container.querySelector('#next-step')?.addEventListener('click', () => {
        currentStep++;
        renderStep();
      });
    }
  }

  // Show mission intro with mascot
  container.innerHTML = `
    ${renderHeader('每日任务 Daily Mission', true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot('dailyMission')}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${mission.title_zh}</div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">${mission.title_en}</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            ${mission.steps.length} 个步骤 · ${totalQuestions} 道测验题
            <br>${mission.steps.length} steps · ${totalQuestions} quiz questions
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-mission">开始任务 Start Mission</button>
      </div>
    </div>
  `;

  container.querySelector('#start-mission')?.addEventListener('click', () => {
    renderStep();
  });
}
