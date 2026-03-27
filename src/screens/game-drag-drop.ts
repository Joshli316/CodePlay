import { state } from '../state';
import { renderHeader } from '../components/header';
import { playSound } from '../components/audio';
import { renderResults } from './results';
import { shuffle, renderScoreBar, renderFeedback } from '../utils';

interface Puzzle {
  task_zh: string;
  task_en: string;
  steps: string[];
}

const PUZZLES: Puzzle[] = [
  {
    task_zh: '调试一个失败的测试',
    task_en: 'Debug a failing test',
    steps: ['读取错误信息 Read error', '分析原因 Analyze cause', '修复代码 Fix code', '运行测试 Run tests', '提交修复 Commit fix'],
  },
  {
    task_zh: '添加一个新功能',
    task_en: 'Add a new feature',
    steps: ['创建分支 Create branch', '编写代码 Write code', '添加测试 Add tests', '代码审查 Code review', '合并分支 Merge branch'],
  },
  {
    task_zh: '部署项目到生产环境',
    task_en: 'Deploy to production',
    steps: ['运行测试 Run tests', '构建项目 Build project', '检查配置 Check config', '部署上线 Deploy', '验证运行 Verify live'],
  },
  {
    task_zh: '修复一个紧急 Bug',
    task_en: 'Fix a critical bug',
    steps: ['复现问题 Reproduce bug', '定位代码 Locate code', '编写修复 Write fix', '测试修复 Test fix', '热修复部署 Hotfix deploy'],
  },
  {
    task_zh: '重构一段旧代码',
    task_en: 'Refactor legacy code',
    steps: ['理解现有逻辑 Understand logic', '编写测试 Write tests', '重构代码 Refactor', '运行测试 Run tests', '提交更改 Commit changes'],
  },
];

export function renderDragDrop(container: HTMLElement, worldId: number, levelIndex: number) {
  const TOTAL = 5;
  const puzzles = shuffle([...PUZZLES]).slice(0, TOTAL);

  let currentIndex = 0;
  let correctCount = 0;

  function renderPuzzle() {
    if (currentIndex >= puzzles.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: TOTAL,
        gameType: 'drag-drop',
      });
      return;
    }

    const puzzle = puzzles[currentIndex];
    const progress = currentIndex + 1;
    const shuffledSteps = shuffle([...puzzle.steps]);
    const placedSteps: (string | null)[] = new Array(puzzle.steps.length).fill(null);

    render();

    function render() {
      const availableSteps = shuffledSteps.filter(s => !placedSteps.includes(s));

      container.innerHTML = `
        ${renderHeader('流程排序 Drag & Drop', true)}
        <div class="game-screen">
          ${renderScoreBar(progress, TOTAL, correctCount)}
          <div class="game-question">
            ${puzzle.task_zh}
            <div class="game-question-sub">${puzzle.task_en}</div>
          </div>
          <div class="game-instruction">点击命令块放入下一个空槽 / Tap to place in next slot</div>
          <div class="game-body">
            <div class="workflow-slots" id="slots">
              ${placedSteps.map((step, i) => `
                <div class="workflow-slot">
                  <span class="slot-number">${i + 1}</span>
                  <div class="drop-zone ${step ? 'filled' : ''}" data-slot="${i}">
                    ${step || ''}
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="block-tray" id="tray">
              ${availableSteps.map(step => `
                <div class="prompt-block" data-step="${step}">${step}</div>
              `).join('')}
            </div>
          </div>
          <div class="game-footer" id="footer">
            <button class="btn btn-secondary btn-block" id="btn-reset">重置 Reset</button>
            <button class="btn btn-primary btn-block" id="btn-submit" ${availableSteps.length > 0 ? 'disabled' : ''}>检查 Check</button>
          </div>
          <div id="feedback" style="display:none;"></div>
        </div>
      `;

      // Tap block to place in next empty slot
      container.querySelectorAll('.prompt-block').forEach(block => {
        block.addEventListener('click', () => {
          const stepText = (block as HTMLElement).dataset.step || '';
          const nextEmpty = placedSteps.indexOf(null);
          if (nextEmpty !== -1) {
            placedSteps[nextEmpty] = stepText;
            playSound('keystroke');
            render();
          }
        });
      });

      // Tap filled slot to remove
      container.querySelectorAll('.drop-zone.filled').forEach(zone => {
        zone.addEventListener('click', () => {
          const slotIdx = parseInt((zone as HTMLElement).dataset.slot || '-1');
          if (slotIdx >= 0 && placedSteps[slotIdx]) {
            placedSteps[slotIdx] = null;
            playSound('keystroke');
            render();
          }
        });
      });

      // Reset
      container.querySelector('#btn-reset')?.addEventListener('click', () => {
        placedSteps.fill(null);
        render();
      });

      // Submit
      container.querySelector('#btn-submit')?.addEventListener('click', () => {
        const isCorrect = placedSteps.every((s, i) => s === puzzle.steps[i]);
        const feedback = container.querySelector('#feedback') as HTMLElement;
        feedback.style.display = 'block';

        if (isCorrect) {
          correctCount++;
          playSound('correct');
          feedback.innerHTML = renderFeedback(true, '<strong>正确！ Correct!</strong><br>完美的流程顺序！');
        } else {
          playSound('wrong');
          feedback.innerHTML = renderFeedback(false, `<strong>正确顺序 Correct order:</strong><br>${puzzle.steps.map((s, i) => `${i + 1}. ${s}`).join('<br>')}`);
        }

        // Replace footer with next button
        const footer = container.querySelector('#footer') as HTMLElement;
        footer.innerHTML = `<button class="btn btn-primary btn-block" id="next-btn">下一题 Next →</button>`;
        container.querySelector('#next-btn')?.addEventListener('click', () => {
          currentIndex++;
          renderPuzzle();
        });
      });
    }
  }

  renderPuzzle();
}
