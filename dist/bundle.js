var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/data/commands.ts
var commands_exports = {};
__export(commands_exports, {
  commands: () => commands
});
var commands;
var init_commands = __esm({
  "src/data/commands.ts"() {
    "use strict";
    commands = [
      {
        id: "init",
        command: "/init",
        zhName: "\u521D\u59CB\u5316\u9879\u76EE",
        zhDescription: "\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210 CLAUDE.md \u914D\u7F6E\u6587\u4EF6\uFF0C\u5E2E\u52A9 Claude Code \u7406\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u3001\u6280\u672F\u6808\u548C\u7F16\u7801\u504F\u597D\u3002",
        scenario: "\u4F60\u521A\u5F00\u59CB\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u60F3\u8BA9 Claude Code \u4E86\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u548C\u7F16\u7801\u4E60\u60EF\u3002\u4F60\u5E94\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",
        wrongChoices: ["/setup \u2014 \u5B89\u88C5 Claude Code", "/config \u2014 \u6253\u5F00\u8BBE\u7F6E\u9762\u677F", "/new \u2014 \u521B\u5EFA\u65B0\u9879\u76EE"],
        terminalResponse: "\u2713 Created CLAUDE.md with project configuration.\n  Added: tech stack, coding conventions, deployment target.\n  Claude Code will read this file at the start of every session."
      },
      {
        id: "help",
        command: "/help",
        zhName: "\u83B7\u53D6\u5E2E\u52A9",
        zhDescription: "\u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u548C\u4F7F\u7528\u8BF4\u660E\u3002\u65B0\u624B\u5FC5\u5907\uFF0C\u5FD8\u4E86\u547D\u4EE4\u5C31\u7528\u5B83\u3002",
        scenario: "\u4F60\u521A\u88C5\u597D Claude Code\uFF0C\u4E0D\u77E5\u9053\u6709\u54EA\u4E9B\u547D\u4EE4\u53EF\u4EE5\u7528\u3002\u4F60\u5E94\u8BE5\u8F93\u5165\u4EC0\u4E48\uFF1F",
        wrongChoices: ["/menu \u2014 \u6253\u5F00\u83DC\u5355", "/commands \u2014 \u5217\u51FA\u7CFB\u7EDF\u547D\u4EE4", "/guide \u2014 \u6253\u5F00\u65B0\u624B\u6559\u7A0B"],
        terminalResponse: "Available commands:\n  /help      Show this help message\n  /init      Initialize project configuration\n  /clear     Clear conversation history\n  /compact   Condense conversation context\n  /model     Switch AI model\n  ... (10 more commands)"
      },
      {
        id: "clear",
        command: "/clear",
        zhName: "\u6E05\u9664\u5BF9\u8BDD",
        zhDescription: "\u6E05\u9664\u5F53\u524D\u5BF9\u8BDD\u5386\u53F2\uFF0C\u91CD\u65B0\u5F00\u59CB\u3002\u9002\u5408\u5207\u6362\u4EFB\u52A1\u65F6\u4F7F\u7528\uFF0C\u907F\u514D\u4E4B\u524D\u7684\u4E0A\u4E0B\u6587\u5E72\u6270\u65B0\u4EFB\u52A1\u3002",
        scenario: "\u4F60\u521A\u4FEE\u5B8C\u4E00\u4E2A bug\uFF0C\u73B0\u5728\u8981\u5F00\u59CB\u4E00\u4E2A\u5B8C\u5168\u4E0D\u540C\u7684\u65B0\u529F\u80FD\u3002\u4E4B\u524D\u7684\u5BF9\u8BDD\u53EF\u80FD\u4F1A\u5E72\u6270 Claude \u7684\u7406\u89E3\u3002\u4F60\u8BE5\u600E\u4E48\u529E\uFF1F",
        wrongChoices: ["/reset \u2014 \u91CD\u7F6E Claude Code", "/new \u2014 \u65B0\u5EFA\u4F1A\u8BDD\u7A97\u53E3", "/forget \u2014 \u5220\u9664\u8BB0\u5FC6"],
        terminalResponse: "\u2713 Conversation cleared.\n  Context reset. CLAUDE.md and project files will be re-read on next message."
      },
      {
        id: "compact",
        command: "/compact",
        zhName: "\u538B\u7F29\u5BF9\u8BDD",
        zhDescription: "\u628A\u957F\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u4E0A\u4E0B\u6587\u7A97\u53E3\u7A7A\u95F4\u3002\u5BF9\u8BDD\u592A\u957F\u65F6 Claude Code \u4F1A\u81EA\u52A8\u63D0\u9192\u4F60\u4F7F\u7528\u3002",
        scenario: "\u4F60\u548C Claude Code \u804A\u4E86\u5F88\u4E45\uFF0C\u5B83\u63D0\u793A\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u4E86\u3002\u4F60\u60F3\u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u4F46\u91CA\u653E\u7A7A\u95F4\u3002\u4F60\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",
        wrongChoices: ["/shrink \u2014 \u7F29\u5C0F\u6587\u4EF6", "/summarize \u2014 \u603B\u7ED3\u5BF9\u8BDD", "/trim \u2014 \u88C1\u526A\u5386\u53F2"],
        terminalResponse: "\u2713 Conversation compacted.\n  Before: 95,000 tokens \u2192 After: 12,000 tokens\n  Key context preserved: current task, file changes, decisions made."
      },
      {
        id: "rewind",
        command: "/rewind",
        zhName: "\u56DE\u9000\u64CD\u4F5C",
        zhDescription: "\u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002\u6539\u574F\u4E86\u4E0D\u6015\uFF0C\u4E00\u952E\u56DE\u9000\u3002",
        scenario: "Claude Code \u521A\u521A\u91CD\u6784\u4E86\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F46\u4F60\u53D1\u73B0\u6539\u5F97\u4E0D\u5BF9\uFF0C\u60F3\u6062\u590D\u5230\u4FEE\u6539\u4E4B\u524D\u7684\u6837\u5B50\u3002\u4F60\u8BE5\u600E\u4E48\u505A\uFF1F",
        wrongChoices: ["/undo \u2014 \u64A4\u9500\u8F93\u5165", "/rollback \u2014 \u56DE\u6EDA\u7248\u672C", "/restore \u2014 \u6062\u590D\u5907\u4EFD"],
        terminalResponse: "\u2713 Rewound to before last assistant turn.\n  Restored 3 files to previous state.\n  You can now give new instructions."
      },
      {
        id: "copy",
        command: "/copy",
        zhName: "\u590D\u5236\u56DE\u590D",
        zhDescription: "\u628A Claude Code \u6700\u540E\u4E00\u6761\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\u3002\u65B9\u4FBF\u4F60\u628A\u4EE3\u7801\u6216\u89E3\u91CA\u7C98\u8D34\u5230\u522B\u5904\u4F7F\u7528\u3002",
        scenario: "Claude Code \u751F\u6210\u4E86\u4E00\u6BB5\u5F88\u597D\u7684\u4EE3\u7801\u89E3\u91CA\uFF0C\u4F60\u60F3\u628A\u5B83\u7C98\u8D34\u5230\u9879\u76EE\u6587\u6863\u91CC\u3002\u6700\u5FEB\u7684\u65B9\u5F0F\u662F\uFF1F",
        wrongChoices: ["/export \u2014 \u5BFC\u51FA\u6587\u4EF6", "/save \u2014 \u4FDD\u5B58\u5230\u6587\u4EF6", "/clipboard \u2014 \u6253\u5F00\u526A\u8D34\u677F"],
        terminalResponse: "\u2713 Last response copied to clipboard.\n  (1,247 characters)"
      },
      {
        id: "debug",
        command: "/debug",
        zhName: "\u8C03\u8BD5\u6A21\u5F0F",
        zhDescription: "\u663E\u793A Claude Code \u7684\u5185\u90E8\u8C03\u8BD5\u4FE1\u606F\uFF0C\u5305\u62EC API \u8BF7\u6C42\u3001token \u4F7F\u7528\u7B49\u6280\u672F\u7EC6\u8282\u3002\u5F00\u53D1\u8005\u6392\u67E5\u95EE\u9898\u65F6\u4F7F\u7528\u3002",
        scenario: "Claude Code \u7684\u56DE\u590D\u901F\u5EA6\u7A81\u7136\u53D8\u6162\uFF0C\u4F60\u60F3\u770B\u770B API \u8BF7\u6C42\u7684\u8BE6\u7EC6\u4FE1\u606F\u6765\u6392\u67E5\u539F\u56E0\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
        wrongChoices: ["/logs \u2014 \u67E5\u770B\u65E5\u5FD7", "/status \u2014 \u68C0\u67E5\u72B6\u6001", "/diagnose \u2014 \u8FD0\u884C\u8BCA\u65AD"],
        terminalResponse: "Debug mode enabled.\n  API endpoint: api.anthropic.com\n  Model: claude-sonnet-4-20250514\n  Last request: 2,341 input tokens, 892 output tokens\n  Latency: 1.2s TTFT, 3.8s total"
      },
      {
        id: "usage",
        command: "/usage",
        zhName: "\u67E5\u770B\u7528\u91CF",
        zhDescription: "\u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u548C\u8D26\u6237\u7684 token \u4F7F\u7528\u91CF\u548C\u8D39\u7528\u7EDF\u8BA1\u3002\u5E2E\u4F60\u4E86\u89E3\u82B1\u4E86\u591A\u5C11\u94B1\u3002",
        scenario: "\u4F60\u7528\u4E86\u4E00\u6574\u5929 Claude Code\uFF0C\u60F3\u770B\u770B\u4ECA\u5929\u603B\u5171\u7528\u4E86\u591A\u5C11 token\u3001\u82B1\u4E86\u591A\u5C11\u94B1\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
        wrongChoices: ["/billing \u2014 \u67E5\u770B\u8D26\u5355", "/cost \u2014 \u8BA1\u7B97\u8D39\u7528", "/stats \u2014 \u67E5\u770B\u7EDF\u8BA1"],
        terminalResponse: "Session usage:\n  Input tokens:  45,231\n  Output tokens: 12,847\n  Total cost:    $0.42\n\nDaily limit: 78% remaining"
      },
      {
        id: "review",
        command: "/review",
        zhName: "\u4EE3\u7801\u5BA1\u67E5",
        zhDescription: "\u8BA9 Claude Code \u5BA1\u67E5\u5F53\u524D\u7684\u4EE3\u7801\u6539\u52A8\uFF0C\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u5E76\u7ED9\u51FA\u6539\u8FDB\u5EFA\u8BAE\u3002\u76F8\u5F53\u4E8E\u4E00\u4E2A AI code reviewer\u3002",
        scenario: "\u4F60\u5199\u5B8C\u4E86\u4E00\u4E2A\u65B0\u529F\u80FD\uFF0C\u60F3\u5728\u63D0\u4EA4 PR \u4E4B\u524D\u8BA9 Claude Code \u5E2E\u4F60\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
        wrongChoices: ["/check \u2014 \u8FD0\u884C\u68C0\u67E5", "/lint \u2014 \u4EE3\u7801\u683C\u5F0F\u5316", "/audit \u2014 \u5B89\u5168\u5BA1\u8BA1"],
        terminalResponse: "Reviewing staged changes...\n\n  \u26A0 src/utils.ts:42 \u2014 Potential null reference\n  \u26A0 src/api.ts:18 \u2014 Missing error handling for fetch\n  \u2713 src/index.ts \u2014 Looks good\n\n  2 issues found. Want me to fix them?"
      },
      {
        id: "simplify",
        command: "/simplify",
        zhName: "\u7B80\u5316\u56DE\u590D",
        zhDescription: "\u8BA9 Claude Code \u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u4E0A\u4E00\u6761\u56DE\u590D\u3002\u6280\u672F\u672F\u8BED\u592A\u591A\u65F6\u7528\u8FD9\u4E2A\u3002",
        scenario: "Claude Code \u7ED9\u4F60\u89E3\u91CA\u4E86\u4E00\u4E2A\u6982\u5FF5\uFF0C\u4F46\u7528\u4E86\u592A\u591A\u6280\u672F\u672F\u8BED\uFF0C\u4F60\u770B\u4E0D\u61C2\u3002\u4F60\u60F3\u8BA9\u5B83\u8BF4\u5F97\u7B80\u5355\u70B9\u3002\u4F60\u8BE5\u600E\u4E48\u505A\uFF1F",
        wrongChoices: ["/explain \u2014 \u8BE6\u7EC6\u89E3\u91CA", "/easy \u2014 \u7B80\u5355\u6A21\u5F0F", "/translate \u2014 \u7FFB\u8BD1\u6210\u4E2D\u6587"],
        terminalResponse: "Let me explain that more simply:\n\n  Think of an API like a waiter at a restaurant.\n  You (your code) tell the waiter (API) what you want,\n  and the waiter brings back the food (data) from the kitchen (server)."
      },
      {
        id: "model",
        command: "/model",
        zhName: "\u5207\u6362\u6A21\u578B",
        zhDescription: "\u5207\u6362 Claude Code \u4F7F\u7528\u7684 AI \u6A21\u578B\u3002Opus \u6700\u5F3A\u4F46\u6700\u8D35\uFF0CSonnet \u5747\u8861\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\u3002",
        scenario: "\u4F60\u5728\u5904\u7406\u4E00\u4E2A\u7B80\u5355\u7684\u683C\u5F0F\u5316\u4EFB\u52A1\uFF0C\u4E0D\u9700\u8981\u6700\u5F3A\u7684\u6A21\u578B\u3002\u4F60\u60F3\u5207\u6362\u5230\u66F4\u5FEB\u3001\u66F4\u4FBF\u5B9C\u7684\u6A21\u578B\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\uFF1F",
        wrongChoices: ["/engine \u2014 \u5207\u6362\u5F15\u64CE", "/switch \u2014 \u5207\u6362\u7248\u672C", "/upgrade \u2014 \u5347\u7EA7\u6A21\u578B"],
        terminalResponse: "Current model: claude-sonnet-4-20250514\n\n  Available models:\n  \u203A claude-opus-4-20250514    (most capable)\n  \u203A claude-sonnet-4-20250514  (balanced) \u2713\n  \u203A claude-haiku-3-20250514   (fastest)\n\n  Select a model:"
      }
    ];
  }
});

// src/router.ts
var Router = class {
  constructor() {
    this.routes = [];
    this.currentCleanup = null;
  }
  addRoute(path, handler) {
    const paramNames = [];
    const pattern = path.replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return "([^/]+)";
    });
    this.routes.push({
      pattern: new RegExp(`^#${pattern}$`),
      paramNames,
      handler
    });
  }
  navigate(path) {
    window.location.hash = path;
  }
  start() {
    const handleRoute = () => {
      if (this.currentCleanup) {
        this.currentCleanup();
        this.currentCleanup = null;
      }
      const hash = window.location.hash || "#/";
      for (const route of this.routes) {
        const match = hash.match(route.pattern);
        if (match) {
          const params = {};
          route.paramNames.forEach((name, i) => {
            params[name] = match[i + 1];
          });
          route.handler(params);
          return;
        }
      }
      this.navigate("/");
    };
    window.addEventListener("hashchange", handleRoute);
    handleRoute();
  }
  setCleanup(fn) {
    this.currentCleanup = fn;
  }
};
var router = new Router();

// src/state.ts
var DEFAULT_STATE = {
  placementCompleted: false,
  placementScore: 0,
  worlds: {
    1: { levelsCompleted: [], scores: {}, stars: {} },
    2: { levelsCompleted: [], scores: {}, stars: {} },
    3: { levelsCompleted: [], scores: {}, stars: {} },
    4: { levelsCompleted: [], scores: {}, stars: {} }
  },
  streak: { current: 0, longest: 0, lastLogin: "" },
  badges: [],
  reviewQueue: [],
  totalScore: 0,
  dailyMissionIndex: 0,
  dailyMissionDate: ""
};
var STORAGE_KEY = "cq_state";
var StateManager = class {
  constructor() {
    this.state = this.load();
  }
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        return { ...DEFAULT_STATE, ...saved };
      }
    } catch (e) {
      console.warn("Failed to load state:", e);
    }
    return { ...DEFAULT_STATE, worlds: { ...DEFAULT_STATE.worlds } };
  }
  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }
  get() {
    return this.state;
  }
  isPlacementDone() {
    return this.state.placementCompleted;
  }
  completePlacement(score) {
    this.state.placementCompleted = true;
    this.state.placementScore = score;
    if (score >= 4 && score <= 6) {
      this.state.worlds[1].levelsCompleted = [0, 1];
      this.state.worlds[1].scores = { 0: 80, 1: 80 };
      this.state.worlds[1].stars = { 0: 2, 1: 2 };
    } else if (score >= 7) {
      this.state.worlds[1].levelsCompleted = [0, 1, 2, 3];
      this.state.worlds[1].scores = { 0: 90, 1: 90, 2: 90, 3: 90 };
      this.state.worlds[1].stars = { 0: 3, 1: 3, 2: 3, 3: 3 };
    }
    this.save();
  }
  isWorldUnlocked(worldId) {
    if (worldId === 1)
      return true;
    const prevWorld = this.state.worlds[worldId - 1];
    if (!prevWorld)
      return false;
    const totalLevels = this.getWorldLevelCount(worldId - 1);
    return prevWorld.levelsCompleted.length >= totalLevels;
  }
  getWorldLevelCount(worldId) {
    const counts = { 1: 4, 2: 6, 3: 6, 4: 6 };
    return counts[worldId] || 4;
  }
  isLevelUnlocked(worldId, levelIndex) {
    if (levelIndex === 0)
      return this.isWorldUnlocked(worldId);
    const world = this.state.worlds[worldId];
    return world?.levelsCompleted.includes(levelIndex - 1) || false;
  }
  completeLevel(worldId, levelIndex, score) {
    const world = this.state.worlds[worldId];
    if (!world)
      return;
    if (!world.levelsCompleted.includes(levelIndex)) {
      world.levelsCompleted.push(levelIndex);
    }
    const prev = world.scores[levelIndex] || 0;
    world.scores[levelIndex] = Math.max(prev, score);
    const stars = score >= 100 ? 3 : score >= 70 ? 2 : score >= 40 ? 1 : 0;
    const prevStars = world.stars[levelIndex] || 0;
    world.stars[levelIndex] = Math.max(prevStars, stars);
    this.state.totalScore += score;
    this.save();
  }
  updateStreak() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const last = this.state.streak.lastLogin;
    if (last === today)
      return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().split("T")[0];
    if (last === yesterday) {
      this.state.streak.current++;
    } else if (last !== today) {
      this.state.streak.current = 1;
    }
    this.state.streak.longest = Math.max(this.state.streak.longest, this.state.streak.current);
    this.state.streak.lastLogin = today;
    this.save();
  }
  getStreak() {
    return this.state.streak;
  }
  addBadge(badgeId) {
    if (this.state.badges.includes(badgeId))
      return false;
    this.state.badges.push(badgeId);
    this.save();
    return true;
  }
  hasBadge(badgeId) {
    return this.state.badges.includes(badgeId);
  }
  addToReviewQueue(item) {
    const existing = this.state.reviewQueue.find((r) => r.id === item.id);
    if (existing) {
      existing.wrongCount++;
      existing.lastSeen = Date.now();
    } else {
      this.state.reviewQueue.push({
        ...item,
        lastSeen: Date.now(),
        wrongCount: 1,
        correctCount: 0
      });
    }
    this.save();
  }
  markReviewCorrect(id) {
    const item = this.state.reviewQueue.find((r) => r.id === id);
    if (item) {
      item.correctCount++;
      item.lastSeen = Date.now();
      if (item.correctCount >= 3) {
        this.state.reviewQueue = this.state.reviewQueue.filter((r) => r.id !== id);
      }
    }
    this.save();
  }
  getDueReviewItems(limit = 10) {
    const threeDaysAgo = Date.now() - 3 * 864e5;
    return this.state.reviewQueue.filter((item) => item.lastSeen < threeDaysAgo || item.wrongCount > item.correctCount).slice(0, limit);
  }
  getWorldCompletion(worldId) {
    const world = this.state.worlds[worldId];
    if (!world)
      return 0;
    const total = this.getWorldLevelCount(worldId);
    return Math.round(world.levelsCompleted.length / total * 100);
  }
  getTotalLevelsCompleted() {
    return Object.values(this.state.worlds).reduce((sum, w) => sum + w.levelsCompleted.length, 0);
  }
  getDailyMissionIndex() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (this.state.dailyMissionDate !== today) {
      this.state.dailyMissionIndex = (this.state.dailyMissionIndex + 1) % 30;
      this.state.dailyMissionDate = today;
      this.save();
    }
    return this.state.dailyMissionIndex;
  }
  resetProgress() {
    this.state = { ...DEFAULT_STATE, worlds: {
      1: { levelsCompleted: [], scores: {}, stars: {} },
      2: { levelsCompleted: [], scores: {}, stars: {} },
      3: { levelsCompleted: [], scores: {}, stars: {} },
      4: { levelsCompleted: [], scores: {}, stars: {} }
    } };
    this.save();
  }
};
var state = new StateManager();

// src/data/mascot-dialogue.ts
var mascotDialogue = {
  firstLogin: "\u6B22\u8FCE\u6765\u5230\u7801\u9014\uFF01\u6211\u662F\u7801\u5C0F\u7801\uFF0C\u4F60\u7684AI\u5B66\u4E60\u4F19\u4F34\u3002",
  wrongAnswer: "\u6CA1\u5173\u7CFB\uFF0C\u518D\u8BD5\u4E00\u6B21\uFF01\u8FD9\u4E2A\u8BCD\u5F88\u591A\u4EBA\u90FD\u4F1A\u641E\u6DF7\u3002",
  correctAnswer: "\u592A\u68D2\u4E86\uFF01\u4F60\u8D8A\u6765\u8D8A\u5389\u5BB3\u4E86\uFF01",
  streak7: "\u8FDE\u7EED7\u5929\uFF01\u4F60\u6BD490%\u7684\u5B66\u4E60\u8005\u90FD\u5389\u5BB3\uFF01",
  streak21: "21\u5929\uFF01\u4F60\u7684\u575A\u6301\u8BA9\u6211\u611F\u52A8\uFF01",
  worldComplete: [
    "\u7EC8\u7AEF\u4E4B\u95E8\u5DF2\u7ECF\u6253\u5F00\u4E86\uFF01\u63A5\u4E0B\u6765\u6211\u4EEC\u53BB\u547D\u4EE4\u738B\u56FD\u3002",
    "\u547D\u4EE4\u738B\u56FD\u5DF2\u7ECF\u5F81\u670D\uFF01\u63D0\u793A\u5BAB\u6BBF\u5728\u7B49\u4F60\u3002",
    "\u63D0\u793A\u5BAB\u6BBF\u901A\u5173\uFF01\u6700\u540E\u7684\u64C2\u53F0\u51C6\u5907\u597D\u4E86\u5417\uFF1F",
    "\u606D\u559C\u4F60\u901A\u5173\u4E86\u7801\u9014\uFF01\u4F60\u5DF2\u7ECF\u51C6\u5907\u597D\u4E86\uFF01"
  ],
  perfectScore: "\u6EE1\u5206\uFF01\u4F60\u662F\u5929\u624D\u5417\uFF1F\u{1F389}",
  retry: "\u5931\u8D25\u662F\u6210\u529F\u4E4B\u6BCD\u3002\u518D\u6765\u4E00\u6B21\uFF01",
  bossStart: "\u6DF1\u547C\u5438\u3002\u4F60\u5DF2\u7ECF\u5B66\u4E86\u8FD9\u4E48\u591A\uFF0C\u9762\u8BD5\u5B98\u5E94\u8BE5\u7D27\u5F20\u624D\u5BF9\u3002",
  certificate: "\u6BD5\u4E1A\u5FEB\u4E50\uFF01\u53BB\u5F81\u670D\u4E16\u754C\u5427\uFF01"
};

// src/components/mascot.ts
function renderMascot(trigger, expressionOverride) {
  let dialogue = "";
  const expression = expressionOverride || "neutral";
  const entry = mascotDialogue[trigger];
  if (entry) {
    if (typeof entry === "string") {
      dialogue = entry;
    } else if (Array.isArray(entry)) {
      dialogue = entry[0];
    }
  }
  if (!dialogue) {
    dialogue = "\u4F60\u597D\uFF01\u6211\u662F\u7801\u5C0F\u7801\uFF0C\u4F60\u7684\u7F16\u7A0B\u5C0F\u4F19\u4F34\uFF01";
  }
  return `
    <div class="mascot-container">
      <div class="mascot-avatar" style="font-size:var(--text-3xl);">\u{1F916}</div>
      <div class="mascot-bubble">${dialogue}</div>
    </div>
  `;
}

