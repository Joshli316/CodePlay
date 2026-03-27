export interface PromptExample {
  id: string;
  task_zh: string;
  badPrompt: string;
  goodPrompt: string;
  rating: {
    clarity: number;
    specificity: number;
    context: number;
    tone: number;
  };
  explanation_zh: string;
}

export const promptExamples: PromptExample[] = [
  {
    id: "pe1",
    task_zh: "给项目添加用户登录功能",
    badPrompt: "帮我加个登录",
    goodPrompt: "在 src/auth.ts 中添加一个 login 函数，接收 email 和 password 参数，使用 bcrypt 验证密码，返回 JWT token。参考项目中已有的 register 函数的风格。",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "好的提示词指定了文件位置、函数名、参数、技术实现方案，还提到了参考已有代码的风格。Claude Code 能精确执行。",
  },
  {
    id: "pe2",
    task_zh: "修复一个报错",
    badPrompt: "代码有 bug 帮我修",
    goodPrompt: "运行 npm test 时报错 TypeError: Cannot read property 'name' of undefined，出现在 src/utils.ts 第 42 行。请分析原因并修复。",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "把完整的报错信息、文件位置和行号都给了 Claude Code，它不需要猜测就能直接定位问题。",
  },
  {
    id: "pe3",
    task_zh: "重构一个复杂函数",
    badPrompt: "这个函数太乱了，改一下",
    goodPrompt: "重构 src/parser.ts 中的 parseConfig 函数。当前函数有 120 行，请拆分成更小的辅助函数，每个不超过 30 行。保持所有现有测试通过。",
    rating: { clarity: 5, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "明确了重构目标（拆分函数）、具体标准（每个不超过 30 行）和约束条件（测试要通过），Claude Code 有清晰的方向。",
  },
  {
    id: "pe4",
    task_zh: "为函数添加 TypeScript 类型",
    badPrompt: "加类型",
    goodPrompt: "给 src/api.ts 中所有导出函数添加 TypeScript 类型声明。参数和返回值都要有明确类型，不要用 any。参考项目的 tsconfig.json 中的 strict 配置。",
    rating: { clarity: 4, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "指定了范围（所有导出函数）、要求（不用 any）和参考文件（tsconfig.json），Claude Code 能按规范执行。",
  },
  {
    id: "pe5",
    task_zh: "创建一个新的 API 端点",
    badPrompt: "写个 API",
    goodPrompt: "在 src/routes/users.ts 中新增一个 GET /api/users/:id 端点。返回用户信息（name, email, createdAt），如果用户不存在返回 404。使用项目中已有的 db.query 方法查询数据库。",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "完美的提示词：指定了文件、路径、HTTP 方法、返回字段、错误处理和数据库方法。Claude Code 几乎不需要额外问你。",
  },
  {
    id: "pe6",
    task_zh: "优化页面加载速度",
    badPrompt: "网站太慢了",
    goodPrompt: "首页加载需要 5 秒，主要瓶颈是 src/components/Dashboard.tsx 中一次性加载了所有数据。请改为懒加载：先加载首屏数据，滚动时再加载更多。使用 Intersection Observer API。",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "提供了性能指标（5 秒）、问题定位（Dashboard.tsx）、解决方案（懒加载）和技术实现（Intersection Observer），非常清晰。",
  },
  {
    id: "pe7",
    task_zh: "写单元测试",
    badPrompt: "写测试",
    goodPrompt: "为 src/utils/formatDate.ts 中的 formatDate 函数写单元测试。覆盖以下场景：有效日期、无效输入（null, undefined, 空字符串）、不同时区。使用项目已有的 vitest 框架。",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "列出了具体的测试场景和边界条件，指定了测试框架。Claude Code 能写出全面的测试用例。",
  },
  {
    id: "pe8",
    task_zh: "添加暗色主题支持",
    badPrompt: "加个暗色模式",
    goodPrompt: "为应用添加暗色主题切换。在 src/styles/globals.css 中用 CSS 变量定义颜色，在 src/components/Header.tsx 添加切换按钮，用 localStorage 记住用户偏好。当前浅色主题色号：背景 #FFFFFF，文字 #1A1A1A。",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "指定了实现方案（CSS 变量）、修改文件、持久化方式（localStorage）和现有配色，Claude Code 有完整信息来实现。",
  },
  {
    id: "pe9",
    task_zh: "代码审查",
    badPrompt: "看看有没有问题",
    goodPrompt: "审查 src/services/payment.ts 中的 processPayment 函数。重点检查：1) 错误处理是否完善 2) 是否有安全漏洞 3) 是否正确处理了并发请求。",
    rating: { clarity: 5, specificity: 4, context: 3, tone: 5 },
    explanation_zh: "指定了审查文件和三个重点关注方向，Claude Code 可以有针对性地进行代码审查。",
  },
  {
    id: "pe10",
    task_zh: "配置 CI/CD 流水线",
    badPrompt: "帮我自动化部署",
    goodPrompt: "创建 .github/workflows/deploy.yml 配置 GitHub Actions：push 到 main 分支时自动运行 npm test，测试通过后用 wrangler 部署到 Cloudflare Pages。项目名是 my-app。",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "包含了文件路径、触发条件、步骤（测试→部署）、工具（wrangler）和项目名，Claude Code 能生成完整的 CI/CD 配置。",
  },
  {
    id: "pe11",
    task_zh: "解释一段代码",
    badPrompt: "这是什么",
    goodPrompt: "请逐行解释 src/middleware/auth.ts 中的 verifyToken 中间件函数。我是新手，请用简单的语言，并解释为什么每一步是必要的。",
    rating: { clarity: 5, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "说明了要解释的具体函数、解释方式（逐行）、你的水平（新手）和期望（简单语言），Claude Code 能给出合适的解释。",
  },
  {
    id: "pe12",
    task_zh: "迁移数据库",
    badPrompt: "换个数据库",
    goodPrompt: "把项目从 SQLite 迁移到 PostgreSQL。需要修改的文件：src/db/connection.ts（连接配置）、src/db/queries.ts（SQL 语法差异）。保持所有现有的 API 接口不变。",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "指定了迁移方向、需要修改的文件及原因、约束条件（API 不变）。Claude Code 可以系统性地完成迁移。",
  },
];
