export interface CommandItem {
  id: string;
  command: string;
  zhName: string;
  zhDescription: string;
  scenario: string;
  wrongChoices: string[];
  terminalResponse: string;
}

export const commands: CommandItem[] = [
  {
    id: "init",
    command: "/init",
    zhName: "初始化项目",
    zhDescription: "在当前目录生成 CLAUDE.md 配置文件，帮助 Claude Code 理解你的项目规范、技术栈和编码偏好。",
    scenario: "你刚开始一个新项目，想让 Claude Code 了解你的项目规范和编码习惯。你应该用哪个命令？",
    wrongChoices: ["/setup — 安装 Claude Code", "/config — 打开设置面板", "/new — 创建新项目"],
    terminalResponse: "✓ Created CLAUDE.md with project configuration.\n  Added: tech stack, coding conventions, deployment target.\n  Claude Code will read this file at the start of every session.",
  },
  {
    id: "help",
    command: "/help",
    zhName: "获取帮助",
    zhDescription: "显示所有可用的斜杠命令列表和使用说明。新手必备，忘了命令就用它。",
    scenario: "你刚装好 Claude Code，不知道有哪些命令可以用。你应该输入什么？",
    wrongChoices: ["/menu — 打开菜单", "/commands — 列出系统命令", "/guide — 打开新手教程"],
    terminalResponse: "Available commands:\n  /help      Show this help message\n  /init      Initialize project configuration\n  /clear     Clear conversation history\n  /compact   Condense conversation context\n  /model     Switch AI model\n  ... (10 more commands)",
  },
  {
    id: "clear",
    command: "/clear",
    zhName: "清除对话",
    zhDescription: "清除当前对话历史，重新开始。适合切换任务时使用，避免之前的上下文干扰新任务。",
    scenario: "你刚修完一个 bug，现在要开始一个完全不同的新功能。之前的对话可能会干扰 Claude 的理解。你该怎么办？",
    wrongChoices: ["/reset — 重置 Claude Code", "/new — 新建会话窗口", "/forget — 删除记忆"],
    terminalResponse: "✓ Conversation cleared.\n  Context reset. CLAUDE.md and project files will be re-read on next message.",
  },
  {
    id: "compact",
    command: "/compact",
    zhName: "压缩对话",
    zhDescription: "把长对话压缩成关键摘要，释放上下文窗口空间。对话太长时 Claude Code 会自动提醒你使用。",
    scenario: "你和 Claude Code 聊了很久，它提示上下文快满了。你想保留重要信息但释放空间。你该用哪个命令？",
    wrongChoices: ["/shrink — 缩小文件", "/summarize — 总结对话", "/trim — 裁剪历史"],
    terminalResponse: "✓ Conversation compacted.\n  Before: 95,000 tokens → After: 12,000 tokens\n  Key context preserved: current task, file changes, decisions made.",
  },
  {
    id: "rewind",
    command: "/rewind",
    zhName: "回退操作",
    zhDescription: "撤销 Claude Code 最近的修改，恢复到之前的状态。改坏了不怕，一键回退。",
    scenario: "Claude Code 刚刚重构了一个文件，但你发现改得不对，想恢复到修改之前的样子。你该怎么做？",
    wrongChoices: ["/undo — 撤销输入", "/rollback — 回滚版本", "/restore — 恢复备份"],
    terminalResponse: "✓ Rewound to before last assistant turn.\n  Restored 3 files to previous state.\n  You can now give new instructions.",
  },
  {
    id: "copy",
    command: "/copy",
    zhName: "复制回复",
    zhDescription: "把 Claude Code 最后一条回复复制到剪贴板。方便你把代码或解释粘贴到别处使用。",
    scenario: "Claude Code 生成了一段很好的代码解释，你想把它粘贴到项目文档里。最快的方式是？",
    wrongChoices: ["/export — 导出文件", "/save — 保存到文件", "/clipboard — 打开剪贴板"],
    terminalResponse: "✓ Last response copied to clipboard.\n  (1,247 characters)",
  },
  {
    id: "debug",
    command: "/debug",
    zhName: "调试模式",
    zhDescription: "显示 Claude Code 的内部调试信息，包括 API 请求、token 使用等技术细节。开发者排查问题时使用。",
    scenario: "Claude Code 的回复速度突然变慢，你想看看 API 请求的详细信息来排查原因。你该用什么命令？",
    wrongChoices: ["/logs — 查看日志", "/status — 检查状态", "/diagnose — 运行诊断"],
    terminalResponse: "Debug mode enabled.\n  API endpoint: api.anthropic.com\n  Model: claude-sonnet-4-20250514\n  Last request: 2,341 input tokens, 892 output tokens\n  Latency: 1.2s TTFT, 3.8s total",
  },
  {
    id: "usage",
    command: "/usage",
    zhName: "查看用量",
    zhDescription: "显示当前会话和账户的 token 使用量和费用统计。帮你了解花了多少钱。",
    scenario: "你用了一整天 Claude Code，想看看今天总共用了多少 token、花了多少钱。你该用什么命令？",
    wrongChoices: ["/billing — 查看账单", "/cost — 计算费用", "/stats — 查看统计"],
    terminalResponse: "Session usage:\n  Input tokens:  45,231\n  Output tokens: 12,847\n  Total cost:    $0.42\n\nDaily limit: 78% remaining",
  },
  {
    id: "review",
    command: "/review",
    zhName: "代码审查",
    zhDescription: "让 Claude Code 审查当前的代码改动，找出潜在问题并给出改进建议。相当于一个 AI code reviewer。",
    scenario: "你写完了一个新功能，想在提交 PR 之前让 Claude Code 帮你检查代码质量。你该用什么命令？",
    wrongChoices: ["/check — 运行检查", "/lint — 代码格式化", "/audit — 安全审计"],
    terminalResponse: "Reviewing staged changes...\n\n  ⚠ src/utils.ts:42 — Potential null reference\n  ⚠ src/api.ts:18 — Missing error handling for fetch\n  ✓ src/index.ts — Looks good\n\n  2 issues found. Want me to fix them?",
  },
  {
    id: "simplify",
    command: "/simplify",
    zhName: "简化回复",
    zhDescription: "让 Claude Code 用更简单的语言重新解释上一条回复。技术术语太多时用这个。",
    scenario: "Claude Code 给你解释了一个概念，但用了太多技术术语，你看不懂。你想让它说得简单点。你该怎么做？",
    wrongChoices: ["/explain — 详细解释", "/easy — 简单模式", "/translate — 翻译成中文"],
    terminalResponse: "Let me explain that more simply:\n\n  Think of an API like a waiter at a restaurant.\n  You (your code) tell the waiter (API) what you want,\n  and the waiter brings back the food (data) from the kitchen (server).",
  },
  {
    id: "model",
    command: "/model",
    zhName: "切换模型",
    zhDescription: "切换 Claude Code 使用的 AI 模型。Opus 最强但最贵，Sonnet 均衡，Haiku 最快最便宜。",
    scenario: "你在处理一个简单的格式化任务，不需要最强的模型。你想切换到更快、更便宜的模型。你该用什么？",
    wrongChoices: ["/engine — 切换引擎", "/switch — 切换版本", "/upgrade — 升级模型"],
    terminalResponse: "Current model: claude-sonnet-4-20250514\n\n  Available models:\n  › claude-opus-4-20250514    (most capable)\n  › claude-sonnet-4-20250514  (balanced) ✓\n  › claude-haiku-3-20250514   (fastest)\n\n  Select a model:",
  },
];