// src/screens/home.ts
var WORLDS = [
  { id: 1, zh: "\u7EC8\u7AEF\u4E4B\u95E8", en: "The Terminal Gate", icon: "\u{1F6AA}", color: "#00d4aa" },
  { id: 2, zh: "\u547D\u4EE4\u738B\u56FD", en: "Command Kingdom", icon: "\u2694\uFE0F", color: "#ffc857" },
  { id: 3, zh: "\u63D0\u793A\u5BAB\u6BBF", en: "Prompt Palace", icon: "\u{1F3F0}", color: "#ff6b6b" },
  { id: 4, zh: "\u667A\u80FD\u4F53\u64C2\u53F0", en: "Agent Arena", icon: "\u{1F916}", color: "#a78bfa" }
];
function renderHome(container) {
  const streak = state.getStreak();
  const reviewCount = state.getDueReviewItems().length;
  let mascotTrigger = "firstLogin";
  if (streak.current >= 21)
    mascotTrigger = "streak21";
  else if (streak.current >= 7)
    mascotTrigger = "streak7";
  else if (state.getTotalLevelsCompleted() > 0)
    mascotTrigger = "correctAnswer";
  container.innerHTML = `
    <div class="screen" style="padding-top:var(--space-lg);">
      <!-- Header area -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md);">
        <div>
          <h1 style="font-size:var(--text-2xl);font-weight:700;">\u7801\u9014</h1>
          <p style="font-size:var(--text-sm);color:var(--text-secondary);">CodeQuest</p>
        </div>
        <div style="display:flex;gap:var(--space-md);align-items:center;">
          <button class="btn btn-secondary" id="btn-glossary" style="font-size:var(--text-sm);padding:var(--space-xs) var(--space-md);">\u{1F4D6} \u8BCD\u5178</button>
          <button class="btn btn-secondary" id="btn-profile" style="font-size:var(--text-sm);padding:var(--space-xs) var(--space-md);">\u{1F464}</button>
        </div>
      </div>

      <!-- Streak -->
      <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-lg);padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);">
        <span style="font-size:var(--text-2xl);">\u{1F525}</span>
        <div>
          <div style="font-weight:700;color:var(--gold);font-size:var(--text-lg);">${streak.current} \u5929\u8FDE\u7EED</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">\u6700\u957F\u8BB0\u5F55: ${streak.longest} \u5929</div>
        </div>
      </div>

      <!-- Mascot -->
      ${renderMascot(mascotTrigger)}

      <!-- Review Queue -->
      ${reviewCount > 0 ? `
        <button class="btn btn-gold btn-block" id="btn-review" style="margin:var(--space-md) 0;animation:pulse 2s infinite;">
          \u590D\u4E60 \xB7 ${reviewCount}\u4E2A\u8BCD Review Queue
        </button>
      ` : ""}

      <!-- World Map -->
      <div style="display:flex;flex-direction:column;gap:var(--space-md);margin-top:var(--space-lg);position:relative;">
        <div style="position:absolute;left:28px;top:40px;bottom:40px;width:3px;background:var(--bg-card);border-radius:2px;"></div>
        ${WORLDS.map((w) => {
    const unlocked = state.isWorldUnlocked(w.id);
    const completion = state.getWorldCompletion(w.id);
    return `
            <div class="card ${unlocked ? "" : "locked"}" data-world="${w.id}"
                 style="display:flex;align-items:center;gap:var(--space-md);position:relative;z-index:1;${!unlocked ? "opacity:0.4;" : ""}cursor:${unlocked ? "pointer" : "default"};">
              <div style="width:56px;height:56px;border-radius:var(--radius-full);background:${unlocked ? w.color : "var(--bg-secondary)"};display:flex;align-items:center;justify-content:center;font-size:var(--text-2xl);flex-shrink:0;">
                ${unlocked ? w.icon : "\u{1F512}"}
              </div>
              <div style="flex:1;">
                <div style="font-weight:600;">${w.zh}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);">${w.en}</div>
                ${unlocked ? `
                  <div class="progress-bar" style="margin-top:var(--space-xs);">
                    <div class="progress-bar-fill" style="width:${completion}%"></div>
                  </div>
                  <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:2px;">${completion}%</div>
                ` : '<div style="font-size:var(--text-xs);color:var(--text-muted);">\u5B8C\u6210\u4E0A\u4E00\u4E2A\u4E16\u754C\u89E3\u9501</div>'}
              </div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `;
  container.querySelectorAll("[data-world]").forEach((el) => {
    el.addEventListener("click", () => {
      const wid = el.getAttribute("data-world");
      if (wid && state.isWorldUnlocked(parseInt(wid))) {
        router.navigate(`/world/${wid}`);
      }
    });
  });
  container.querySelector("#btn-glossary")?.addEventListener("click", () => router.navigate("/glossary"));
  container.querySelector("#btn-profile")?.addEventListener("click", () => router.navigate("/profile"));
  container.querySelector("#btn-review")?.addEventListener("click", () => router.navigate("/review"));
}

// src/components/header.ts
function renderHeader(title, showBack) {
  const streak = state.getStreak();
  const backBtn = showBack ? `<button class="header-back" onclick="window.location.hash='/'">\u2190</button>` : "";
  return `
    <div class="header">
      ${backBtn}
      <div class="header-title">${title}</div>
      <div class="header-streak">
        <span>\u{1F525}</span>
        <span>${streak.current}</span>
      </div>
    </div>
  `;
}

// src/components/progress-bar.ts
function renderProgressBar(percent, variant) {
  const clamped = Math.max(0, Math.min(100, percent));
  const goldClass = variant === "gold" ? " progress-bar-gold" : "";
  return `
    <div class="progress-bar${goldClass}">
      <div class="progress-bar-fill" style="width: ${clamped}%"></div>
    </div>
  `;
}

// src/screens/world.ts
var WORLD_LEVELS = {
  1: [
    { title_zh: "\u57FA\u7840\u8BCD\u6C47 A", title_en: "Basic Vocab A", gameType: "flash-match", icon: "\u{1F0CF}" },
    { title_zh: "\u57FA\u7840\u8BCD\u6C47 B", title_en: "Basic Vocab B", gameType: "flash-match", icon: "\u{1F0CF}" },
    { title_zh: "\u7EC8\u7AEF\u77E5\u8BC6\u6D4B\u9A8C", title_en: "Terminal Quiz", gameType: "trivia", icon: "\u2753" },
    { title_zh: "\u7EFC\u5408\u6D4B\u9A8C", title_en: "Comprehensive Quiz", gameType: "trivia", icon: "\u{1F3C6}" }
  ],
  2: [
    { title_zh: "\u547D\u4EE4\u731C\u731C\u770B A", title_en: "Command Charades A", gameType: "charades", icon: "\u{1F3AD}" },
    { title_zh: "\u547D\u4EE4\u731C\u731C\u770B B", title_en: "Command Charades B", gameType: "charades", icon: "\u{1F3AD}" },
    { title_zh: "\u5DE5\u4F5C\u6D41\u6392\u5E8F", title_en: "Workflow Builder", gameType: "drag-drop", icon: "\u{1F500}" },
    { title_zh: "\u8BB0\u5FC6\u914D\u5BF9 A", title_en: "Memory Match A", gameType: "memory-match", icon: "\u{1F9E0}" },
    { title_zh: "\u8BB0\u5FC6\u914D\u5BF9 B", title_en: "Memory Match B", gameType: "memory-match", icon: "\u{1F9E0}" },
    { title_zh: "\u547D\u4EE4\u5927\u5E08\u6D4B\u9A8C", title_en: "Command Master Quiz", gameType: "trivia", icon: "\u{1F451}" }
  ],
  3: [
    { title_zh: "\u63D0\u793A\u8BCD\u7EC4\u88C5 A", title_en: "Prompt Builder A", gameType: "prompt-builder", icon: "\u{1F9E9}" },
    { title_zh: "\u63D0\u793A\u8BCD\u7EC4\u88C5 B", title_en: "Prompt Builder B", gameType: "prompt-builder", icon: "\u{1F9E9}" },
    { title_zh: "\u63D0\u793A\u8BCD\u4FEE\u590D", title_en: "Prompt Repair", gameType: "prompt-repair", icon: "\u{1F527}" },
    { title_zh: "\u63D0\u793A\u8BCD\u5BF9\u51B3 A", title_en: "Prompt Duel A", gameType: "prompt-duel", icon: "\u2694\uFE0F" },
    { title_zh: "\u63D0\u793A\u8BCD\u5BF9\u51B3 B", title_en: "Prompt Duel B", gameType: "prompt-duel", icon: "\u2694\uFE0F" },
    { title_zh: "\u63D0\u793A\u8BCD\u5927\u5E08", title_en: "Prompt Master", gameType: "prompt-builder", icon: "\u2728" }
  ],
  4: [
    { title_zh: "Boss\u6311\u6218 A", title_en: "Boss Battle A", gameType: "boss-battle", icon: "\u{1F409}" },
    { title_zh: "Boss\u6311\u6218 B", title_en: "Boss Battle B", gameType: "boss-battle", icon: "\u{1F409}" },
    { title_zh: "\u6BCF\u65E5\u4EFB\u52A1", title_en: "Daily Mission", gameType: "daily-mission", icon: "\u{1F4CB}" },
    { title_zh: "\u597D\u53CB\u6311\u6218", title_en: "Peer Challenge", gameType: "peer-challenge", icon: "\u{1F91D}" },
    { title_zh: "\u7EC8\u6781Boss", title_en: "Final Boss", gameType: "boss-battle", icon: "\u{1F479}" },
    { title_zh: "\u6BD5\u4E1A\u8BC1\u4E66", title_en: "Certificate", gameType: "boss-battle", icon: "\u{1F393}" }
  ]
};
var WORLD_NAMES = {
  1: { zh: "\u7EC8\u7AEF\u4E4B\u95E8", en: "The Terminal Gate" },
  2: { zh: "\u547D\u4EE4\u738B\u56FD", en: "Command Kingdom" },
  3: { zh: "\u63D0\u793A\u5BAB\u6BBF", en: "Prompt Palace" },
  4: { zh: "\u667A\u80FD\u4F53\u64C2\u53F0", en: "Agent Arena" }
};
function renderWorld(container, worldId) {
  const world = WORLD_NAMES[worldId];
  const levels = WORLD_LEVELS[worldId] || [];
  const completion = state.getWorldCompletion(worldId);
  const worldState = state.get().worlds[worldId];
  container.innerHTML = `
    ${renderHeader(`${world.zh} ${world.en}`, true)}
    <div class="screen">
      ${renderProgressBar(completion)}
      <p style="text-align:center;color:var(--text-secondary);font-size:var(--text-sm);margin:var(--space-sm) 0 var(--space-lg);">${completion}% \u5B8C\u6210</p>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
        ${levels.map((level, i) => {
    const unlocked = state.isLevelUnlocked(worldId, i);
    const completed = worldState?.levelsCompleted.includes(i);
    const stars = worldState?.stars[i] || 0;
    return `
            <div class="card" data-level="${i}" style="${!unlocked ? "opacity:0.4;pointer-events:none;" : "cursor:pointer;"}">
              <div style="display:flex;align-items:center;gap:var(--space-md);">
                <div style="width:44px;height:44px;border-radius:var(--radius-md);background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;font-size:var(--text-xl);">
                  ${unlocked ? level.icon : "\u{1F512}"}
                </div>
                <div style="flex:1;">
                  <div style="font-weight:600;font-size:var(--text-base);">${level.title_zh}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-secondary);">${level.title_en}</div>
                </div>
                <div class="stars">
                  ${[1, 2, 3].map((s) => `<span class="star ${s <= stars ? "earned" : ""}">\u2605</span>`).join("")}
                </div>
              </div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `;
  container.querySelectorAll("[data-level]").forEach((el) => {
    el.addEventListener("click", () => {
      const levelIdx = parseInt(el.getAttribute("data-level") || "0");
      const level = levels[levelIdx];
      if (level && state.isLevelUnlocked(worldId, levelIdx)) {
        router.navigate(`/game/${level.gameType}/${worldId}/${levelIdx}`);
      }
    });
  });
}

// src/components/audio.ts
var audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    try {
      audioCtx = new AudioContext();
    } catch {
      return null;
    }
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}
function playTone(ctx, frequency, startTime, duration, type = "sine", volume = 0.15) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(1e-3, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}
function playSound(type) {
  const ctx = getAudioContext();
  if (!ctx)
    return;
  const now = ctx.currentTime;
  switch (type) {
    case "correct":
      playTone(ctx, 523, now, 0.15, "sine", 0.15);
      playTone(ctx, 659, now + 0.12, 0.2, "sine", 0.15);
      break;
    case "wrong":
      playTone(ctx, 350, now, 0.15, "square", 0.08);
      playTone(ctx, 250, now + 0.12, 0.25, "square", 0.08);
      break;
    case "levelUp":
      playTone(ctx, 523, now, 0.15, "sine", 0.12);
      playTone(ctx, 659, now + 0.15, 0.15, "sine", 0.12);
      playTone(ctx, 784, now + 0.3, 0.3, "sine", 0.15);
      break;
    case "perfect":
      playTone(ctx, 523, now, 0.12, "sine", 0.12);
      playTone(ctx, 659, now + 0.12, 0.12, "sine", 0.12);
      playTone(ctx, 784, now + 0.24, 0.12, "sine", 0.14);
      playTone(ctx, 1047, now + 0.36, 0.4, "sine", 0.16);
      break;
    case "cardFlip":
      playTone(ctx, 1200, now, 0.04, "sine", 0.08);
      break;
    case "keystroke":
      playTone(ctx, 800, now, 0.03, "sine", 0.05);
      break;
    case "badgeUnlock":
      playTone(ctx, 784, now, 0.2, "sine", 0.12);
      playTone(ctx, 1047, now + 0.15, 0.3, "sine", 0.14);
      playTone(ctx, 1319, now + 0.3, 0.4, "sine", 0.12);
      break;
  }
}

// src/data/quizzes.ts
var quizzes = {
  // World 1: Terminal Basics (终端之门)
  1: [
    {
      id: "w1q1",
      world: 1,
      question_zh: "Claude Code \u8FD0\u884C\u5728\u4EC0\u4E48\u73AF\u5883\u91CC\uFF1F",
      question_en: "Where does Claude Code run?",
      options: ["\u7F51\u9875\u6D4F\u89C8\u5668", "\u7EC8\u7AEF (Terminal)", "\u624B\u673A App", "VS Code \u63D2\u4EF6"],
      correctIndex: 1,
      explanation_zh: "Claude Code \u662F\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u76F4\u63A5\u5728\u7EC8\u7AEF\u91CC\u8FD0\u884C\u3002\u4F60\u8F93\u5165\u81EA\u7136\u8BED\u8A00\uFF0C\u5B83\u5E2E\u4F60\u5199\u4EE3\u7801\u3002",
      explanation_en: "Claude Code is a CLI tool that runs directly in your terminal. You type natural language and it writes code for you."
    },
    {
      id: "w1q2",
      world: 1,
      question_zh: "CLAUDE.md \u6587\u4EF6\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is the purpose of the CLAUDE.md file?",
      options: ["\u5B58\u50A8 API \u5BC6\u94A5", "\u8BB0\u5F55\u9879\u76EE\u8BF4\u660E\u7ED9 Claude Code \u8BFB\u53D6", "\u4FDD\u5B58\u804A\u5929\u8BB0\u5F55", "\u914D\u7F6E\u7EC8\u7AEF\u4E3B\u9898"],
      correctIndex: 1,
      explanation_zh: "CLAUDE.md \u662F\u4F60\u9879\u76EE\u7684\u6307\u4EE4\u6587\u4EF6\uFF0CClaude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\uFF0C\u4E86\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u548C\u504F\u597D\u3002",
      explanation_en: "CLAUDE.md is your project's instruction file. Claude Code reads it automatically at startup to understand your project conventions and preferences."
    },
    {
      id: "w1q3",
      world: 1,
      question_zh: "\u300C\u4ED3\u5E93 (Repository)\u300D\u5728\u7F16\u7A0B\u4E2D\u6307\u4EC0\u4E48\uFF1F",
      question_en: "What does 'Repository' mean in programming?",
      options: ["\u5B58\u653E\u7269\u54C1\u7684\u4ED3\u5E93", "\u7528 Git \u7BA1\u7406\u7684\u9879\u76EE\u6587\u4EF6\u5939", "\u4E91\u7AEF\u6570\u636E\u5E93", "\u4EE3\u7801\u7F16\u8F91\u5668"],
      correctIndex: 1,
      explanation_zh: "\u4ED3\u5E93\uFF08repo\uFF09\u662F\u7528 Git \u8FDB\u884C\u7248\u672C\u63A7\u5236\u7684\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u5305\u542B\u6240\u6709\u4EE3\u7801\u548C\u4FEE\u6539\u5386\u53F2\u3002",
      explanation_en: "A repository (repo) is a project folder managed by Git for version control, containing all code and change history."
    },
    {
      id: "w1q4",
      world: 1,
      question_zh: "Claude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u505A\u4EC0\u4E48\uFF1F",
      question_en: "What does Claude Code do automatically when it starts?",
      options: ["\u5B89\u88C5\u4F9D\u8D56\u5305", "\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u548C CLAUDE.md", "\u6253\u5F00\u6D4F\u89C8\u5668", "\u8FDE\u63A5\u6570\u636E\u5E93"],
      correctIndex: 1,
      explanation_zh: "Claude Code \u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u7ED3\u6784\u3001Git \u5386\u53F2\u548C CLAUDE.md\uFF0C\u5FEB\u901F\u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",
      explanation_en: "When starting, Claude Code reads the current directory's file structure, Git history, and CLAUDE.md to quickly understand your project."
    },
    {
      id: "w1q5",
      world: 1,
      question_zh: "CLI \u7684\u5168\u79F0\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What does CLI stand for?",
      options: ["Code Language Interface", "Command Line Interface", "Cloud Login Integration", "Computer Learning Input"],
      correctIndex: 1,
      explanation_zh: "CLI \u662F Command Line Interface\uFF08\u547D\u4EE4\u884C\u754C\u9762\uFF09\u7684\u7F29\u5199\uFF0C\u662F\u901A\u8FC7\u6587\u5B57\u547D\u4EE4\u64CD\u4F5C\u7535\u8111\u7684\u65B9\u5F0F\u3002",
      explanation_en: "CLI stands for Command Line Interface, a way to interact with your computer through text commands."
    },
    {
      id: "w1q6",
      world: 1,
      question_zh: "\u5728\u7EC8\u7AEF\u4E2D\uFF0C\u300C\u76EE\u5F55 (Directory)\u300D\u7B49\u540C\u4E8E\u4EC0\u4E48\uFF1F",
      question_en: "In the terminal, what is a 'Directory' equivalent to?",
      options: ["\u4E00\u4E2A\u7A0B\u5E8F", "\u4E00\u4E2A\u6587\u4EF6\u5939", "\u4E00\u6761\u547D\u4EE4", "\u4E00\u4E2A\u7F51\u7AD9"],
      correctIndex: 1,
      explanation_zh: "\u76EE\u5F55\u5C31\u662F\u6587\u4EF6\u5939\u3002\u5728\u7EC8\u7AEF\u91CC\u7528 cd \u547D\u4EE4\u53EF\u4EE5\u5207\u6362\u76EE\u5F55\u3002",
      explanation_en: "A directory is simply a folder. You can navigate between directories using the cd command in the terminal."
    },
    {
      id: "w1q7",
      world: 1,
      question_zh: "\u300C\u4EE3\u7801\u5E93 (Codebase)\u300D\u6307\u7684\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What does 'Codebase' refer to?",
      options: ["\u4E00\u4E2A\u6570\u636E\u5E93", "\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801", "\u4E00\u4E2A\u4EE3\u7801\u7F16\u8F91\u5668", "\u4E00\u7EC4 API \u5BC6\u94A5"],
      correctIndex: 1,
      explanation_zh: "\u4EE3\u7801\u5E93\u662F\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801\u3002Claude Code \u53EF\u4EE5\u4E00\u6B21\u6027\u7406\u89E3\u6574\u4E2A\u4EE3\u7801\u5E93\u6765\u5E2E\u4F60\u5DE5\u4F5C\u3002",
      explanation_en: "A codebase is all the source code for a project. Claude Code can understand an entire codebase at once to help you."
    },
    {
      id: "w1q8",
      world: 1,
      question_zh: "README \u6587\u4EF6\u901A\u5E38\u5305\u542B\u4EC0\u4E48\u4FE1\u606F\uFF1F",
      question_en: "What information does a README file typically contain?",
      options: ["\u6570\u636E\u5E93\u5BC6\u7801", "\u9879\u76EE\u8BF4\u660E\u3001\u5B89\u88C5\u548C\u4F7F\u7528\u65B9\u6CD5", "AI \u8BAD\u7EC3\u6570\u636E", "\u7528\u6237\u9690\u79C1\u6570\u636E"],
      correctIndex: 1,
      explanation_zh: "README \u662F\u9879\u76EE\u7684\u8BF4\u660E\u4E66\uFF0C\u544A\u8BC9\u522B\u4EBA\u8FD9\u4E2A\u9879\u76EE\u505A\u4EC0\u4E48\u3001\u600E\u4E48\u5B89\u88C5\u3001\u600E\u4E48\u4F7F\u7528\u3002",
      explanation_en: "A README is a project's documentation that explains what the project does, how to install it, and how to use it."
    }
  ],
  // World 2: Commands & Tools (命令王国)
  2: [
    {
      id: "w2q1",
      world: 2,
      question_zh: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u5FEB\u6EE1\u65F6\uFF0C\u5E94\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",
      question_en: "Which command should you use when the context window is almost full?",
      options: ["/clear", "/compact", "/rewind", "/help"],
      correctIndex: 1,
      explanation_zh: "/compact \u4F1A\u628A\u957F\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u4E0A\u4E0B\u6587\u7A7A\u95F4\u4F46\u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u3002/clear \u4F1A\u6E05\u9664\u6240\u6709\u5185\u5BB9\u3002",
      explanation_en: "/compact condenses a long conversation into key summaries, freeing context space while preserving important information. /clear erases everything."
    },
    {
      id: "w2q2",
      world: 2,
      question_zh: "Claude Code \u6539\u574F\u4E86\u4EE3\u7801\uFF0C\u4F60\u60F3\u6062\u590D\u5230\u4FEE\u6539\u4E4B\u524D\u3002\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
      question_en: "Claude Code broke your code and you want to restore the previous state. Which command?",
      options: ["/undo", "/rewind", "/rollback", "/clear"],
      correctIndex: 1,
      explanation_zh: "/rewind \u53EF\u4EE5\u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u6587\u4EF6\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002",
      explanation_en: "/rewind undoes Claude Code's recent changes and restores files to their previous state."
    },
    {
      id: "w2q3",
      world: 2,
      question_zh: "\u60F3\u67E5\u770B\u5F53\u524D\u4F1A\u8BDD\u82B1\u4E86\u591A\u5C11 token\uFF0C\u5E94\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
      question_en: "Which command shows how many tokens the current session has used?",
      options: ["/cost", "/billing", "/usage", "/stats"],
      correctIndex: 2,
      explanation_zh: "/usage \u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u7684 token \u4F7F\u7528\u91CF\u548C\u8D39\u7528\u7EDF\u8BA1\u3002",
      explanation_en: "/usage shows the token usage and cost statistics for the current session."
    },
    {
      id: "w2q4",
      world: 2,
      question_zh: "\u63D0\u4EA4 PR \u4E4B\u524D\uFF0C\u60F3\u8BA9 Claude Code \u5E2E\u4F60\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\uFF0C\u8BE5\u7528\u4EC0\u4E48\uFF1F",
      question_en: "Before submitting a PR, you want Claude Code to check your code quality. Which command?",
      options: ["/lint", "/check", "/review", "/audit"],
      correctIndex: 2,
      explanation_zh: "/review \u8BA9 Claude Code \u5BA1\u67E5\u4EE3\u7801\u6539\u52A8\uFF0C\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u5E76\u7ED9\u51FA\u6539\u8FDB\u5EFA\u8BAE\u3002",
      explanation_en: "/review has Claude Code review your code changes, find potential issues, and suggest improvements."
    },
    {
      id: "w2q5",
      world: 2,
      question_zh: "\u5728\u65B0\u9879\u76EE\u4E2D\u751F\u6210 CLAUDE.md \u6587\u4EF6\uFF0C\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
      question_en: "Which command generates a CLAUDE.md file for a new project?",
      options: ["/setup", "/config", "/init", "/new"],
      correctIndex: 2,
      explanation_zh: "/init \u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210 CLAUDE.md \u914D\u7F6E\u6587\u4EF6\uFF0C\u5E2E\u52A9 Claude Code \u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",
      explanation_en: "/init generates a CLAUDE.md configuration file in the current directory to help Claude Code understand your project."
    },
    {
      id: "w2q6",
      world: 2,
      question_zh: "\u4F60\u60F3\u5207\u6362\u5230\u4E00\u4E2A\u66F4\u4FBF\u5B9C\u7684 AI \u6A21\u578B\u6765\u5904\u7406\u7B80\u5355\u4EFB\u52A1\u3002\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
      question_en: "You want to switch to a cheaper AI model for simple tasks. Which command?",
      options: ["/switch", "/engine", "/model", "/upgrade"],
      correctIndex: 2,
      explanation_zh: "/model \u53EF\u4EE5\u5207\u6362 Claude Code \u4F7F\u7528\u7684 AI \u6A21\u578B\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\uFF0COpus \u6700\u5F3A\u3002",
      explanation_en: "/model lets you switch the AI model Claude Code uses. Haiku is fastest and cheapest, Opus is most capable."
    },
    {
      id: "w2q7",
      world: 2,
      question_zh: "Claude Code \u7684\u56DE\u590D\u592A\u590D\u6742\uFF0C\u4F60\u60F3\u8BA9\u5B83\u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u3002\u8BE5\u600E\u4E48\u505A\uFF1F",
      question_en: "Claude Code's response is too complex. You want a simpler explanation. What do you do?",
      options: ["/explain", "/easy", "/simplify", "/translate"],
      correctIndex: 2,
      explanation_zh: "/simplify \u8BA9 Claude Code \u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u4E0A\u4E00\u6761\u56DE\u590D\u3002",
      explanation_en: "/simplify asks Claude Code to re-explain its last response in simpler language."
    },
    {
      id: "w2q8",
      world: 2,
      question_zh: "\u4F60\u60F3\u628A Claude Code \u7684\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",
      question_en: "You want to copy Claude Code's response to your clipboard. Which command?",
      options: ["/export", "/save", "/clipboard", "/copy"],
      correctIndex: 3,
      explanation_zh: "/copy \u628A Claude Code \u6700\u540E\u4E00\u6761\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u65B9\u4FBF\u7C98\u8D34\u5230\u522B\u5904\u4F7F\u7528\u3002",
      explanation_en: "/copy copies Claude Code's last response to your clipboard for easy pasting elsewhere."
    },
    {
      id: "w2q9",
      world: 2,
      question_zh: "/clear \u548C /compact \u7684\u4E3B\u8981\u533A\u522B\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is the main difference between /clear and /compact?",
      options: [
        "/clear \u66F4\u5FEB\uFF0C/compact \u66F4\u6162",
        "/clear \u5220\u9664\u6240\u6709\u5386\u53F2\uFF0C/compact \u4FDD\u7559\u5173\u952E\u4FE1\u606F",
        "/clear \u7528\u4E8E\u4EE3\u7801\uFF0C/compact \u7528\u4E8E\u5BF9\u8BDD",
        "\u6CA1\u6709\u533A\u522B\uFF0C\u529F\u80FD\u4E00\u6837"
      ],
      correctIndex: 1,
      explanation_zh: "/clear \u6E05\u9664\u6240\u6709\u5BF9\u8BDD\u5386\u53F2\u91CD\u65B0\u5F00\u59CB\uFF1B/compact \u53EA\u538B\u7F29\u5BF9\u8BDD\u4F46\u4FDD\u7559\u5173\u952E\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002",
      explanation_en: "/clear wipes all conversation history; /compact compresses the conversation while preserving key context."
    },
    {
      id: "w2q10",
      world: 2,
      question_zh: "\u521A\u88C5\u597D Claude Code\uFF0C\u4E0D\u77E5\u9053\u6709\u54EA\u4E9B\u547D\u4EE4\u53EF\u7528\u3002\u8BE5\u8F93\u5165\u4EC0\u4E48\uFF1F",
      question_en: "You just installed Claude Code and don't know what commands are available. What do you type?",
      options: ["/guide", "/menu", "/commands", "/help"],
      correctIndex: 3,
      explanation_zh: "/help \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u548C\u4F7F\u7528\u8BF4\u660E\u3002",
      explanation_en: "/help shows a list of all available slash commands and their usage."
    }
  ],
  // World 3: Prompt Craft (提示宫殿)
  3: [
    {
      id: "w3q1",
      world: 3,
      question_zh: "\u300CAgentic\u300D\u5728 Claude Code \u7684\u8BED\u5883\u4E2D\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",
      question_en: "What does 'Agentic' mean in the context of Claude Code?",
      options: ["\u4EE3\u7406\u670D\u52A1\u5668", "AI \u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u884C\u52A8", "\u8FDC\u7A0B\u63A7\u5236", "\u81EA\u52A8\u5B89\u88C5"],
      correctIndex: 1,
      explanation_zh: "Agentic \u6307 AI \u80FD\u81EA\u4E3B\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\uFF0C\u4E0D\u53EA\u662F\u88AB\u52A8\u56DE\u7B54\u95EE\u9898\u3002",
      explanation_en: "Agentic means the AI can autonomously read files, write code, and run commands, not just passively answer questions."
    },
    {
      id: "w3q2",
      world: 3,
      question_zh: "\u4E0B\u9762\u54EA\u4E2A\u662F\u66F4\u597D\u7684 Claude Code \u63D0\u793A\u8BCD\uFF1F",
      question_en: "Which is a better prompt for Claude Code?",
      options: [
        "\u5E2E\u6211\u5199\u4EE3\u7801",
        "\u5728 src/utils.ts \u4E2D\u6DFB\u52A0\u4E00\u4E2A formatDate \u51FD\u6570\uFF0C\u8F93\u5165 Date \u5BF9\u8C61\uFF0C\u8F93\u51FA YYYY-MM-DD \u683C\u5F0F\u5B57\u7B26\u4E32",
        "\u6211\u9700\u8981\u4E00\u4E2A\u51FD\u6570",
        "\u5199\u4E2A\u65E5\u671F\u7684\u4E1C\u897F"
      ],
      correctIndex: 1,
      explanation_zh: "\u597D\u7684\u63D0\u793A\u8BCD\u8981\u5177\u4F53\u8BF4\u660E\uFF1A\u5728\u54EA\u4E2A\u6587\u4EF6\u3001\u505A\u4EC0\u4E48\u529F\u80FD\u3001\u8F93\u5165\u8F93\u51FA\u662F\u4EC0\u4E48\u3002\u8D8A\u5177\u4F53\uFF0CClaude Code \u7684\u7ED3\u679C\u8D8A\u51C6\u786E\u3002",
      explanation_en: "Good prompts specify: which file, what function, and what the input/output should be. The more specific, the more accurate the result."
    },
    {
      id: "w3q3",
      world: 3,
      question_zh: "\u300C\u4E0A\u4E0B\u6587\u7A97\u53E3 (Context Window)\u300D\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is a 'Context Window'?",
      options: ["\u6D4F\u89C8\u5668\u7A97\u53E3", "AI \u4E00\u6B21\u80FD\u5904\u7406\u7684\u4FE1\u606F\u91CF\u4E0A\u9650", "\u4EE3\u7801\u7F16\u8F91\u5668\u7684\u9884\u89C8\u7A97\u53E3", "\u7EC8\u7AEF\u7684\u5927\u5C0F"],
      correctIndex: 1,
      explanation_zh: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u662F AI \u80FD\u540C\u65F6\u770B\u5230\u548C\u5904\u7406\u7684\u4FE1\u606F\u91CF\u3002\u7A97\u53E3\u8D8A\u5927\uFF0C\u80FD\u7406\u89E3\u7684\u4EE3\u7801\u548C\u5BF9\u8BDD\u8D8A\u591A\u3002",
      explanation_en: "The context window is the maximum amount of information the AI can see and process at once. Larger windows mean more code and conversation it can understand."
    },
    {
      id: "w3q4",
      world: 3,
      question_zh: "Token \u5927\u7EA6\u7B49\u4E8E\u591A\u5C11\u4E2A\u82F1\u6587\u5355\u8BCD\uFF1F",
      question_en: "Approximately how many English words is one token?",
      options: ["1 \u4E2A\u5355\u8BCD", "3/4 \u4E2A\u5355\u8BCD", "2 \u4E2A\u5355\u8BCD", "10 \u4E2A\u5355\u8BCD"],
      correctIndex: 1,
      explanation_zh: "\u4E00\u4E2A token \u5927\u7EA6\u662F 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u6570\u8BA1\u8D39\u3002",
      explanation_en: "One token is approximately 3/4 of an English word. Claude Code is billed based on token count."
    },
    {
      id: "w3q5",
      world: 3,
      question_zh: "Claude Code \u4E2D\u7684\u300C\u5B50\u667A\u80FD\u4F53 (Sub-agent)\u300D\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is a 'Sub-agent' in Claude Code?",
      options: ["\u53E6\u4E00\u4E2A AI \u4EA7\u54C1", "Claude Code \u6D3E\u51FA\u7684\u72EC\u7ACB\u5B50\u4EFB\u52A1\u52A9\u624B", "\u4F60\u7684\u540C\u4E8B", "\u4E00\u4E2A\u63D2\u4EF6"],
      correctIndex: 1,
      explanation_zh: "\u5B50\u667A\u80FD\u4F53\u662F Claude Code \u6D3E\u51FA\u7684\u5C0F\u52A9\u624B\uFF0C\u8D1F\u8D23\u72EC\u7ACB\u5B8C\u6210\u5B50\u4EFB\u52A1\uFF0C\u6BD4\u5982\u5206\u6790\u4E0D\u540C\u6587\u4EF6\u6216\u5E76\u884C\u5904\u7406\u591A\u4E2A\u6539\u52A8\u3002",
      explanation_en: "Sub-agents are helpers dispatched by Claude Code to independently complete subtasks, like analyzing different files or processing changes in parallel."
    },
    {
      id: "w3q6",
      world: 3,
      question_zh: "\u5199\u63D0\u793A\u8BCD\u65F6\uFF0C\u4EE5\u4E0B\u54EA\u4E2A\u56E0\u7D20\u6700\u4E0D\u91CD\u8981\uFF1F",
      question_en: "When writing prompts, which factor is LEAST important?",
      options: ["\u5177\u4F53\u6027 (Specificity)", "\u4E0A\u4E0B\u6587 (Context)", "\u4F7F\u7528\u82B1\u54E8\u7684\u8BCD\u6C47", "\u6E05\u6670\u5EA6 (Clarity)"],
      correctIndex: 2,
      explanation_zh: "\u597D\u7684\u63D0\u793A\u8BCD\u9700\u8981\u5177\u4F53\u3001\u6709\u4E0A\u4E0B\u6587\u3001\u6E05\u6670\u660E\u4E86\u3002\u4F7F\u7528\u82B1\u54E8\u7684\u8BCD\u6C47\u53CD\u800C\u53EF\u80FD\u8BA9\u610F\u601D\u6A21\u7CCA\u3002",
      explanation_en: "Good prompts need specificity, context, and clarity. Fancy vocabulary can actually make the meaning less clear."
    },
    {
      id: "w3q7",
      world: 3,
      question_zh: "\u300CCompaction\uFF08\u538B\u7F29\uFF09\u300D\u5728 Claude Code \u4E2D\u7684\u4F5C\u7528\u662F\uFF1F",
      question_en: "What does 'Compaction' do in Claude Code?",
      options: ["\u538B\u7F29\u6587\u4EF6\u5927\u5C0F", "\u538B\u7F29\u5BF9\u8BDD\u5386\u53F2\u4EE5\u91CA\u653E\u4E0A\u4E0B\u6587\u7A7A\u95F4", "\u538B\u7F29\u56FE\u7247", "\u538B\u7F29\u4EE3\u7801\u884C\u6570"],
      correctIndex: 1,
      explanation_zh: "Compaction \u628A\u957F\u5BF9\u8BDD\u7CBE\u7B80\u6210\u5173\u952E\u4FE1\u606F\uFF0C\u5728\u4E0D\u4E22\u5931\u91CD\u8981\u4E0A\u4E0B\u6587\u7684\u524D\u63D0\u4E0B\u91CA\u653E\u4E0A\u4E0B\u6587\u7A97\u53E3\u7A7A\u95F4\u3002",
      explanation_en: "Compaction condenses long conversations into key information, freeing context window space without losing important context."
    },
    {
      id: "w3q8",
      world: 3,
      question_zh: "Claude Code \u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B\u6A21\u578B\uFF1F",
      question_en: "Which models can Claude Code use?",
      options: [
        "\u53EA\u6709 GPT-4",
        "Opus\u3001Sonnet\u3001Haiku",
        "\u53EA\u6709 Sonnet",
        "\u4EFB\u4F55\u5F00\u6E90\u6A21\u578B"
      ],
      correctIndex: 1,
      explanation_zh: "Claude Code \u53EF\u4EE5\u5207\u6362\u4F7F\u7528 Claude \u7CFB\u5217\u7684 Opus\uFF08\u6700\u5F3A\uFF09\u3001Sonnet\uFF08\u5747\u8861\uFF09\u548C Haiku\uFF08\u6700\u5FEB\uFF09\u6A21\u578B\u3002",
      explanation_en: "Claude Code can switch between Claude's Opus (most capable), Sonnet (balanced), and Haiku (fastest) models."
    },
    {
      id: "w3q9",
      world: 3,
      question_zh: "API \u5728 Claude Code \u4E2D\u626E\u6F14\u4EC0\u4E48\u89D2\u8272\uFF1F",
      question_en: "What role does the API play in Claude Code?",
      options: [
        "\u5B58\u50A8\u4EE3\u7801",
        "\u8FDE\u63A5\u4F60\u7684\u7EC8\u7AEF\u548C Claude \u6A21\u578B",
        "\u7F16\u8BD1\u4EE3\u7801",
        "\u7BA1\u7406\u6587\u4EF6\u7CFB\u7EDF"
      ],
      correctIndex: 1,
      explanation_zh: "Claude Code \u901A\u8FC7 Anthropic API \u4E0E\u8FDC\u7AEF\u7684 Claude \u6A21\u578B\u901A\u4FE1\uFF0C\u628A\u4F60\u7684\u6307\u4EE4\u53D1\u9001\u8FC7\u53BB\uFF0C\u518D\u628A\u7ED3\u679C\u4F20\u56DE\u6765\u3002",
      explanation_en: "Claude Code communicates with the remote Claude model through the Anthropic API, sending your instructions and returning results."
    }
  ],
  // World 4: Workflow & Deployment (终极擂台)
  4: [
    {
      id: "w4q1",
      world: 4,
      question_zh: "\u300C\u7248\u672C\u63A7\u5236 (Version Control)\u300D\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is the main purpose of 'Version Control'?",
      options: ["\u52A0\u901F\u4EE3\u7801\u8FD0\u884C", "\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\u5386\u53F2", "\u81EA\u52A8\u90E8\u7F72\u7F51\u7AD9", "\u68C0\u6D4B\u4EE3\u7801\u9519\u8BEF"],
      correctIndex: 1,
      explanation_zh: "\u7248\u672C\u63A7\u5236\uFF08\u5982 Git\uFF09\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u56DE\u6EAF\u5386\u53F2\u3001\u534F\u4F5C\u5F00\u53D1\u3001\u5B89\u5168\u5730\u5C1D\u8BD5\u65B0\u529F\u80FD\u3002",
      explanation_en: "Version control (like Git) records every code change, letting you trace history, collaborate, and safely try new features."
    },
    {
      id: "w4q2",
      world: 4,
      question_zh: "\u300C\u5206\u652F (Branch)\u300D\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is the purpose of a 'Branch'?",
      options: ["\u5907\u4EFD\u4EE3\u7801", "\u5728\u4E0D\u5F71\u54CD\u4E3B\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u5F00\u53D1\u65B0\u529F\u80FD", "\u5220\u9664\u65E7\u4EE3\u7801", "\u5408\u5E76\u6587\u4EF6"],
      correctIndex: 1,
      explanation_zh: "\u5206\u652F\u8BA9\u4F60\u5728\u72EC\u7ACB\u7684\u7EBF\u8DEF\u4E0A\u5F00\u53D1\uFF0C\u4E0D\u5F71\u54CD\u4E3B\u5206\u652F\u7684\u7A33\u5B9A\u6027\u3002\u5F00\u53D1\u5B8C\u6210\u540E\u518D\u5408\u5E76\u56DE\u53BB\u3002",
      explanation_en: "Branches let you develop on an isolated line without affecting the main branch's stability. You merge back when done."
    },
    {
      id: "w4q3",
      world: 4,
      question_zh: "Pull Request (PR) \u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",
      question_en: "What is the purpose of a Pull Request (PR)?",
      options: [
        "\u4E0B\u8F7D\u4EE3\u7801",
        "\u8BF7\u6C42\u628A\u4F60\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F",
        "\u62C9\u53D6\u6700\u65B0\u7248\u672C",
        "\u5220\u9664\u5206\u652F"
      ],
      correctIndex: 1,
      explanation_zh: "PR \u662F\u8BF7\u6C42\u5C06\u4F60\u7684\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6B63\u5F0F\u6D41\u7A0B\uFF0C\u901A\u5E38\u5305\u542B\u4EE3\u7801\u5BA1\u67E5\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u521B\u5EFA\u548C\u5BA1\u67E5 PR\u3002",
      explanation_en: "A PR is a formal process to request merging your branch into the main branch, usually with code review. Claude Code can help create and review PRs."
    },
    {
      id: "w4q4",
      world: 4,
      question_zh: "\u300C\u91CD\u6784 (Refactoring)\u300D\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",
      question_en: "What does 'Refactoring' mean?",
      options: [
        "\u6DFB\u52A0\u65B0\u529F\u80FD",
        "\u5728\u4E0D\u6539\u53D8\u529F\u80FD\u7684\u524D\u63D0\u4E0B\u6539\u5584\u4EE3\u7801\u7ED3\u6784",
        "\u5220\u9664\u6240\u6709\u4EE3\u7801\u91CD\u5199",
        "\u4FEE\u590D bug"
      ],
      correctIndex: 1,
      explanation_zh: "\u91CD\u6784\u662F\u5728\u529F\u80FD\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u4F18\u5316\u4EE3\u7801\u7ED3\u6784\u3001\u63D0\u9AD8\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002Claude Code \u64C5\u957F\u5927\u89C4\u6A21\u5B89\u5168\u91CD\u6784\u3002",
      explanation_en: "Refactoring improves code structure, readability, and maintainability without changing functionality. Claude Code excels at large-scale safe refactoring."
    },
    {
      id: "w4q5",
      world: 4,
      question_zh: "\u300C\u90E8\u7F72 (Deployment)\u300D\u662F\u6307\u4EC0\u4E48\uFF1F",
      question_en: "What does 'Deployment' mean?",
      options: ["\u5199\u4EE3\u7801", "\u628A\u4EE3\u7801\u53D1\u5E03\u5230\u670D\u52A1\u5668\u4F9B\u7528\u6237\u4F7F\u7528", "\u6D4B\u8BD5\u4EE3\u7801", "\u8BBE\u8BA1\u754C\u9762"],
      correctIndex: 1,
      explanation_zh: "\u90E8\u7F72\u662F\u628A\u4EE3\u7801\u4ECE\u5F00\u53D1\u73AF\u5883\u53D1\u5E03\u5230\u751F\u4EA7\u670D\u52A1\u5668\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E\u548C\u6267\u884C\u90E8\u7F72\u6D41\u7A0B\u3002",
      explanation_en: "Deployment is the process of publishing code from development to production servers. Claude Code can help configure and execute deployment workflows."
    },
    {
      id: "w4q6",
      world: 4,
      question_zh: "Claude Code \u53EF\u4EE5\u5E2E\u4F60\u5B8C\u6210\u4EE5\u4E0B\u54EA\u4E2A Git \u64CD\u4F5C\uFF1F",
      question_en: "Which Git operation can Claude Code help you with?",
      options: [
        "\u53EA\u80FD commit",
        "commit\u3001\u521B\u5EFA PR\u3001\u4EE3\u7801\u5BA1\u67E5\u3001\u89E3\u51B3\u51B2\u7A81",
        "\u53EA\u80FD push",
        "\u53EA\u80FD\u521B\u5EFA\u5206\u652F"
      ],
      correctIndex: 1,
      explanation_zh: "Claude Code \u80FD\u5E2E\u4F60\u5B8C\u6210\u51E0\u4E4E\u6240\u6709 Git \u64CD\u4F5C\uFF1A\u5199 commit message\u3001\u521B\u5EFA\u5206\u652F\u548C PR\u3001\u5BA1\u67E5\u4EE3\u7801\u3001\u89E3\u51B3\u5408\u5E76\u51B2\u7A81\u3002",
      explanation_en: "Claude Code can help with almost all Git operations: writing commit messages, creating branches and PRs, reviewing code, and resolving merge conflicts."
    },
    {
      id: "w4q7",
      world: 4,
      question_zh: "\u4EC0\u4E48\u662F\u300C\u4F9D\u8D56 (Dependency)\u300D\uFF1F",
      question_en: "What is a 'Dependency'?",
      options: ["\u4EE3\u7801\u7684\u6CE8\u91CA", "\u9879\u76EE\u9700\u8981\u7684\u5916\u90E8\u5E93\u6216\u5305", "\u6587\u4EF6\u7684\u5907\u4EFD", "\u6D4B\u8BD5\u7528\u4F8B"],
      correctIndex: 1,
      explanation_zh: "\u4F9D\u8D56\u662F\u4F60\u7684\u9879\u76EE\u7528\u5230\u7684\u5916\u90E8\u4EE3\u7801\u5E93\uFF0C\u901A\u5E38\u5728 package.json \u7B49\u6587\u4EF6\u4E2D\u58F0\u660E\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406\u4F9D\u8D56\u548C\u89E3\u51B3\u51B2\u7A81\u3002",
      explanation_en: "Dependencies are external code libraries your project uses, typically declared in files like package.json. Claude Code can help manage them."
    },
    {
      id: "w4q8",
      world: 4,
      question_zh: "\u5728\u5B8C\u6574\u7684\u5F00\u53D1\u6D41\u7A0B\u4E2D\uFF0C\u4EE5\u4E0B\u6B65\u9AA4\u7684\u6B63\u786E\u987A\u5E8F\u662F\uFF1F",
      question_en: "What is the correct order of steps in a development workflow?",
      options: [
        "\u90E8\u7F72 \u2192 \u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4",
        "\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4 \u2192 \u521B\u5EFA PR \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72",
        "\u521B\u5EFA PR \u2192 \u5199\u4EE3\u7801 \u2192 \u90E8\u7F72",
        "\u63D0\u4EA4 \u2192 \u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u90E8\u7F72"
      ],
      correctIndex: 1,
      explanation_zh: "\u6807\u51C6\u5F00\u53D1\u6D41\u7A0B\uFF1A\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4(commit) \u2192 \u521B\u5EFA PR \u2192 \u4EE3\u7801\u5BA1\u67E5 \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72\u3002Claude Code \u53EF\u4EE5\u8F85\u52A9\u6BCF\u4E00\u6B65\u3002",
      explanation_en: "Standard workflow: write code \u2192 test \u2192 commit \u2192 create PR \u2192 code review \u2192 merge \u2192 deploy. Claude Code can assist with every step."
    }
  ]
};
var placementQuestions = [
  {
    id: "pq1",
    world: 1,
    question_zh: "Claude Code \u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u5DE5\u5177\uFF1F",
    question_en: "What type of tool is Claude Code?",
    options: ["\u56FE\u5F62\u754C\u9762\u7F16\u8F91\u5668", "\u547D\u4EE4\u884C AI \u7F16\u7A0B\u52A9\u624B", "\u5728\u7EBF\u4EE3\u7801\u5E73\u53F0", "\u6D4F\u89C8\u5668\u63D2\u4EF6"],
    correctIndex: 1,
    explanation_zh: "Claude Code \u662F\u8FD0\u884C\u5728\u7EC8\u7AEF\u91CC\u7684 AI \u7F16\u7A0B\u52A9\u624B\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u754C\u9762\u4E0E\u4F60\u4EA4\u4E92\u3002",
    explanation_en: "Claude Code is an AI coding assistant that runs in the terminal, interacting with you through the command line."
  },
  {
    id: "pq2",
    world: 1,
    question_zh: "CLAUDE.md \u6587\u4EF6\u5E94\u8BE5\u653E\u5728\u54EA\u91CC\uFF1F",
    question_en: "Where should the CLAUDE.md file be placed?",
    options: ["Home \u76EE\u5F55", "\u9879\u76EE\u6839\u76EE\u5F55", "node_modules \u91CC", "\u4EFB\u610F\u4F4D\u7F6E"],
    correctIndex: 1,
    explanation_zh: "CLAUDE.md \u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\uFF0CClaude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u6765\u4E86\u89E3\u9879\u76EE\u89C4\u8303\u3002",
    explanation_en: "CLAUDE.md goes in the project root. Claude Code reads it automatically at startup to understand project conventions."
  },
  {
    id: "pq3",
    world: 2,
    question_zh: "\u5BF9\u8BDD\u592A\u957F\u5BFC\u81F4\u4E0A\u4E0B\u6587\u5FEB\u6EE1\uFF0C\u4F60\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",
    question_en: "The conversation is too long and context is almost full. Which command?",
    options: ["/clear", "/compact", "/reset", "/delete"],
    correctIndex: 1,
    explanation_zh: "/compact \u538B\u7F29\u5BF9\u8BDD\u4F46\u4FDD\u7559\u5173\u952E\u4FE1\u606F\uFF0C\u6BD4 /clear \u66F4\u597D\u56E0\u4E3A\u4E0D\u4F1A\u4E22\u5931\u6240\u6709\u4E0A\u4E0B\u6587\u3002",
    explanation_en: "/compact compresses the conversation while keeping key info, better than /clear which loses all context."
  },
  {
    id: "pq4",
    world: 2,
    question_zh: "Claude Code \u6539\u9519\u4E86\u4EE3\u7801\uFF0C\u4F60\u60F3\u64A4\u9500\u3002\u8BE5\u7528\u4EC0\u4E48\uFF1F",
    question_en: "Claude Code made a wrong code change. How do you undo it?",
    options: ["/undo", "/back", "/rewind", "/restore"],
    correctIndex: 2,
    explanation_zh: "/rewind \u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u6587\u4EF6\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002",
    explanation_en: "/rewind undoes Claude Code's recent changes and restores files to their previous state."
  },
  {
    id: "pq5",
    world: 3,
    question_zh: "\u300CAgentic AI\u300D\u6700\u5173\u952E\u7684\u7279\u5F81\u662F\u4EC0\u4E48\uFF1F",
    question_en: "What is the key characteristic of 'Agentic AI'?",
    options: ["\u56DE\u7B54\u901F\u5EA6\u5FEB", "\u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u6267\u884C\u64CD\u4F5C", "\u53EA\u80FD\u804A\u5929", "\u9700\u8981\u56FE\u5F62\u754C\u9762"],
    correctIndex: 1,
    explanation_zh: "Agentic AI \u4E0D\u53EA\u56DE\u7B54\u95EE\u9898\uFF0C\u8FD8\u80FD\u4E3B\u52A8\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\uFF0C\u81EA\u4E3B\u5B8C\u6210\u4EFB\u52A1\u3002",
    explanation_en: "Agentic AI doesn't just answer questions \u2014 it can proactively read files, write code, run commands, and complete tasks autonomously."
  },
  {
    id: "pq6",
    world: 3,
    question_zh: "\u4E0B\u9762\u54EA\u4E2A\u662F\u597D\u7684 Claude Code \u63D0\u793A\u8BCD\uFF1F",
    question_en: "Which is a good Claude Code prompt?",
    options: [
      "\u5E2E\u6211\u505A\u4E2A\u7F51\u7AD9",
      "\u91CD\u6784 src/auth.ts \u4E2D\u7684 login \u51FD\u6570\uFF0C\u6DFB\u52A0\u9519\u8BEF\u5904\u7406\u548C\u91CD\u8BD5\u903B\u8F91",
      "\u5199\u70B9\u4EE3\u7801",
      "\u505A\u4E2A\u597D\u770B\u7684\u4E1C\u897F"
    ],
    correctIndex: 1,
    explanation_zh: "\u597D\u7684\u63D0\u793A\u8BCD\u8981\u660E\u786E\u6307\u5B9A\u6587\u4EF6\u3001\u51FD\u6570\u548C\u5177\u4F53\u9700\u6C42\u3002\u8D8A\u5177\u4F53\uFF0CAI \u7684\u8F93\u51FA\u8D8A\u51C6\u786E\u3002",
    explanation_en: "Good prompts specify the file, function, and exact requirements. More specificity leads to more accurate AI output."
  },
  {
    id: "pq7",
    world: 3,
    question_zh: "Token \u662F\u4EC0\u4E48\uFF1F",
    question_en: "What is a Token?",
    options: ["\u4E00\u79CD\u52A0\u5BC6\u8D27\u5E01", "AI \u5904\u7406\u6587\u5B57\u7684\u57FA\u672C\u5355\u4F4D", "\u767B\u5F55\u51ED\u8BC1", "\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00"],
    correctIndex: 1,
    explanation_zh: "Token \u662F AI \u5904\u7406\u6587\u5B57\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u5927\u7EA6 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u8BA1\u8D39\u3002",
    explanation_en: "A token is the smallest unit of text the AI processes, roughly 3/4 of an English word. Claude Code bills by token."
  },
  {
    id: "pq8",
    world: 4,
    question_zh: "Pull Request \u7684\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F",
    question_en: "What is the purpose of a Pull Request?",
    options: ["\u4E0B\u8F7D\u4EE3\u7801", "\u8BF7\u6C42\u5C06\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F", "\u5220\u9664\u5206\u652F", "\u521B\u5EFA\u4ED3\u5E93"],
    correctIndex: 1,
    explanation_zh: "PR \u662F\u628A\u4F60\u5206\u652F\u4E0A\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6B63\u5F0F\u6D41\u7A0B\uFF0C\u901A\u5E38\u5305\u542B\u56E2\u961F\u7684\u4EE3\u7801\u5BA1\u67E5\u3002",
    explanation_en: "A PR is the formal process to merge your branch code into the main branch, usually involving team code review."
  },
  {
    id: "pq9",
    world: 4,
    question_zh: "\u300C\u91CD\u6784\u300D\u548C\u300C\u4FEE bug\u300D\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
    question_en: "What's the difference between 'refactoring' and 'fixing bugs'?",
    options: [
      "\u6CA1\u6709\u533A\u522B",
      "\u91CD\u6784\u6539\u5584\u7ED3\u6784\u4F46\u4E0D\u6539\u529F\u80FD\uFF0C\u4FEE bug \u4FEE\u590D\u9519\u8BEF\u884C\u4E3A",
      "\u91CD\u6784\u66F4\u5BB9\u6613",
      "\u4FEE bug \u4E0D\u9700\u8981\u6539\u4EE3\u7801"
    ],
    correctIndex: 1,
    explanation_zh: "\u91CD\u6784\u662F\u5728\u529F\u80FD\u4E0D\u53D8\u7684\u524D\u63D0\u4E0B\u4F18\u5316\u4EE3\u7801\u7ED3\u6784\uFF1B\u4FEE bug \u662F\u4FEE\u590D\u4EE3\u7801\u7684\u9519\u8BEF\u884C\u4E3A\u3002",
    explanation_en: "Refactoring improves code structure without changing functionality; bug fixing corrects incorrect behavior."
  },
  {
    id: "pq10",
    world: 4,
    question_zh: "\u6807\u51C6\u5F00\u53D1\u6D41\u7A0B\u7684\u6700\u540E\u4E00\u6B65\u901A\u5E38\u662F\uFF1F",
    question_en: "What is typically the last step in a standard development workflow?",
    options: ["\u5199\u4EE3\u7801", "\u4EE3\u7801\u5BA1\u67E5", "\u90E8\u7F72", "\u521B\u5EFA\u5206\u652F"],
    correctIndex: 2,
    explanation_zh: "\u6807\u51C6\u6D41\u7A0B\uFF1A\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4 \u2192 PR \u2192 \u5BA1\u67E5 \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72\u3002\u90E8\u7F72\u662F\u6700\u540E\u4E00\u6B65\u3002",
    explanation_en: "Standard workflow: code \u2192 test \u2192 commit \u2192 PR \u2192 review \u2192 merge \u2192 deploy. Deployment is the final step."
  }
];

// src/screens/placement.ts
function renderPlacement(container) {
  let currentQ = 0;
  let score = 0;
  let answered = false;
  function showIntro() {
    container.innerHTML = `
      ${renderHeader("\u80FD\u529B\u6D4B\u8BD5", false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--space-lg);">
        ${renderMascot("firstLogin")}
        <h2 style="text-align:center;">\u8BA9\u6211\u770B\u770B\u4F60\u5DF2\u7ECF\u77E5\u9053\u591A\u5C11\uFF01</h2>
        <p style="color:var(--text-secondary);text-align:center;">10\u9053\u9898\uFF0C\u770B\u770B\u4F60\u5BF9Claude Code\u4E86\u89E3\u591A\u5C11</p>
        <button class="btn btn-primary btn-block" id="start-placement">\u5F00\u59CB\u6D4B\u8BD5 Start Test</button>
      </div>
    `;
    container.querySelector("#start-placement")?.addEventListener("click", () => showQuestion());
  }
  function showQuestion() {
    if (currentQ >= placementQuestions.length) {
      showResults();
      return;
    }
    const q = placementQuestions[currentQ];
    answered = false;
    container.innerHTML = `
      ${renderHeader(`${currentQ + 1} / ${placementQuestions.length}`, false)}
      <div class="game-screen">
        <div class="progress-bar" style="margin-top:var(--space-md);">
          <div class="progress-bar-fill" style="width:${currentQ / placementQuestions.length * 100}%"></div>
        </div>
        <div class="game-question">${q.question_zh}</div>
        <div class="game-question-sub">${q.question_en}</div>
        <div class="option-list" id="options">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>
        <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);"></div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">\u4E0B\u4E00\u9898 Next \u2192</button>
        </div>
      </div>
    `;
    container.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered)
          return;
        answered = true;
        const idx = parseInt(btn.getAttribute("data-index") || "0");
        const isCorrect = idx === q.correctIndex;
        if (isCorrect) {
          score++;
          btn.classList.add("correct");
          playSound("correct");
        } else {
          btn.classList.add("wrong");
          container.querySelectorAll(".option-btn")[q.correctIndex]?.classList.add("correct");
          playSound("wrong");
        }
        container.querySelectorAll(".option-btn").forEach((b) => b.classList.add("disabled"));
        const exp = container.querySelector("#explanation");
        if (exp) {
          exp.style.display = "block";
          exp.innerHTML = `<p>${q.explanation_zh}</p><p style="color:var(--text-secondary);font-size:var(--text-sm);">${q.explanation_en}</p>`;
        }
        const nextBtn = container.querySelector("#next-btn");
        if (nextBtn)
          nextBtn.style.display = "block";
      });
    });
    container.querySelector("#next-btn")?.addEventListener("click", () => {
      currentQ++;
      showQuestion();
    });
  }
  function showResults() {
    state.completePlacement(score);
    state.updateStreak();
    let message = "";
    let mascotTrigger = "correctAnswer";
    if (score <= 3) {
      message = "\u4ECE\u5934\u5F00\u59CB\u4E5F\u5F88\u68D2\uFF01\u8BA9\u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u6765\u3002";
      mascotTrigger = "retry";
    } else if (score <= 6) {
      message = "\u4E0D\u9519\uFF01\u4F60\u5DF2\u7ECF\u6709\u4E00\u4E9B\u57FA\u7840\u4E86\u3002\u6211\u5E2E\u4F60\u8DF3\u8FC7\u4E86\u5165\u95E8\u5173\u5361\u3002";
    } else {
      message = "\u592A\u5389\u5BB3\u4E86\uFF01\u4F60\u5DF2\u7ECF\u662F\u9AD8\u624B\u4E86\u3002\u76F4\u63A5\u8FDB\u5165\u547D\u4EE4\u738B\u56FD\uFF01";
      mascotTrigger = "perfectScore";
    }
    container.innerHTML = `
      ${renderHeader("\u6D4B\u8BD5\u7ED3\u679C", false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${renderMascot(mascotTrigger)}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${score}/10</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-sm);">${message}</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">\u5F00\u59CB\u5B66\u4E60 Start Learning \u2192</button>
      </div>
    `;
    container.querySelector("#go-home")?.addEventListener("click", () => router.navigate("/"));
    if (score >= 7)
      playSound("perfect");
    else
      playSound("levelUp");
  }
  showIntro();
}

// src/data/vocabulary.ts
var vocabulary = [
  // World 1: Terminal Basics (终端之门)
  {
    id: "terminal",
    en: "Terminal",
    pinyin: "zh\u014Dng du\u0101n",
    zh: "\u7EC8\u7AEF",
    explanation: "\u7EC8\u7AEF\u662F\u4F60\u4E0E\u7535\u8111\u5BF9\u8BDD\u7684\u6587\u5B57\u754C\u9762\u3002Claude Code \u5C31\u8FD0\u884C\u5728\u7EC8\u7AEF\u91CC\uFF0C\u4F60\u5728\u8FD9\u91CC\u8F93\u5165\u6307\u4EE4\uFF0C\u5B83\u5C31\u4F1A\u5E2E\u4F60\u5199\u4EE3\u7801\u3002",
    world: 1
  },
  {
    id: "cli",
    en: "CLI",
    pinyin: "m\xECng l\xECng h\xE1ng ji\xE8 mi\xE0n",
    zh: "\u547D\u4EE4\u884C\u754C\u9762",
    explanation: "CLI\uFF08Command Line Interface\uFF09\u662F\u901A\u8FC7\u8F93\u5165\u6587\u5B57\u547D\u4EE4\u6765\u64CD\u4F5C\u7535\u8111\u7684\u65B9\u5F0F\u3002Claude Code \u662F\u4E00\u4E2A CLI \u5DE5\u5177\uFF0C\u4E0D\u9700\u8981\u56FE\u5F62\u754C\u9762\u3002",
    world: 1
  },
  {
    id: "directory",
    en: "Directory",
    pinyin: "m\xF9 l\xF9",
    zh: "\u76EE\u5F55",
    explanation: "\u76EE\u5F55\u5C31\u662F\u6587\u4EF6\u5939\u3002\u5728\u7EC8\u7AEF\u91CC\u7528 cd \u547D\u4EE4\u5207\u6362\u76EE\u5F55\u3002Claude Code \u4F1A\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u6765\u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",
    world: 1
  },
  {
    id: "repository",
    en: "Repository",
    pinyin: "c\u0101ng k\xF9",
    zh: "\u4ED3\u5E93",
    explanation: "\u4ED3\u5E93\uFF08repo\uFF09\u662F\u7528 Git \u7BA1\u7406\u7684\u9879\u76EE\u6587\u4EF6\u5939\u3002Claude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u4ED3\u5E93\u7684 Git \u5386\u53F2\u6765\u7406\u89E3\u9879\u76EE\u80CC\u666F\u3002",
    world: 1
  },
  {
    id: "codebase",
    en: "Codebase",
    pinyin: "d\xE0i m\u01CE k\xF9",
    zh: "\u4EE3\u7801\u5E93",
    explanation: "\u4EE3\u7801\u5E93\u662F\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801\u3002Claude Code \u53EF\u4EE5\u4E00\u6B21\u6027\u7406\u89E3\u6574\u4E2A\u4EE3\u7801\u5E93\uFF0C\u5E2E\u4F60\u627E bug\u3001\u91CD\u6784\u6216\u6DFB\u52A0\u529F\u80FD\u3002",
    world: 1
  },
  {
    id: "readme",
    en: "README",
    pinyin: "shu\u014D m\xEDng w\xE9n ji\xE0n",
    zh: "\u8BF4\u660E\u6587\u4EF6",
    explanation: "README \u662F\u9879\u76EE\u7684\u8BF4\u660E\u4E66\uFF0C\u901A\u5E38\u7528 Markdown \u5199\u6210\u3002\u5B83\u544A\u8BC9\u522B\u4EBA\u8FD9\u4E2A\u9879\u76EE\u662F\u4EC0\u4E48\u3001\u600E\u4E48\u5B89\u88C5\u3001\u600E\u4E48\u4F7F\u7528\u3002",
    world: 1
  },
  {
    id: "claude-md",
    en: "CLAUDE.md",
    pinyin: "Claude p\xE8i zh\xEC w\xE9n ji\xE0n",
    zh: "Claude \u914D\u7F6E\u6587\u4EF6",
    explanation: "CLAUDE.md \u662F Claude Code \u7684\u4E13\u5C5E\u6307\u4EE4\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u5728\u91CC\u9762\u5199\u9879\u76EE\u89C4\u8303\u3001\u7F16\u7801\u98CE\u683C\u3001\u90E8\u7F72\u89C4\u5219\uFF0CClaude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\u3002",
    world: 1
  },
  {
    id: "environment",
    en: "Environment",
    pinyin: "hu\xE1n j\xECng",
    zh: "\u73AF\u5883",
    explanation: "\u73AF\u5883\u662F\u4EE3\u7801\u8FD0\u884C\u7684\u914D\u7F6E\u548C\u6761\u4EF6\uFF0C\u6BD4\u5982\u5F00\u53D1\u73AF\u5883\u3001\u751F\u4EA7\u73AF\u5883\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6\u3002",
    world: 1
  },
  // World 2: Commands & Tools (命令王国)
  {
    id: "prompt",
    en: "Prompt",
    pinyin: "t\xED sh\xEC c\xED",
    zh: "\u63D0\u793A\u8BCD",
    explanation: "\u63D0\u793A\u8BCD\u662F\u4F60\u7ED9 Claude Code \u7684\u6307\u4EE4\u3002\u597D\u7684\u63D0\u793A\u8BCD\u8981\u5177\u4F53\u3001\u6709\u4E0A\u4E0B\u6587\uFF0C\u6BD4\u5982\u300C\u91CD\u6784\u8FD9\u4E2A\u51FD\u6570\uFF0C\u7528 async/await \u66FF\u6362\u56DE\u8C03\u300D\u3002",
    world: 2
  },
  {
    id: "scaffold",
    en: "Scaffold",
    pinyin: "ji\u01CEo sh\u01D2u ji\xE0",
    zh: "\u811A\u624B\u67B6",
    explanation: "\u811A\u624B\u67B6\u662F\u81EA\u52A8\u751F\u6210\u9879\u76EE\u57FA\u7840\u7ED3\u6784\u7684\u5DE5\u5177\u3002\u4F60\u53EF\u4EE5\u8BA9 Claude Code \u5E2E\u4F60\u642D\u5EFA\u9879\u76EE\u811A\u624B\u67B6\uFF0C\u4E00\u53E5\u8BDD\u5C31\u80FD\u521B\u5EFA\u6574\u4E2A\u9879\u76EE\u6A21\u677F\u3002",
    world: 2
  },
  {
    id: "diff",
    en: "Diff",
    pinyin: "ch\u0101 y\xEC",
    zh: "\u5DEE\u5F02",
    explanation: "Diff \u663E\u793A\u6587\u4EF6\u4FEE\u6539\u524D\u540E\u7684\u533A\u522B\u3002Claude Code \u6BCF\u6B21\u7F16\u8F91\u6587\u4EF6\u540E\u4F1A\u5C55\u793A diff\uFF0C\u8BA9\u4F60\u6E05\u695A\u770B\u5230\u54EA\u4E9B\u884C\u88AB\u6539\u4E86\u3002",
    world: 2
  },
  {
    id: "linting",
    en: "Linting",
    pinyin: "d\xE0i m\u01CE ji\u01CEn ch\xE1",
    zh: "\u4EE3\u7801\u68C0\u67E5",
    explanation: "Linting \u662F\u81EA\u52A8\u68C0\u67E5\u4EE3\u7801\u98CE\u683C\u548C\u6F5C\u5728\u9519\u8BEF\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u4FEE\u590D lint \u62A5\u544A\u7684\u6240\u6709\u95EE\u9898\u3002",
    world: 2
  },
  {
    id: "debugging",
    en: "Debugging",
    pinyin: "ti\xE1o sh\xEC",
    zh: "\u8C03\u8BD5",
    explanation: "\u8C03\u8BD5\u662F\u627E\u51FA\u5E76\u4FEE\u590D\u4EE3\u7801\u9519\u8BEF\u7684\u8FC7\u7A0B\u3002\u4F60\u53EF\u4EE5\u628A\u62A5\u9519\u4FE1\u606F\u76F4\u63A5\u7C98\u8D34\u7ED9 Claude Code\uFF0C\u5B83\u4F1A\u5206\u6790\u9519\u8BEF\u539F\u56E0\u5E76\u63D0\u4F9B\u4FEE\u590D\u65B9\u6848\u3002",
    world: 2
  },
  {
    id: "hook",
    en: "Hook",
    pinyin: "g\u014Du zi",
    zh: "\u94A9\u5B50",
    explanation: "\u94A9\u5B50\u662F\u5728\u7279\u5B9A\u4E8B\u4EF6\u53D1\u751F\u65F6\u81EA\u52A8\u6267\u884C\u7684\u811A\u672C\u3002Claude Code \u652F\u6301 pre-commit hook\uFF0C\u5728\u4F60\u63D0\u4EA4\u4EE3\u7801\u524D\u81EA\u52A8\u8FD0\u884C\u68C0\u67E5\u3002",
    world: 2
  },
  {
    id: "pipeline",
    en: "Pipeline",
    pinyin: "li\xFA shu\u01D0 xi\xE0n",
    zh: "\u6D41\u6C34\u7EBF",
    explanation: "\u6D41\u6C34\u7EBF\u662F\u4E00\u7CFB\u5217\u81EA\u52A8\u5316\u6B65\u9AA4\uFF0C\u5982\u6D4B\u8BD5\u3001\u6784\u5EFA\u3001\u90E8\u7F72\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E CI/CD \u6D41\u6C34\u7EBF\u3002",
    world: 2
  },
  {
    id: "dependency",
    en: "Dependency",
    pinyin: "y\u012B l\xE0i",
    zh: "\u4F9D\u8D56",
    explanation: "\u4F9D\u8D56\u662F\u4F60\u7684\u9879\u76EE\u9700\u8981\u7528\u5230\u7684\u5916\u90E8\u5E93\u6216\u5305\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406 package.json \u91CC\u7684\u4F9D\u8D56\uFF0C\u89E3\u51B3\u7248\u672C\u51B2\u7A81\u3002",
    world: 2
  },
  // World 3: AI Concepts (提示宫殿)
  {
    id: "agentic",
    en: "Agentic",
    pinyin: "zh\xEC n\xE9ng t\u01D0",
    zh: "\u667A\u80FD\u4F53",
    explanation: "Agentic \u6307 AI \u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u884C\u52A8\u3002Claude Code \u662F agentic \u7684\u2014\u2014\u5B83\u4E0D\u53EA\u56DE\u7B54\u95EE\u9898\uFF0C\u8FD8\u80FD\u4E3B\u52A8\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\u3002",
    world: 3
  },
  {
    id: "context-window",
    en: "Context Window",
    pinyin: "sh\xE0ng xi\xE0 w\xE9n chu\u0101ng k\u01D2u",
    zh: "\u4E0A\u4E0B\u6587\u7A97\u53E3",
    explanation: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u662F AI \u4E00\u6B21\u80FD\u5904\u7406\u7684\u4FE1\u606F\u91CF\u3002Claude Code \u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u5F88\u5927\uFF0C\u80FD\u540C\u65F6\u7406\u89E3\u6574\u4E2A\u9879\u76EE\u7684\u4EE3\u7801\u3002\u7528 /compact \u53EF\u4EE5\u538B\u7F29\u5BF9\u8BDD\u8282\u7701\u7A7A\u95F4\u3002",
    world: 3
  },
  {
    id: "compaction",
    en: "Compaction",
    pinyin: "y\u0101 su\u014D",
    zh: "\u538B\u7F29",
    explanation: "\u538B\u7F29\u662F\u628A\u957F\u5BF9\u8BDD\u7CBE\u7B80\u6210\u5173\u952E\u4FE1\u606F\u7684\u8FC7\u7A0B\u3002\u5F53 Claude Code \u7684\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u65F6\uFF0C\u7528 /compact \u547D\u4EE4\u53EF\u4EE5\u81EA\u52A8\u538B\u7F29\uFF0C\u4FDD\u7559\u91CD\u8981\u5185\u5BB9\u3002",
    world: 3
  },
  {
    id: "model",
    en: "Model",
    pinyin: "m\xF3 x\xEDng",
    zh: "\u6A21\u578B",
    explanation: "\u6A21\u578B\u662F\u8BAD\u7EC3\u597D\u7684 AI \u7A0B\u5E8F\u3002Claude Code \u9ED8\u8BA4\u4F7F\u7528 Claude Sonnet\uFF0C\u4F60\u53EF\u4EE5\u7528 /model \u5207\u6362\u5230\u66F4\u5F3A\u7684 Opus \u6216\u66F4\u5FEB\u7684 Haiku\u3002",
    world: 3
  },
  {
    id: "token",
    en: "Token",
    pinyin: "l\xECng p\xE1i",
    zh: "\u4EE4\u724C",
    explanation: "\u4EE4\u724C\u662F AI \u5904\u7406\u6587\u5B57\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u5927\u7EA6 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u6570\u8BA1\u8D39\uFF0C\u7528 /usage \u53EF\u4EE5\u67E5\u770B\u6D88\u8017\u4E86\u591A\u5C11\u3002",
    world: 3
  },
  {
    id: "api",
    en: "API",
    pinyin: "ji\u0113 k\u01D2u",
    zh: "\u63A5\u53E3",
    explanation: "API\uFF08Application Programming Interface\uFF09\u662F\u7A0B\u5E8F\u4E4B\u95F4\u901A\u4FE1\u7684\u6865\u6881\u3002Claude Code \u901A\u8FC7 Anthropic API \u4E0E Claude \u6A21\u578B\u901A\u4FE1\u3002",
    world: 3
  },
  {
    id: "sub-agent",
    en: "Sub-agent",
    pinyin: "z\u01D0 zh\xEC n\xE9ng t\u01D0",
    zh: "\u5B50\u667A\u80FD\u4F53",
    explanation: "\u5B50\u667A\u80FD\u4F53\u662F Claude Code \u6D3E\u51FA\u7684\u5C0F\u52A9\u624B\uFF0C\u8D1F\u8D23\u72EC\u7ACB\u5B8C\u6210\u5B50\u4EFB\u52A1\u3002\u6BD4\u5982\u5728\u5904\u7406\u590D\u6742\u91CD\u6784\u65F6\uFF0C\u4E3B\u667A\u80FD\u4F53\u4F1A\u6D3E\u5B50\u667A\u80FD\u4F53\u53BB\u5206\u6790\u4E0D\u540C\u6587\u4EF6\u3002",
    world: 3
  },
  // World 4: Workflow & Deployment (终极擂台)
  {
    id: "version-control",
    en: "Version Control",
    pinyin: "b\u01CEn b\u011Bn k\xF2ng zh\xEC",
    zh: "\u7248\u672C\u63A7\u5236",
    explanation: "\u7248\u672C\u63A7\u5236\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\u5386\u53F2\u3002Claude Code \u80FD\u5E2E\u4F60\u5199 commit message\u3001\u521B\u5EFA\u5206\u652F\u3001\u63D0\u4EA4 PR\uFF0C\u5168\u90E8\u5728\u7EC8\u7AEF\u91CC\u5B8C\u6210\u3002",
    world: 4
  },
  {
    id: "branch",
    en: "Branch",
    pinyin: "f\u0113n zh\u012B",
    zh: "\u5206\u652F",
    explanation: "\u5206\u652F\u8BA9\u4F60\u5728\u4E0D\u5F71\u54CD\u4E3B\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u5F00\u53D1\u65B0\u529F\u80FD\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u521B\u5EFA\u5206\u652F\u3001\u5207\u6362\u5206\u652F\uFF0C\u7BA1\u7406\u591A\u6761\u5F00\u53D1\u7EBF\u3002",
    world: 4
  },
  {
    id: "merge",
    en: "Merge",
    pinyin: "h\xE9 b\xECng",
    zh: "\u5408\u5E76",
    explanation: "\u5408\u5E76\u662F\u628A\u4E00\u4E2A\u5206\u652F\u7684\u4EE3\u7801\u6574\u5408\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u3002\u51FA\u73B0\u51B2\u7A81\u65F6\uFF0CClaude Code \u80FD\u5E2E\u4F60\u7406\u89E3\u51B2\u7A81\u5E76\u9009\u62E9\u6B63\u786E\u7684\u5408\u5E76\u65B9\u5F0F\u3002",
    world: 4
  },
  {
    id: "pull-request",
    en: "Pull Request",
    pinyin: "l\u0101 q\u01D4 q\u01D0ng qi\xFA",
    zh: "\u62C9\u53D6\u8BF7\u6C42",
    explanation: "Pull Request\uFF08PR\uFF09\u662F\u8BF7\u6C42\u628A\u4F60\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6D41\u7A0B\u3002Claude Code \u53EF\u4EE5\u7528 gh \u547D\u4EE4\u5E2E\u4F60\u521B\u5EFA PR\u3001\u5199\u63CF\u8FF0\u3001\u751A\u81F3 review \u4EE3\u7801\u3002",
    world: 4
  },
  {
    id: "commit",
    en: "Commit",
    pinyin: "t\xED ji\u0101o",
    zh: "\u63D0\u4EA4",
    explanation: "\u63D0\u4EA4\u662F\u4FDD\u5B58\u4E00\u6B21\u4EE3\u7801\u4FEE\u6539\u7684\u5FEB\u7167\u3002Claude Code \u80FD\u5E2E\u4F60\u5199\u6E05\u6670\u7684 commit message\uFF0C\u9075\u5FAA Conventional Commits \u89C4\u8303\u3002",
    world: 4
  },
  {
    id: "refactoring",
    en: "Refactoring",
    pinyin: "ch\xF3ng g\xF2u",
    zh: "\u91CD\u6784",
    explanation: "\u91CD\u6784\u662F\u5728\u4E0D\u6539\u53D8\u529F\u80FD\u7684\u524D\u63D0\u4E0B\u6539\u5584\u4EE3\u7801\u7ED3\u6784\u3002Claude Code \u64C5\u957F\u5927\u89C4\u6A21\u91CD\u6784\u2014\u2014\u544A\u8BC9\u5B83\u76EE\u6807\uFF0C\u5B83\u4F1A\u5B89\u5168\u5730\u4FEE\u6539\u6240\u6709\u76F8\u5173\u6587\u4EF6\u3002",
    world: 4
  },
  {
    id: "deployment",
    en: "Deployment",
    pinyin: "b\xF9 sh\u01D4",
    zh: "\u90E8\u7F72",
    explanation: "\u90E8\u7F72\u662F\u628A\u4EE3\u7801\u53D1\u5E03\u5230\u670D\u52A1\u5668\u8BA9\u7528\u6237\u4F7F\u7528\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E Cloudflare Pages \u90E8\u7F72\uFF0C\u4E00\u884C\u547D\u4EE4\u4E0A\u7EBF\u3002",
    world: 4
  }
];

// src/screens/glossary.ts
function renderGlossary(container) {
  let searchTerm = "";
  function render() {
    const filtered = vocabulary.filter((v) => {
      if (!searchTerm)
        return true;
      const q = searchTerm.toLowerCase();
      return v.en.toLowerCase().includes(q) || v.pinyin.toLowerCase().includes(q) || v.zh.includes(q) || v.explanation.includes(q);
    });
    container.innerHTML = `
      ${renderHeader("\u8BCD\u5178 Glossary", true)}
      <div class="screen">
        <input type="text" class="search-input" id="glossary-search" placeholder="\u641C\u7D22 Search (English, \u62FC\u97F3, \u4E2D\u6587)" value="${searchTerm}">
        <p style="color:var(--text-muted);font-size:var(--text-xs);margin:var(--space-sm) 0;">${filtered.length} \u4E2A\u8BCD\u6761</p>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-top:var(--space-sm);">
          ${filtered.map((v) => {
      const worldUnlocked = state.isWorldUnlocked(v.world);
      return `
              <div class="card" style="${!worldUnlocked ? "opacity:0.5;" : ""}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                  <div style="font-weight:700;color:var(--teal);font-size:var(--text-lg);">${worldUnlocked ? v.en : "???"}</div>
                  <span style="font-size:var(--text-xs);color:var(--text-muted);background:var(--bg-secondary);padding:2px 8px;border-radius:var(--radius-full);">W${v.world}</span>
                </div>
                ${worldUnlocked ? `
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">${v.pinyin}</div>
                  <div style="font-size:var(--text-base);margin-top:var(--space-xs);">${v.zh}</div>
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);line-height:1.5;">${v.explanation}</div>
                ` : '<div style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--space-xs);">\u5B8C\u6210\u4E16\u754C ${v.world} \u89E3\u9501</div>'}
              </div>
            `;
    }).join("")}
        </div>
      </div>
    `;
    const input = container.querySelector("#glossary-search");
    input?.addEventListener("input", () => {
      searchTerm = input.value;
      playSound("keystroke");
      render();
    });
    input?.focus();
  }
  render();
}

// src/screens/review.ts
init_commands();
function renderReview(container) {
  const dueItems = state.getDueReviewItems(10);
  let currentIdx = 0;
  let correctCount = 0;
  if (dueItems.length === 0) {
    container.innerHTML = `
      ${renderHeader("\u590D\u4E60 Review", true)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--space-lg);">
        ${renderMascot("correctAnswer")}
        <h2 style="text-align:center;">\u6CA1\u6709\u9700\u8981\u590D\u4E60\u7684\u5185\u5BB9\uFF01</h2>
        <p style="color:var(--text-secondary);text-align:center;">No items due for review. Keep learning!</p>
        <button class="btn btn-primary" id="go-back">\u8FD4\u56DE Back</button>
      </div>
    `;
    container.querySelector("#go-back")?.addEventListener("click", () => router.navigate("/"));
    return;
  }
  function showItem() {
    if (currentIdx >= dueItems.length) {
      showSummary();
      return;
    }
    const item = dueItems[currentIdx];
    let questionHtml = "";
    let correctAnswer = "";
    let options = [];
    let correctIndex = 0;
    if (item.type === "vocab") {
      const v = vocabulary.find((x) => x.id === item.id);
      if (v) {
        questionHtml = `<div class="game-question">${v.en}</div><div class="game-question-sub">\u8FD9\u4E2A\u82F1\u6587\u672F\u8BED\u7684\u4E2D\u6587\u662F\u4EC0\u4E48\uFF1F</div>`;
        correctAnswer = v.zh;
        const wrongOpts = vocabulary.filter((x) => x.id !== v.id).sort(() => Math.random() - 0.5).slice(0, 3).map((x) => x.zh);
        options = [...wrongOpts, v.zh].sort(() => Math.random() - 0.5);
        correctIndex = options.indexOf(v.zh);
      }
    } else if (item.type === "command") {
      const c = commands.find((x) => x.id === item.id);
      if (c) {
        questionHtml = `<div class="game-question">${c.scenario}</div><div class="game-question-sub">\u9009\u62E9\u6B63\u786E\u7684\u547D\u4EE4</div>`;
        correctAnswer = c.command;
        options = [c.command, ...c.wrongChoices.slice(0, 3)].sort(() => Math.random() - 0.5);
        correctIndex = options.indexOf(c.command);
      }
    }
    if (options.length === 0) {
      currentIdx++;
      showItem();
      return;
    }
    container.innerHTML = `
      ${renderHeader(`\u590D\u4E60 ${currentIdx + 1}/${dueItems.length}`, true)}
      <div class="game-screen">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${currentIdx / dueItems.length * 100}%"></div></div>
        ${questionHtml}
        <div class="option-list" id="options">
          ${options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">\u4E0B\u4E00\u9898 Next \u2192</button>
        </div>
      </div>
    `;
    let answered = false;
    container.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered)
          return;
        answered = true;
        const idx = parseInt(btn.getAttribute("data-index") || "0");
        const isCorrect = idx === correctIndex;
        if (isCorrect) {
          correctCount++;
          btn.classList.add("correct");
          state.markReviewCorrect(item.id);
          playSound("correct");
        } else {
          btn.classList.add("wrong");
          container.querySelectorAll(".option-btn")[correctIndex]?.classList.add("correct");
          playSound("wrong");
        }
        container.querySelectorAll(".option-btn").forEach((b) => b.classList.add("disabled"));
        const nextBtn = container.querySelector("#next-btn");
        if (nextBtn)
          nextBtn.style.display = "block";
      });
    });
    container.querySelector("#next-btn")?.addEventListener("click", () => {
      currentIdx++;
      showItem();
    });
  }
  function showSummary() {
    const accuracy = Math.round(correctCount / dueItems.length * 100);
    container.innerHTML = `
      ${renderHeader("\u590D\u4E60\u5B8C\u6210", false)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${renderMascot(accuracy >= 80 ? "correctAnswer" : "retry")}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${accuracy}%</div>
          <p style="color:var(--text-secondary);">${correctCount}/${dueItems.length} \u6B63\u786E</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">\u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    `;
    container.querySelector("#go-home")?.addEventListener("click", () => router.navigate("/"));
    playSound("levelUp");
  }
  showItem();
}

// src/components/badge.ts
function renderBadge(badge, unlocked) {
  const stateClass = unlocked ? "unlocked" : "locked";
  const idiomText = unlocked ? badge.idiom : "???";
  const pinyinText = unlocked ? badge.pinyin : "";
  return `
    <div class="badge-item" data-badge-id="${badge.id}">
      <div class="badge-icon ${stateClass}">${badge.icon}</div>
      <div class="badge-idiom">${idiomText}</div>
      ${pinyinText ? `<div class="badge-pinyin">${pinyinText}</div>` : ""}
      <div class="badge-name">${badge.enName}</div>
    </div>
  `;
}
function showBadgeToast(badge) {
  const container = document.getElementById("toast-container");
  if (!container)
    return;
  const toast = document.createElement("div");
  toast.className = "toast toast-badge";
  toast.innerHTML = `
    <span style="font-size: 1.5em;">${badge.icon}</span>
    <div>
      <div style="font-weight: 600; color: var(--gold);">${badge.idiom}</div>
      <div style="font-size: 0.85em; opacity: 0.8;">${badge.enName} unlocked!</div>
    </div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 3e3);
}

// src/data/badges.ts
var badges = [
  {
    id: "first-step",
    idiom: "\u5343\u91CC\u4E4B\u884C\u59CB\u4E8E\u8DB3\u4E0B",
    pinyin: "qi\u0101n l\u01D0 zh\u012B x\xEDng sh\u01D0 y\xFA z\xFA xi\xE0",
    enName: "First Step",
    meaning: "A journey of a thousand miles begins with a single step",
    unlockCondition: "Complete first level",
    icon: "\u{1F680}"
  },
  {
    id: "quick-learner",
    idiom: "\u4E00\u70B9\u5373\u901A",
    pinyin: "y\u012B di\u01CEn j\xED t\u014Dng",
    enName: "Quick Learner",
    meaning: "Understanding at the first hint",
    unlockCondition: "Perfect score first try",
    icon: "\u26A1"
  },
  {
    id: "persistent",
    idiom: "\u94C1\u6775\u78E8\u6210\u9488",
    pinyin: "ti\u011B ch\u01D4 m\xF3 ch\xE9ng zh\u0113n",
    enName: "Persistent",
    meaning: "An iron rod can be ground into a needle with persistence",
    unlockCondition: "Retry and pass failed level",
    icon: "\u{1F528}"
  },
  {
    id: "practice-master",
    idiom: "\u719F\u80FD\u751F\u5DE7",
    pinyin: "sh\xFA n\xE9ng sh\u0113ng qi\u01CEo",
    enName: "Practice Master",
    meaning: "Practice makes perfect",
    unlockCondition: "7-day streak",
    icon: "\u{1F525}"
  },
  {
    id: "word-collector",
    idiom: "\u535A\u5B66\u591A\u624D",
    pinyin: "b\xF3 xu\xE9 du\u014D c\xE1i",
    enName: "Word Collector",
    meaning: "Learned and talented",
    unlockCondition: "Learn all vocab",
    icon: "\u{1F4DA}"
  },
  {
    id: "command-king",
    idiom: "\u8FD0\u7B79\u5E37\u5E44",
    pinyin: "y\xF9n ch\xF3u w\xE9i w\xF2",
    enName: "Command King",
    meaning: "Strategize from within the command tent",
    unlockCondition: "Complete World 2",
    icon: "\u{1F451}"
  },
  {
    id: "prompt-sage",
    idiom: "\u5999\u7B14\u751F\u82B1",
    pinyin: "mi\xE0o b\u01D0 sh\u0113ng hu\u0101",
    enName: "Prompt Sage",
    meaning: "A masterful pen produces flowers",
    unlockCondition: "Score 5/5 on Prompt Builder",
    icon: "\u2728"
  },
  {
    id: "interview-ready",
    idiom: "\u80F8\u6709\u6210\u7AF9",
    pinyin: "xi\u014Dng y\u01D2u ch\xE9ng zh\xFA",
    enName: "Interview Ready",
    meaning: "Having a well-thought-out plan in mind",
    unlockCondition: "Complete Boss Battle",
    icon: "\u{1F3AF}"
  },
  {
    id: "unstoppable",
    idiom: "\u52BF\u5982\u7834\u7AF9",
    pinyin: "sh\xEC r\xFA p\xF2 zh\xFA",
    enName: "Unstoppable",
    meaning: "Like splitting bamboo \u2014 unstoppable momentum",
    unlockCondition: "21-day streak",
    icon: "\u{1F48E}"
  },
  {
    id: "completionist",
    idiom: "\u529F\u5FB7\u5706\u6EE1",
    pinyin: "g\u014Dng d\xE9 yu\xE1n m\u01CEn",
    enName: "Completionist",
    meaning: "All merits fulfilled, mission complete",
    unlockCondition: "Finish all 4 worlds",
    icon: "\u{1F3C6}"
  },
  {
    id: "speed-demon",
    idiom: "\u4E00\u76EE\u5341\u884C",
    pinyin: "y\u012B m\xF9 sh\xED h\xE1ng",
    enName: "Speed Demon",
    meaning: "Reading ten lines at a glance",
    unlockCondition: "Timed quiz >50% time remaining",
    icon: "\u23F1\uFE0F"
  },
  {
    id: "sharing-caring",
    idiom: "\u6559\u5B66\u76F8\u957F",
    pinyin: "ji\xE0o xu\xE9 xi\u0101ng zh\u01CEng",
    enName: "Sharing is Caring",
    meaning: "Teaching and learning promote each other",
    unlockCondition: "Send Peer Challenge",
    icon: "\u{1F91D}"
  }
];

// src/screens/profile.ts
function renderProfile(container) {
  const s = state.get();
  const streak = state.getStreak();
  const totalLevels = state.getTotalLevelsCompleted();
  const reviewAccuracy = s.reviewQueue.length > 0 ? Math.round(s.reviewQueue.reduce((sum, r) => sum + r.correctCount, 0) / Math.max(1, s.reviewQueue.reduce((sum, r) => sum + r.correctCount + r.wrongCount, 0)) * 100) : 100;
  container.innerHTML = `
    ${renderHeader("\u6211\u7684\u6863\u6848 Profile", true)}
    <div class="screen">
      <!-- Stats -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-sm);margin-bottom:var(--space-lg);">
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--gold);font-weight:700;">\u{1F525} ${streak.current}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">\u8FDE\u7EED\u5929\u6570 Streak</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--teal);font-weight:700;">\u2B50 ${totalLevels}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">\u5DF2\u5B8C\u6210\u5173\u5361 Levels</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);color:var(--green);font-weight:700;">\u{1F4CA} ${s.totalScore}</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">\u603B\u5206 Total Score</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:var(--text-2xl);font-weight:700;">${reviewAccuracy}%</div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);">\u590D\u4E60\u51C6\u786E\u7387 Review</div>
        </div>
      </div>

      <!-- World Progress -->
      <h3 style="margin-bottom:var(--space-sm);">\u4E16\u754C\u8FDB\u5EA6 World Progress</h3>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-lg);">
        ${[1, 2, 3, 4].map((w) => {
    const pct = state.getWorldCompletion(w);
    const names = { 1: "\u7EC8\u7AEF\u4E4B\u95E8", 2: "\u547D\u4EE4\u738B\u56FD", 3: "\u63D0\u793A\u5BAB\u6BBF", 4: "\u667A\u80FD\u4F53\u64C2\u53F0" };
    return `
            <div>
              <div style="display:flex;justify-content:space-between;font-size:var(--text-sm);margin-bottom:var(--space-xs);">
                <span>${names[w]}</span><span style="color:var(--text-secondary);">${pct}%</span>
              </div>
              <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
            </div>
          `;
  }).join("")}
      </div>

      <!-- Badges -->
      <h3 style="margin-bottom:var(--space-sm);">\u6210\u5C31\u5FBD\u7AE0 Badges (${s.badges.length}/${badges.length})</h3>
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-sm);">
        ${badges.map((b) => renderBadge(b, s.badges.includes(b.id))).join("")}
      </div>
    </div>
  `;
}

// src/components/hongbao.ts
function showHongbao() {
  const overlay = document.createElement("div");
  overlay.className = "hongbao-overlay";
  overlay.innerHTML = `
    <div class="hongbao-envelope">
      <div class="hongbao-top">
        <div class="hongbao-seal">\u{1F9E7}</div>
      </div>
      <div class="hongbao-body">
        <div class="hongbao-text">\u606D\u559C\uFF01</div>
        <div class="hongbao-subtext">Congratulations!</div>
      </div>
    </div>
    <div class="hongbao-particles"></div>
  `;
  if (!document.getElementById("hongbao-styles")) {
    const style = document.createElement("style");
    style.id = "hongbao-styles";
    style.textContent = `
      .hongbao-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.7);
        animation: hongbaoFadeIn 0.3s ease-out;
      }
      @keyframes hongbaoFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .hongbao-envelope {
        width: 200px;
        background: linear-gradient(135deg, #e53935, #c62828);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(229, 57, 53, 0.4);
        animation: hongbaoBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes hongbaoBounce {
        0% { transform: scale(0.3) translateY(100px); opacity: 0; }
        60% { transform: scale(1.05) translateY(-10px); opacity: 1; }
        100% { transform: scale(1) translateY(0); }
      }
      .hongbao-top {
        height: 100px;
        background: linear-gradient(135deg, #ff5252, #e53935);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 3px solid #ffc107;
      }
      .hongbao-seal {
        font-size: 48px;
        animation: hongbaoSpin 1s ease-out;
      }
      @keyframes hongbaoSpin {
        from { transform: rotate(-30deg) scale(0); }
        to { transform: rotate(0deg) scale(1); }
      }
      .hongbao-body {
        padding: 24px 16px;
        text-align: center;
      }
      .hongbao-text {
        font-size: 28px;
        font-weight: 700;
        color: #ffc107;
        margin-bottom: 4px;
      }
      .hongbao-subtext {
        font-size: 14px;
        color: rgba(255, 193, 7, 0.7);
      }
      .hongbao-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
      }
      .hongbao-particle {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        animation: hongbaoParticle 1.5s ease-out forwards;
      }
      @keyframes hongbaoParticle {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--px), var(--py)) scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  const particleContainer = overlay.querySelector(".hongbao-particles");
  const colors = ["#ffc107", "#ff5252", "#ff9800", "#ffeb3b", "#e53935"];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "hongbao-particle";
    particle.style.background = colors[i % colors.length];
    particle.style.left = "50%";
    particle.style.top = "50%";
    particle.style.setProperty("--px", `${(Math.random() - 0.5) * 300}px`);
    particle.style.setProperty("--py", `${(Math.random() - 0.5) * 300}px`);
    particle.style.animationDelay = `${0.3 + Math.random() * 0.5}s`;
    particleContainer.appendChild(particle);
  }
  document.body.appendChild(overlay);
  const dismiss = () => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s";
    setTimeout(() => overlay.remove(), 300);
  };
  overlay.addEventListener("click", dismiss);
  setTimeout(dismiss, 3e3);
}

// src/screens/results.ts
function renderResults(container, params) {
  const { worldId, levelIndex, score, total, gameType } = params;
  const pct = Math.round(score / Math.max(1, total) * 100);
  const stars = pct >= 100 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
  const isPerfect = pct >= 100;
  const passed = pct >= 40;
  if (passed) {
    state.completeLevel(worldId, levelIndex, pct);
  }
  const newBadges = [];
  function checkBadge(id, condition) {
    if (condition && state.addBadge(id)) {
      const b = badges.find((x) => x.id === id);
      if (b)
        newBadges.push(b);
    }
  }
  checkBadge("first-step", state.getTotalLevelsCompleted() >= 1);
  checkBadge("quick-learner", isPerfect && levelIndex === 0);
  checkBadge("command-king", state.getWorldCompletion(2) >= 100);
  checkBadge("prompt-sage", isPerfect && gameType === "prompt-builder");
  checkBadge("interview-ready", gameType === "boss-battle" && passed);
  checkBadge("completionist", [1, 2, 3, 4].every((w) => state.getWorldCompletion(w) >= 100));
  checkBadge("speed-demon", isPerfect);
  checkBadge("practice-master", state.getStreak().current >= 7);
  checkBadge("unstoppable", state.getStreak().current >= 21);
  const worldComplete = state.getWorldCompletion(worldId) >= 100;
  let mascotTrigger = "correctAnswer";
  if (isPerfect)
    mascotTrigger = "perfectScore";
  else if (!passed)
    mascotTrigger = "retry";
  else if (worldComplete)
    mascotTrigger = "worldComplete";
  container.innerHTML = `
    ${renderHeader("\u7ED3\u679C Results", false)}
    <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
      ${renderMascot(mascotTrigger)}
      <div style="text-align:center;">
        <div class="stars" style="justify-content:center;font-size:var(--text-3xl);margin-bottom:var(--space-md);">
          ${[1, 2, 3].map((s) => `<span class="star ${s <= stars ? "earned" : ""}" style="animation:${s <= stars ? `bounceIn 0.3s ${s * 0.2}s both` : "none"}">\u2605</span>`).join("")}
        </div>
        <div style="font-size:var(--text-4xl);font-weight:700;color:${isPerfect ? "var(--gold)" : "var(--teal)"};">${pct}%</div>
        <p style="color:var(--text-secondary);margin-top:var(--space-xs);">${score}/${total} \u6B63\u786E</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">+${pct} XP</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);width:100%;">
        ${passed ? `<button class="btn btn-primary btn-block" id="next-level">\u4E0B\u4E00\u5173 Next Level \u2192</button>` : ""}
        <button class="btn btn-secondary btn-block" id="retry">\u518D\u8BD5\u4E00\u6B21 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">\u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    </div>
  `;
  newBadges.forEach((b, i) => {
    setTimeout(() => showBadgeToast(b), (i + 1) * 800);
  });
  if (isPerfect) {
    setTimeout(() => showHongbao(), 500);
    playSound("perfect");
  } else if (passed) {
    playSound("levelUp");
  } else {
    playSound("wrong");
  }
  container.querySelector("#next-level")?.addEventListener("click", () => {
    const nextLevel = levelIndex + 1;
    const totalLevels = state.getWorldLevelCount(worldId);
    if (nextLevel < totalLevels) {
      router.navigate(`/world/${worldId}`);
    } else if (worldId < 4) {
      router.navigate(`/world/${worldId + 1}`);
    } else {
      router.navigate("/");
    }
  });
  container.querySelector("#retry")?.addEventListener("click", () => {
    router.navigate(`/game/${gameType}/${worldId}/${levelIndex}`);
  });
  container.querySelector("#go-home")?.addEventListener("click", () => router.navigate("/"));
}

// src/screens/game-flash-match.ts
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderFlashMatch(container, worldId, levelIndex) {
  const TOTAL = 10;
  let pool = vocabulary.filter((v) => v.world === worldId);
  if (pool.length < TOTAL)
    pool = [...vocabulary];
  const cards = shuffle(pool).slice(0, TOTAL);
  let currentIndex = 0;
  let knownCount = 0;
  function renderCard() {
    if (currentIndex >= cards.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: knownCount,
        total: TOTAL,
        gameType: "flash-match"
      });
      return;
    }
    const v = cards[currentIndex];
    const progress = currentIndex + 1;
    container.innerHTML = `
      ${renderHeader("\u8BCD\u5361\u7EC3\u4E60 Flash Match", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${TOTAL}</span>
          <span>\u2713 ${knownCount}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress / TOTAL * 100}%"></div>
        </div>
        <div class="game-instruction">\u70B9\u51FB\u5361\u7247\u7FFB\u8F6C / Tap to flip</div>
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          <div class="flip-card" id="flashcard">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div style="font-size:var(--text-2xl);font-weight:700;">${v.en}</div>
              </div>
              <div class="flip-card-back">
                <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${v.zh}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-xs);">${v.pinyin}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-sm);line-height:1.5;text-align:center;">${v.explanation}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="game-footer" id="action-btns" style="visibility:hidden;">
          <div style="display:flex;gap:var(--space-sm);">
            <button class="btn btn-danger" id="btn-review" style="flex:1;">\u2717 \u590D\u4E60 Review</button>
            <button class="btn btn-primary" id="btn-know" style="flex:1;">\u2713 \u8BA4\u8BC6 Know it</button>
          </div>
        </div>
      </div>
    `;
    const card = container.querySelector("#flashcard");
    const actionBtns = container.querySelector("#action-btns");
    card.addEventListener("click", () => {
      if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        playSound("cardFlip");
        actionBtns.style.visibility = "visible";
      }
    });
    container.querySelector("#btn-know")?.addEventListener("click", () => {
      knownCount++;
      playSound("correct");
      currentIndex++;
      renderCard();
    });
    container.querySelector("#btn-review")?.addEventListener("click", () => {
      state.addToReviewQueue({ id: v.id, type: "vocab" });
      playSound("wrong");
      currentIndex++;
      renderCard();
    });
  }
  renderCard();
}

// src/screens/game-trivia.ts
function shuffle2(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function generateQuestionsFromVocab(worldId, count) {
  let pool = vocabulary.filter((v) => v.world === worldId);
  if (pool.length < 4)
    pool = [...vocabulary];
  const selected = shuffle2(pool).slice(0, count);
  return selected.map((term) => {
    const others = shuffle2(vocabulary.filter((v) => v.id !== term.id)).slice(0, 3);
    const options = shuffle2([term, ...others]);
    const correctIndex = options.findIndex((o) => o.id === term.id);
    return {
      question_zh: `\u300C${term.zh}\u300D\u7684\u82F1\u6587\u662F\u4EC0\u4E48\uFF1F`,
      question_en: `What is "${term.zh}" in English?`,
      options: options.map((o) => o.en),
      correctIndex,
      explanation: term.explanation
    };
  });
}
function renderTrivia(container, worldId, levelIndex) {
  const TOTAL = 10;
  const TIME_PER_QUESTION = 15;
  let questions = [];
  try {
    questions = generateQuestionsFromVocab(worldId, TOTAL);
  } catch {
    questions = generateQuestionsFromVocab(worldId, TOTAL);
  }
  let currentIndex = 0;
  let correctCount = 0;
  let timerInterval = null;
  function clearTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  function renderQuestion() {
    clearTimer();
    if (currentIndex >= questions.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: questions.length,
        gameType: "trivia"
      });
      return;
    }
    const q = questions[currentIndex];
    const progress = currentIndex + 1;
    const labels = ["A", "B", "C", "D"];
    container.innerHTML = `
      ${renderHeader("\u77E5\u8BC6\u95EE\u7B54 Trivia", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${questions.length}</span>
          <span>\u2713 ${correctCount}</span>
        </div>
        <div class="timer-bar">
          <div class="timer-bar-fill" id="timer-fill" style="width:100%"></div>
        </div>
        <div class="game-question">
          ${q.question_zh}
          <div class="game-question-sub">${q.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${q.options.map((opt, i) => `
              <button class="option-btn" data-index="${i}">
                <span class="option-label">${labels[i]}</span>
                <span>${opt}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback" style="display:none;padding:var(--space-md);border-radius:var(--radius-md);line-height:1.6;font-size:var(--text-sm);"></div>
        </div>
      </div>
    `;
    let timeLeft = TIME_PER_QUESTION * 10;
    const timerFill = container.querySelector("#timer-fill");
    timerInterval = setInterval(() => {
      timeLeft--;
      const pct = timeLeft / (TIME_PER_QUESTION * 10) * 100;
      timerFill.style.width = `${pct}%`;
      if (pct <= 20) {
        timerFill.className = "timer-bar-fill danger";
      } else if (pct <= 50) {
        timerFill.className = "timer-bar-fill warning";
      }
      if (timeLeft <= 0) {
        clearTimer();
        handleAnswer(-1);
      }
    }, 100);
    const optionBtns = container.querySelectorAll(".option-btn");
    optionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index || "-1");
        handleAnswer(idx);
      });
    });
    let answered = false;
    function handleAnswer(selectedIndex) {
      if (answered)
        return;
      answered = true;
      clearTimer();
      const isCorrect = selectedIndex === q.correctIndex;
      const feedback = container.querySelector("#feedback");
      const optBtns = container.querySelectorAll(".option-btn");
      optBtns.forEach((btn) => btn.classList.add("disabled"));
      optBtns.forEach((btn, i) => {
        if (i === q.correctIndex)
          btn.classList.add("correct");
        if (i === selectedIndex && !isCorrect)
          btn.classList.add("wrong");
      });
      if (isCorrect) {
        correctCount++;
        playSound("correct");
        feedback.style.display = "block";
        feedback.style.background = "rgba(0, 212, 170, 0.1)";
        feedback.style.border = "1px solid var(--green)";
        feedback.innerHTML = `<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${q.explanation}`;
      } else {
        playSound("wrong");
        const term = vocabulary.find((v) => v.en === q.options[q.correctIndex]);
        if (term) {
          state.addToReviewQueue({ id: term.id, type: "vocab" });
        }
        feedback.style.display = "block";
        feedback.style.background = "rgba(255, 107, 107, 0.1)";
        feedback.style.border = "1px solid var(--red)";
        const timeUp = selectedIndex === -1 ? "\u65F6\u95F4\u5230\uFF01 Time's up! " : "";
        feedback.innerHTML = `<strong>${timeUp}\u6B63\u786E\u7B54\u6848: ${q.options[q.correctIndex]}</strong><br>${q.explanation}`;
      }
      setTimeout(() => {
        currentIndex++;
        renderQuestion();
      }, 2500);
    }
  }
  renderQuestion();
}

// src/screens/game-charades.ts
init_commands();

// src/components/terminal.ts
function renderTerminal(preloadedCommand) {
  const prefilled = preloadedCommand ? preloadedCommand : "";
  return `
    <div class="terminal" data-terminal>
      <div class="terminal-output" data-terminal-output></div>
      <div class="terminal-input-line">
        <span class="terminal-prompt">$</span>
        <input
          type="text"
          class="terminal-input"
          data-terminal-input
          value="${prefilled}"
          placeholder="\u8F93\u5165\u547D\u4EE4... / Type a command..."
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <span class="terminal-cursor"></span>
      </div>
    </div>
  `;
}
function initTerminal(container) {
  const terminal = container.querySelector("[data-terminal]");
  if (!terminal)
    return;
  const output = terminal.querySelector("[data-terminal-output]");
  const input = terminal.querySelector("[data-terminal-input]");
  if (!output || !input)
    return;
  let commands2 = {};
  Promise.resolve().then(() => (init_commands(), commands_exports)).then((mod) => {
    if (mod.commands && Array.isArray(mod.commands)) {
      mod.commands.forEach((cmd) => {
        commands2[cmd.command.toLowerCase()] = { terminalResponse: cmd.terminalResponse };
      });
    } else if (mod.commands && typeof mod.commands === "object") {
      commands2 = mod.commands;
    }
  }).catch(() => {
  });
  function appendOutput(text, isCommand) {
    if (!output)
      return;
    const line = document.createElement("div");
    line.className = isCommand ? "terminal-line terminal-command" : "terminal-line terminal-response";
    if (isCommand) {
      line.textContent = `$ ${text}`;
    } else {
      line.innerHTML = text;
    }
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }
  function processCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    appendOutput(cmd, true);
    if (trimmed === "")
      return;
    const match = Object.keys(commands2).find((key) => {
      return trimmed === key.toLowerCase() || trimmed.startsWith(key.toLowerCase());
    });
    if (match) {
      appendOutput(commands2[match].terminalResponse);
    } else if (trimmed === "/help" || trimmed === "help") {
      const helpLines = Object.keys(commands2).map((k) => `  ${k}`).join("<br>");
      appendOutput(`\u53EF\u7528\u547D\u4EE4 / Available commands:<br>${helpLines || "  (loading...)"}`);
    } else {
      appendOutput("\u7801\u5C0F\u7801\u8BF4\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u6211\u8FD8\u4E0D\u8BA4\u8BC6\u54E6\uFF01\u8BD5\u8BD5 /help\uFF1F");
    }
  }
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = input.value;
      input.value = "";
      processCommand(value);
    }
  });
  terminal.addEventListener("click", () => {
    input.focus();
  });
}

// src/screens/game-charades.ts
function shuffle3(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderCharades(container, worldId, levelIndex) {
  const TOTAL = 8;
  const scenarios = shuffle3([...commands]).slice(0, TOTAL);
  let currentIndex = 0;
  let correctCount = 0;
  function renderScenario() {
    if (currentIndex >= scenarios.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: TOTAL,
        gameType: "charades"
      });
      return;
    }
    const cmd = scenarios[currentIndex];
    const progress = currentIndex + 1;
    const options = shuffle3([
      cmd.command + " \u2014 " + cmd.zhName,
      ...cmd.wrongChoices
    ]);
    const correctOption = cmd.command + " \u2014 " + cmd.zhName;
    const labels = ["A", "B", "C", "D"];
    container.innerHTML = `
      ${renderHeader("\u573A\u666F\u731C\u8C1C Charades", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${TOTAL}</span>
          <span>\u2713 ${correctCount}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress / TOTAL * 100}%"></div>
        </div>
        <div class="game-question">
          ${cmd.scenario}
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${options.map((opt, i) => `
              <button class="option-btn" data-index="${i}" data-text="${opt}">
                <span class="option-label">${labels[i]}</span>
                <span style="font-family:var(--font-mono);font-size:var(--text-sm);">${opt}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback-area" style="display:none;"></div>
        </div>
      </div>
    `;
    let answered = false;
    const optionBtns = container.querySelectorAll(".option-btn");
    optionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered)
          return;
        answered = true;
        const text = btn.dataset.text || "";
        const isCorrect = text === correctOption;
        const feedbackArea = container.querySelector("#feedback-area");
        optionBtns.forEach((b) => {
          b.classList.add("disabled");
          const bText = b.dataset.text || "";
          if (bText === correctOption)
            b.classList.add("correct");
          if (bText === text && !isCorrect)
            b.classList.add("wrong");
        });
        feedbackArea.style.display = "block";
        if (isCorrect) {
          correctCount++;
          playSound("correct");
          feedbackArea.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(0,212,170,0.1);border:1px solid var(--green);margin-bottom:var(--space-md);line-height:1.6;font-size:var(--text-sm);">
              <strong>\u6B63\u786E\uFF01 Correct!</strong><br>${cmd.zhDescription}
            </div>
            <button class="btn btn-secondary btn-block" id="try-terminal">\u8BD5\u8BD5\u770B Try It</button>
            <div id="terminal-sandbox" style="display:none;margin-top:var(--space-md);"></div>
            <button class="btn btn-primary btn-block" id="next-btn" style="margin-top:var(--space-sm);">\u4E0B\u4E00\u9898 Next \u2192</button>
          `;
          container.querySelector("#try-terminal")?.addEventListener("click", () => {
            const sandbox = container.querySelector("#terminal-sandbox");
            sandbox.style.display = "block";
            sandbox.innerHTML = renderTerminal(cmd.command);
            initTerminal(sandbox);
            container.querySelector("#try-terminal").style.display = "none";
          });
        } else {
          playSound("wrong");
          state.addToReviewQueue({ id: cmd.id, type: "command" });
          feedbackArea.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(255,107,107,0.1);border:1px solid var(--red);margin-bottom:var(--space-md);line-height:1.6;font-size:var(--text-sm);">
              <strong>\u6B63\u786E\u7B54\u6848: ${cmd.command}</strong><br>${cmd.zhDescription}
            </div>
            <button class="btn btn-primary btn-block" id="next-btn">\u4E0B\u4E00\u9898 Next \u2192</button>
          `;
        }
        container.querySelector("#next-btn")?.addEventListener("click", () => {
          currentIndex++;
          renderScenario();
        });
      });
    });
  }
  renderScenario();
}

// src/screens/game-drag-drop.ts
var PUZZLES = [
  {
    task_zh: "\u8C03\u8BD5\u4E00\u4E2A\u5931\u8D25\u7684\u6D4B\u8BD5",
    task_en: "Debug a failing test",
    steps: ["\u8BFB\u53D6\u9519\u8BEF\u4FE1\u606F Read error", "\u5206\u6790\u539F\u56E0 Analyze cause", "\u4FEE\u590D\u4EE3\u7801 Fix code", "\u8FD0\u884C\u6D4B\u8BD5 Run tests", "\u63D0\u4EA4\u4FEE\u590D Commit fix"]
  },
  {
    task_zh: "\u6DFB\u52A0\u4E00\u4E2A\u65B0\u529F\u80FD",
    task_en: "Add a new feature",
    steps: ["\u521B\u5EFA\u5206\u652F Create branch", "\u7F16\u5199\u4EE3\u7801 Write code", "\u6DFB\u52A0\u6D4B\u8BD5 Add tests", "\u4EE3\u7801\u5BA1\u67E5 Code review", "\u5408\u5E76\u5206\u652F Merge branch"]
  },
  {
    task_zh: "\u90E8\u7F72\u9879\u76EE\u5230\u751F\u4EA7\u73AF\u5883",
    task_en: "Deploy to production",
    steps: ["\u8FD0\u884C\u6D4B\u8BD5 Run tests", "\u6784\u5EFA\u9879\u76EE Build project", "\u68C0\u67E5\u914D\u7F6E Check config", "\u90E8\u7F72\u4E0A\u7EBF Deploy", "\u9A8C\u8BC1\u8FD0\u884C Verify live"]
  },
  {
    task_zh: "\u4FEE\u590D\u4E00\u4E2A\u7D27\u6025 Bug",
    task_en: "Fix a critical bug",
    steps: ["\u590D\u73B0\u95EE\u9898 Reproduce bug", "\u5B9A\u4F4D\u4EE3\u7801 Locate code", "\u7F16\u5199\u4FEE\u590D Write fix", "\u6D4B\u8BD5\u4FEE\u590D Test fix", "\u70ED\u4FEE\u590D\u90E8\u7F72 Hotfix deploy"]
  },
  {
    task_zh: "\u91CD\u6784\u4E00\u6BB5\u65E7\u4EE3\u7801",
    task_en: "Refactor legacy code",
    steps: ["\u7406\u89E3\u73B0\u6709\u903B\u8F91 Understand logic", "\u7F16\u5199\u6D4B\u8BD5 Write tests", "\u91CD\u6784\u4EE3\u7801 Refactor", "\u8FD0\u884C\u6D4B\u8BD5 Run tests", "\u63D0\u4EA4\u66F4\u6539 Commit changes"]
  }
];
function shuffle4(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderDragDrop(container, worldId, levelIndex) {
  const TOTAL = 5;
  const puzzles = shuffle4([...PUZZLES]).slice(0, TOTAL);
  let currentIndex = 0;
  let correctCount = 0;
  function renderPuzzle() {
    if (currentIndex >= puzzles.length) {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: TOTAL,
        gameType: "drag-drop"
      });
      return;
    }
    const puzzle = puzzles[currentIndex];
    const progress = currentIndex + 1;
    const shuffledSteps = shuffle4([...puzzle.steps]);
    const placedSteps = new Array(puzzle.steps.length).fill(null);
    render();
    function render() {
      const availableSteps = shuffledSteps.filter((s) => !placedSteps.includes(s));
      container.innerHTML = `
        ${renderHeader("\u6D41\u7A0B\u6392\u5E8F Drag & Drop", true)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>${progress}/${TOTAL}</span>
            <span>\u2713 ${correctCount}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${progress / TOTAL * 100}%"></div>
          </div>
          <div class="game-question">
            ${puzzle.task_zh}
            <div class="game-question-sub">${puzzle.task_en}</div>
          </div>
          <div class="game-instruction">\u70B9\u51FB\u547D\u4EE4\u5757\u653E\u5165\u4E0B\u4E00\u4E2A\u7A7A\u69FD / Tap to place in next slot</div>
          <div class="game-body">
            <div class="workflow-slots" id="slots">
              ${placedSteps.map((step, i) => `
                <div class="workflow-slot">
                  <span class="slot-number">${i + 1}</span>
                  <div class="drop-zone ${step ? "filled" : ""}" data-slot="${i}">
                    ${step || ""}
                  </div>
                </div>
              `).join("")}
            </div>
            <div class="block-tray" id="tray">
              ${availableSteps.map((step) => `
                <div class="prompt-block" data-step="${step}">${step}</div>
              `).join("")}
            </div>
          </div>
          <div class="game-footer" id="footer">
            <button class="btn btn-secondary btn-block" id="btn-reset">\u91CD\u7F6E Reset</button>
            <button class="btn btn-primary btn-block" id="btn-submit" ${availableSteps.length > 0 ? "disabled" : ""}>\u68C0\u67E5 Check</button>
          </div>
          <div id="feedback" style="display:none;"></div>
        </div>
      `;
      container.querySelectorAll(".prompt-block").forEach((block) => {
        block.addEventListener("click", () => {
          const stepText = block.dataset.step || "";
          const nextEmpty = placedSteps.indexOf(null);
          if (nextEmpty !== -1) {
            placedSteps[nextEmpty] = stepText;
            playSound("keystroke");
            render();
          }
        });
      });
      container.querySelectorAll(".drop-zone.filled").forEach((zone) => {
        zone.addEventListener("click", () => {
          const slotIdx = parseInt(zone.dataset.slot || "-1");
          if (slotIdx >= 0 && placedSteps[slotIdx]) {
            placedSteps[slotIdx] = null;
            playSound("keystroke");
            render();
          }
        });
      });
      container.querySelector("#btn-reset")?.addEventListener("click", () => {
        placedSteps.fill(null);
        render();
      });
      container.querySelector("#btn-submit")?.addEventListener("click", () => {
        const isCorrect = placedSteps.every((s, i) => s === puzzle.steps[i]);
        const feedback = container.querySelector("#feedback");
        feedback.style.display = "block";
        if (isCorrect) {
          correctCount++;
          playSound("correct");
          feedback.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(0,212,170,0.1);border:1px solid var(--green);text-align:center;line-height:1.6;">
              <strong>\u6B63\u786E\uFF01 Correct!</strong><br>\u5B8C\u7F8E\u7684\u6D41\u7A0B\u987A\u5E8F\uFF01
            </div>
          `;
        } else {
          playSound("wrong");
          feedback.innerHTML = `
            <div style="padding:var(--space-md);border-radius:var(--radius-md);background:rgba(255,107,107,0.1);border:1px solid var(--red);line-height:1.6;font-size:var(--text-sm);">
              <strong>\u6B63\u786E\u987A\u5E8F Correct order:</strong><br>
              ${puzzle.steps.map((s, i) => `${i + 1}. ${s}`).join("<br>")}
            </div>
          `;
        }
        const footer = container.querySelector("#footer");
        footer.innerHTML = `<button class="btn btn-primary btn-block" id="next-btn">\u4E0B\u4E00\u9898 Next \u2192</button>`;
        container.querySelector("#next-btn")?.addEventListener("click", () => {
          currentIndex++;
          renderPuzzle();
        });
      });
    }
  }
  renderPuzzle();
}

// src/screens/game-memory-match.ts
init_commands();
function shuffle5(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderMemoryMatch(container, worldId, levelIndex) {
  const PAIRS = 8;
  const selected = shuffle5([...commands]).slice(0, PAIRS);
  const cards = shuffle5([
    ...selected.map((cmd) => ({
      id: cmd.id + "-en",
      pairId: cmd.id,
      text: cmd.command,
      type: "en"
    })),
    ...selected.map((cmd) => ({
      id: cmd.id + "-zh",
      pairId: cmd.id,
      text: cmd.zhName,
      type: "zh"
    }))
  ]);
  let flippedCards = [];
  let matchedPairs = [];
  let moves = 0;
  let startTime = Date.now();
  let lockBoard = false;
  function render() {
    const elapsed = Math.floor((Date.now() - startTime) / 1e3);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    container.innerHTML = `
      ${renderHeader("\u8BB0\u5FC6\u914D\u5BF9 Memory Match", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u6B65\u6570 Moves: ${moves}</span>
          <span>\u914D\u5BF9 Pairs: ${matchedPairs.length}/${PAIRS}</span>
          <span id="timer">${mins}:${secs.toString().padStart(2, "0")}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${matchedPairs.length / PAIRS * 100}%"></div>
        </div>
        <div class="game-body" style="justify-content:center;">
          <div class="memory-grid">
            ${cards.map((card, i) => {
      const isFlipped = flippedCards.includes(i);
      const isMatched = matchedPairs.includes(card.pairId);
      const classes = ["memory-card"];
      if (isFlipped || isMatched)
        classes.push("flipped");
      if (isMatched)
        classes.push("matched");
      return `
                <div class="${classes.join(" ")}" data-index="${i}">
                  <div class="memory-card-inner">
                    <div class="memory-card-front">?</div>
                    <div class="memory-card-back" style="font-size:${card.type === "en" ? "var(--text-sm)" : "var(--text-base)"};">
                      ${card.text}
                    </div>
                  </div>
                </div>
              `;
    }).join("")}
          </div>
        </div>
      </div>
    `;
    container.querySelectorAll(".memory-card").forEach((el) => {
      el.addEventListener("click", () => {
        if (lockBoard)
          return;
        const idx = parseInt(el.dataset.index || "-1");
        if (idx < 0 || flippedCards.includes(idx) || matchedPairs.includes(cards[idx].pairId))
          return;
        flippedCards.push(idx);
        el.classList.add("flipped");
        playSound("cardFlip");
        if (flippedCards.length === 2) {
          moves++;
          lockBoard = true;
          const [first, second] = flippedCards;
          const card1 = cards[first];
          const card2 = cards[second];
          if (card1.pairId === card2.pairId && card1.type !== card2.type) {
            matchedPairs.push(card1.pairId);
            playSound("correct");
            flippedCards = [];
            lockBoard = false;
            container.querySelectorAll(`.memory-card[data-index="${first}"], .memory-card[data-index="${second}"]`).forEach(
              (c) => c.classList.add("matched")
            );
            if (matchedPairs.length === PAIRS) {
              const totalTime = Math.floor((Date.now() - startTime) / 1e3);
              const score = Math.max(20, 100 - (moves - PAIRS) * 5);
              setTimeout(() => {
                renderResults(container, {
                  worldId,
                  levelIndex,
                  score,
                  total: 100,
                  gameType: "memory-match"
                });
              }, 800);
            }
          } else {
            setTimeout(() => {
              flippedCards = [];
              lockBoard = false;
              render();
            }, 800);
          }
        }
      });
    });
  }
  const timerInterval = setInterval(() => {
    const timerEl = container.querySelector("#timer");
    if (!timerEl) {
      clearInterval(timerInterval);
      return;
    }
    const elapsed = Math.floor((Date.now() - startTime) / 1e3);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
  }, 1e3);
  render();
}

// src/data/prompts.ts
var promptExamples = [
  {
    id: "pe1",
    task_zh: "\u7ED9\u9879\u76EE\u6DFB\u52A0\u7528\u6237\u767B\u5F55\u529F\u80FD",
    badPrompt: "\u5E2E\u6211\u52A0\u4E2A\u767B\u5F55",
    goodPrompt: "\u5728 src/auth.ts \u4E2D\u6DFB\u52A0\u4E00\u4E2A login \u51FD\u6570\uFF0C\u63A5\u6536 email \u548C password \u53C2\u6570\uFF0C\u4F7F\u7528 bcrypt \u9A8C\u8BC1\u5BC6\u7801\uFF0C\u8FD4\u56DE JWT token\u3002\u53C2\u8003\u9879\u76EE\u4E2D\u5DF2\u6709\u7684 register \u51FD\u6570\u7684\u98CE\u683C\u3002",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "\u597D\u7684\u63D0\u793A\u8BCD\u6307\u5B9A\u4E86\u6587\u4EF6\u4F4D\u7F6E\u3001\u51FD\u6570\u540D\u3001\u53C2\u6570\u3001\u6280\u672F\u5B9E\u73B0\u65B9\u6848\uFF0C\u8FD8\u63D0\u5230\u4E86\u53C2\u8003\u5DF2\u6709\u4EE3\u7801\u7684\u98CE\u683C\u3002Claude Code \u80FD\u7CBE\u786E\u6267\u884C\u3002"
  },
  {
    id: "pe2",
    task_zh: "\u4FEE\u590D\u4E00\u4E2A\u62A5\u9519",
    badPrompt: "\u4EE3\u7801\u6709 bug \u5E2E\u6211\u4FEE",
    goodPrompt: "\u8FD0\u884C npm test \u65F6\u62A5\u9519 TypeError: Cannot read property 'name' of undefined\uFF0C\u51FA\u73B0\u5728 src/utils.ts \u7B2C 42 \u884C\u3002\u8BF7\u5206\u6790\u539F\u56E0\u5E76\u4FEE\u590D\u3002",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "\u628A\u5B8C\u6574\u7684\u62A5\u9519\u4FE1\u606F\u3001\u6587\u4EF6\u4F4D\u7F6E\u548C\u884C\u53F7\u90FD\u7ED9\u4E86 Claude Code\uFF0C\u5B83\u4E0D\u9700\u8981\u731C\u6D4B\u5C31\u80FD\u76F4\u63A5\u5B9A\u4F4D\u95EE\u9898\u3002"
  },
  {
    id: "pe3",
    task_zh: "\u91CD\u6784\u4E00\u4E2A\u590D\u6742\u51FD\u6570",
    badPrompt: "\u8FD9\u4E2A\u51FD\u6570\u592A\u4E71\u4E86\uFF0C\u6539\u4E00\u4E0B",
    goodPrompt: "\u91CD\u6784 src/parser.ts \u4E2D\u7684 parseConfig \u51FD\u6570\u3002\u5F53\u524D\u51FD\u6570\u6709 120 \u884C\uFF0C\u8BF7\u62C6\u5206\u6210\u66F4\u5C0F\u7684\u8F85\u52A9\u51FD\u6570\uFF0C\u6BCF\u4E2A\u4E0D\u8D85\u8FC7 30 \u884C\u3002\u4FDD\u6301\u6240\u6709\u73B0\u6709\u6D4B\u8BD5\u901A\u8FC7\u3002",
    rating: { clarity: 5, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "\u660E\u786E\u4E86\u91CD\u6784\u76EE\u6807\uFF08\u62C6\u5206\u51FD\u6570\uFF09\u3001\u5177\u4F53\u6807\u51C6\uFF08\u6BCF\u4E2A\u4E0D\u8D85\u8FC7 30 \u884C\uFF09\u548C\u7EA6\u675F\u6761\u4EF6\uFF08\u6D4B\u8BD5\u8981\u901A\u8FC7\uFF09\uFF0CClaude Code \u6709\u6E05\u6670\u7684\u65B9\u5411\u3002"
  },
  {
    id: "pe4",
    task_zh: "\u4E3A\u51FD\u6570\u6DFB\u52A0 TypeScript \u7C7B\u578B",
    badPrompt: "\u52A0\u7C7B\u578B",
    goodPrompt: "\u7ED9 src/api.ts \u4E2D\u6240\u6709\u5BFC\u51FA\u51FD\u6570\u6DFB\u52A0 TypeScript \u7C7B\u578B\u58F0\u660E\u3002\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u90FD\u8981\u6709\u660E\u786E\u7C7B\u578B\uFF0C\u4E0D\u8981\u7528 any\u3002\u53C2\u8003\u9879\u76EE\u7684 tsconfig.json \u4E2D\u7684 strict \u914D\u7F6E\u3002",
    rating: { clarity: 4, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "\u6307\u5B9A\u4E86\u8303\u56F4\uFF08\u6240\u6709\u5BFC\u51FA\u51FD\u6570\uFF09\u3001\u8981\u6C42\uFF08\u4E0D\u7528 any\uFF09\u548C\u53C2\u8003\u6587\u4EF6\uFF08tsconfig.json\uFF09\uFF0CClaude Code \u80FD\u6309\u89C4\u8303\u6267\u884C\u3002"
  },
  {
    id: "pe5",
    task_zh: "\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 API \u7AEF\u70B9",
    badPrompt: "\u5199\u4E2A API",
    goodPrompt: "\u5728 src/routes/users.ts \u4E2D\u65B0\u589E\u4E00\u4E2A GET /api/users/:id \u7AEF\u70B9\u3002\u8FD4\u56DE\u7528\u6237\u4FE1\u606F\uFF08name, email, createdAt\uFF09\uFF0C\u5982\u679C\u7528\u6237\u4E0D\u5B58\u5728\u8FD4\u56DE 404\u3002\u4F7F\u7528\u9879\u76EE\u4E2D\u5DF2\u6709\u7684 db.query \u65B9\u6CD5\u67E5\u8BE2\u6570\u636E\u5E93\u3002",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "\u5B8C\u7F8E\u7684\u63D0\u793A\u8BCD\uFF1A\u6307\u5B9A\u4E86\u6587\u4EF6\u3001\u8DEF\u5F84\u3001HTTP \u65B9\u6CD5\u3001\u8FD4\u56DE\u5B57\u6BB5\u3001\u9519\u8BEF\u5904\u7406\u548C\u6570\u636E\u5E93\u65B9\u6CD5\u3002Claude Code \u51E0\u4E4E\u4E0D\u9700\u8981\u989D\u5916\u95EE\u4F60\u3002"
  },
  {
    id: "pe6",
    task_zh: "\u4F18\u5316\u9875\u9762\u52A0\u8F7D\u901F\u5EA6",
    badPrompt: "\u7F51\u7AD9\u592A\u6162\u4E86",
    goodPrompt: "\u9996\u9875\u52A0\u8F7D\u9700\u8981 5 \u79D2\uFF0C\u4E3B\u8981\u74F6\u9888\u662F src/components/Dashboard.tsx \u4E2D\u4E00\u6B21\u6027\u52A0\u8F7D\u4E86\u6240\u6709\u6570\u636E\u3002\u8BF7\u6539\u4E3A\u61D2\u52A0\u8F7D\uFF1A\u5148\u52A0\u8F7D\u9996\u5C4F\u6570\u636E\uFF0C\u6EDA\u52A8\u65F6\u518D\u52A0\u8F7D\u66F4\u591A\u3002\u4F7F\u7528 Intersection Observer API\u3002",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "\u63D0\u4F9B\u4E86\u6027\u80FD\u6307\u6807\uFF085 \u79D2\uFF09\u3001\u95EE\u9898\u5B9A\u4F4D\uFF08Dashboard.tsx\uFF09\u3001\u89E3\u51B3\u65B9\u6848\uFF08\u61D2\u52A0\u8F7D\uFF09\u548C\u6280\u672F\u5B9E\u73B0\uFF08Intersection Observer\uFF09\uFF0C\u975E\u5E38\u6E05\u6670\u3002"
  },
  {
    id: "pe7",
    task_zh: "\u5199\u5355\u5143\u6D4B\u8BD5",
    badPrompt: "\u5199\u6D4B\u8BD5",
    goodPrompt: "\u4E3A src/utils/formatDate.ts \u4E2D\u7684 formatDate \u51FD\u6570\u5199\u5355\u5143\u6D4B\u8BD5\u3002\u8986\u76D6\u4EE5\u4E0B\u573A\u666F\uFF1A\u6709\u6548\u65E5\u671F\u3001\u65E0\u6548\u8F93\u5165\uFF08null, undefined, \u7A7A\u5B57\u7B26\u4E32\uFF09\u3001\u4E0D\u540C\u65F6\u533A\u3002\u4F7F\u7528\u9879\u76EE\u5DF2\u6709\u7684 vitest \u6846\u67B6\u3002",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "\u5217\u51FA\u4E86\u5177\u4F53\u7684\u6D4B\u8BD5\u573A\u666F\u548C\u8FB9\u754C\u6761\u4EF6\uFF0C\u6307\u5B9A\u4E86\u6D4B\u8BD5\u6846\u67B6\u3002Claude Code \u80FD\u5199\u51FA\u5168\u9762\u7684\u6D4B\u8BD5\u7528\u4F8B\u3002"
  },
  {
    id: "pe8",
    task_zh: "\u6DFB\u52A0\u6697\u8272\u4E3B\u9898\u652F\u6301",
    badPrompt: "\u52A0\u4E2A\u6697\u8272\u6A21\u5F0F",
    goodPrompt: "\u4E3A\u5E94\u7528\u6DFB\u52A0\u6697\u8272\u4E3B\u9898\u5207\u6362\u3002\u5728 src/styles/globals.css \u4E2D\u7528 CSS \u53D8\u91CF\u5B9A\u4E49\u989C\u8272\uFF0C\u5728 src/components/Header.tsx \u6DFB\u52A0\u5207\u6362\u6309\u94AE\uFF0C\u7528 localStorage \u8BB0\u4F4F\u7528\u6237\u504F\u597D\u3002\u5F53\u524D\u6D45\u8272\u4E3B\u9898\u8272\u53F7\uFF1A\u80CC\u666F #FFFFFF\uFF0C\u6587\u5B57 #1A1A1A\u3002",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "\u6307\u5B9A\u4E86\u5B9E\u73B0\u65B9\u6848\uFF08CSS \u53D8\u91CF\uFF09\u3001\u4FEE\u6539\u6587\u4EF6\u3001\u6301\u4E45\u5316\u65B9\u5F0F\uFF08localStorage\uFF09\u548C\u73B0\u6709\u914D\u8272\uFF0CClaude Code \u6709\u5B8C\u6574\u4FE1\u606F\u6765\u5B9E\u73B0\u3002"
  },
  {
    id: "pe9",
    task_zh: "\u4EE3\u7801\u5BA1\u67E5",
    badPrompt: "\u770B\u770B\u6709\u6CA1\u6709\u95EE\u9898",
    goodPrompt: "\u5BA1\u67E5 src/services/payment.ts \u4E2D\u7684 processPayment \u51FD\u6570\u3002\u91CD\u70B9\u68C0\u67E5\uFF1A1) \u9519\u8BEF\u5904\u7406\u662F\u5426\u5B8C\u5584 2) \u662F\u5426\u6709\u5B89\u5168\u6F0F\u6D1E 3) \u662F\u5426\u6B63\u786E\u5904\u7406\u4E86\u5E76\u53D1\u8BF7\u6C42\u3002",
    rating: { clarity: 5, specificity: 4, context: 3, tone: 5 },
    explanation_zh: "\u6307\u5B9A\u4E86\u5BA1\u67E5\u6587\u4EF6\u548C\u4E09\u4E2A\u91CD\u70B9\u5173\u6CE8\u65B9\u5411\uFF0CClaude Code \u53EF\u4EE5\u6709\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u4EE3\u7801\u5BA1\u67E5\u3002"
  },
  {
    id: "pe10",
    task_zh: "\u914D\u7F6E CI/CD \u6D41\u6C34\u7EBF",
    badPrompt: "\u5E2E\u6211\u81EA\u52A8\u5316\u90E8\u7F72",
    goodPrompt: "\u521B\u5EFA .github/workflows/deploy.yml \u914D\u7F6E GitHub Actions\uFF1Apush \u5230 main \u5206\u652F\u65F6\u81EA\u52A8\u8FD0\u884C npm test\uFF0C\u6D4B\u8BD5\u901A\u8FC7\u540E\u7528 wrangler \u90E8\u7F72\u5230 Cloudflare Pages\u3002\u9879\u76EE\u540D\u662F my-app\u3002",
    rating: { clarity: 5, specificity: 5, context: 5, tone: 5 },
    explanation_zh: "\u5305\u542B\u4E86\u6587\u4EF6\u8DEF\u5F84\u3001\u89E6\u53D1\u6761\u4EF6\u3001\u6B65\u9AA4\uFF08\u6D4B\u8BD5\u2192\u90E8\u7F72\uFF09\u3001\u5DE5\u5177\uFF08wrangler\uFF09\u548C\u9879\u76EE\u540D\uFF0CClaude Code \u80FD\u751F\u6210\u5B8C\u6574\u7684 CI/CD \u914D\u7F6E\u3002"
  },
  {
    id: "pe11",
    task_zh: "\u89E3\u91CA\u4E00\u6BB5\u4EE3\u7801",
    badPrompt: "\u8FD9\u662F\u4EC0\u4E48",
    goodPrompt: "\u8BF7\u9010\u884C\u89E3\u91CA src/middleware/auth.ts \u4E2D\u7684 verifyToken \u4E2D\u95F4\u4EF6\u51FD\u6570\u3002\u6211\u662F\u65B0\u624B\uFF0C\u8BF7\u7528\u7B80\u5355\u7684\u8BED\u8A00\uFF0C\u5E76\u89E3\u91CA\u4E3A\u4EC0\u4E48\u6BCF\u4E00\u6B65\u662F\u5FC5\u8981\u7684\u3002",
    rating: { clarity: 5, specificity: 4, context: 4, tone: 5 },
    explanation_zh: "\u8BF4\u660E\u4E86\u8981\u89E3\u91CA\u7684\u5177\u4F53\u51FD\u6570\u3001\u89E3\u91CA\u65B9\u5F0F\uFF08\u9010\u884C\uFF09\u3001\u4F60\u7684\u6C34\u5E73\uFF08\u65B0\u624B\uFF09\u548C\u671F\u671B\uFF08\u7B80\u5355\u8BED\u8A00\uFF09\uFF0CClaude Code \u80FD\u7ED9\u51FA\u5408\u9002\u7684\u89E3\u91CA\u3002"
  },
  {
    id: "pe12",
    task_zh: "\u8FC1\u79FB\u6570\u636E\u5E93",
    badPrompt: "\u6362\u4E2A\u6570\u636E\u5E93",
    goodPrompt: "\u628A\u9879\u76EE\u4ECE SQLite \u8FC1\u79FB\u5230 PostgreSQL\u3002\u9700\u8981\u4FEE\u6539\u7684\u6587\u4EF6\uFF1Asrc/db/connection.ts\uFF08\u8FDE\u63A5\u914D\u7F6E\uFF09\u3001src/db/queries.ts\uFF08SQL \u8BED\u6CD5\u5DEE\u5F02\uFF09\u3002\u4FDD\u6301\u6240\u6709\u73B0\u6709\u7684 API \u63A5\u53E3\u4E0D\u53D8\u3002",
    rating: { clarity: 5, specificity: 5, context: 4, tone: 5 },
    explanation_zh: "\u6307\u5B9A\u4E86\u8FC1\u79FB\u65B9\u5411\u3001\u9700\u8981\u4FEE\u6539\u7684\u6587\u4EF6\u53CA\u539F\u56E0\u3001\u7EA6\u675F\u6761\u4EF6\uFF08API \u4E0D\u53D8\uFF09\u3002Claude Code \u53EF\u4EE5\u7CFB\u7EDF\u6027\u5730\u5B8C\u6210\u8FC1\u79FB\u3002"
  }
];

// src/screens/game-prompt-builder.ts
function shuffle6(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderPromptBuilder(container, worldId, levelIndex) {
  const TOTAL_ROUNDS = 5;
  const examples = shuffle6(promptExamples).slice(0, TOTAL_ROUNDS);
  let round = 0;
  let score = 0;
  function renderRound() {
    const ex = examples[round];
    const blocks = ex.goodPrompt.split(/\s+/);
    const shuffled = shuffle6(blocks);
    const assembled = [];
    container.innerHTML = `
      ${renderHeader("\u63D0\u793A\u8BCD\u62FC\u88C5 Prompt Builder", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${round + 1}/${TOTAL_ROUNDS} \u9898</span>
          <span>\u5F97\u5206: ${score}/${TOTAL_ROUNDS}</span>
        </div>
        <div class="game-question">${ex.task_zh}</div>
        <div class="game-instruction">\u628A\u4E0B\u9762\u7684\u8BCD\u5757\u62FC\u6210\u4E00\u4E2A\u597D\u7684\u63D0\u793A\u8BCD</div>
        <div class="game-body">
          <div class="prompt-assembly" id="assembly">
            <span style="color:var(--text-muted);font-size:var(--text-sm);" id="assembly-placeholder">\u70B9\u51FB\u4E0B\u65B9\u8BCD\u5757\u62FC\u51FA\u63D0\u793A\u8BCD...</span>
          </div>
          <div class="block-tray" id="tray">
            ${shuffled.map((b, i) => `<div class="prompt-block" data-index="${i}" data-word="${b}">${b}</div>`).join("")}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn" disabled>\u63D0\u4EA4 Submit</button>
        </div>
      </div>
    `;
    const tray = container.querySelector("#tray");
    const assembly = container.querySelector("#assembly");
    const submitBtn = container.querySelector("#submit-btn");
    const placeholder = container.querySelector("#assembly-placeholder");
    function updatePlaceholder() {
      if (placeholder) {
        placeholder.style.display = assembled.length > 0 ? "none" : "";
      }
      submitBtn.disabled = assembled.length === 0;
    }
    tray.addEventListener("click", (e) => {
      const block = e.target.closest(".prompt-block");
      if (!block || block.classList.contains("placed"))
        return;
      playSound("keystroke");
      block.classList.add("placed");
      const word = block.dataset.word;
      assembled.push(word);
      const aBlock = document.createElement("div");
      aBlock.className = "prompt-block";
      aBlock.textContent = word;
      aBlock.dataset.trayIndex = block.dataset.index;
      assembly.appendChild(aBlock);
      aBlock.addEventListener("click", () => {
        playSound("keystroke");
        const idx = assembled.indexOf(word);
        if (idx !== -1)
          assembled.splice(idx, 1);
        aBlock.remove();
        block.classList.remove("placed");
        updatePlaceholder();
      });
      updatePlaceholder();
    });
    submitBtn.addEventListener("click", () => {
      const correctBlocks = blocks;
      let correctCount = 0;
      const total = correctBlocks.length;
      for (let i = 0; i < Math.min(assembled.length, total); i++) {
        if (assembled[i] === correctBlocks[i])
          correctCount++;
      }
      const accuracy = correctCount / total;
      const passed = accuracy >= 0.8;
      if (passed) {
        score++;
        playSound("correct");
      } else {
        playSound("wrong");
        state.addToReviewQueue({ id: ex.id, type: "prompt" });
      }
      const r = ex.rating;
      const ratingLabels = [
        ["\u6E05\u6670\u5EA6 Clarity", r.clarity],
        ["\u5177\u4F53\u6027 Specificity", r.specificity],
        ["\u4E0A\u4E0B\u6587 Context", r.context],
        ["\u8BED\u6C14 Tone", r.tone]
      ];
      container.innerHTML = `
        ${renderHeader("\u63D0\u793A\u8BCD\u62FC\u88C5 Prompt Builder", true)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>\u7B2C ${round + 1}/${TOTAL_ROUNDS} \u9898</span>
            <span>\u5F97\u5206: ${score}/${TOTAL_ROUNDS}</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${passed ? '<span style="color:var(--green);">\u6B63\u786E!</span>' : '<span style="color:var(--red);">\u518D\u52A0\u6CB9!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4F60\u7684\u62FC\u88C5:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${assembled.join(" ")}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u53C2\u8003\u7B54\u6848:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${ex.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-sm);">\u63D0\u793A\u8BCD\u8BC4\u5206 Rating</p>
            <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
              ${ratingLabels.map(([label, val]) => `
                <div style="display:flex;align-items:center;gap:var(--space-sm);">
                  <span style="font-size:var(--text-xs);color:var(--text-secondary);min-width:100px;">${label}</span>
                  <div class="progress-bar" style="flex:1;">
                    <div class="progress-bar-fill" style="width:${val * 20}%;"></div>
                  </div>
                  <span style="font-size:var(--text-xs);color:var(--teal);min-width:24px;">${val}/5</span>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="game-footer">
            <button class="btn btn-primary btn-block" id="next-btn">${round + 1 < TOTAL_ROUNDS ? "\u4E0B\u4E00\u9898 Next" : "\u67E5\u770B\u7ED3\u679C Results"}</button>
          </div>
        </div>
      `;
      container.querySelector("#next-btn").addEventListener("click", () => {
        round++;
        if (round < TOTAL_ROUNDS) {
          renderRound();
        } else {
          renderResults(container, { worldId, levelIndex, score, total: TOTAL_ROUNDS, gameType: "prompt-builder" });
        }
      });
    });
  }
  renderRound();
}

// src/screens/game-prompt-repair.ts
function shuffle7(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderPromptRepair(container, worldId, levelIndex) {
  const TOTAL_ROUNDS = 5;
  const examples = shuffle7(promptExamples).slice(0, TOTAL_ROUNDS);
  let round = 0;
  let score = 0;
  function renderRound() {
    const ex = examples[round];
    const badWords = ex.badPrompt.split(/\s+/);
    const goodWords = ex.goodPrompt.split(/\s+/);
    const badSet = new Set(badWords.map((w) => w.toLowerCase()));
    const bankWords = goodWords.filter((w) => !badSet.has(w.toLowerCase()));
    const shuffledBank = shuffle7(bankWords);
    const tokenStates = badWords.map((w) => ({ word: w, removed: false }));
    const insertedWords = [];
    container.innerHTML = `
      ${renderHeader("\u63D0\u793A\u8BCD\u4FEE\u590D Prompt Repair", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${round + 1}/${TOTAL_ROUNDS} \u9898</span>
          <span>\u5F97\u5206: ${score}/${TOTAL_ROUNDS}</span>
        </div>
        <div class="game-question">${ex.task_zh}</div>
        <div class="game-instruction">\u4FEE\u590D\u4E0B\u9762\u7684\u63D0\u793A\u8BCD\uFF1A\u70B9\u51FB\u5220\u9664\u591A\u4F59\u7684\u8BCD\uFF0C\u4ECE\u8BCD\u5E93\u6DFB\u52A0\u7F3A\u5C11\u7684\u8BCD</div>
        <div class="game-body">
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">\u70B9\u51FB\u8BCD\u8BED\u5207\u6362\u5220\u9664\u72B6\u6001</p>
          <div class="editable-prompt" id="editable">
            ${badWords.map((w, i) => `<span class="word-token" data-index="${i}">${w}</span>`).join("")}
          </div>
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">\u8BCD\u5E93 \u2014 \u70B9\u51FB\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u672B\u5C3E</p>
          <div class="word-bank" id="bank">
            ${shuffledBank.map((w, i) => `<span class="word-token" data-bank="${i}" data-word="${w}">${w}</span>`).join("")}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn">\u63D0\u4EA4 Submit</button>
        </div>
      </div>
    `;
    const editable = container.querySelector("#editable");
    const bank = container.querySelector("#bank");
    editable.addEventListener("click", (e) => {
      const token = e.target.closest(".word-token");
      if (!token)
        return;
      const idx = token.dataset.index;
      const bankIdx = token.dataset.bank;
      if (idx !== void 0) {
        const i = parseInt(idx);
        tokenStates[i].removed = !tokenStates[i].removed;
        token.classList.toggle("removed", tokenStates[i].removed);
        playSound("keystroke");
      } else if (bankIdx !== void 0) {
        playSound("keystroke");
        const word = token.dataset.word;
        const insIdx = insertedWords.findIndex((w) => w.word === word);
        if (insIdx !== -1)
          insertedWords.splice(insIdx, 1);
        token.remove();
        const bankToken = bank.querySelector(`[data-bank="${bankIdx}"]`);
        if (bankToken) {
          bankToken.classList.remove("selected");
          bankToken.style.display = "";
        }
      }
    });
    bank.addEventListener("click", (e) => {
      const token = e.target.closest(".word-token");
      if (!token || token.classList.contains("selected"))
        return;
      playSound("keystroke");
      const word = token.dataset.word;
      const bankIdx = token.dataset.bank;
      token.classList.add("selected");
      token.style.display = "none";
      insertedWords.push({ word, afterIndex: tokenStates.length });
      const newToken = document.createElement("span");
      newToken.className = "word-token selected";
      newToken.textContent = word;
      newToken.dataset.bank = bankIdx;
      newToken.dataset.word = word;
      editable.appendChild(newToken);
    });
    container.querySelector("#submit-btn").addEventListener("click", () => {
      const resultWords = [];
      tokenStates.forEach((t) => {
        if (!t.removed)
          resultWords.push(t.word);
      });
      insertedWords.forEach((w) => resultWords.push(w.word));
      const resultPrompt = resultWords.join(" ").toLowerCase();
      const goodSet = new Set(goodWords.map((w) => w.toLowerCase()));
      const resultSet = new Set(resultWords.map((w) => w.toLowerCase()));
      let matches = 0;
      goodSet.forEach((w) => {
        if (resultSet.has(w))
          matches++;
      });
      const badOnlyWords = badWords.filter((w) => !goodSet.has(w.toLowerCase()));
      let keptBad = 0;
      badOnlyWords.forEach((w) => {
        if (resultSet.has(w.toLowerCase()))
          keptBad++;
      });
      const accuracy = Math.max(0, matches / goodSet.size - keptBad * 0.1);
      const passed = accuracy >= 0.5;
      if (passed) {
        score++;
        playSound("correct");
      } else {
        playSound("wrong");
        state.addToReviewQueue({ id: ex.id, type: "prompt" });
      }
      container.innerHTML = `
        ${renderHeader("\u63D0\u793A\u8BCD\u4FEE\u590D Prompt Repair", true)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>\u7B2C ${round + 1}/${TOTAL_ROUNDS} \u9898</span>
            <span>\u5F97\u5206: ${score}/${TOTAL_ROUNDS}</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${passed ? '<span style="color:var(--green);">\u4FEE\u590D\u6210\u529F!</span>' : '<span style="color:var(--red);">\u8FD8\u9700\u6539\u8FDB!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4FEE\u590D\u524D Before:</p>
            <div class="editable-prompt" style="border:1px solid var(--red);margin-bottom:var(--space-md);opacity:0.7;">${ex.badPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4F60\u7684\u4FEE\u590D Your fix:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${resultWords.join(" ")}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u53C2\u8003\u7B54\u6848 Reference:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${ex.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;">${ex.explanation_zh}</p>
          </div>
          <div class="game-footer">
            <button class="btn btn-primary btn-block" id="next-btn">${round + 1 < TOTAL_ROUNDS ? "\u4E0B\u4E00\u9898 Next" : "\u67E5\u770B\u7ED3\u679C Results"}</button>
          </div>
        </div>
      `;
      container.querySelector("#next-btn").addEventListener("click", () => {
        round++;
        if (round < TOTAL_ROUNDS) {
          renderRound();
        } else {
          renderResults(container, { worldId, levelIndex, score, total: TOTAL_ROUNDS, gameType: "prompt-repair" });
        }
      });
    });
  }
  renderRound();
}

// src/screens/game-prompt-duel.ts
function shuffle8(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderPromptDuel(container, worldId, levelIndex) {
  const TOTAL_DUELS = 10;
  const pool = shuffle8(promptExamples);
  const duels = [];
  while (duels.length < TOTAL_DUELS) {
    duels.push(...pool);
  }
  const examples = duels.slice(0, TOTAL_DUELS);
  let duelIndex = 0;
  let score = 0;
  function renderDuel() {
    const ex = examples[duelIndex];
    const goodOnLeft = Math.random() < 0.5;
    const leftPrompt = goodOnLeft ? ex.goodPrompt : ex.badPrompt;
    const rightPrompt = goodOnLeft ? ex.badPrompt : ex.goodPrompt;
    const correctSide = goodOnLeft ? "left" : "right";
    container.innerHTML = `
      ${renderHeader("\u63D0\u793A\u8BCD\u5BF9\u51B3 Prompt Duel", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${duelIndex + 1}/${TOTAL_DUELS} \u9898</span>
          <span>\u5F97\u5206: ${score}/${TOTAL_DUELS}</span>
        </div>
        <div class="game-question" style="font-size:var(--text-base);">${ex.task_zh}</div>
        <div class="game-instruction">\u54EA\u4E2A\u63D0\u793A\u8BCD\u66F4\u597D\uFF1F\u70B9\u51FB\u9009\u62E9</div>
        <div class="game-body">
          <div class="duel-container">
            <div class="duel-card" id="card-left" data-side="left">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">A</div>
              ${leftPrompt}
            </div>
            <div class="duel-card" id="card-right" data-side="right">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">B</div>
              ${rightPrompt}
            </div>
          </div>
          <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;" id="explanation-text"></p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">${duelIndex + 1 < TOTAL_DUELS ? "\u4E0B\u4E00\u9898 Next" : "\u67E5\u770B\u7ED3\u679C Results"}</button>
        </div>
      </div>
    `;
    const cardLeft = container.querySelector("#card-left");
    const cardRight = container.querySelector("#card-right");
    const explanationDiv = container.querySelector("#explanation");
    const explanationText = container.querySelector("#explanation-text");
    const nextBtn = container.querySelector("#next-btn");
    let voted = false;
    function handleVote(side) {
      if (voted)
        return;
      voted = true;
      const isCorrect = side === correctSide;
      if (isCorrect) {
        score++;
        playSound("correct");
      } else {
        playSound("wrong");
        state.addToReviewQueue({ id: ex.id, type: "prompt" });
      }
      const correctCard = correctSide === "left" ? cardLeft : cardRight;
      const wrongCard = correctSide === "left" ? cardRight : cardLeft;
      correctCard.classList.add("correct");
      wrongCard.classList.add("wrong");
      cardLeft.style.pointerEvents = "none";
      cardRight.style.pointerEvents = "none";
      explanationText.textContent = ex.explanation_zh;
      explanationDiv.style.display = "";
      nextBtn.style.display = "";
    }
    cardLeft.addEventListener("click", () => handleVote("left"));
    cardRight.addEventListener("click", () => handleVote("right"));
    nextBtn.addEventListener("click", () => {
      duelIndex++;
      if (duelIndex < TOTAL_DUELS) {
        renderDuel();
      } else {
        renderResults(container, { worldId, levelIndex, score, total: TOTAL_DUELS, gameType: "prompt-duel" });
      }
    });
  }
  renderDuel();
}

// src/screens/game-boss-battle.ts
var ALL_SCENARIOS = [
  {
    question_zh: "\u4F60\u4F1A\u600E\u6837\u5F00\u59CB\u4E00\u4E2A\u65B0\u9879\u76EE\uFF1F",
    question_en: "How would you start a new project?",
    correctCommand: "/init",
    commandOptions: ["/init", "/setup", "/new", "/config"],
    keywords: ["scaffold", "CLAUDE.md", "initialize"]
  },
  {
    question_zh: "\u4EE3\u7801\u5E93\u592A\u5927\uFF0C\u653E\u4E0D\u8FDB\u4E0A\u4E0B\u6587\u7A97\u53E3\u3002\u4F60\u4F1A\u600E\u4E48\u505A\uFF1F",
    question_en: "The codebase is too large for context. What do you do?",
    correctCommand: "/compact",
    commandOptions: ["/compact", "/clear", "/shrink", "/trim"],
    keywords: ["context", "compact", "window"]
  },
  {
    question_zh: "\u4F60\u9700\u8981\u64A4\u9500\u4E00\u4E2A\u6700\u8FD1\u7684\u6539\u52A8\u3002\u600E\u4E48\u529E\uFF1F",
    question_en: "You need to undo a recent change. How?",
    correctCommand: "/rewind",
    commandOptions: ["/rewind", "/undo", "/rollback", "/restore"],
    keywords: ["revert", "undo", "checkpoint"]
  },
  {
    question_zh: "\u4F60\u60F3\u67E5\u770B API \u7528\u91CF\u3002\u600E\u4E48\u64CD\u4F5C\uFF1F",
    question_en: "How do you check your API usage?",
    correctCommand: "/usage",
    commandOptions: ["/usage", "/cost", "/billing", "/stats"],
    keywords: ["token", "cost", "usage"]
  },
  {
    question_zh: "\u4EE3\u7801\u5BA1\u67E5\u6D41\u7A0B\u662F\u600E\u6837\u7684\uFF1F",
    question_en: "Code review process?",
    correctCommand: "/review",
    commandOptions: ["/review", "/lint", "/check", "/audit"],
    keywords: ["review", "quality", "feedback"]
  },
  {
    question_zh: "\u5982\u4F55\u7B80\u5316\u590D\u6742\u7684\u4EE3\u7801\uFF1F",
    question_en: "How to simplify complex code?",
    correctCommand: "/simplify",
    commandOptions: ["/simplify", "/explain", "/easy", "/translate"],
    keywords: ["refactor", "simplify", "clean"]
  }
];
function shuffle9(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderBossBattle(container, worldId, levelIndex) {
  const TOTAL_SCENARIOS = 3;
  const POINTS_PER_SCENARIO = 100;
  const scenarios = shuffle9(ALL_SCENARIOS).slice(0, TOTAL_SCENARIOS);
  let currentIndex = 0;
  let totalScore = 0;
  let showingPepTalk = true;
  function renderPepTalk() {
    container.innerHTML = `
      ${renderHeader("\u9762\u8BD5\u6A21\u62DF Boss Battle", true)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          ${renderMascot("bossStart")}
          <div style="text-align:center;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-xl);font-weight:700;color:var(--gold);">\u9762\u8BD5\u6A21\u62DF Interview Simulation</div>
            <p style="color:var(--text-secondary);margin-top:var(--space-sm);">\u56DE\u7B54 ${TOTAL_SCENARIOS} \u4E2A\u573A\u666F\u9898\uFF0C\u9009\u62E9\u6B63\u786E\u547D\u4EE4\u5E76\u89E3\u91CA\u539F\u56E0</p>
            <p style="color:var(--text-secondary);">Answer ${TOTAL_SCENARIOS} scenarios: pick the right command and explain why</p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-gold btn-block" id="start-btn">\u5F00\u59CB\u6311\u6218 Start Challenge</button>
        </div>
      </div>
    `;
    container.querySelector("#start-btn")?.addEventListener("click", () => {
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
        gameType: "boss-battle"
      });
      return;
    }
    const s = scenarios[currentIndex];
    const progress = currentIndex + 1;
    const shuffledOptions = shuffle9(s.commandOptions);
    container.innerHTML = `
      ${renderHeader("\u9762\u8BD5\u6A21\u62DF Boss Battle", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u573A\u666F ${progress}/${TOTAL_SCENARIOS}</span>
          <span>\u5F97\u5206: ${totalScore}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress / TOTAL_SCENARIOS * 100}%"></div>
        </div>
        <div class="game-question">
          ${s.question_zh}
          <div class="game-question-sub">${s.question_en}</div>
        </div>
        <div class="game-body">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-xs);">
            \u9009\u62E9\u6B63\u786E\u7684\u547D\u4EE4 Pick the correct command:
          </div>
          <div class="option-list" id="cmd-options">
            ${shuffledOptions.map((cmd, i) => `
              <button class="option-btn" data-cmd="${cmd}">
                <span class="option-label">${["A", "B", "C", "D"][i]}</span>
                <span style="font-family:var(--font-mono);">${cmd}</span>
              </button>
            `).join("")}
          </div>
          <div id="explain-section" style="display:none;margin-top:var(--space-md);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-xs);">
              \u89E3\u91CA\u4F60\u7684\u9009\u62E9 Explain your choice:
            </div>
            <input type="text" class="search-input" id="explanation-input"
              placeholder="\u7528\u82F1\u6587\u7B80\u8981\u89E3\u91CA... Briefly explain in English..."
              autocomplete="off" />
            <div id="cmd-feedback" style="display:none;margin-top:var(--space-sm);padding:var(--space-sm);border-radius:var(--radius-md);font-size:var(--text-sm);"></div>
            <button class="btn btn-primary btn-block" id="submit-explain" style="margin-top:var(--space-md);">
              \u63D0\u4EA4 Submit
            </button>
          </div>
        </div>
      </div>
    `;
    let selectedCommand = "";
    let commandCorrect = false;
    const cmdBtns = container.querySelectorAll("#cmd-options .option-btn");
    cmdBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (selectedCommand)
          return;
        selectedCommand = btn.dataset.cmd || "";
        commandCorrect = selectedCommand === s.correctCommand;
        cmdBtns.forEach((b) => b.classList.add("disabled"));
        if (commandCorrect) {
          btn.classList.add("correct");
          playSound("correct");
        } else {
          btn.classList.add("wrong");
          cmdBtns.forEach((b) => {
            if (b.dataset.cmd === s.correctCommand) {
              b.classList.add("correct");
            }
          });
          playSound("wrong");
        }
        const explainSection = container.querySelector("#explain-section");
        explainSection.style.display = "block";
        const cmdFeedback = container.querySelector("#cmd-feedback");
        cmdFeedback.style.display = "block";
        if (commandCorrect) {
          cmdFeedback.style.background = "rgba(0, 212, 170, 0.1)";
          cmdFeedback.style.border = "1px solid var(--green)";
          cmdFeedback.innerHTML = `<strong>+50 \u547D\u4EE4\u6B63\u786E\uFF01 Command correct!</strong>`;
        } else {
          cmdFeedback.style.background = "rgba(255, 107, 107, 0.1)";
          cmdFeedback.style.border = "1px solid var(--red)";
          cmdFeedback.innerHTML = `<strong>\u547D\u4EE4\u9519\u8BEF\u3002\u6B63\u786E\u7B54\u6848: ${s.correctCommand}</strong>`;
        }
        const input = container.querySelector("#explanation-input");
        input?.focus();
      });
    });
    container.querySelector("#submit-explain")?.addEventListener("click", () => {
      const input = container.querySelector("#explanation-input");
      const explanation = (input?.value || "").toLowerCase();
      let scenarioScore = 0;
      if (commandCorrect) {
        scenarioScore += 50;
      }
      const matchedKeywords = s.keywords.filter((kw) => explanation.includes(kw.toLowerCase()));
      if (matchedKeywords.length > 0) {
        scenarioScore += 50;
      }
      totalScore += scenarioScore;
      const feedbackArea = container.querySelector("#cmd-feedback");
      const keywordStatus = matchedKeywords.length > 0 ? `<br><strong style="color:var(--green);">+50 \u89E3\u91CA\u547D\u4E2D\u5173\u952E\u8BCD: ${matchedKeywords.join(", ")}</strong>` : `<br><strong style="color:var(--red);">\u89E3\u91CA\u7F3A\u5C11\u5173\u952E\u8BCD\u3002\u53C2\u8003: ${s.keywords.join(", ")}</strong>`;
      feedbackArea.innerHTML += keywordStatus;
      feedbackArea.innerHTML += `<br><span style="color:var(--gold);">\u672C\u9898\u5F97\u5206: ${scenarioScore}/${POINTS_PER_SCENARIO}</span>`;
      const submitBtn = container.querySelector("#submit-explain");
      submitBtn.disabled = true;
      submitBtn.textContent = `\u4E0B\u4E00\u9898 Next (${scenarioScore} pts)`;
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

// src/screens/game-daily-mission.ts
var MISSIONS = [
  {
    title_zh: "\u4F7F\u7528 /review \u68C0\u67E5\u4EE3\u7801",
    title_en: "Use /review to check code",
    steps: [
      { instruction_zh: "/review \u8BA9 Claude Code \u50CF\u4EE3\u7801\u5BA1\u67E5\u5458\u4E00\u6837\u68C0\u67E5\u4F60\u7684\u6539\u52A8\u3002", instruction_en: "/review lets Claude Code review your changes like a code reviewer." },
      { instruction_zh: "\u5B83\u4F1A\u68C0\u67E5\u6F5C\u5728\u7684 bug\u3001\u4EE3\u7801\u98CE\u683C\u548C\u6700\u4F73\u5B9E\u8DF5\u3002", instruction_en: "It checks for potential bugs, code style, and best practices." },
      {
        instruction_zh: "\u9002\u5408\u5728\u63D0\u4EA4 PR \u4E4B\u524D\u4F7F\u7528\uFF0C\u786E\u4FDD\u4EE3\u7801\u8D28\u91CF\u3002",
        instruction_en: "Best used before submitting a PR to ensure code quality.",
        question: "When should you use /review?",
        options: ["After deploying", "Before submitting a PR", "When installing packages", "When creating a new file"],
        correctIndex: 1
      },
      {
        instruction_zh: "/review \u4F1A\u5206\u6790 git diff \u4E2D\u7684\u6539\u52A8\u5185\u5BB9\u3002",
        instruction_en: "/review analyzes the changes in your git diff.",
        question: "What does /review analyze?",
        options: ["Your entire codebase", "Changes in git diff", "Package.json only", "README file"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u5BA1\u67E5\u7ED3\u679C\u4F1A\u6807\u6CE8\u4E25\u91CD\u7A0B\u5EA6\uFF1A\u8B66\u544A\u548C\u5EFA\u8BAE\u3002",
        instruction_en: "Review results show severity levels: warnings and suggestions.",
        question: "What does /review output include?",
        options: ["Only errors", "Warnings and suggestions", "Only line counts", "File sizes"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /init \u5F00\u59CB\u65B0\u9879\u76EE",
    title_en: "Use /init to start a new project",
    steps: [
      { instruction_zh: "/init \u5728\u5F53\u524D\u76EE\u5F55\u521B\u5EFA CLAUDE.md \u914D\u7F6E\u6587\u4EF6\u3002", instruction_en: "/init creates a CLAUDE.md configuration file in the current directory." },
      { instruction_zh: "CLAUDE.md \u5305\u542B\u9879\u76EE\u7684\u6280\u672F\u6808\u3001\u7F16\u7801\u89C4\u8303\u548C\u504F\u597D\u3002", instruction_en: "CLAUDE.md contains your tech stack, coding conventions, and preferences." },
      {
        instruction_zh: "Claude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u3002",
        instruction_en: "Claude Code reads this file automatically every time it starts.",
        question: "What file does /init create?",
        options: ["README.md", "package.json", "CLAUDE.md", ".gitignore"],
        correctIndex: 2
      },
      {
        instruction_zh: "\u4F60\u53EF\u4EE5\u624B\u52A8\u7F16\u8F91 CLAUDE.md \u6765\u8C03\u6574 Claude \u7684\u884C\u4E3A\u3002",
        instruction_en: "You can manually edit CLAUDE.md to adjust Claude's behavior.",
        question: "Can you edit CLAUDE.md after /init creates it?",
        options: ["No, it is read-only", "Yes, you can edit it anytime", "Only Claude can edit it", "Only during init"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u6BCF\u4E2A\u9879\u76EE\u53EA\u9700\u8FD0\u884C\u4E00\u6B21 /init\u3002",
        instruction_en: "You only need to run /init once per project.",
        question: "How many times should you run /init per project?",
        options: ["Every session", "Once", "Twice", "Never"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /debug \u6392\u67E5\u9519\u8BEF",
    title_en: "Use /debug to troubleshoot errors",
    steps: [
      { instruction_zh: "/debug \u663E\u793A Claude Code \u7684\u5185\u90E8\u8C03\u8BD5\u4FE1\u606F\u3002", instruction_en: "/debug shows Claude Code's internal debug information." },
      { instruction_zh: "\u5305\u62EC API \u8BF7\u6C42\u8BE6\u60C5\u3001token \u4F7F\u7528\u91CF\u548C\u5EF6\u8FDF\u6570\u636E\u3002", instruction_en: "Includes API request details, token usage, and latency data." },
      {
        instruction_zh: "\u5F53 Claude Code \u884C\u4E3A\u5F02\u5E38\u65F6\uFF0C/debug \u5E2E\u4F60\u627E\u539F\u56E0\u3002",
        instruction_en: "When Claude Code behaves unexpectedly, /debug helps you find the cause.",
        question: "What does /debug show?",
        options: ["Code syntax errors", "API requests and token usage", "File permissions", "Git history"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u4F60\u53EF\u4EE5\u770B\u5230\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u4E86\u591A\u5C11 token\u3002",
        instruction_en: "You can see how many tokens each request consumed.",
        question: "/debug is useful when:",
        options: ["Writing new code", "Claude Code is running slowly", "Creating a new project", "Reading documentation"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u8C03\u8BD5\u5B8C\u540E\uFF0C\u6B63\u5E38\u4F7F\u7528\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u5173\u95ED\u8C03\u8BD5\u6A21\u5F0F\u3002",
        instruction_en: "After debugging, just continue using Claude Code normally.",
        question: "What information helps diagnose slow responses?",
        options: ["File count", "Latency data", "Git branch name", "OS version"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /compact \u7BA1\u7406\u4E0A\u4E0B\u6587",
    title_en: "Use /compact to manage context",
    steps: [
      { instruction_zh: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u6709\u5927\u5C0F\u9650\u5236\uFF0C\u5BF9\u8BDD\u592A\u957F\u4F1A\u88AB\u622A\u65AD\u3002", instruction_en: "The context window has a size limit \u2014 long conversations get truncated." },
      { instruction_zh: "/compact \u628A\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u7A7A\u95F4\u3002", instruction_en: "/compact compresses the conversation into key summaries, freeing space." },
      {
        instruction_zh: "\u548C /clear \u4E0D\u540C\uFF0C/compact \u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u3002",
        instruction_en: "Unlike /clear, /compact preserves important information.",
        question: "What is the difference between /compact and /clear?",
        options: ["No difference", "/compact keeps key info, /clear erases all", "/clear is faster", "/compact deletes files"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u5F53 Claude Code \u63D0\u793A\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u65F6\uFF0C\u7528 /compact\u3002",
        instruction_en: "Use /compact when Claude Code warns context is almost full.",
        question: "When should you use /compact?",
        options: ["At the start of every session", "When context is almost full", "After every commit", "Before running tests"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u538B\u7F29\u540E\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5F53\u524D\u4EFB\u52A1\uFF0C\u4E0D\u4F1A\u4E22\u5931\u8FDB\u5EA6\u3002",
        instruction_en: "After compacting, you can continue your current task without losing progress.",
        question: "After running /compact, what happens?",
        options: ["Session ends", "All files are deleted", "You continue working with freed space", "You must restart Claude Code"],
        correctIndex: 2
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /model \u5207\u6362\u6A21\u578B",
    title_en: "Use /model to switch models",
    steps: [
      { instruction_zh: "Claude Code \u652F\u6301\u591A\u4E2A\u6A21\u578B\uFF1AOpus\u3001Sonnet\u3001Haiku\u3002", instruction_en: "Claude Code supports multiple models: Opus, Sonnet, Haiku." },
      { instruction_zh: "Opus \u6700\u5F3A\uFF0CSonnet \u5747\u8861\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\u3002", instruction_en: "Opus is most capable, Sonnet is balanced, Haiku is fastest and cheapest." },
      {
        instruction_zh: "\u7B80\u5355\u4EFB\u52A1\u53EF\u4EE5\u7528 Haiku \u7701\u94B1\uFF0C\u590D\u6742\u4EFB\u52A1\u7528 Opus\u3002",
        instruction_en: "Use Haiku for simple tasks to save cost, Opus for complex ones.",
        question: "Which model is the cheapest?",
        options: ["Opus", "Sonnet", "Haiku", "They cost the same"],
        correctIndex: 2
      },
      {
        instruction_zh: "\u7528 /model \u547D\u4EE4\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u6A21\u578B\u3002",
        instruction_en: "Use /model to switch models at any time.",
        question: "Can you switch models mid-session?",
        options: ["No, only at start", "Yes, with /model", "Only admins can", "Only with /restart"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u9009\u62E9\u6A21\u578B\u8981\u8003\u8651\uFF1A\u4EFB\u52A1\u96BE\u5EA6\u3001\u901F\u5EA6\u9700\u6C42\u3001\u9884\u7B97\u3002",
        instruction_en: "When choosing a model, consider: task difficulty, speed needs, budget.",
        question: "For a quick formatting task, which model is best?",
        options: ["Opus", "Haiku", "Always use Sonnet", "It does not matter"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /rewind \u64A4\u9500\u6539\u52A8",
    title_en: "Use /rewind to undo changes",
    steps: [
      { instruction_zh: "Claude Code \u4FEE\u6539\u4EE3\u7801\u540E\uFF0C\u6709\u65F6\u7ED3\u679C\u4E0D\u7406\u60F3\u3002", instruction_en: "Sometimes Claude Code's changes don't turn out as expected." },
      { instruction_zh: "/rewind \u6062\u590D\u5230 Claude Code \u6700\u8FD1\u4FEE\u6539\u4E4B\u524D\u7684\u72B6\u6001\u3002", instruction_en: "/rewind restores files to the state before Claude Code's last changes." },
      {
        instruction_zh: "\u6BD4\u624B\u52A8\u7528 git checkout \u66F4\u65B9\u4FBF\u5B89\u5168\u3002",
        instruction_en: "More convenient and safer than manually using git checkout.",
        question: "What does /rewind undo?",
        options: ["Your manual edits", "Claude Code's last changes", "Git commits", "Package installs"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u6062\u590D\u540E\u4F60\u53EF\u4EE5\u7ED9\u51FA\u65B0\u7684\u6307\u4EE4\u91CD\u65B0\u5C1D\u8BD5\u3002",
        instruction_en: "After rewinding, you can give new instructions and try again.",
        question: "After /rewind, what should you do?",
        options: ["Close Claude Code", "Give new instructions", "Run /clear", "Delete the project"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u517B\u6210\u4E60\u60EF\uFF1A\u4E0D\u786E\u5B9A\u6539\u52A8\u65F6\uFF0C\u5148\u8BB0\u4F4F\u53EF\u4EE5 /rewind\u3002",
        instruction_en: "Good habit: when unsure about changes, remember you can /rewind.",
        question: "/rewind is like which everyday action?",
        options: ["Saving a file", "Pressing Ctrl+Z to undo", "Closing a window", "Opening a new tab"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /usage \u8FFD\u8E2A\u5F00\u9500",
    title_en: "Use /usage to track spending",
    steps: [
      { instruction_zh: "Claude Code \u6309 token \u6536\u8D39\uFF0C\u4E86\u89E3\u7528\u91CF\u5F88\u91CD\u8981\u3002", instruction_en: "Claude Code charges by token \u2014 understanding usage is important." },
      { instruction_zh: "/usage \u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u7684 token \u7528\u91CF\u548C\u8D39\u7528\u3002", instruction_en: "/usage shows current session token usage and costs." },
      {
        instruction_zh: "\u8F93\u5165\u548C\u8F93\u51FA\u7684 token \u5206\u5F00\u8BA1\u8D39\u3002",
        instruction_en: "Input and output tokens are billed separately.",
        question: "What does /usage display?",
        options: ["File sizes", "Token usage and cost", "CPU usage", "Network speed"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u957F\u5BF9\u8BDD\u6D88\u8017\u66F4\u591A token\uFF0C\u6CE8\u610F\u7BA1\u7406\u4E0A\u4E0B\u6587\u3002",
        instruction_en: "Longer conversations consume more tokens \u2014 manage your context.",
        question: "What increases token usage?",
        options: ["Short prompts", "Long conversations", "Small files", "Using Haiku"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u5B9A\u671F\u68C0\u67E5\u7528\u91CF\uFF0C\u907F\u514D\u610F\u5916\u7684\u9AD8\u989D\u8D26\u5355\u3002",
        instruction_en: "Check usage regularly to avoid unexpected high bills.",
        question: "How can you reduce token costs?",
        options: ["Use longer prompts", "Never use /compact", "Use /compact and choose smaller models for simple tasks", "Always use Opus"],
        correctIndex: 2
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /copy \u4FDD\u5B58\u56DE\u590D",
    title_en: "Use /copy to save responses",
    steps: [
      { instruction_zh: "/copy \u628A Claude Code \u6700\u540E\u7684\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\u3002", instruction_en: "/copy copies Claude Code's last response to your clipboard." },
      { instruction_zh: "\u65B9\u4FBF\u628A\u4EE3\u7801\u6216\u89E3\u91CA\u7C98\u8D34\u5230\u6587\u6863\u3001\u804A\u5929\u5DE5\u5177\u7B49\u3002", instruction_en: "Convenient for pasting code or explanations into docs, chat tools, etc." },
      {
        instruction_zh: "\u6BD4\u624B\u52A8\u9009\u62E9\u6587\u5B57\u66F4\u5FEB\u66F4\u51C6\u786E\u3002",
        instruction_en: "Faster and more accurate than manually selecting text.",
        question: "What does /copy put in your clipboard?",
        options: ["The entire conversation", "The last response only", "Your last prompt", "The CLAUDE.md file"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u590D\u5236\u540E\u76F4\u63A5 Ctrl+V / Cmd+V \u7C98\u8D34\u5373\u53EF\u3002",
        instruction_en: "After copying, just Ctrl+V / Cmd+V to paste.",
        question: "When is /copy most useful?",
        options: ["When starting a session", "When sharing code with teammates", "When deleting files", "When switching models"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u642D\u914D /simplify \u4F7F\u7528\uFF1A\u5148\u7B80\u5316\uFF0C\u518D\u590D\u5236\u7ED9\u540C\u4E8B\u770B\u3002",
        instruction_en: "Combine with /simplify: simplify first, then copy for colleagues.",
        question: "What is a good workflow before sharing Claude's explanation?",
        options: ["/clear then /copy", "/simplify then /copy", "/debug then /copy", "/init then /copy"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /simplify \u7B80\u5316\u56DE\u590D",
    title_en: "Use /simplify to simplify responses",
    steps: [
      { instruction_zh: "Claude Code \u6709\u65F6\u4F1A\u7528\u592A\u591A\u6280\u672F\u672F\u8BED\u56DE\u590D\u3002", instruction_en: "Sometimes Claude Code responds with too much technical jargon." },
      { instruction_zh: "/simplify \u8BA9\u5B83\u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u3002", instruction_en: "/simplify asks it to re-explain using simpler language." },
      {
        instruction_zh: "\u975E\u5E38\u9002\u5408\u5B66\u4E60\u65B0\u6982\u5FF5\u65F6\u4F7F\u7528\u3002",
        instruction_en: "Great to use when learning new concepts.",
        question: "What does /simplify do?",
        options: ["Deletes code", "Re-explains in simpler language", "Compresses context", "Switches model"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u7B80\u5316\u4E0D\u4F1A\u6539\u53D8\u4EE3\u7801\uFF0C\u53EA\u6539\u53D8\u89E3\u91CA\u65B9\u5F0F\u3002",
        instruction_en: "Simplifying doesn't change the code, only the explanation.",
        question: "Does /simplify modify your code?",
        options: ["Yes, it removes complex code", "No, only the explanation changes", "It deletes comments", "It rewrites everything"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u5982\u679C\u8FD8\u662F\u4E0D\u61C2\uFF0C\u53EF\u4EE5\u591A\u6B21\u4F7F\u7528 /simplify\u3002",
        instruction_en: "If still unclear, you can use /simplify multiple times.",
        question: "Can you use /simplify more than once?",
        options: ["No, only once per response", "Yes, as many times as needed", "Only twice", "Only with Opus model"],
        correctIndex: 1
      }
    ]
  },
  {
    title_zh: "\u4F7F\u7528 /help \u63A2\u7D22\u547D\u4EE4",
    title_en: "Use /help to explore commands",
    steps: [
      { instruction_zh: "/help \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u3002", instruction_en: "/help shows all available slash commands." },
      { instruction_zh: "\u6BCF\u4E2A\u547D\u4EE4\u90FD\u6709\u7B80\u77ED\u7684\u8BF4\u660E\u548C\u7528\u6CD5\u3002", instruction_en: "Each command has a brief description and usage." },
      {
        instruction_zh: "\u65B0\u624B\u6216\u5FD8\u8BB0\u547D\u4EE4\u65F6\uFF0C\u5148\u8BD5 /help\u3002",
        instruction_en: "When new or forgetful, try /help first.",
        question: "What should a beginner type first?",
        options: ["/init", "/help", "/debug", "/model"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u4F60\u4E0D\u9700\u8981\u8BB0\u4F4F\u6240\u6709\u547D\u4EE4\uFF0C/help \u968F\u65F6\u53EF\u67E5\u3002",
        instruction_en: "You don't need to memorize all commands \u2014 /help is always there.",
        question: "/help is most like:",
        options: ["A calculator", "A dictionary or manual", "A compiler", "A debugger"],
        correctIndex: 1
      },
      {
        instruction_zh: "\u638C\u63E1 /help \u662F\u4F7F\u7528 Claude Code \u7684\u7B2C\u4E00\u6B65\u3002",
        instruction_en: "Mastering /help is the first step to using Claude Code.",
        question: "How often can you use /help?",
        options: ["Once per session", "Anytime you need it", "Only at the start", "Only when there is an error"],
        correctIndex: 1
      }
    ]
  }
];
function renderDailyMission(container, worldId, levelIndex) {
  const missionIndex = state.getDailyMissionIndex() % MISSIONS.length;
  const mission = MISSIONS[missionIndex];
  let currentStep = 0;
  let questionsAnswered = 0;
  let questionsCorrect = 0;
  let totalQuestions = 0;
  mission.steps.forEach((step) => {
    if (step.question)
      totalQuestions++;
  });
  function renderStep() {
    if (currentStep >= mission.steps.length) {
      const score = totalQuestions > 0 ? questionsCorrect : 0;
      const total = totalQuestions > 0 ? totalQuestions : 1;
      renderResults(container, {
        worldId,
        levelIndex,
        score,
        total,
        gameType: "daily-mission"
      });
      return;
    }
    const step = mission.steps[currentStep];
    const progress = currentStep + 1;
    const hasQuestion = !!step.question;
    container.innerHTML = `
      ${renderHeader("\u6BCF\u65E5\u4EFB\u52A1 Daily Mission", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u6B65\u9AA4 ${progress}/${mission.steps.length}</span>
          <span>\u2713 ${questionsCorrect}/${totalQuestions}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress / mission.steps.length * 100}%"></div>
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
                    <span class="option-label">${["A", "B", "C", "D"][i]}</span>
                    <span>${opt}</span>
                  </button>
                `).join("")}
              </div>
              <div id="step-feedback" style="display:none;margin-top:var(--space-sm);padding:var(--space-md);border-radius:var(--radius-md);font-size:var(--text-sm);line-height:1.6;"></div>
            </div>
          ` : `
            <div class="game-footer">
              <button class="btn btn-primary btn-block" id="next-step">
                ${currentStep < mission.steps.length - 1 ? "\u4E0B\u4E00\u6B65 Next Step" : "\u5B8C\u6210 Complete"} \u2192
              </button>
            </div>
          `}
        </div>
      </div>
    `;
    if (hasQuestion) {
      let answered = false;
      const optBtns = container.querySelectorAll("#quiz-options .option-btn");
      optBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered)
            return;
          answered = true;
          questionsAnswered++;
          const idx = parseInt(btn.dataset.index || "-1");
          const isCorrect = idx === step.correctIndex;
          optBtns.forEach((b) => b.classList.add("disabled"));
          if (isCorrect) {
            questionsCorrect++;
            btn.classList.add("correct");
            playSound("correct");
          } else {
            btn.classList.add("wrong");
            optBtns.forEach((b, i) => {
              if (i === step.correctIndex)
                b.classList.add("correct");
            });
            playSound("wrong");
          }
          const feedback = container.querySelector("#step-feedback");
          feedback.style.display = "block";
          feedback.style.background = isCorrect ? "rgba(0, 212, 170, 0.1)" : "rgba(255, 107, 107, 0.1)";
          feedback.style.border = isCorrect ? "1px solid var(--green)" : "1px solid var(--red)";
          feedback.innerHTML = isCorrect ? "<strong>\u6B63\u786E\uFF01 Correct!</strong>" : `<strong>\u9519\u8BEF\u3002\u6B63\u786E\u7B54\u6848: ${(step.options || [])[step.correctIndex || 0]}</strong>`;
          setTimeout(() => {
            currentStep++;
            renderStep();
          }, 1800);
        });
      });
    } else {
      container.querySelector("#next-step")?.addEventListener("click", () => {
        currentStep++;
        renderStep();
      });
    }
  }
  container.innerHTML = `
    ${renderHeader("\u6BCF\u65E5\u4EFB\u52A1 Daily Mission", true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot("dailyMission")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${mission.title_zh}</div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">${mission.title_en}</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            ${mission.steps.length} \u4E2A\u6B65\u9AA4 \xB7 ${totalQuestions} \u9053\u6D4B\u9A8C\u9898
            <br>${mission.steps.length} steps \xB7 ${totalQuestions} quiz questions
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-mission">\u5F00\u59CB\u4EFB\u52A1 Start Mission</button>
      </div>
    </div>
  `;
  container.querySelector("#start-mission")?.addEventListener("click", () => {
    renderStep();
  });
}

// src/screens/game-peer-challenge.ts
function shuffle10(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getAllQuestions() {
  const all = [];
  for (const worldId of [1, 2, 3, 4]) {
    if (quizzes[worldId]) {
      all.push(...quizzes[worldId]);
    }
  }
  return all;
}
function encodeChallenge(questionIds, score) {
  const data = { q: questionIds, s: score };
  return btoa(JSON.stringify(data));
}
function decodeChallenge(hash) {
  try {
    const raw = hash.startsWith("#peer=") ? hash.slice(6) : null;
    if (!raw)
      return null;
    const data = JSON.parse(atob(raw));
    return { questionIds: data.q || [], peerScore: data.s || 0 };
  } catch {
    return null;
  }
}
function renderPeerChallenge(container, worldId, levelIndex) {
  const TOTAL = 5;
  const peerData = decodeChallenge(window.location.hash);
  let questions;
  if (peerData && peerData.questionIds.length > 0) {
    const allQ = getAllQuestions();
    questions = peerData.questionIds.map((id) => allQ.find((q) => q.id === id)).filter((q) => !!q);
    if (questions.length === 0) {
      questions = shuffle10(getAllQuestions()).slice(0, TOTAL);
    }
  } else {
    questions = shuffle10(getAllQuestions()).slice(0, TOTAL);
  }
  let currentIndex = 0;
  let correctCount = 0;
  function renderQuiz() {
    if (currentIndex >= questions.length) {
      renderShareScreen();
      return;
    }
    const q = questions[currentIndex];
    const progress = currentIndex + 1;
    const labels = ["A", "B", "C", "D"];
    container.innerHTML = `
      ${renderHeader("\u540C\u4F34\u6311\u6218 Peer Challenge", true)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${progress}/${questions.length}</span>
          <span>\u2713 ${correctCount}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress / questions.length * 100}%"></div>
        </div>
        <div class="game-question">
          ${q.question_zh}
          <div class="game-question-sub">${q.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${q.options.map((opt, i) => `
              <button class="option-btn" data-index="${i}">
                <span class="option-label">${labels[i]}</span>
                <span>${opt}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback" style="display:none;padding:var(--space-md);border-radius:var(--radius-md);line-height:1.6;font-size:var(--text-sm);"></div>
        </div>
      </div>
    `;
    let answered = false;
    const optBtns = container.querySelectorAll(".option-btn");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered)
          return;
        answered = true;
        const idx = parseInt(btn.dataset.index || "-1");
        const isCorrect = idx === q.correctIndex;
        optBtns.forEach((b) => b.classList.add("disabled"));
        if (isCorrect) {
          correctCount++;
          btn.classList.add("correct");
          playSound("correct");
        } else {
          btn.classList.add("wrong");
          optBtns.forEach((b, i) => {
            if (i === q.correctIndex)
              b.classList.add("correct");
          });
          playSound("wrong");
        }
        const feedback = container.querySelector("#feedback");
        feedback.style.display = "block";
        if (isCorrect) {
          feedback.style.background = "rgba(0, 212, 170, 0.1)";
          feedback.style.border = "1px solid var(--green)";
          feedback.innerHTML = `<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${q.explanation_zh}`;
        } else {
          feedback.style.background = "rgba(255, 107, 107, 0.1)";
          feedback.style.border = "1px solid var(--red)";
          feedback.innerHTML = `<strong>\u6B63\u786E\u7B54\u6848: ${q.options[q.correctIndex]}</strong><br>${q.explanation_zh}`;
        }
        setTimeout(() => {
          currentIndex++;
          renderQuiz();
        }, 2e3);
      });
    });
  }
  function renderShareScreen() {
    const questionIds = questions.map((q) => q.id);
    const encoded = encodeChallenge(questionIds, correctCount);
    const baseUrl = window.location.origin + window.location.pathname;
    const shareLink = `${baseUrl}#peer=${encoded}`;
    const pct = Math.round(correctCount / questions.length * 100);
    state.addBadge("sharing-caring");
    let comparisonHtml = "";
    if (peerData) {
      const peerPct = Math.round(peerData.peerScore / questions.length * 100);
      const diff = pct - peerPct;
      let compMsg = "";
      if (diff > 0) {
        compMsg = `\u4F60\u8D62\u4E86\uFF01 You won by ${diff}%!`;
      } else if (diff < 0) {
        compMsg = `\u670B\u53CB\u8D62\u4E86\uFF01 Your friend won by ${Math.abs(diff)}%!`;
      } else {
        compMsg = `\u5E73\u5C40\uFF01 It's a tie!`;
      }
      comparisonHtml = `
        <div class="card" style="margin-top:var(--space-md);text-align:center;">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);">
            \u5BF9\u6BD4 Comparison
          </div>
          <div style="display:flex;justify-content:center;gap:var(--space-xl);margin-bottom:var(--space-sm);">
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--teal);">${pct}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">\u4F60 You</div>
            </div>
            <div style="font-size:var(--text-2xl);color:var(--text-muted);align-self:center;">VS</div>
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--gold);">${peerPct}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">\u670B\u53CB Friend</div>
            </div>
          </div>
          <div style="font-size:var(--text-lg);font-weight:700;color:var(--gold);">${compMsg}</div>
        </div>
      `;
    }
    container.innerHTML = `
      ${renderHeader("\u540C\u4F34\u6311\u6218 Peer Challenge", true)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;">
          ${renderMascot("correctAnswer")}
          <div style="text-align:center;margin-top:var(--space-md);">
            <div style="font-size:var(--text-3xl);font-weight:700;color:var(--teal);">${correctCount}/${questions.length}</div>
            <div style="font-size:var(--text-lg);color:var(--text-secondary);margin-top:var(--space-xs);">${pct}% \u6B63\u786E\u7387</div>
          </div>
          ${comparisonHtml}
          <div class="card" style="width:100%;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);text-align:center;">
              \u5206\u4EAB\u7ED9\u670B\u53CB\u6311\u6218 Share with a friend to challenge them
            </div>
            <div style="display:flex;gap:var(--space-sm);">
              <input type="text" class="search-input" id="share-link" value="${shareLink}" readonly
                style="font-size:var(--text-xs);flex:1;" />
              <button class="btn btn-primary" id="copy-link" style="white-space:nowrap;">\u590D\u5236 Copy</button>
            </div>
            <div id="copy-feedback" style="display:none;text-align:center;margin-top:var(--space-sm);font-size:var(--text-sm);color:var(--green);"></div>
          </div>
          <div class="card" style="width:100%;margin-top:var(--space-sm);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);text-align:center;line-height:1.8;">
              <strong>WeChat \u5206\u4EAB\u8BF4\u660E:</strong><br>
              1. \u70B9\u51FB\u300C\u590D\u5236 Copy\u300D\u6309\u94AE<br>
              2. \u6253\u5F00\u5FAE\u4FE1\uFF0C\u53D1\u9001\u94FE\u63A5\u7ED9\u670B\u53CB<br>
              3. \u670B\u53CB\u6253\u5F00\u94FE\u63A5\u5373\u53EF\u6311\u6218\u540C\u6837\u7684\u9898\u76EE\uFF01
              <br><br>
              <strong>WeChat sharing:</strong><br>
              1. Tap "Copy" above<br>
              2. Open WeChat and send the link<br>
              3. Your friend opens it to take the same quiz!
            </div>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-secondary btn-block" id="view-results">\u67E5\u770B\u6210\u7EE9 View Results</button>
        </div>
      </div>
    `;
    container.querySelector("#copy-link")?.addEventListener("click", () => {
      const input = container.querySelector("#share-link");
      const feedbackEl = container.querySelector("#copy-feedback");
      navigator.clipboard.writeText(input.value).then(() => {
        feedbackEl.style.display = "block";
        feedbackEl.textContent = "\u5DF2\u590D\u5236\uFF01 Copied!";
        playSound("correct");
        setTimeout(() => {
          feedbackEl.style.display = "none";
        }, 2e3);
      }).catch(() => {
        input.select();
        feedbackEl.style.display = "block";
        feedbackEl.textContent = "\u8BF7\u624B\u52A8\u590D\u5236 Please copy manually (Ctrl+C)";
        feedbackEl.style.color = "var(--gold)";
      });
    });
    container.querySelector("#view-results")?.addEventListener("click", () => {
      renderResults(container, {
        worldId,
        levelIndex,
        score: correctCount,
        total: questions.length,
        gameType: "peer-challenge"
      });
    });
  }
  container.innerHTML = `
    ${renderHeader("\u540C\u4F34\u6311\u6218 Peer Challenge", true)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${renderMascot(peerData ? "peerChallenge" : "correctAnswer")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">
            ${peerData ? "\u670B\u53CB\u5411\u4F60\u53D1\u8D77\u4E86\u6311\u6218\uFF01" : "\u540C\u4F34\u6311\u6218 Peer Challenge"}
          </div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">
            ${peerData ? "A friend challenged you!" : "Generate a shareable quiz"}
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            ${TOTAL} \u9053\u9898 \xB7 \u7B54\u5B8C\u540E\u53EF\u5206\u4EAB\u7ED9\u670B\u53CB
            <br>${TOTAL} questions \xB7 Share with friends after completing
          </p>
          ${peerData ? `
            <div class="card" style="margin-top:var(--space-md);padding:var(--space-sm);">
              <span style="font-size:var(--text-sm);color:var(--gold);">
                \u670B\u53CB\u7684\u6210\u7EE9: ${peerData.peerScore}/${questions.length} \xB7 Friend's score: ${peerData.peerScore}/${questions.length}
              </span>
            </div>
          ` : ""}
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-challenge">
          ${peerData ? "\u63A5\u53D7\u6311\u6218 Accept Challenge" : "\u5F00\u59CB\u6311\u6218 Start Challenge"}
        </button>
      </div>
    </div>
  `;
  container.querySelector("#start-challenge")?.addEventListener("click", () => {
    renderQuiz();
  });
}

// src/main.ts
var app = document.getElementById("app");
var GAME_RENDERERS = {
  "flash-match": renderFlashMatch,
  "trivia": renderTrivia,
  "charades": renderCharades,
  "drag-drop": renderDragDrop,
  "memory-match": renderMemoryMatch,
  "prompt-builder": renderPromptBuilder,
  "prompt-repair": renderPromptRepair,
  "prompt-duel": renderPromptDuel,
  "boss-battle": renderBossBattle,
  "daily-mission": renderDailyMission,
  "peer-challenge": renderPeerChallenge
};
router.addRoute("/", () => {
  if (!state.isPlacementDone()) {
    router.navigate("/placement");
    return;
  }
  state.updateStreak();
  renderHome(app);
});
router.addRoute("/placement", () => {
  renderPlacement(app);
});
router.addRoute("/world/:id", (params) => {
  const worldId = parseInt(params.id);
  if (worldId >= 1 && worldId <= 4) {
    renderWorld(app, worldId);
  } else {
    router.navigate("/");
  }
});
router.addRoute("/game/:type/:worldId/:levelId", (params) => {
  const gameType = params.type;
  const worldId = parseInt(params.worldId);
  const levelIndex = parseInt(params.levelId);
  const renderer = GAME_RENDERERS[gameType];
  if (renderer) {
    renderer(app, worldId, levelIndex);
  } else {
    router.navigate("/");
  }
});
router.addRoute("/glossary", () => {
  renderGlossary(app);
});
router.addRoute("/review", () => {
  renderReview(app);
});
router.addRoute("/profile", () => {
  renderProfile(app);
});
router.start();
