var tt=Object.defineProperty;var nt=(e,t)=>()=>(e&&(t=e(e=0)),t);var ot=(e,t)=>{for(var o in t)tt(e,o,{get:t[o],enumerable:!0})};var Re={};ot(Re,{commands:()=>W});var W,K=nt(()=>{"use strict";W=[{id:"init",command:"/init",zhName:"\u521D\u59CB\u5316\u9879\u76EE",zhDescription:"\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210 CLAUDE.md \u914D\u7F6E\u6587\u4EF6\uFF0C\u5E2E\u52A9 Claude Code \u7406\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u3001\u6280\u672F\u6808\u548C\u7F16\u7801\u504F\u597D\u3002",scenario:"\u4F60\u521A\u5F00\u59CB\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u60F3\u8BA9 Claude Code \u4E86\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u548C\u7F16\u7801\u4E60\u60EF\u3002\u4F60\u5E94\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",wrongChoices:["/setup \u2014 \u5B89\u88C5 Claude Code","/config \u2014 \u6253\u5F00\u8BBE\u7F6E\u9762\u677F","/new \u2014 \u521B\u5EFA\u65B0\u9879\u76EE"],terminalResponse:`\u2713 Created CLAUDE.md with project configuration.
  Added: tech stack, coding conventions, deployment target.
  Claude Code will read this file at the start of every session.`},{id:"help",command:"/help",zhName:"\u83B7\u53D6\u5E2E\u52A9",zhDescription:"\u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u548C\u4F7F\u7528\u8BF4\u660E\u3002\u65B0\u624B\u5FC5\u5907\uFF0C\u5FD8\u4E86\u547D\u4EE4\u5C31\u7528\u5B83\u3002",scenario:"\u4F60\u521A\u88C5\u597D Claude Code\uFF0C\u4E0D\u77E5\u9053\u6709\u54EA\u4E9B\u547D\u4EE4\u53EF\u4EE5\u7528\u3002\u4F60\u5E94\u8BE5\u8F93\u5165\u4EC0\u4E48\uFF1F",wrongChoices:["/menu \u2014 \u6253\u5F00\u83DC\u5355","/commands \u2014 \u5217\u51FA\u7CFB\u7EDF\u547D\u4EE4","/guide \u2014 \u6253\u5F00\u65B0\u624B\u6559\u7A0B"],terminalResponse:`Available commands:
  /help      Show this help message
  /init      Initialize project configuration
  /clear     Clear conversation history
  /compact   Condense conversation context
  /model     Switch AI model
  ... (10 more commands)`},{id:"clear",command:"/clear",zhName:"\u6E05\u9664\u5BF9\u8BDD",zhDescription:"\u6E05\u9664\u5F53\u524D\u5BF9\u8BDD\u5386\u53F2\uFF0C\u91CD\u65B0\u5F00\u59CB\u3002\u9002\u5408\u5207\u6362\u4EFB\u52A1\u65F6\u4F7F\u7528\uFF0C\u907F\u514D\u4E4B\u524D\u7684\u4E0A\u4E0B\u6587\u5E72\u6270\u65B0\u4EFB\u52A1\u3002",scenario:"\u4F60\u521A\u4FEE\u5B8C\u4E00\u4E2A bug\uFF0C\u73B0\u5728\u8981\u5F00\u59CB\u4E00\u4E2A\u5B8C\u5168\u4E0D\u540C\u7684\u65B0\u529F\u80FD\u3002\u4E4B\u524D\u7684\u5BF9\u8BDD\u53EF\u80FD\u4F1A\u5E72\u6270 Claude \u7684\u7406\u89E3\u3002\u4F60\u8BE5\u600E\u4E48\u529E\uFF1F",wrongChoices:["/reset \u2014 \u91CD\u7F6E Claude Code","/new \u2014 \u65B0\u5EFA\u4F1A\u8BDD\u7A97\u53E3","/forget \u2014 \u5220\u9664\u8BB0\u5FC6"],terminalResponse:`\u2713 Conversation cleared.
  Context reset. CLAUDE.md and project files will be re-read on next message.`},{id:"compact",command:"/compact",zhName:"\u538B\u7F29\u5BF9\u8BDD",zhDescription:"\u628A\u957F\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u4E0A\u4E0B\u6587\u7A97\u53E3\u7A7A\u95F4\u3002\u5BF9\u8BDD\u592A\u957F\u65F6 Claude Code \u4F1A\u81EA\u52A8\u63D0\u9192\u4F60\u4F7F\u7528\u3002",scenario:"\u4F60\u548C Claude Code \u804A\u4E86\u5F88\u4E45\uFF0C\u5B83\u63D0\u793A\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u4E86\u3002\u4F60\u60F3\u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u4F46\u91CA\u653E\u7A7A\u95F4\u3002\u4F60\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",wrongChoices:["/shrink \u2014 \u7F29\u5C0F\u6587\u4EF6","/summarize \u2014 \u603B\u7ED3\u5BF9\u8BDD","/trim \u2014 \u88C1\u526A\u5386\u53F2"],terminalResponse:`\u2713 Conversation compacted.
  Before: 95,000 tokens \u2192 After: 12,000 tokens
  Key context preserved: current task, file changes, decisions made.`},{id:"rewind",command:"/rewind",zhName:"\u56DE\u9000\u64CD\u4F5C",zhDescription:"\u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002\u6539\u574F\u4E86\u4E0D\u6015\uFF0C\u4E00\u952E\u56DE\u9000\u3002",scenario:"Claude Code \u521A\u521A\u91CD\u6784\u4E86\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F46\u4F60\u53D1\u73B0\u6539\u5F97\u4E0D\u5BF9\uFF0C\u60F3\u6062\u590D\u5230\u4FEE\u6539\u4E4B\u524D\u7684\u6837\u5B50\u3002\u4F60\u8BE5\u600E\u4E48\u505A\uFF1F",wrongChoices:["/undo \u2014 \u64A4\u9500\u8F93\u5165","/rollback \u2014 \u56DE\u6EDA\u7248\u672C","/restore \u2014 \u6062\u590D\u5907\u4EFD"],terminalResponse:`\u2713 Rewound to before last assistant turn.
  Restored 3 files to previous state.
  You can now give new instructions.`},{id:"copy",command:"/copy",zhName:"\u590D\u5236\u56DE\u590D",zhDescription:"\u628A Claude Code \u6700\u540E\u4E00\u6761\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\u3002\u65B9\u4FBF\u4F60\u628A\u4EE3\u7801\u6216\u89E3\u91CA\u7C98\u8D34\u5230\u522B\u5904\u4F7F\u7528\u3002",scenario:"Claude Code \u751F\u6210\u4E86\u4E00\u6BB5\u5F88\u597D\u7684\u4EE3\u7801\u89E3\u91CA\uFF0C\u4F60\u60F3\u628A\u5B83\u7C98\u8D34\u5230\u9879\u76EE\u6587\u6863\u91CC\u3002\u6700\u5FEB\u7684\u65B9\u5F0F\u662F\uFF1F",wrongChoices:["/export \u2014 \u5BFC\u51FA\u6587\u4EF6","/save \u2014 \u4FDD\u5B58\u5230\u6587\u4EF6","/clipboard \u2014 \u6253\u5F00\u526A\u8D34\u677F"],terminalResponse:`\u2713 Last response copied to clipboard.
  (1,247 characters)`},{id:"debug",command:"/debug",zhName:"\u8C03\u8BD5\u6A21\u5F0F",zhDescription:"\u663E\u793A Claude Code \u7684\u5185\u90E8\u8C03\u8BD5\u4FE1\u606F\uFF0C\u5305\u62EC API \u8BF7\u6C42\u3001token \u4F7F\u7528\u7B49\u6280\u672F\u7EC6\u8282\u3002\u5F00\u53D1\u8005\u6392\u67E5\u95EE\u9898\u65F6\u4F7F\u7528\u3002",scenario:"Claude Code \u7684\u56DE\u590D\u901F\u5EA6\u7A81\u7136\u53D8\u6162\uFF0C\u4F60\u60F3\u770B\u770B API \u8BF7\u6C42\u7684\u8BE6\u7EC6\u4FE1\u606F\u6765\u6392\u67E5\u539F\u56E0\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",wrongChoices:["/logs \u2014 \u67E5\u770B\u65E5\u5FD7","/status \u2014 \u68C0\u67E5\u72B6\u6001","/diagnose \u2014 \u8FD0\u884C\u8BCA\u65AD"],terminalResponse:`Debug mode enabled.
  API endpoint: api.anthropic.com
  Model: claude-sonnet-4-20250514
  Last request: 2,341 input tokens, 892 output tokens
  Latency: 1.2s TTFT, 3.8s total`},{id:"usage",command:"/usage",zhName:"\u67E5\u770B\u7528\u91CF",zhDescription:"\u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u548C\u8D26\u6237\u7684 token \u4F7F\u7528\u91CF\u548C\u8D39\u7528\u7EDF\u8BA1\u3002\u5E2E\u4F60\u4E86\u89E3\u82B1\u4E86\u591A\u5C11\u94B1\u3002",scenario:"\u4F60\u7528\u4E86\u4E00\u6574\u5929 Claude Code\uFF0C\u60F3\u770B\u770B\u4ECA\u5929\u603B\u5171\u7528\u4E86\u591A\u5C11 token\u3001\u82B1\u4E86\u591A\u5C11\u94B1\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",wrongChoices:["/billing \u2014 \u67E5\u770B\u8D26\u5355","/cost \u2014 \u8BA1\u7B97\u8D39\u7528","/stats \u2014 \u67E5\u770B\u7EDF\u8BA1"],terminalResponse:`Session usage:
  Input tokens:  45,231
  Output tokens: 12,847
  Total cost:    $0.42

Daily limit: 78% remaining`},{id:"review",command:"/review",zhName:"\u4EE3\u7801\u5BA1\u67E5",zhDescription:"\u8BA9 Claude Code \u5BA1\u67E5\u5F53\u524D\u7684\u4EE3\u7801\u6539\u52A8\uFF0C\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u5E76\u7ED9\u51FA\u6539\u8FDB\u5EFA\u8BAE\u3002\u76F8\u5F53\u4E8E\u4E00\u4E2A AI code reviewer\u3002",scenario:"\u4F60\u5199\u5B8C\u4E86\u4E00\u4E2A\u65B0\u529F\u80FD\uFF0C\u60F3\u5728\u63D0\u4EA4 PR \u4E4B\u524D\u8BA9 Claude Code \u5E2E\u4F60\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",wrongChoices:["/check \u2014 \u8FD0\u884C\u68C0\u67E5","/lint \u2014 \u4EE3\u7801\u683C\u5F0F\u5316","/audit \u2014 \u5B89\u5168\u5BA1\u8BA1"],terminalResponse:`Reviewing staged changes...

  \u26A0 src/utils.ts:42 \u2014 Potential null reference
  \u26A0 src/api.ts:18 \u2014 Missing error handling for fetch
  \u2713 src/index.ts \u2014 Looks good

  2 issues found. Want me to fix them?`},{id:"simplify",command:"/simplify",zhName:"\u7B80\u5316\u56DE\u590D",zhDescription:"\u8BA9 Claude Code \u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u4E0A\u4E00\u6761\u56DE\u590D\u3002\u6280\u672F\u672F\u8BED\u592A\u591A\u65F6\u7528\u8FD9\u4E2A\u3002",scenario:"Claude Code \u7ED9\u4F60\u89E3\u91CA\u4E86\u4E00\u4E2A\u6982\u5FF5\uFF0C\u4F46\u7528\u4E86\u592A\u591A\u6280\u672F\u672F\u8BED\uFF0C\u4F60\u770B\u4E0D\u61C2\u3002\u4F60\u60F3\u8BA9\u5B83\u8BF4\u5F97\u7B80\u5355\u70B9\u3002\u4F60\u8BE5\u600E\u4E48\u505A\uFF1F",wrongChoices:["/explain \u2014 \u8BE6\u7EC6\u89E3\u91CA","/easy \u2014 \u7B80\u5355\u6A21\u5F0F","/translate \u2014 \u7FFB\u8BD1\u6210\u4E2D\u6587"],terminalResponse:`Let me explain that more simply:

  Think of an API like a waiter at a restaurant.
  You (your code) tell the waiter (API) what you want,
  and the waiter brings back the food (data) from the kitchen (server).`},{id:"model",command:"/model",zhName:"\u5207\u6362\u6A21\u578B",zhDescription:"\u5207\u6362 Claude Code \u4F7F\u7528\u7684 AI \u6A21\u578B\u3002Opus \u6700\u5F3A\u4F46\u6700\u8D35\uFF0CSonnet \u5747\u8861\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\u3002",scenario:"\u4F60\u5728\u5904\u7406\u4E00\u4E2A\u7B80\u5355\u7684\u683C\u5F0F\u5316\u4EFB\u52A1\uFF0C\u4E0D\u9700\u8981\u6700\u5F3A\u7684\u6A21\u578B\u3002\u4F60\u60F3\u5207\u6362\u5230\u66F4\u5FEB\u3001\u66F4\u4FBF\u5B9C\u7684\u6A21\u578B\u3002\u4F60\u8BE5\u7528\u4EC0\u4E48\uFF1F",wrongChoices:["/engine \u2014 \u5207\u6362\u5F15\u64CE","/switch \u2014 \u5207\u6362\u7248\u672C","/upgrade \u2014 \u5347\u7EA7\u6A21\u578B"],terminalResponse:`Current model: claude-sonnet-4-20250514

  Available models:
  \u203A claude-opus-4-20250514    (most capable)
  \u203A claude-sonnet-4-20250514  (balanced) \u2713
  \u203A claude-haiku-3-20250514   (fastest)

  Select a model:`}]});var oe=class{constructor(){this.routes=[];this.currentCleanup=null}addRoute(t,o){let d=[],a=t.replace(/:(\w+)/g,(s,i)=>(d.push(i),"([^/]+)"));this.routes.push({pattern:new RegExp(`^#${a}$`),paramNames:d,handler:o})}navigate(t){window.location.hash=t}start(){let t=()=>{this.currentCleanup&&(this.currentCleanup(),this.currentCleanup=null);let o=window.location.hash||"#/";for(let d of this.routes){let a=o.match(d.pattern);if(a){let s={};d.paramNames.forEach((r,l)=>{s[r]=a[l+1]}),d.handler(s),window.scrollTo(0,0);let i=document.getElementById("app");i&&(i.setAttribute("tabindex","-1"),i.focus({preventScroll:!0}));return}}o!=="#/"&&this.navigate("/")};window.addEventListener("hashchange",t),t()}setCleanup(t){this.currentCleanup=t}},T=new oe;var B=[{id:1,zh:"\u7EC8\u7AEF\u4E4B\u95E8",en:"The Terminal Gate",icon:"\u{1F6AA}",color:"#00d4aa"},{id:2,zh:"\u547D\u4EE4\u738B\u56FD",en:"Command Kingdom",icon:"\u2694\uFE0F",color:"#ffc857"},{id:3,zh:"\u63D0\u793A\u5BAB\u6BBF",en:"Prompt Palace",icon:"\u{1F3F0}",color:"#ff6b6b"},{id:4,zh:"\u667A\u80FD\u4F53\u64C2\u53F0",en:"Agent Arena",icon:"\u{1F916}",color:"#a78bfa"}],ie={1:[{title_zh:"\u57FA\u7840\u8BCD\u6C47 A",title_en:"Basic Vocab A",gameType:"flash-match",icon:"\u{1F0CF}"},{title_zh:"\u57FA\u7840\u8BCD\u6C47 B",title_en:"Basic Vocab B",gameType:"flash-match",icon:"\u{1F0CF}"},{title_zh:"\u7EC8\u7AEF\u77E5\u8BC6\u6D4B\u9A8C",title_en:"Terminal Quiz",gameType:"trivia",icon:"\u2753"},{title_zh:"\u7EFC\u5408\u6D4B\u9A8C",title_en:"Comprehensive Quiz",gameType:"trivia",icon:"\u{1F3C6}"}],2:[{title_zh:"\u547D\u4EE4\u731C\u731C\u770B A",title_en:"Command Charades A",gameType:"charades",icon:"\u{1F3AD}"},{title_zh:"\u547D\u4EE4\u731C\u731C\u770B B",title_en:"Command Charades B",gameType:"charades",icon:"\u{1F3AD}"},{title_zh:"\u5DE5\u4F5C\u6D41\u6392\u5E8F",title_en:"Workflow Builder",gameType:"drag-drop",icon:"\u{1F500}"},{title_zh:"\u8BB0\u5FC6\u914D\u5BF9 A",title_en:"Memory Match A",gameType:"memory-match",icon:"\u{1F9E0}"},{title_zh:"\u8BB0\u5FC6\u914D\u5BF9 B",title_en:"Memory Match B",gameType:"memory-match",icon:"\u{1F9E0}"},{title_zh:"\u547D\u4EE4\u5927\u5E08\u6D4B\u9A8C",title_en:"Command Master Quiz",gameType:"trivia",icon:"\u{1F451}"}],3:[{title_zh:"\u63D0\u793A\u8BCD\u7EC4\u88C5 A",title_en:"Prompt Builder A",gameType:"prompt-builder",icon:"\u{1F9E9}"},{title_zh:"\u63D0\u793A\u8BCD\u7EC4\u88C5 B",title_en:"Prompt Builder B",gameType:"prompt-builder",icon:"\u{1F9E9}"},{title_zh:"\u63D0\u793A\u8BCD\u4FEE\u590D",title_en:"Prompt Repair",gameType:"prompt-repair",icon:"\u{1F527}"},{title_zh:"\u63D0\u793A\u8BCD\u5BF9\u51B3 A",title_en:"Prompt Duel A",gameType:"prompt-duel",icon:"\u2694\uFE0F"},{title_zh:"\u63D0\u793A\u8BCD\u5BF9\u51B3 B",title_en:"Prompt Duel B",gameType:"prompt-duel",icon:"\u2694\uFE0F"},{title_zh:"\u63D0\u793A\u8BCD\u5927\u5E08",title_en:"Prompt Master",gameType:"prompt-builder",icon:"\u2728"}],4:[{title_zh:"Boss\u6311\u6218 A",title_en:"Boss Battle A",gameType:"boss-battle",icon:"\u{1F409}"},{title_zh:"Boss\u6311\u6218 B",title_en:"Boss Battle B",gameType:"boss-battle",icon:"\u{1F409}"},{title_zh:"\u6BCF\u65E5\u4EFB\u52A1",title_en:"Daily Mission",gameType:"daily-mission",icon:"\u{1F4CB}"},{title_zh:"\u597D\u53CB\u6311\u6218",title_en:"Peer Challenge",gameType:"peer-challenge",icon:"\u{1F91D}"},{title_zh:"\u7EC8\u6781Boss",title_en:"Final Boss",gameType:"boss-battle",icon:"\u{1F479}"},{title_zh:"\u6BD5\u4E1A\u8BC1\u4E66",title_en:"Certificate",gameType:"certificate",icon:"\u{1F393}"}]};function he(e){return ie[e]?.length??0}function ge(e){let t=B[e-1];return t?{zh:t.zh,en:t.en}:{zh:"\u672A\u77E5",en:"Unknown"}}var ve=Object.fromEntries(B.map(e=>[e.id,e.zh]));function J(){return{1:{levelsCompleted:[],scores:{},stars:{}},2:{levelsCompleted:[],scores:{},stars:{}},3:{levelsCompleted:[],scores:{},stars:{}},4:{levelsCompleted:[],scores:{},stars:{}}}}var se={placementCompleted:!1,placementScore:0,worlds:J(),streak:{current:0,longest:0,lastLogin:""},badges:[],reviewQueue:[],totalScore:0,dailyMissionIndex:0,dailyMissionDate:"",failedLevels:[],studentName:""},fe="cq_state",ae=class{constructor(){this.state=this.load()}load(){try{let t=localStorage.getItem(fe);if(t){let o=JSON.parse(t);return{...se,...o,worlds:Object.fromEntries([1,2,3,4].map(d=>[d,{...J()[d],...o.worlds?.[d]||{}}]))}}}catch(t){console.warn("Failed to load state:",t)}return{...se,worlds:J()}}save(){try{localStorage.setItem(fe,JSON.stringify(this.state))}catch{}}get(){return this.state}isPlacementDone(){return this.state.placementCompleted}completePlacement(t){this.state.placementCompleted=!0,this.state.placementScore=t,t>=4&&t<=6?(this.state.worlds[1].levelsCompleted=[0,1],this.state.worlds[1].scores={0:80,1:80},this.state.worlds[1].stars={0:2,1:2}):t>=7&&(this.state.worlds[1].levelsCompleted=[0,1,2,3],this.state.worlds[1].scores={0:90,1:90,2:90,3:90},this.state.worlds[1].stars={0:3,1:3,2:3,3:3}),this.save()}isWorldUnlocked(t){if(t===1)return!0;let o=this.state.worlds[t-1];if(!o)return!1;let d=this.getWorldLevelCount(t-1);return o.levelsCompleted.length>=d}getWorldLevelCount(t){return he(t)}isLevelUnlocked(t,o){return o===0?this.isWorldUnlocked(t):this.state.worlds[t]?.levelsCompleted.includes(o-1)||!1}completeLevel(t,o,d){let a=this.state.worlds[t];if(!a)return;a.levelsCompleted.includes(o)||a.levelsCompleted.push(o);let s=a.scores[o]||0;a.scores[o]=Math.max(s,d);let i=d>=100?3:d>=70?2:d>=40?1:0,r=a.stars[o]||0;a.stars[o]=Math.max(r,i),this.state.totalScore+=Math.max(0,d-s),this.save()}markLevelFailed(t,o){let d=`${t}-${o}`;this.state.failedLevels.includes(d)||(this.state.failedLevels.push(d),this.save())}hasFailedLevel(t,o){return this.state.failedLevels.includes(`${t}-${o}`)}updateStreak(){let t=new Date().toISOString().split("T")[0],o=this.state.streak.lastLogin;if(o===t)return;let d=new Date(Date.now()-864e5).toISOString().split("T")[0];o===d?this.state.streak.current++:this.state.streak.current=1,this.state.streak.longest=Math.max(this.state.streak.longest,this.state.streak.current),this.state.streak.lastLogin=t,this.save()}getStreak(){return this.state.streak}addBadge(t){return this.state.badges.includes(t)?!1:(this.state.badges.push(t),this.save(),!0)}hasBadge(t){return this.state.badges.includes(t)}addToReviewQueue(t){let o=this.state.reviewQueue.find(d=>d.id===t.id);o?(o.wrongCount++,o.lastSeen=Date.now()):this.state.reviewQueue.push({...t,lastSeen:Date.now(),wrongCount:1,correctCount:0}),this.save()}markReviewCorrect(t){let o=this.state.reviewQueue.find(d=>d.id===t);o&&(o.correctCount++,o.lastSeen=Date.now(),o.correctCount>=3&&(this.state.reviewQueue=this.state.reviewQueue.filter(d=>d.id!==t))),this.save()}getDueReviewItems(t=10){let o=Date.now()-2592e5;return this.state.reviewQueue.filter(d=>d.lastSeen<o||d.wrongCount>=d.correctCount).slice(0,t)}getWorldCompletion(t){let o=this.state.worlds[t];if(!o)return 0;let d=this.getWorldLevelCount(t);return Math.round(o.levelsCompleted.length/d*100)}getTotalLevelsCompleted(){return Object.values(this.state.worlds).reduce((t,o)=>t+o.levelsCompleted.length,0)}getLearnedVocabCount(){let t=0,o=this.state.worlds[1];return o.levelsCompleted.includes(0)&&(t+=10),o.levelsCompleted.includes(1)&&(t+=10),t+=this.state.reviewQueue.filter(d=>d.type==="vocab"&&d.correctCount>0).length,t}setStudentName(t){this.state.studentName=t.trim().slice(0,50),this.save()}getStudentName(){return this.state.studentName}getDailyMissionIndex(){let t=new Date().toISOString().split("T")[0];return this.state.dailyMissionDate!==t&&(this.state.dailyMissionIndex=(this.state.dailyMissionIndex+1)%30,this.state.dailyMissionDate=t,this.save()),this.state.dailyMissionIndex}resetProgress(){this.state={...se,worlds:J()},this.save()}},f=new ae;var ye={firstLogin:"\u6B22\u8FCE\u6765\u5230\u7801\u73A9\uFF01\u6211\u662F\u7801\u5C0F\u7801\uFF0C\u4F60\u7684AI\u7F16\u7A0B\u4F19\u4F34\u3002\u4E00\u8D77\u5B66Claude Code\u5427\uFF01",wrongAnswer:["\u6CA1\u5173\u7CFB\uFF0C\u518D\u8BD5\u4E00\u6B21\uFF01\u8FD9\u4E2A\u8BCD\u5F88\u591A\u4EBA\u90FD\u4F1A\u641E\u6DF7\u3002","\u4E0D\u8981\u7070\u5FC3\uFF0C\u9519\u8BEF\u662F\u5B66\u4E60\u7684\u4E00\u90E8\u5206\uFF01","\u5DEE\u4E00\u70B9\u70B9\uFF01\u518D\u60F3\u60F3\u770B\uFF1F"],correctAnswer:["\u592A\u68D2\u4E86\uFF01\u4F60\u8D8A\u6765\u8D8A\u5389\u5BB3\u4E86\uFF01","\u7B54\u5BF9\u4E86\uFF01\u7EE7\u7EED\u4FDD\u6301\uFF01","\u6CA1\u9519\uFF01\u4F60\u5BF9Claude Code\u8D8A\u6765\u8D8A\u719F\u4E86\uFF01"],streak7:"\u8FDE\u7EED7\u5929\u4E86\uFF01\u575A\u6301\u5C31\u662F\u529B\u91CF\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01",streak21:"21\u5929\uFF01\u4F60\u5DF2\u7ECF\u517B\u6210\u4E86\u5B66\u4E60\u4E60\u60EF\uFF0C\u592A\u4E86\u4E0D\u8D77\u4E86\uFF01",worldComplete:["\u7EC8\u7AEF\u4E4B\u95E8\u6253\u901A\u4E86\uFF01\u547D\u4EE4\u738B\u56FD\u5728\u524D\u65B9\u7B49\u4F60\u3002","\u547D\u4EE4\u738B\u56FD\u5DF2\u62FF\u4E0B\uFF01\u63A5\u4E0B\u6765\u53BB\u63D0\u793A\u5BAB\u6BBF\u3002","\u63D0\u793A\u5BAB\u6BBF\u901A\u5173\uFF01\u51C6\u5907\u597D\u8FCE\u63A5\u6700\u540E\u7684\u6311\u6218\u4E86\u5417\uFF1F","\u5168\u90E8\u901A\u5173\uFF01\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86Claude Code\u7684\u6838\u5FC3\u6280\u80FD\uFF01"],perfectScore:"\u5168\u5BF9\uFF01\u8FD9\u9053\u9898\u96BE\u4E0D\u5012\u4F60\uFF01\u{1F389}",retry:"\u5931\u8D25\u662F\u6210\u529F\u4E4B\u6BCD\u3002\u6362\u4E2A\u601D\u8DEF\u518D\u6765\u4E00\u6B21\uFF01",bossStart:"\u6DF1\u547C\u5438\u3002\u4F60\u5DF2\u7ECF\u5B66\u4E86\u8FD9\u4E48\u591A\uFF0C\u9762\u8BD5\u5B98\u624D\u8BE5\u7D27\u5F20\u3002",certificate:"\u6BD5\u4E1A\u4E86\uFF01\u5E26\u7740\u8FD9\u4E9B\u6280\u80FD\u53BB\u5199\u4EE3\u7801\u5427\uFF01"};function q(e,t){let o="",d=t||"neutral",a=ye[e];return a&&(typeof a=="string"?o=a:Array.isArray(a)&&(o=a[Math.floor(Math.random()*a.length)])),o||(o="\u4F60\u597D\uFF01\u6211\u662F\u7801\u5C0F\u7801\uFF0C\u4F60\u7684\u7F16\u7A0B\u5C0F\u4F19\u4F34\uFF01"),`
    <div class="mascot-container" role="region" aria-label="\u7801\u5C0F\u7801">
      <div class="mascot-avatar" aria-hidden="true" style="font-size:var(--text-3xl);">\u{1F916}</div>
      <div class="mascot-bubble" role="status">${o}</div>
    </div>
  `}var it={sm:16,md:20,lg:24,xl:32,"2xl":40};function S(e,t="md",o="currentColor",d="none"){let a=it[t];return`<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${a}" viewBox="0 0 24 24" fill="${d}" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;display:inline-block;vertical-align:middle;">${e}</svg>`}var be=(e="md")=>S('<path d="m15 18-6-6 6-6"/>',e),Y=(e="md")=>S('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',e),xe=(e="md")=>S('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',e);var Ce=(e="md")=>S('<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',e),we=(e="md")=>S('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>',e);var O=(e=!1,t="md",o="currentColor")=>e?S('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',t,o,o):S('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',t,o),ke=(e="md",t="currentColor")=>S('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',e,t),_e=(e="md",t="currentColor")=>S('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',e,t),j=(e="md",t="currentColor")=>S('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',e,t),re=(e="md")=>S('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',e);var Q=(e="md")=>S('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',e);var X=(e="md")=>S('<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',e);var ze=(e="md")=>S('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',e);var ee=(e="md")=>S('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',e);var le=(e="md")=>S('<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',e);var st=(e="md")=>S('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/>',e),at=(e="md")=>S('<path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/><path d="M18 11V4H6v7"/><path d="M15 22v-4a3 3 0 0 0-6 0v4"/><path d="M3 11h18"/><path d="M4 1v4"/><path d="M8 1v4"/><path d="M16 1v4"/><path d="M20 1v4"/>',e),rt=(e="md")=>S('<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',e),lt=(e="md")=>S('<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>',e),Te=(e,t="lg")=>{switch(e){case 1:return lt(t);case 2:return st(t);case 3:return at(t);case 4:return rt(t);default:return re(t)}},$e=(e="md")=>S('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',e),Se=(e="md")=>S('<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',e),Le=(e="md")=>S('<polygon points="5 3 19 12 5 21 5 3"/>',e);function qe(e){let t=f.getStreak(),o=f.getDueReviewItems().length,d="firstLogin";t.current>=21?d="streak21":t.current>=7?d="streak7":f.getTotalLevelsCompleted()>0&&(d="correctAnswer"),e.innerHTML=`
    <div class="screen" style="padding-top:var(--space-lg);">
      <!-- Header area -->
      <div class="page-header">
        <div>
          <h1 class="page-title">\u7801\u73A9</h1>
          <p class="page-subtitle">\u7528\u6E38\u620F\u5B66\u4F1AClaude Code</p>
        </div>
        <div class="page-actions">
          <button class="icon-btn" id="btn-glossary" aria-label="\u8BCD\u5178 Glossary">${Ce("sm")} \u8BCD\u5178</button>
          <button class="icon-btn" id="btn-profile" aria-label="\u4E2A\u4EBA\u8D44\u6599 Profile">${xe("sm")}</button>
        </div>
      </div>

      <!-- Streak -->
      <div class="streak-banner">
        <div class="streak-icon">${j("lg","var(--red)")}</div>
        <div>
          <div class="streak-value">${t.current} \u5929\u8FDE\u7EED</div>
          <div class="streak-label">\u6700\u957F\u8BB0\u5F55: ${t.longest} \u5929</div>
        </div>
      </div>

      <!-- Mascot -->
      ${q(d)}

      <!-- Review Queue -->
      ${o>0?`
        <div class="review-cta">
          <button class="btn btn-gold btn-block" id="btn-review">
            \u590D\u4E60 Review \xB7 ${o} ${o===1?"item":"items"}
          </button>
        </div>
      `:""}

      <!-- World Map -->
      <div class="world-timeline">
        ${B.map(a=>{let s=f.isWorldUnlocked(a.id),i=f.getWorldCompletion(a.id),r=s&&i<100;return`
            <div class="card world-card ${s?"":"locked"} ${r?"card-highlight":""}" data-world="${a.id}"
                 role="${s?"button":"presentation"}" tabindex="${s?"0":"-1"}"
                 aria-label="${a.zh} ${a.en}${s?` ${i}%`:" \u5DF2\u9501\u5B9A"}">
              <div class="world-icon" style="background:${s?a.color:"var(--bg-secondary)"};">
                ${s?Te(a.id):Q("lg")}
              </div>
              <div class="world-info">
                <div class="world-name">${a.zh}</div>
                <div class="world-name-en">${a.en}</div>
                ${s?`
                  <div class="progress-bar" role="progressbar" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100" style="margin-top:var(--space-xs);">
                    <div class="progress-bar-fill" style="width:${i}%"></div>
                  </div>
                  <div class="world-progress-text">${i}% \u5B8C\u6210</div>
                `:'<div class="world-progress-text">\u5B8C\u6210\u4E0A\u4E00\u4E16\u754C\u540E\u89E3\u9501 Complete previous world</div>'}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `,e.querySelectorAll("[data-world]").forEach(a=>{let s=()=>{let i=a.getAttribute("data-world");i&&f.isWorldUnlocked(parseInt(i))&&T.navigate(`/world/${i}`)};a.addEventListener("click",s),a.addEventListener("keydown",i=>{i.key==="Enter"&&s()})}),e.querySelector("#btn-glossary")?.addEventListener("click",()=>T.navigate("/glossary")),e.querySelector("#btn-profile")?.addEventListener("click",()=>T.navigate("/profile")),e.querySelector("#btn-review")?.addEventListener("click",()=>T.navigate("/review"))}function k(e,t,o){let d=f.getStreak();return`
    <div class="header">
      ${t?`<button class="header-back" aria-label="\u8FD4\u56DE Go back" onclick="window.location.hash='${o||"/"}'">${be("md")}</button>`:""}
      <div class="header-title">${e}</div>
      <div class="header-streak">
        ${j("sm","var(--gold)")}
        <span>${d.current}</span>
      </div>
    </div>
  `}function Ie(e,t){let o=Math.max(0,Math.min(100,e));return`
    <div class="progress-bar${t==="gold"?" progress-bar-gold":""}" role="progressbar" aria-valuenow="${o}" aria-valuemin="0" aria-valuemax="100" aria-label="${o}% complete">
      <div class="progress-bar-fill" style="width: ${o}%"></div>
    </div>
  `}function Ae(e,t){let o=ge(t),d=ie[t]||[],a=f.getWorldCompletion(t),s=f.get().worlds[t];e.innerHTML=`
    ${k(`${o.zh} ${o.en}`,!0)}
    <div class="screen">
      ${Ie(a)}
      <p style="text-align:center;color:var(--text-secondary);font-size:var(--text-sm);margin:var(--space-sm) 0 var(--space-lg);">${a}% \u5B8C\u6210</p>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
        ${d.map((i,r)=>{let l=f.isLevelUnlocked(t,r),m=s?.levelsCompleted.includes(r),n=s?.stars[r]||0;return`
            <div class="card level-card ${l?"":"locked"}" data-level="${r}" role="${l?"button":"presentation"}" tabindex="${l?"0":"-1"}"
                 aria-label="${i.title_zh} ${i.title_en}${l?` ${n}\u661F`:" \u5DF2\u9501\u5B9A"}">
              <div class="level-icon">
                ${l?`<span style="font-size:var(--text-xl);">${i.icon}</span>`:Q("md")}
              </div>
              <div class="level-info">
                <div class="level-title">${i.title_zh}</div>
                <div class="level-subtitle">${i.title_en}</div>
              </div>
              <div class="stars">
                ${[1,2,3].map(p=>`<span style="display:inline-flex;">${O(p<=n,"sm",p<=n?"var(--gold)":"var(--text-muted)")}</span>`).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `,e.querySelectorAll("[data-level]").forEach(i=>{let r=()=>{let l=parseInt(i.getAttribute("data-level")||"0"),m=d[l];m&&f.isLevelUnlocked(t,l)&&T.navigate(`/game/${m.gameType}/${t}/${l}`)};i.addEventListener("click",r),i.addEventListener("keydown",l=>{l.key==="Enter"&&r()})})}var V=null;function dt(){if(!V)try{V=new AudioContext}catch{return null}return V.state==="suspended"&&V.resume(),V}function E(e,t,o,d,a="sine",s=.15){let i=e.createOscillator(),r=e.createGain();i.type=a,i.frequency.value=t,r.gain.setValueAtTime(s,o),r.gain.exponentialRampToValueAtTime(.001,o+d),i.connect(r),r.connect(e.destination),i.start(o),i.stop(o+d)}function C(e){let t=dt();if(!t)return;let o=t.currentTime;switch(e){case"correct":E(t,523,o,.15,"sine",.15),E(t,659,o+.12,.2,"sine",.15);break;case"wrong":E(t,350,o,.15,"square",.08),E(t,250,o+.12,.25,"square",.08);break;case"levelUp":E(t,523,o,.15,"sine",.12),E(t,659,o+.15,.15,"sine",.12),E(t,784,o+.3,.3,"sine",.15);break;case"perfect":E(t,523,o,.12,"sine",.12),E(t,659,o+.12,.12,"sine",.12),E(t,784,o+.24,.12,"sine",.14),E(t,1047,o+.36,.4,"sine",.16);break;case"cardFlip":E(t,1200,o,.04,"sine",.08);break;case"keystroke":E(t,800,o,.03,"sine",.05);break;case"badgeUnlock":E(t,784,o,.2,"sine",.12),E(t,1047,o+.15,.3,"sine",.14),E(t,1319,o+.3,.4,"sine",.12);break}}var F={1:[{id:"w1q1",world:1,question_zh:"Claude Code \u8FD0\u884C\u5728\u4EC0\u4E48\u73AF\u5883\u91CC\uFF1F",question_en:"Where does Claude Code run?",options:["\u7F51\u9875\u6D4F\u89C8\u5668","\u7EC8\u7AEF (Terminal)","\u624B\u673A App","VS Code \u63D2\u4EF6"],correctIndex:1,explanation_zh:"Claude Code \u662F\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u76F4\u63A5\u5728\u7EC8\u7AEF\u91CC\u8FD0\u884C\u3002\u4F60\u8F93\u5165\u81EA\u7136\u8BED\u8A00\uFF0C\u5B83\u5E2E\u4F60\u5199\u4EE3\u7801\u3002",explanation_en:"Claude Code is a CLI tool that runs directly in your terminal. You type natural language and it writes code for you."},{id:"w1q2",world:1,question_zh:"CLAUDE.md \u6587\u4EF6\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the purpose of the CLAUDE.md file?",options:["\u5B58\u50A8 API \u5BC6\u94A5","\u8BB0\u5F55\u9879\u76EE\u8BF4\u660E\u7ED9 Claude Code \u8BFB\u53D6","\u4FDD\u5B58\u804A\u5929\u8BB0\u5F55","\u914D\u7F6E\u7EC8\u7AEF\u4E3B\u9898"],correctIndex:1,explanation_zh:"CLAUDE.md \u662F\u4F60\u9879\u76EE\u7684\u6307\u4EE4\u6587\u4EF6\uFF0CClaude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\uFF0C\u4E86\u89E3\u4F60\u7684\u9879\u76EE\u89C4\u8303\u548C\u504F\u597D\u3002",explanation_en:"CLAUDE.md is your project's instruction file. Claude Code reads it automatically at startup to understand your project conventions and preferences."},{id:"w1q3",world:1,question_zh:"\u300C\u4ED3\u5E93 (Repository)\u300D\u5728\u7F16\u7A0B\u4E2D\u6307\u4EC0\u4E48\uFF1F",question_en:"What does 'Repository' mean in programming?",options:["\u5B58\u653E\u7269\u54C1\u7684\u4ED3\u5E93","\u7528 Git \u7BA1\u7406\u7684\u9879\u76EE\u6587\u4EF6\u5939","\u4E91\u7AEF\u6570\u636E\u5E93","\u4EE3\u7801\u7F16\u8F91\u5668"],correctIndex:1,explanation_zh:"\u4ED3\u5E93\uFF08repo\uFF09\u662F\u7528 Git \u8FDB\u884C\u7248\u672C\u63A7\u5236\u7684\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u5305\u542B\u6240\u6709\u4EE3\u7801\u548C\u4FEE\u6539\u5386\u53F2\u3002",explanation_en:"A repository (repo) is a project folder managed by Git for version control, containing all code and change history."},{id:"w1q4",world:1,question_zh:"Claude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u505A\u4EC0\u4E48\uFF1F",question_en:"What does Claude Code do automatically when it starts?",options:["\u5B89\u88C5\u4F9D\u8D56\u5305","\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u548C CLAUDE.md","\u6253\u5F00\u6D4F\u89C8\u5668","\u8FDE\u63A5\u6570\u636E\u5E93"],correctIndex:1,explanation_zh:"Claude Code \u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u7ED3\u6784\u3001Git \u5386\u53F2\u548C CLAUDE.md\uFF0C\u5FEB\u901F\u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",explanation_en:"When starting, Claude Code reads the current directory's file structure, Git history, and CLAUDE.md to quickly understand your project."},{id:"w1q5",world:1,question_zh:"CLI \u7684\u5168\u79F0\u662F\u4EC0\u4E48\uFF1F",question_en:"What does CLI stand for?",options:["Code Language Interface","Command Line Interface","Cloud Login Integration","Computer Learning Input"],correctIndex:1,explanation_zh:"CLI \u662F Command Line Interface\uFF08\u547D\u4EE4\u884C\u754C\u9762\uFF09\u7684\u7F29\u5199\uFF0C\u662F\u901A\u8FC7\u6587\u5B57\u547D\u4EE4\u64CD\u4F5C\u7535\u8111\u7684\u65B9\u5F0F\u3002",explanation_en:"CLI stands for Command Line Interface, a way to interact with your computer through text commands."},{id:"w1q6",world:1,question_zh:"\u5728\u7EC8\u7AEF\u4E2D\uFF0C\u300C\u76EE\u5F55 (Directory)\u300D\u7B49\u540C\u4E8E\u4EC0\u4E48\uFF1F",question_en:"In the terminal, what is a 'Directory' equivalent to?",options:["\u4E00\u4E2A\u7A0B\u5E8F","\u4E00\u4E2A\u6587\u4EF6\u5939","\u4E00\u6761\u547D\u4EE4","\u4E00\u4E2A\u7F51\u7AD9"],correctIndex:1,explanation_zh:"\u76EE\u5F55\u5C31\u662F\u6587\u4EF6\u5939\u3002\u5728\u7EC8\u7AEF\u91CC\u7528 cd \u547D\u4EE4\u53EF\u4EE5\u5207\u6362\u76EE\u5F55\u3002",explanation_en:"A directory is simply a folder. You can navigate between directories using the cd command in the terminal."},{id:"w1q7",world:1,question_zh:"\u300C\u4EE3\u7801\u5E93 (Codebase)\u300D\u6307\u7684\u662F\u4EC0\u4E48\uFF1F",question_en:"What does 'Codebase' refer to?",options:["\u4E00\u4E2A\u6570\u636E\u5E93","\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801","\u4E00\u4E2A\u4EE3\u7801\u7F16\u8F91\u5668","\u4E00\u7EC4 API \u5BC6\u94A5"],correctIndex:1,explanation_zh:"\u4EE3\u7801\u5E93\u662F\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801\u3002Claude Code \u53EF\u4EE5\u4E00\u6B21\u6027\u7406\u89E3\u6574\u4E2A\u4EE3\u7801\u5E93\u6765\u5E2E\u4F60\u5DE5\u4F5C\u3002",explanation_en:"A codebase is all the source code for a project. Claude Code can understand an entire codebase at once to help you."},{id:"w1q8",world:1,question_zh:"README \u6587\u4EF6\u901A\u5E38\u5305\u542B\u4EC0\u4E48\u4FE1\u606F\uFF1F",question_en:"What information does a README file typically contain?",options:["\u6570\u636E\u5E93\u5BC6\u7801","\u9879\u76EE\u8BF4\u660E\u3001\u5B89\u88C5\u548C\u4F7F\u7528\u65B9\u6CD5","AI \u8BAD\u7EC3\u6570\u636E","\u7528\u6237\u9690\u79C1\u6570\u636E"],correctIndex:1,explanation_zh:"README \u662F\u9879\u76EE\u7684\u8BF4\u660E\u4E66\uFF0C\u544A\u8BC9\u522B\u4EBA\u8FD9\u4E2A\u9879\u76EE\u505A\u4EC0\u4E48\u3001\u600E\u4E48\u5B89\u88C5\u3001\u600E\u4E48\u4F7F\u7528\u3002",explanation_en:"A README is a project's documentation that explains what the project does, how to install it, and how to use it."},{id:"w1q9",world:1,question_zh:"\u4EC0\u4E48\u662F\u300C\u811A\u672C (Script)\u300D\uFF1F",question_en:"What is a 'Script'?",options:["\u4E00\u79CD\u5B57\u4F53","\u81EA\u52A8\u6267\u884C\u4E00\u7CFB\u5217\u547D\u4EE4\u7684\u7A0B\u5E8F\u6587\u4EF6","\u4E00\u4E2A\u7F51\u7AD9","\u4E00\u79CD\u6570\u636E\u5E93"],correctIndex:1,explanation_zh:"\u811A\u672C\u662F\u4E00\u7CFB\u5217\u81EA\u52A8\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u5199\u5728\u6587\u4EF6\u91CC\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u5199\u548C\u8FD0\u884C\u5404\u79CD\u811A\u672C\u3002",explanation_en:"A script is a file containing a series of automated commands. Claude Code can help you write and run various scripts."},{id:"w1q10",world:1,question_zh:"\u5728\u7EC8\u7AEF\u4E2D\uFF0C\u300C\u8DEF\u5F84 (Path)\u300D\u6307\u4EC0\u4E48\uFF1F",question_en:"What does 'Path' mean in the terminal?",options:["\u4E00\u6761\u8D70\u5ECA","\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u5728\u7CFB\u7EDF\u4E2D\u7684\u4F4D\u7F6E\u5730\u5740","\u4E00\u4E2A\u5FEB\u6377\u952E","\u7F51\u9875\u7684 URL"],correctIndex:1,explanation_zh:"\u8DEF\u5F84\u662F\u6587\u4EF6\u6216\u76EE\u5F55\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\uFF0C\u6BD4\u5982 /Users/me/project/src/index.ts\u3002",explanation_en:"A path is the address of a file or directory in the file system, like /Users/me/project/src/index.ts."},{id:"w1q11",world:1,question_zh:"\u300C\u5F00\u6E90 (Open Source)\u300D\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",question_en:"What does 'Open Source' mean?",options:["\u514D\u8D39\u8F6F\u4EF6","\u6E90\u4EE3\u7801\u516C\u5F00\uFF0C\u4EFB\u4F55\u4EBA\u53EF\u4EE5\u67E5\u770B\u548C\u8D21\u732E","\u53EA\u80FD\u5728\u7EBF\u4F7F\u7528","\u6CA1\u6709\u7248\u6743"],correctIndex:1,explanation_zh:"\u5F00\u6E90\u610F\u5473\u7740\u4EE3\u7801\u516C\u5F00\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u67E5\u770B\u3001\u4F7F\u7528\u548C\u8D21\u732E\u3002Claude Code \u672C\u8EAB\u5C31\u662F\u5F00\u6E90\u7684\u3002",explanation_en:"Open source means the code is public \u2014 anyone can view, use, and contribute. Claude Code itself is open source."},{id:"w1q12",world:1,question_zh:"Markdown (.md) \u6587\u4EF6\u662F\u4EC0\u4E48\uFF1F",question_en:"What is a Markdown (.md) file?",options:["\u56FE\u7247\u683C\u5F0F","\u7528\u7B80\u5355\u8BED\u6CD5\u5199\u683C\u5F0F\u5316\u6587\u672C\u7684\u6587\u4EF6","\u6570\u636E\u5E93\u6587\u4EF6","\u53EF\u6267\u884C\u7A0B\u5E8F"],correctIndex:1,explanation_zh:"Markdown \u7528\u7B80\u5355\u7684\u7B26\u53F7\uFF08#\u6807\u9898\u3001**\u52A0\u7C97**\u3001-\u5217\u8868\uFF09\u6765\u5199\u683C\u5F0F\u5316\u6587\u672C\u3002README.md \u548C CLAUDE.md \u90FD\u662F Markdown \u6587\u4EF6\u3002",explanation_en:"Markdown uses simple symbols (#headings, **bold**, -lists) for formatted text. README.md and CLAUDE.md are Markdown files."},{id:"w1q13",world:1,question_zh:"\u300C\u6743\u9650 (Permission)\u300D\u5728 Claude Code \u4E2D\u6307\u4EC0\u4E48\uFF1F",question_en:"What does 'Permission' mean in Claude Code?",options:["\u7528\u6237\u5BC6\u7801","Claude Code \u6267\u884C\u7279\u5B9A\u64CD\u4F5C\u7684\u6388\u6743","\u6587\u4EF6\u5927\u5C0F\u9650\u5236","\u7F51\u7EDC\u901F\u5EA6"],correctIndex:1,explanation_zh:"Claude Code \u6267\u884C\u654F\u611F\u64CD\u4F5C\uFF08\u5982\u5199\u6587\u4EF6\u3001\u8FD0\u884C\u547D\u4EE4\uFF09\u524D\u4F1A\u8BF7\u6C42\u4F60\u7684\u8BB8\u53EF\uFF0C\u786E\u4FDD\u5B89\u5168\u3002",explanation_en:"Claude Code asks for your permission before sensitive operations (writing files, running commands) to ensure safety."}],2:[{id:"w2q1",world:2,question_zh:"\u4E0A\u4E0B\u6587\u7A97\u53E3\u5FEB\u6EE1\u65F6\uFF0C\u5E94\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",question_en:"Which command should you use when the context window is almost full?",options:["/clear","/compact","/rewind","/help"],correctIndex:1,explanation_zh:"/compact \u4F1A\u628A\u957F\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u4E0A\u4E0B\u6587\u7A7A\u95F4\u4F46\u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u3002/clear \u4F1A\u6E05\u9664\u6240\u6709\u5185\u5BB9\u3002",explanation_en:"/compact condenses a long conversation into key summaries, freeing context space while preserving important information. /clear erases everything."},{id:"w2q2",world:2,question_zh:"Claude Code \u6539\u574F\u4E86\u4EE3\u7801\uFF0C\u4F60\u60F3\u6062\u590D\u5230\u4FEE\u6539\u4E4B\u524D\u3002\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",question_en:"Claude Code broke your code and you want to restore the previous state. Which command?",options:["/undo","/rewind","/rollback","/clear"],correctIndex:1,explanation_zh:"/rewind \u53EF\u4EE5\u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u6587\u4EF6\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002",explanation_en:"/rewind undoes Claude Code's recent changes and restores files to their previous state."},{id:"w2q3",world:2,question_zh:"\u60F3\u67E5\u770B\u5F53\u524D\u4F1A\u8BDD\u82B1\u4E86\u591A\u5C11 token\uFF0C\u5E94\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",question_en:"Which command shows how many tokens the current session has used?",options:["/cost","/billing","/usage","/stats"],correctIndex:2,explanation_zh:"/usage \u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u7684 token \u4F7F\u7528\u91CF\u548C\u8D39\u7528\u7EDF\u8BA1\u3002",explanation_en:"/usage shows the token usage and cost statistics for the current session."},{id:"w2q4",world:2,question_zh:"\u63D0\u4EA4 PR \u4E4B\u524D\uFF0C\u60F3\u8BA9 Claude Code \u5E2E\u4F60\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\uFF0C\u8BE5\u7528\u4EC0\u4E48\uFF1F",question_en:"Before submitting a PR, you want Claude Code to check your code quality. Which command?",options:["/lint","/check","/review","/audit"],correctIndex:2,explanation_zh:"/review \u8BA9 Claude Code \u5BA1\u67E5\u4EE3\u7801\u6539\u52A8\uFF0C\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u5E76\u7ED9\u51FA\u6539\u8FDB\u5EFA\u8BAE\u3002",explanation_en:"/review has Claude Code review your code changes, find potential issues, and suggest improvements."},{id:"w2q5",world:2,question_zh:"\u5728\u65B0\u9879\u76EE\u4E2D\u751F\u6210 CLAUDE.md \u6587\u4EF6\uFF0C\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",question_en:"Which command generates a CLAUDE.md file for a new project?",options:["/setup","/config","/init","/new"],correctIndex:2,explanation_zh:"/init \u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210 CLAUDE.md \u914D\u7F6E\u6587\u4EF6\uFF0C\u5E2E\u52A9 Claude Code \u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",explanation_en:"/init generates a CLAUDE.md configuration file in the current directory to help Claude Code understand your project."},{id:"w2q6",world:2,question_zh:"\u4F60\u60F3\u5207\u6362\u5230\u4E00\u4E2A\u66F4\u4FBF\u5B9C\u7684 AI \u6A21\u578B\u6765\u5904\u7406\u7B80\u5355\u4EFB\u52A1\u3002\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",question_en:"You want to switch to a cheaper AI model for simple tasks. Which command?",options:["/switch","/engine","/model","/upgrade"],correctIndex:2,explanation_zh:"/model \u53EF\u4EE5\u5207\u6362 Claude Code \u4F7F\u7528\u7684 AI \u6A21\u578B\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\uFF0COpus \u6700\u5F3A\u3002",explanation_en:"/model lets you switch the AI model Claude Code uses. Haiku is fastest and cheapest, Opus is most capable."},{id:"w2q7",world:2,question_zh:"Claude Code \u7684\u56DE\u590D\u592A\u590D\u6742\uFF0C\u4F60\u60F3\u8BA9\u5B83\u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u3002\u8BE5\u600E\u4E48\u505A\uFF1F",question_en:"Claude Code's response is too complex. You want a simpler explanation. What do you do?",options:["/explain","/easy","/simplify","/translate"],correctIndex:2,explanation_zh:"/simplify \u8BA9 Claude Code \u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u4E0A\u4E00\u6761\u56DE\u590D\u3002",explanation_en:"/simplify asks Claude Code to re-explain its last response in simpler language."},{id:"w2q8",world:2,question_zh:"\u4F60\u60F3\u628A Claude Code \u7684\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u8BE5\u7528\u4EC0\u4E48\u547D\u4EE4\uFF1F",question_en:"You want to copy Claude Code's response to your clipboard. Which command?",options:["/export","/save","/clipboard","/copy"],correctIndex:3,explanation_zh:"/copy \u628A Claude Code \u6700\u540E\u4E00\u6761\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u65B9\u4FBF\u7C98\u8D34\u5230\u522B\u5904\u4F7F\u7528\u3002",explanation_en:"/copy copies Claude Code's last response to your clipboard for easy pasting elsewhere."},{id:"w2q9",world:2,question_zh:"/clear \u548C /compact \u7684\u4E3B\u8981\u533A\u522B\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the main difference between /clear and /compact?",options:["/clear \u66F4\u5FEB\uFF0C/compact \u66F4\u6162","/clear \u5220\u9664\u6240\u6709\u5386\u53F2\uFF0C/compact \u4FDD\u7559\u5173\u952E\u4FE1\u606F","/clear \u7528\u4E8E\u4EE3\u7801\uFF0C/compact \u7528\u4E8E\u5BF9\u8BDD","\u6CA1\u6709\u533A\u522B\uFF0C\u529F\u80FD\u4E00\u6837"],correctIndex:1,explanation_zh:"/clear \u6E05\u9664\u6240\u6709\u5BF9\u8BDD\u5386\u53F2\u91CD\u65B0\u5F00\u59CB\uFF1B/compact \u53EA\u538B\u7F29\u5BF9\u8BDD\u4F46\u4FDD\u7559\u5173\u952E\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002",explanation_en:"/clear wipes all conversation history; /compact compresses the conversation while preserving key context."},{id:"w2q10",world:2,question_zh:"\u521A\u88C5\u597D Claude Code\uFF0C\u4E0D\u77E5\u9053\u6709\u54EA\u4E9B\u547D\u4EE4\u53EF\u7528\u3002\u8BE5\u8F93\u5165\u4EC0\u4E48\uFF1F",question_en:"You just installed Claude Code and don't know what commands are available. What do you type?",options:["/guide","/menu","/commands","/help"],correctIndex:3,explanation_zh:"/help \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u548C\u4F7F\u7528\u8BF4\u660E\u3002",explanation_en:"/help shows a list of all available slash commands and their usage."},{id:"w2q11",world:2,question_zh:"Claude Code \u8FD0\u884C bash \u547D\u4EE4\u524D\u4F1A\u600E\u4E48\u505A\uFF1F",question_en:"What does Claude Code do before running a bash command?",options:["\u76F4\u63A5\u8FD0\u884C","\u5148\u663E\u793A\u547D\u4EE4\uFF0C\u7B49\u4F60\u6279\u51C6\u540E\u518D\u6267\u884C","\u53D1\u9001\u5230\u4E91\u7AEF\u9A8C\u8BC1","\u81EA\u52A8\u5907\u4EFD\u6587\u4EF6"],correctIndex:1,explanation_zh:"Claude Code \u4F1A\u5148\u663E\u793A\u8981\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u6279\u51C6\u6216\u62D2\u7EDD\u3002\u8FD9\u662F\u5B89\u5168\u673A\u5236\u7684\u4E00\u90E8\u5206\u3002",explanation_en:"Claude Code shows the command first and waits for your approval. This is part of its safety mechanism."},{id:"w2q12",world:2,question_zh:"\u5728\u7EC8\u7AEF\u4E2D\u5982\u4F55\u9000\u51FA Claude Code\uFF1F",question_en:"How do you exit Claude Code in the terminal?",options:["\u5173\u95ED\u7535\u8111","\u8F93\u5165 /exit \u6216\u6309 Ctrl+C","\u70B9\u51FB X \u6309\u94AE","\u8F93\u5165 quit()"],correctIndex:1,explanation_zh:"\u4F60\u53EF\u4EE5\u8F93\u5165 /exit \u6216\u6309 Ctrl+C \u6765\u7ED3\u675F Claude Code \u4F1A\u8BDD\u3002",explanation_en:"You can type /exit or press Ctrl+C to end a Claude Code session."},{id:"w2q13",world:2,question_zh:"Claude Code \u7684 /debug \u547D\u4EE4\u505A\u4EC0\u4E48\uFF1F",question_en:"What does Claude Code's /debug command do?",options:["\u5220\u9664 bug","\u5E2E\u52A9\u8BCA\u65AD\u548C\u4FEE\u590D\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF","\u8C03\u8BD5 Claude Code \u672C\u8EAB","\u663E\u793A\u8C03\u8BD5\u65E5\u5FD7"],correctIndex:1,explanation_zh:"/debug \u5E2E\u4F60\u8BCA\u65AD\u4EE3\u7801\u4E2D\u7684\u95EE\u9898\uFF0C\u5206\u6790\u9519\u8BEF\u4FE1\u606F\uFF0C\u627E\u51FA\u6839\u672C\u539F\u56E0\u5E76\u63D0\u4F9B\u4FEE\u590D\u5EFA\u8BAE\u3002",explanation_en:"/debug helps diagnose code issues, analyze error messages, find root causes, and suggest fixes."},{id:"w2q14",world:2,question_zh:"Claude Code \u80FD\u540C\u65F6\u7F16\u8F91\u591A\u4E2A\u6587\u4EF6\u5417\uFF1F",question_en:"Can Claude Code edit multiple files at once?",options:["\u4E0D\u80FD\uFF0C\u4E00\u6B21\u53EA\u80FD\u7F16\u8F91\u4E00\u4E2A","\u53EF\u4EE5\uFF0C\u5B83\u80FD\u7406\u89E3\u6587\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u5E76\u540C\u65F6\u4FEE\u6539","\u53EA\u80FD\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u5185","\u9700\u8981\u7279\u6B8A\u63D2\u4EF6"],correctIndex:1,explanation_zh:"Claude Code \u53EF\u4EE5\u540C\u65F6\u7F16\u8F91\u591A\u4E2A\u6587\u4EF6\uFF0C\u7406\u89E3\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u786E\u4FDD\u4FEE\u6539\u4E00\u81F4\u6027\u3002",explanation_en:"Claude Code can edit multiple files simultaneously, understanding their dependencies and ensuring consistency."},{id:"w2q15",world:2,question_zh:"\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u7528 /compact \u800C\u4E0D\u662F /clear\uFF1F",question_en:"When should you use /compact instead of /clear?",options:["\u6C38\u8FDC\u4E0D\u9700\u8981","\u5F53\u4F60\u60F3\u4FDD\u7559\u4E0A\u4E0B\u6587\u4F46\u91CA\u653E\u7A7A\u95F4\u65F6","\u5F53\u4F60\u60F3\u5220\u9664\u6240\u6709\u4EE3\u7801\u65F6","\u6BCF\u6B21\u5BF9\u8BDD\u5F00\u59CB\u65F6"],correctIndex:1,explanation_zh:"\u5F53\u5BF9\u8BDD\u5F88\u957F\u4F46\u4F60\u8FD8\u9700\u8981\u4E4B\u524D\u8BA8\u8BBA\u7684\u4E0A\u4E0B\u6587\u65F6\uFF0C\u7528 /compact\u3002\u5982\u679C\u8981\u5B8C\u5168\u91CD\u65B0\u5F00\u59CB\uFF0C\u7528 /clear\u3002",explanation_en:"Use /compact when the conversation is long but you still need prior context. Use /clear for a completely fresh start."}],3:[{id:"w3q1",world:3,question_zh:"\u300CAgentic\u300D\u5728 Claude Code \u7684\u8BED\u5883\u4E2D\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",question_en:"What does 'Agentic' mean in the context of Claude Code?",options:["\u4EE3\u7406\u670D\u52A1\u5668","AI \u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u884C\u52A8","\u8FDC\u7A0B\u63A7\u5236","\u81EA\u52A8\u5B89\u88C5"],correctIndex:1,explanation_zh:"Agentic \u6307 AI \u80FD\u81EA\u4E3B\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\uFF0C\u4E0D\u53EA\u662F\u88AB\u52A8\u56DE\u7B54\u95EE\u9898\u3002",explanation_en:"Agentic means the AI can autonomously read files, write code, and run commands, not just passively answer questions."},{id:"w3q2",world:3,question_zh:"\u4E0B\u9762\u54EA\u4E2A\u662F\u66F4\u597D\u7684 Claude Code \u63D0\u793A\u8BCD\uFF1F",question_en:"Which is a better prompt for Claude Code?",options:["\u5E2E\u6211\u5199\u4EE3\u7801","\u5728 src/utils.ts \u4E2D\u6DFB\u52A0\u4E00\u4E2A formatDate \u51FD\u6570\uFF0C\u8F93\u5165 Date \u5BF9\u8C61\uFF0C\u8F93\u51FA YYYY-MM-DD \u683C\u5F0F\u5B57\u7B26\u4E32","\u6211\u9700\u8981\u4E00\u4E2A\u51FD\u6570","\u5199\u4E2A\u65E5\u671F\u7684\u4E1C\u897F"],correctIndex:1,explanation_zh:"\u597D\u7684\u63D0\u793A\u8BCD\u8981\u5177\u4F53\u8BF4\u660E\uFF1A\u5728\u54EA\u4E2A\u6587\u4EF6\u3001\u505A\u4EC0\u4E48\u529F\u80FD\u3001\u8F93\u5165\u8F93\u51FA\u662F\u4EC0\u4E48\u3002\u8D8A\u5177\u4F53\uFF0CClaude Code \u7684\u7ED3\u679C\u8D8A\u51C6\u786E\u3002",explanation_en:"Good prompts specify: which file, what function, and what the input/output should be. The more specific, the more accurate the result."},{id:"w3q3",world:3,question_zh:"\u300C\u4E0A\u4E0B\u6587\u7A97\u53E3 (Context Window)\u300D\u662F\u4EC0\u4E48\uFF1F",question_en:"What is a 'Context Window'?",options:["\u6D4F\u89C8\u5668\u7A97\u53E3","AI \u4E00\u6B21\u80FD\u5904\u7406\u7684\u4FE1\u606F\u91CF\u4E0A\u9650","\u4EE3\u7801\u7F16\u8F91\u5668\u7684\u9884\u89C8\u7A97\u53E3","\u7EC8\u7AEF\u7684\u5927\u5C0F"],correctIndex:1,explanation_zh:"\u4E0A\u4E0B\u6587\u7A97\u53E3\u662F AI \u80FD\u540C\u65F6\u770B\u5230\u548C\u5904\u7406\u7684\u4FE1\u606F\u91CF\u3002\u7A97\u53E3\u8D8A\u5927\uFF0C\u80FD\u7406\u89E3\u7684\u4EE3\u7801\u548C\u5BF9\u8BDD\u8D8A\u591A\u3002",explanation_en:"The context window is the maximum amount of information the AI can see and process at once. Larger windows mean more code and conversation it can understand."},{id:"w3q4",world:3,question_zh:"Token \u5927\u7EA6\u7B49\u4E8E\u591A\u5C11\u4E2A\u82F1\u6587\u5355\u8BCD\uFF1F",question_en:"Approximately how many English words is one token?",options:["1 \u4E2A\u5355\u8BCD","3/4 \u4E2A\u5355\u8BCD","2 \u4E2A\u5355\u8BCD","10 \u4E2A\u5355\u8BCD"],correctIndex:1,explanation_zh:"\u4E00\u4E2A token \u5927\u7EA6\u662F 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u6570\u8BA1\u8D39\u3002",explanation_en:"One token is approximately 3/4 of an English word. Claude Code is billed based on token count."},{id:"w3q5",world:3,question_zh:"Claude Code \u4E2D\u7684\u300C\u5B50\u667A\u80FD\u4F53 (Sub-agent)\u300D\u662F\u4EC0\u4E48\uFF1F",question_en:"What is a 'Sub-agent' in Claude Code?",options:["\u53E6\u4E00\u4E2A AI \u4EA7\u54C1","Claude Code \u6D3E\u51FA\u7684\u72EC\u7ACB\u5B50\u4EFB\u52A1\u52A9\u624B","\u4F60\u7684\u540C\u4E8B","\u4E00\u4E2A\u63D2\u4EF6"],correctIndex:1,explanation_zh:"\u5B50\u667A\u80FD\u4F53\u662F Claude Code \u6D3E\u51FA\u7684\u5C0F\u52A9\u624B\uFF0C\u8D1F\u8D23\u72EC\u7ACB\u5B8C\u6210\u5B50\u4EFB\u52A1\uFF0C\u6BD4\u5982\u5206\u6790\u4E0D\u540C\u6587\u4EF6\u6216\u5E76\u884C\u5904\u7406\u591A\u4E2A\u6539\u52A8\u3002",explanation_en:"Sub-agents are helpers dispatched by Claude Code to independently complete subtasks, like analyzing different files or processing changes in parallel."},{id:"w3q6",world:3,question_zh:"\u5199\u63D0\u793A\u8BCD\u65F6\uFF0C\u4EE5\u4E0B\u54EA\u4E2A\u56E0\u7D20\u6700\u4E0D\u91CD\u8981\uFF1F",question_en:"When writing prompts, which factor is LEAST important?",options:["\u5177\u4F53\u6027 (Specificity)","\u4E0A\u4E0B\u6587 (Context)","\u4F7F\u7528\u82B1\u54E8\u7684\u8BCD\u6C47","\u6E05\u6670\u5EA6 (Clarity)"],correctIndex:2,explanation_zh:"\u597D\u7684\u63D0\u793A\u8BCD\u9700\u8981\u5177\u4F53\u3001\u6709\u4E0A\u4E0B\u6587\u3001\u6E05\u6670\u660E\u4E86\u3002\u4F7F\u7528\u82B1\u54E8\u7684\u8BCD\u6C47\u53CD\u800C\u53EF\u80FD\u8BA9\u610F\u601D\u6A21\u7CCA\u3002",explanation_en:"Good prompts need specificity, context, and clarity. Fancy vocabulary can actually make the meaning less clear."},{id:"w3q7",world:3,question_zh:"\u300CCompaction\uFF08\u538B\u7F29\uFF09\u300D\u5728 Claude Code \u4E2D\u7684\u4F5C\u7528\u662F\uFF1F",question_en:"What does 'Compaction' do in Claude Code?",options:["\u538B\u7F29\u6587\u4EF6\u5927\u5C0F","\u538B\u7F29\u5BF9\u8BDD\u5386\u53F2\u4EE5\u91CA\u653E\u4E0A\u4E0B\u6587\u7A7A\u95F4","\u538B\u7F29\u56FE\u7247","\u538B\u7F29\u4EE3\u7801\u884C\u6570"],correctIndex:1,explanation_zh:"Compaction \u628A\u957F\u5BF9\u8BDD\u7CBE\u7B80\u6210\u5173\u952E\u4FE1\u606F\uFF0C\u5728\u4E0D\u4E22\u5931\u91CD\u8981\u4E0A\u4E0B\u6587\u7684\u524D\u63D0\u4E0B\u91CA\u653E\u4E0A\u4E0B\u6587\u7A97\u53E3\u7A7A\u95F4\u3002",explanation_en:"Compaction condenses long conversations into key information, freeing context window space without losing important context."},{id:"w3q8",world:3,question_zh:"Claude Code \u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B\u6A21\u578B\uFF1F",question_en:"Which models can Claude Code use?",options:["\u53EA\u6709 GPT-4","Opus\u3001Sonnet\u3001Haiku","\u53EA\u6709 Sonnet","\u4EFB\u4F55\u5F00\u6E90\u6A21\u578B"],correctIndex:1,explanation_zh:"Claude Code \u53EF\u4EE5\u5207\u6362\u4F7F\u7528 Claude \u7CFB\u5217\u7684 Opus\uFF08\u6700\u5F3A\uFF09\u3001Sonnet\uFF08\u5747\u8861\uFF09\u548C Haiku\uFF08\u6700\u5FEB\uFF09\u6A21\u578B\u3002",explanation_en:"Claude Code can switch between Claude's Opus (most capable), Sonnet (balanced), and Haiku (fastest) models."},{id:"w3q9",world:3,question_zh:"API \u5728 Claude Code \u4E2D\u626E\u6F14\u4EC0\u4E48\u89D2\u8272\uFF1F",question_en:"What role does the API play in Claude Code?",options:["\u5B58\u50A8\u4EE3\u7801","\u8FDE\u63A5\u4F60\u7684\u7EC8\u7AEF\u548C Claude \u6A21\u578B","\u7F16\u8BD1\u4EE3\u7801","\u7BA1\u7406\u6587\u4EF6\u7CFB\u7EDF"],correctIndex:1,explanation_zh:"Claude Code \u901A\u8FC7 Anthropic API \u4E0E\u8FDC\u7AEF\u7684 Claude \u6A21\u578B\u901A\u4FE1\uFF0C\u628A\u4F60\u7684\u6307\u4EE4\u53D1\u9001\u8FC7\u53BB\uFF0C\u518D\u628A\u7ED3\u679C\u4F20\u56DE\u6765\u3002",explanation_en:"Claude Code communicates with the remote Claude model through the Anthropic API, sending your instructions and returning results."},{id:"w3q10",world:3,question_zh:"\u4E3A\u4EC0\u4E48\u5728\u63D0\u793A\u8BCD\u4E2D\u63D0\u4F9B\u6587\u4EF6\u8DEF\u5F84\u5F88\u91CD\u8981\uFF1F",question_en:"Why is providing file paths in prompts important?",options:["\u8BA9\u63D0\u793A\u8BCD\u66F4\u957F","\u5E2E\u52A9 Claude Code \u7CBE\u786E\u5B9A\u4F4D\u8981\u4FEE\u6539\u7684\u4EE3\u7801","\u6CA1\u6709\u533A\u522B","\u6587\u4EF6\u8DEF\u5F84\u662F\u53EF\u9009\u7684"],correctIndex:1,explanation_zh:"\u63D0\u4F9B\u5177\u4F53\u6587\u4EF6\u8DEF\u5F84\u8BA9 Claude Code \u4E0D\u7528\u731C\u6D4B\u4F60\u8981\u4FEE\u6539\u54EA\u4E2A\u6587\u4EF6\uFF0C\u76F4\u63A5\u7CBE\u51C6\u5B9A\u4F4D\u3002",explanation_en:"Specific file paths let Claude Code locate exactly which file to modify without guessing."},{id:"w3q11",world:3,question_zh:"\u300C\u591A\u8F6E\u5BF9\u8BDD\u300D\u5728 Claude Code \u4E2D\u6709\u4EC0\u4E48\u4F18\u52BF\uFF1F",question_en:"What is the advantage of 'multi-turn conversations' in Claude Code?",options:["\u6CA1\u6709\u4F18\u52BF","\u53EF\u4EE5\u9010\u6B65\u7EC6\u5316\u9700\u6C42\uFF0C\u6BCF\u8F6E\u8FED\u4EE3\u6539\u8FDB\u7ED3\u679C","\u6D6A\u8D39 token","\u53EA\u662F\u804A\u5929"],correctIndex:1,explanation_zh:"\u591A\u8F6E\u5BF9\u8BDD\u8BA9\u4F60\u9010\u6B65\u7EC6\u5316\u9700\u6C42\u3002\u5148\u7ED9\u5927\u65B9\u5411\uFF0C\u770B\u7ED3\u679C\u540E\u518D\u8C03\u6574\u7EC6\u8282\uFF0C\u6BD4\u4E00\u6B21\u6027\u5199\u5B8C\u7F8E\u63D0\u793A\u8BCD\u66F4\u6709\u6548\u3002",explanation_en:"Multi-turn conversations let you iteratively refine. Start with direction, adjust details after seeing results \u2014 more effective than one perfect prompt."},{id:"w3q12",world:3,question_zh:"\u4E0B\u9762\u54EA\u79CD\u65B9\u5F0F\u6700\u80FD\u5E2E\u52A9 Claude Code \u7406\u89E3\u4F60\u7684\u4EE3\u7801\u98CE\u683C\uFF1F",question_en:"Which best helps Claude Code understand your coding style?",options:["\u53E3\u5934\u63CF\u8FF0\u98CE\u683C","\u5728 CLAUDE.md \u4E2D\u5199\u660E\u7F16\u7801\u89C4\u8303","\u4EC0\u4E48\u90FD\u4E0D\u505A","\u7ED9\u5B83\u4E00\u4E2A YouTube \u6559\u7A0B\u94FE\u63A5"],correctIndex:1,explanation_zh:"\u5728 CLAUDE.md \u4E2D\u5199\u660E\u7F16\u7801\u89C4\u8303\uFF08\u7F29\u8FDB\u3001\u547D\u540D\u89C4\u5219\u3001\u6846\u67B6\u504F\u597D\uFF09\uFF0CClaude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u8BFB\u53D6\u5E76\u9075\u5FAA\u3002",explanation_en:"Writing coding conventions in CLAUDE.md (indentation, naming rules, framework preferences) ensures Claude Code follows them every session."},{id:"w3q13",world:3,question_zh:"\u5F53 Claude Code \u7684\u56DE\u7B54\u4E0D\u591F\u597D\u65F6\uFF0C\u6700\u6709\u6548\u7684\u505A\u6CD5\u662F\uFF1F",question_en:"When Claude Code's response isn't good enough, the most effective approach is?",options:["\u91CD\u65B0\u542F\u52A8 Claude Code","\u7ED9\u51FA\u5177\u4F53\u53CD\u9988\u8BF4\u660E\u54EA\u91CC\u4E0D\u5BF9\u3001\u9700\u8981\u600E\u4E48\u6539","\u6362\u4E00\u4E2A AI \u5DE5\u5177","\u591A\u8BD5\u51E0\u6B21\u540C\u6837\u7684\u63D0\u793A\u8BCD"],correctIndex:1,explanation_zh:"\u7ED9\u5177\u4F53\u53CD\u9988\uFF08\u300C\u8FD9\u4E2A\u51FD\u6570\u7F3A\u5C11\u9519\u8BEF\u5904\u7406\u300D\u800C\u4E0D\u662F\u300C\u4E0D\u597D\u300D\uFF09\u8BA9 Claude Code \u7CBE\u51C6\u6539\u8FDB\u3002",explanation_en:"Specific feedback ('this function lacks error handling' not 'bad') helps Claude Code improve precisely."},{id:"w3q14",world:3,question_zh:"Claude Code \u7684\u300C\u5DE5\u5177 (Tools)\u300D\u662F\u4EC0\u4E48\u6982\u5FF5\uFF1F",question_en:"What are 'Tools' in Claude Code?",options:["\u786C\u4EF6\u8BBE\u5907","Claude Code \u53EF\u4EE5\u8C03\u7528\u7684\u80FD\u529B\uFF0C\u5982\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4","\u7B2C\u4E09\u65B9\u63D2\u4EF6","\u7F16\u7A0B\u8BED\u8A00"],correctIndex:1,explanation_zh:"\u5DE5\u5177\u662F Claude Code \u7684\u5185\u7F6E\u80FD\u529B\u3002\u5B83\u53EF\u4EE5\u8C03\u7528 Read\uFF08\u8BFB\u6587\u4EF6\uFF09\u3001Write\uFF08\u5199\u6587\u4EF6\uFF09\u3001Bash\uFF08\u8FD0\u884C\u547D\u4EE4\uFF09\u7B49\u5DE5\u5177\u6765\u5B8C\u6210\u4EFB\u52A1\u3002",explanation_en:"Tools are Claude Code's built-in capabilities. It can call Read (read files), Write (write files), Bash (run commands) and more to complete tasks."}],4:[{id:"w4q1",world:4,question_zh:"\u300C\u7248\u672C\u63A7\u5236 (Version Control)\u300D\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the main purpose of 'Version Control'?",options:["\u52A0\u901F\u4EE3\u7801\u8FD0\u884C","\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\u5386\u53F2","\u81EA\u52A8\u90E8\u7F72\u7F51\u7AD9","\u68C0\u6D4B\u4EE3\u7801\u9519\u8BEF"],correctIndex:1,explanation_zh:"\u7248\u672C\u63A7\u5236\uFF08\u5982 Git\uFF09\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u56DE\u6EAF\u5386\u53F2\u3001\u534F\u4F5C\u5F00\u53D1\u3001\u5B89\u5168\u5730\u5C1D\u8BD5\u65B0\u529F\u80FD\u3002",explanation_en:"Version control (like Git) records every code change, letting you trace history, collaborate, and safely try new features."},{id:"w4q2",world:4,question_zh:"\u300C\u5206\u652F (Branch)\u300D\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the purpose of a 'Branch'?",options:["\u5907\u4EFD\u4EE3\u7801","\u5728\u4E0D\u5F71\u54CD\u4E3B\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u5F00\u53D1\u65B0\u529F\u80FD","\u5220\u9664\u65E7\u4EE3\u7801","\u5408\u5E76\u6587\u4EF6"],correctIndex:1,explanation_zh:"\u5206\u652F\u8BA9\u4F60\u5728\u72EC\u7ACB\u7684\u7EBF\u8DEF\u4E0A\u5F00\u53D1\uFF0C\u4E0D\u5F71\u54CD\u4E3B\u5206\u652F\u7684\u7A33\u5B9A\u6027\u3002\u5F00\u53D1\u5B8C\u6210\u540E\u518D\u5408\u5E76\u56DE\u53BB\u3002",explanation_en:"Branches let you develop on an isolated line without affecting the main branch's stability. You merge back when done."},{id:"w4q3",world:4,question_zh:"Pull Request (PR) \u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the purpose of a Pull Request (PR)?",options:["\u4E0B\u8F7D\u4EE3\u7801","\u8BF7\u6C42\u628A\u4F60\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F","\u62C9\u53D6\u6700\u65B0\u7248\u672C","\u5220\u9664\u5206\u652F"],correctIndex:1,explanation_zh:"PR \u662F\u8BF7\u6C42\u5C06\u4F60\u7684\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6B63\u5F0F\u6D41\u7A0B\uFF0C\u901A\u5E38\u5305\u542B\u4EE3\u7801\u5BA1\u67E5\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u521B\u5EFA\u548C\u5BA1\u67E5 PR\u3002",explanation_en:"A PR is a formal process to request merging your branch into the main branch, usually with code review. Claude Code can help create and review PRs."},{id:"w4q4",world:4,question_zh:"\u300C\u91CD\u6784 (Refactoring)\u300D\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",question_en:"What does 'Refactoring' mean?",options:["\u6DFB\u52A0\u65B0\u529F\u80FD","\u5728\u4E0D\u6539\u53D8\u529F\u80FD\u7684\u524D\u63D0\u4E0B\u6539\u5584\u4EE3\u7801\u7ED3\u6784","\u5220\u9664\u6240\u6709\u4EE3\u7801\u91CD\u5199","\u4FEE\u590D bug"],correctIndex:1,explanation_zh:"\u91CD\u6784\u662F\u5728\u529F\u80FD\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u4F18\u5316\u4EE3\u7801\u7ED3\u6784\u3001\u63D0\u9AD8\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002Claude Code \u64C5\u957F\u5927\u89C4\u6A21\u5B89\u5168\u91CD\u6784\u3002",explanation_en:"Refactoring improves code structure, readability, and maintainability without changing functionality. Claude Code excels at large-scale safe refactoring."},{id:"w4q5",world:4,question_zh:"\u300C\u90E8\u7F72 (Deployment)\u300D\u662F\u6307\u4EC0\u4E48\uFF1F",question_en:"What does 'Deployment' mean?",options:["\u5199\u4EE3\u7801","\u628A\u4EE3\u7801\u53D1\u5E03\u5230\u670D\u52A1\u5668\u4F9B\u7528\u6237\u4F7F\u7528","\u6D4B\u8BD5\u4EE3\u7801","\u8BBE\u8BA1\u754C\u9762"],correctIndex:1,explanation_zh:"\u90E8\u7F72\u662F\u628A\u4EE3\u7801\u4ECE\u5F00\u53D1\u73AF\u5883\u53D1\u5E03\u5230\u751F\u4EA7\u670D\u52A1\u5668\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E\u548C\u6267\u884C\u90E8\u7F72\u6D41\u7A0B\u3002",explanation_en:"Deployment is the process of publishing code from development to production servers. Claude Code can help configure and execute deployment workflows."},{id:"w4q6",world:4,question_zh:"Claude Code \u53EF\u4EE5\u5E2E\u4F60\u5B8C\u6210\u4EE5\u4E0B\u54EA\u4E2A Git \u64CD\u4F5C\uFF1F",question_en:"Which Git operation can Claude Code help you with?",options:["\u53EA\u80FD commit","commit\u3001\u521B\u5EFA PR\u3001\u4EE3\u7801\u5BA1\u67E5\u3001\u89E3\u51B3\u51B2\u7A81","\u53EA\u80FD push","\u53EA\u80FD\u521B\u5EFA\u5206\u652F"],correctIndex:1,explanation_zh:"Claude Code \u80FD\u5E2E\u4F60\u5B8C\u6210\u51E0\u4E4E\u6240\u6709 Git \u64CD\u4F5C\uFF1A\u5199 commit message\u3001\u521B\u5EFA\u5206\u652F\u548C PR\u3001\u5BA1\u67E5\u4EE3\u7801\u3001\u89E3\u51B3\u5408\u5E76\u51B2\u7A81\u3002",explanation_en:"Claude Code can help with almost all Git operations: writing commit messages, creating branches and PRs, reviewing code, and resolving merge conflicts."},{id:"w4q7",world:4,question_zh:"\u4EC0\u4E48\u662F\u300C\u4F9D\u8D56 (Dependency)\u300D\uFF1F",question_en:"What is a 'Dependency'?",options:["\u4EE3\u7801\u7684\u6CE8\u91CA","\u9879\u76EE\u9700\u8981\u7684\u5916\u90E8\u5E93\u6216\u5305","\u6587\u4EF6\u7684\u5907\u4EFD","\u6D4B\u8BD5\u7528\u4F8B"],correctIndex:1,explanation_zh:"\u4F9D\u8D56\u662F\u4F60\u7684\u9879\u76EE\u7528\u5230\u7684\u5916\u90E8\u4EE3\u7801\u5E93\uFF0C\u901A\u5E38\u5728 package.json \u7B49\u6587\u4EF6\u4E2D\u58F0\u660E\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406\u4F9D\u8D56\u548C\u89E3\u51B3\u51B2\u7A81\u3002",explanation_en:"Dependencies are external code libraries your project uses, typically declared in files like package.json. Claude Code can help manage them."},{id:"w4q8",world:4,question_zh:"\u5728\u5B8C\u6574\u7684\u5F00\u53D1\u6D41\u7A0B\u4E2D\uFF0C\u4EE5\u4E0B\u6B65\u9AA4\u7684\u6B63\u786E\u987A\u5E8F\u662F\uFF1F",question_en:"What is the correct order of steps in a development workflow?",options:["\u90E8\u7F72 \u2192 \u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4","\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4 \u2192 \u521B\u5EFA PR \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72","\u521B\u5EFA PR \u2192 \u5199\u4EE3\u7801 \u2192 \u90E8\u7F72","\u63D0\u4EA4 \u2192 \u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u90E8\u7F72"],correctIndex:1,explanation_zh:"\u6807\u51C6\u5F00\u53D1\u6D41\u7A0B\uFF1A\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4(commit) \u2192 \u521B\u5EFA PR \u2192 \u4EE3\u7801\u5BA1\u67E5 \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72\u3002Claude Code \u53EF\u4EE5\u8F85\u52A9\u6BCF\u4E00\u6B65\u3002",explanation_en:"Standard workflow: write code \u2192 test \u2192 commit \u2192 create PR \u2192 code review \u2192 merge \u2192 deploy. Claude Code can assist with every step."},{id:"w4q9",world:4,question_zh:"\u300C\u4EE3\u7801\u5BA1\u67E5 (Code Review)\u300D\u7684\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the purpose of 'Code Review'?",options:["\u68C0\u67E5\u4EE3\u7801\u8FD0\u884C\u901F\u5EA6","\u56E2\u961F\u6210\u5458\u4E92\u76F8\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\u548C\u6B63\u786E\u6027","\u8BA1\u7B97\u4EE3\u7801\u884C\u6570","\u6D4B\u8BD5\u7528\u6237\u754C\u9762"],correctIndex:1,explanation_zh:"\u4EE3\u7801\u5BA1\u67E5\u662F\u56E2\u961F\u6210\u5458\u4E92\u76F8\u68C0\u67E5\u4EE3\u7801\u7684\u8FC7\u7A0B\uFF0C\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u3001\u63D0\u5347\u8D28\u91CF\u3002Claude Code \u7684 /review \u53EF\u4EE5\u81EA\u52A8\u505A\u8FD9\u4EF6\u4E8B\u3002",explanation_en:"Code review is when team members check each other's code for issues and quality. Claude Code's /review can automate this."},{id:"w4q10",world:4,question_zh:"\u4EC0\u4E48\u662F\u300C\u6301\u7EED\u96C6\u6210 (CI)\u300D\uFF1F",question_en:"What is 'Continuous Integration (CI)'?",options:["\u624B\u52A8\u6D4B\u8BD5\u4EE3\u7801","\u6BCF\u6B21\u4EE3\u7801\u63D0\u4EA4\u540E\u81EA\u52A8\u8FD0\u884C\u6D4B\u8BD5\u548C\u68C0\u67E5","\u6301\u7EED\u5199\u4EE3\u7801\u4E0D\u4F11\u606F","\u81EA\u52A8\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883"],correctIndex:1,explanation_zh:"CI \u662F\u6BCF\u6B21\u4EE3\u7801\u63D0\u4EA4\u540E\u81EA\u52A8\u8FD0\u884C\u6D4B\u8BD5\u3001lint \u68C0\u67E5\u7B49\u6D41\u7A0B\uFF0C\u786E\u4FDD\u65B0\u4EE3\u7801\u4E0D\u4F1A\u7834\u574F\u5DF2\u6709\u529F\u80FD\u3002",explanation_en:"CI automatically runs tests and checks after each commit, ensuring new code doesn't break existing functionality."},{id:"w4q11",world:4,question_zh:"\u300C\u5408\u5E76\u51B2\u7A81 (Merge Conflict)\u300D\u662F\u4EC0\u4E48\uFF1F",question_en:"What is a 'Merge Conflict'?",options:["\u4E24\u4E2A\u4EBA\u5435\u67B6","\u4E24\u4E2A\u5206\u652F\u4FEE\u6539\u4E86\u540C\u4E00\u5904\u4EE3\u7801\uFF0CGit \u4E0D\u77E5\u9053\u4FDD\u7559\u54EA\u4E2A","\u6587\u4EF6\u88AB\u5220\u9664","\u7F51\u7EDC\u9519\u8BEF"],correctIndex:1,explanation_zh:"\u5F53\u4E24\u4E2A\u5206\u652F\u4FEE\u6539\u4E86\u540C\u4E00\u884C\u4EE3\u7801\u65F6\uFF0CGit \u65E0\u6CD5\u81EA\u52A8\u51B3\u5B9A\u4FDD\u7559\u54EA\u4E2A\u7248\u672C\uFF0C\u9700\u8981\u4EBA\u5DE5\uFF08\u6216 Claude Code\uFF09\u89E3\u51B3\u3002",explanation_en:"When two branches modify the same line, Git can't auto-decide which to keep. A human (or Claude Code) must resolve it."},{id:"w4q12",world:4,question_zh:"Claude Code \u5982\u4F55\u5E2E\u52A9\u4F60\u5B66\u4E60\u65B0\u7684\u4EE3\u7801\u5E93\uFF1F",question_en:"How can Claude Code help you learn a new codebase?",options:["\u5B83\u4E0D\u80FD\u5E2E\u52A9\u5B66\u4E60","\u5B83\u80FD\u9605\u8BFB\u6574\u4E2A\u4EE3\u7801\u5E93\u5E76\u56DE\u7B54\u4F60\u5173\u4E8E\u4EE3\u7801\u7ED3\u6784\u548C\u903B\u8F91\u7684\u95EE\u9898","\u53EA\u80FD\u8BFB README","\u9700\u8981\u4F60\u5148\u5B66\u4F1A\u624D\u80FD\u7528"],correctIndex:1,explanation_zh:"Claude Code \u80FD\u4E00\u6B21\u6027\u8BFB\u53D6\u6574\u4E2A\u9879\u76EE\uFF0C\u5E2E\u4F60\u7406\u89E3\u67B6\u6784\u3001\u627E\u5230\u5173\u952E\u6587\u4EF6\u3001\u89E3\u91CA\u590D\u6742\u903B\u8F91\u3002\u5C31\u50CF\u6709\u4E2A\u8D44\u6DF1\u540C\u4E8B\u5E26\u4F60 onboard\u3002",explanation_en:"Claude Code can read an entire project at once, helping you understand architecture, find key files, and explain complex logic \u2014 like a senior colleague onboarding you."},{id:"w4q13",world:4,question_zh:"\u5728\u9762\u8BD5\u4E2D\uFF0C\u5C55\u793A\u4F60\u4F1A\u7528 Claude Code \u7684\u6700\u4F73\u65B9\u5F0F\u662F\uFF1F",question_en:"In interviews, what's the best way to showcase Claude Code skills?",options:["\u8BF4\u4F60\u4EC0\u4E48\u90FD\u8BA9 AI \u5199","\u5C55\u793A\u4F60\u5982\u4F55\u7528 AI \u63D0\u9AD8\u6548\u7387\uFF0C\u540C\u65F6\u7406\u89E3\u4EE3\u7801\u505A\u4E86\u4EC0\u4E48","\u9690\u85CF\u4F60\u7528\u8FC7 AI","\u53EA\u7528 AI \u5199\u7B80\u5386"],correctIndex:1,explanation_zh:"\u9762\u8BD5\u5B98\u770B\u91CD\u7684\u662F\u4F60\u7406\u89E3\u4EE3\u7801\u3001\u80FD\u89E3\u91CA\u51B3\u7B56\u3001\u7528 AI \u63D0\u5347\u6548\u7387\u7684\u80FD\u529B\u2014\u2014\u800C\u4E0D\u662F\u76F2\u76EE\u4F9D\u8D56 AI\u3002",explanation_en:"Interviewers value your ability to understand code, explain decisions, and use AI for efficiency \u2014 not blind AI dependence."}]},Z=[{id:"pq1",world:1,question_zh:"Claude Code \u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u5DE5\u5177\uFF1F",question_en:"What type of tool is Claude Code?",options:["\u56FE\u5F62\u754C\u9762\u7F16\u8F91\u5668","\u547D\u4EE4\u884C AI \u7F16\u7A0B\u52A9\u624B","\u5728\u7EBF\u4EE3\u7801\u5E73\u53F0","\u6D4F\u89C8\u5668\u63D2\u4EF6"],correctIndex:1,explanation_zh:"Claude Code \u662F\u8FD0\u884C\u5728\u7EC8\u7AEF\u91CC\u7684 AI \u7F16\u7A0B\u52A9\u624B\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u754C\u9762\u4E0E\u4F60\u4EA4\u4E92\u3002",explanation_en:"Claude Code is an AI coding assistant that runs in the terminal, interacting with you through the command line."},{id:"pq2",world:1,question_zh:"CLAUDE.md \u6587\u4EF6\u5E94\u8BE5\u653E\u5728\u54EA\u91CC\uFF1F",question_en:"Where should the CLAUDE.md file be placed?",options:["Home \u76EE\u5F55","\u9879\u76EE\u6839\u76EE\u5F55","node_modules \u91CC","\u4EFB\u610F\u4F4D\u7F6E"],correctIndex:1,explanation_zh:"CLAUDE.md \u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\uFF0CClaude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u6765\u4E86\u89E3\u9879\u76EE\u89C4\u8303\u3002",explanation_en:"CLAUDE.md goes in the project root. Claude Code reads it automatically at startup to understand project conventions."},{id:"pq3",world:2,question_zh:"\u5BF9\u8BDD\u592A\u957F\u5BFC\u81F4\u4E0A\u4E0B\u6587\u5FEB\u6EE1\uFF0C\u4F60\u8BE5\u7528\u54EA\u4E2A\u547D\u4EE4\uFF1F",question_en:"The conversation is too long and context is almost full. Which command?",options:["/clear","/compact","/reset","/delete"],correctIndex:1,explanation_zh:"/compact \u538B\u7F29\u5BF9\u8BDD\u4F46\u4FDD\u7559\u5173\u952E\u4FE1\u606F\uFF0C\u6BD4 /clear \u66F4\u597D\u56E0\u4E3A\u4E0D\u4F1A\u4E22\u5931\u6240\u6709\u4E0A\u4E0B\u6587\u3002",explanation_en:"/compact compresses the conversation while keeping key info, better than /clear which loses all context."},{id:"pq4",world:2,question_zh:"Claude Code \u6539\u9519\u4E86\u4EE3\u7801\uFF0C\u4F60\u60F3\u64A4\u9500\u3002\u8BE5\u7528\u4EC0\u4E48\uFF1F",question_en:"Claude Code made a wrong code change. How do you undo it?",options:["/undo","/back","/rewind","/restore"],correctIndex:2,explanation_zh:"/rewind \u64A4\u9500 Claude Code \u6700\u8FD1\u7684\u4FEE\u6539\uFF0C\u6062\u590D\u6587\u4EF6\u5230\u4E4B\u524D\u7684\u72B6\u6001\u3002",explanation_en:"/rewind undoes Claude Code's recent changes and restores files to their previous state."},{id:"pq5",world:3,question_zh:"\u300CAgentic AI\u300D\u6700\u5173\u952E\u7684\u7279\u5F81\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the key characteristic of 'Agentic AI'?",options:["\u56DE\u7B54\u901F\u5EA6\u5FEB","\u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u6267\u884C\u64CD\u4F5C","\u53EA\u80FD\u804A\u5929","\u9700\u8981\u56FE\u5F62\u754C\u9762"],correctIndex:1,explanation_zh:"Agentic AI \u4E0D\u53EA\u56DE\u7B54\u95EE\u9898\uFF0C\u8FD8\u80FD\u4E3B\u52A8\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\uFF0C\u81EA\u4E3B\u5B8C\u6210\u4EFB\u52A1\u3002",explanation_en:"Agentic AI doesn't just answer questions \u2014 it can proactively read files, write code, run commands, and complete tasks autonomously."},{id:"pq6",world:3,question_zh:"\u4E0B\u9762\u54EA\u4E2A\u662F\u597D\u7684 Claude Code \u63D0\u793A\u8BCD\uFF1F",question_en:"Which is a good Claude Code prompt?",options:["\u5E2E\u6211\u505A\u4E2A\u7F51\u7AD9","\u91CD\u6784 src/auth.ts \u4E2D\u7684 login \u51FD\u6570\uFF0C\u6DFB\u52A0\u9519\u8BEF\u5904\u7406\u548C\u91CD\u8BD5\u903B\u8F91","\u5199\u70B9\u4EE3\u7801","\u505A\u4E2A\u597D\u770B\u7684\u4E1C\u897F"],correctIndex:1,explanation_zh:"\u597D\u7684\u63D0\u793A\u8BCD\u8981\u660E\u786E\u6307\u5B9A\u6587\u4EF6\u3001\u51FD\u6570\u548C\u5177\u4F53\u9700\u6C42\u3002\u8D8A\u5177\u4F53\uFF0CAI \u7684\u8F93\u51FA\u8D8A\u51C6\u786E\u3002",explanation_en:"Good prompts specify the file, function, and exact requirements. More specificity leads to more accurate AI output."},{id:"pq7",world:3,question_zh:"Token \u662F\u4EC0\u4E48\uFF1F",question_en:"What is a Token?",options:["\u4E00\u79CD\u52A0\u5BC6\u8D27\u5E01","AI \u5904\u7406\u6587\u5B57\u7684\u57FA\u672C\u5355\u4F4D","\u767B\u5F55\u51ED\u8BC1","\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00"],correctIndex:1,explanation_zh:"Token \u662F AI \u5904\u7406\u6587\u5B57\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u5927\u7EA6 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u8BA1\u8D39\u3002",explanation_en:"A token is the smallest unit of text the AI processes, roughly 3/4 of an English word. Claude Code bills by token."},{id:"pq8",world:4,question_zh:"Pull Request \u7684\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F",question_en:"What is the purpose of a Pull Request?",options:["\u4E0B\u8F7D\u4EE3\u7801","\u8BF7\u6C42\u5C06\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F","\u5220\u9664\u5206\u652F","\u521B\u5EFA\u4ED3\u5E93"],correctIndex:1,explanation_zh:"PR \u662F\u628A\u4F60\u5206\u652F\u4E0A\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6B63\u5F0F\u6D41\u7A0B\uFF0C\u901A\u5E38\u5305\u542B\u56E2\u961F\u7684\u4EE3\u7801\u5BA1\u67E5\u3002",explanation_en:"A PR is the formal process to merge your branch code into the main branch, usually involving team code review."},{id:"pq9",world:4,question_zh:"\u300C\u91CD\u6784\u300D\u548C\u300C\u4FEE bug\u300D\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",question_en:"What's the difference between 'refactoring' and 'fixing bugs'?",options:["\u6CA1\u6709\u533A\u522B","\u91CD\u6784\u6539\u5584\u7ED3\u6784\u4F46\u4E0D\u6539\u529F\u80FD\uFF0C\u4FEE bug \u4FEE\u590D\u9519\u8BEF\u884C\u4E3A","\u91CD\u6784\u66F4\u5BB9\u6613","\u4FEE bug \u4E0D\u9700\u8981\u6539\u4EE3\u7801"],correctIndex:1,explanation_zh:"\u91CD\u6784\u662F\u5728\u529F\u80FD\u4E0D\u53D8\u7684\u524D\u63D0\u4E0B\u4F18\u5316\u4EE3\u7801\u7ED3\u6784\uFF1B\u4FEE bug \u662F\u4FEE\u590D\u4EE3\u7801\u7684\u9519\u8BEF\u884C\u4E3A\u3002",explanation_en:"Refactoring improves code structure without changing functionality; bug fixing corrects incorrect behavior."},{id:"pq10",world:4,question_zh:"\u6807\u51C6\u5F00\u53D1\u6D41\u7A0B\u7684\u6700\u540E\u4E00\u6B65\u901A\u5E38\u662F\uFF1F",question_en:"What is typically the last step in a standard development workflow?",options:["\u5199\u4EE3\u7801","\u4EE3\u7801\u5BA1\u67E5","\u90E8\u7F72","\u521B\u5EFA\u5206\u652F"],correctIndex:2,explanation_zh:"\u6807\u51C6\u6D41\u7A0B\uFF1A\u5199\u4EE3\u7801 \u2192 \u6D4B\u8BD5 \u2192 \u63D0\u4EA4 \u2192 PR \u2192 \u5BA1\u67E5 \u2192 \u5408\u5E76 \u2192 \u90E8\u7F72\u3002\u90E8\u7F72\u662F\u6700\u540E\u4E00\u6B65\u3002",explanation_en:"Standard workflow: code \u2192 test \u2192 commit \u2192 PR \u2192 review \u2192 merge \u2192 deploy. Deployment is the final step."}];var ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function de(e){return e.replace(/[&<>"']/g,t=>ct[t]||t)}function $(e){let t=[...e];for(let o=t.length-1;o>0;o--){let d=Math.floor(Math.random()*(o+1));[t[o],t[d]]=[t[d],t[o]]}return t}function M(e,t){return`<div style="padding:var(--space-md);border-radius:var(--radius-md);background:${e?"rgba(0,212,170,0.1)":"rgba(255,107,107,0.1)"};border:1px solid ${e?"var(--green)":"var(--red)"};line-height:1.6;font-size:var(--text-sm);">${t}</div>`}function te(e,t,o){let d=Math.round(e/t*100);return`
    <div class="game-score-bar">
      <span>${e}/${t}</span>
      <span>\u2713 ${o}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-bar-fill" style="width:${d}%"></div>
    </div>
  `}function H(e,t,o,d){let a=!1,s=e.querySelectorAll(".option-btn");s.forEach((i,r)=>{i.addEventListener("click",()=>{if(a)return;a=!0;let l=parseInt(i.dataset.index||String(r)),m=l===t;s.forEach((n,p)=>{n.classList.add("disabled"),p===t&&n.classList.add("correct"),n===i&&!m&&n.classList.add("wrong")}),C(m?"correct":"wrong"),(m?o:d)(l)})})}function Ee(e){let t=0,o=0;function d(){e.innerHTML=`
      ${k("\u80FD\u529B\u6D4B\u8BD5",!1)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${q("firstLogin")}
        <h2 style="text-align:center;">\u8BA9\u6211\u770B\u770B\u4F60\u5DF2\u7ECF\u77E5\u9053\u591A\u5C11\uFF01</h2>
        <p style="color:var(--text-secondary);text-align:center;">10\u9053\u9898\uFF0C\u5E2E\u4F60\u627E\u5230\u6700\u5408\u9002\u7684\u8D77\u70B9</p>
        <button class="btn btn-primary btn-block" id="start-placement">${Le("sm")} \u5F00\u59CB\u6D4B\u8BD5 Start Test</button>
        <button class="btn btn-secondary btn-block" id="skip-placement" style="font-size:var(--text-sm);">\u6211\u662F\u65B0\u624B\uFF0C\u4ECE\u5934\u5F00\u59CB I'm a beginner</button>
      </div>
    `,e.querySelector("#start-placement")?.addEventListener("click",()=>a()),e.querySelector("#skip-placement")?.addEventListener("click",()=>{f.completePlacement(0),f.updateStreak(),T.navigate("/")})}function a(){if(t>=Z.length){s();return}let i=Z[t];e.innerHTML=`
      ${k(`${t+1} / ${Z.length}`,!1)}
      <div class="game-screen">
        <div class="progress-bar" style="margin-top:var(--space-md);">
          <div class="progress-bar-fill" style="width:${t/Z.length*100}%"></div>
        </div>
        <div class="game-question">${i.question_zh}</div>
        <div class="game-question-sub">${i.question_en}</div>
        <div class="option-list" id="options">
          ${i.options.map((l,m)=>`
            <button class="option-btn" data-index="${m}">
              <span class="option-label">${String.fromCharCode(65+m)}</span>
              <span>${l}</span>
            </button>
          `).join("")}
        </div>
        <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);"></div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">\u4E0B\u4E00\u9898 Next \u2192</button>
        </div>
      </div>
    `;let r=()=>{let l=e.querySelector("#explanation");l&&(l.style.display="block",l.innerHTML=`<p>${i.explanation_zh}</p><p style="color:var(--text-secondary);font-size:var(--text-sm);">${i.explanation_en}</p>`);let m=e.querySelector("#next-btn");m&&(m.style.display="block")};H(e,i.correctIndex,()=>{o++,r()},()=>{r()}),e.querySelector("#next-btn")?.addEventListener("click",()=>{t++,a()})}function s(){f.completePlacement(o),f.updateStreak();let i="",r="correctAnswer";o<=3?(i="\u4ECE\u5934\u5F00\u59CB\u4E5F\u5F88\u68D2\uFF01\u8BA9\u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u6765\u3002",r="retry"):o<=6?i="\u4E0D\u9519\uFF01\u4F60\u5DF2\u7ECF\u6709\u4E00\u4E9B\u57FA\u7840\u4E86\u3002\u6211\u5E2E\u4F60\u8DF3\u8FC7\u4E86\u5165\u95E8\u5173\u5361\u3002":(i="\u592A\u5389\u5BB3\u4E86\uFF01\u4F60\u5DF2\u7ECF\u662F\u9AD8\u624B\u4E86\u3002\u76F4\u63A5\u8FDB\u5165\u547D\u4EE4\u738B\u56FD\uFF01",r="perfectScore"),e.innerHTML=`
      ${k("\u6D4B\u8BD5\u7ED3\u679C",!1)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${q(r)}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${o}/10</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-sm);">${i}</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">\u5F00\u59CB\u5B66\u4E60 Start Learning ${ee("sm")}</button>
      </div>
    `,e.querySelector("#go-home")?.addEventListener("click",()=>T.navigate("/")),o>=7?C("perfect"):C("levelUp")}d()}var P=[{id:"terminal",en:"Terminal",pinyin:"zh\u014Dng du\u0101n",zh:"\u7EC8\u7AEF",explanation:"\u7EC8\u7AEF\u662F\u4F60\u4E0E\u7535\u8111\u5BF9\u8BDD\u7684\u6587\u5B57\u754C\u9762\u3002Claude Code \u5C31\u8FD0\u884C\u5728\u7EC8\u7AEF\u91CC\uFF0C\u4F60\u5728\u8FD9\u91CC\u8F93\u5165\u6307\u4EE4\uFF0C\u5B83\u5C31\u4F1A\u5E2E\u4F60\u5199\u4EE3\u7801\u3002",world:1},{id:"cli",en:"CLI",pinyin:"m\xECng l\xECng h\xE1ng ji\xE8 mi\xE0n",zh:"\u547D\u4EE4\u884C\u754C\u9762",explanation:"CLI\uFF08Command Line Interface\uFF09\u662F\u901A\u8FC7\u8F93\u5165\u6587\u5B57\u547D\u4EE4\u6765\u64CD\u4F5C\u7535\u8111\u7684\u65B9\u5F0F\u3002Claude Code \u662F\u4E00\u4E2A CLI \u5DE5\u5177\uFF0C\u4E0D\u9700\u8981\u56FE\u5F62\u754C\u9762\u3002",world:1},{id:"directory",en:"Directory",pinyin:"m\xF9 l\xF9",zh:"\u76EE\u5F55",explanation:"\u76EE\u5F55\u5C31\u662F\u6587\u4EF6\u5939\u3002\u5728\u7EC8\u7AEF\u91CC\u7528 cd \u547D\u4EE4\u5207\u6362\u76EE\u5F55\u3002Claude Code \u4F1A\u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u6765\u7406\u89E3\u4F60\u7684\u9879\u76EE\u3002",world:1},{id:"repository",en:"Repository",pinyin:"c\u0101ng k\xF9",zh:"\u4ED3\u5E93",explanation:"\u4ED3\u5E93\uFF08repo\uFF09\u662F\u7528 Git \u7BA1\u7406\u7684\u9879\u76EE\u6587\u4EF6\u5939\u3002Claude Code \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u4ED3\u5E93\u7684 Git \u5386\u53F2\u6765\u7406\u89E3\u9879\u76EE\u80CC\u666F\u3002",world:1},{id:"codebase",en:"Codebase",pinyin:"d\xE0i m\u01CE k\xF9",zh:"\u4EE3\u7801\u5E93",explanation:"\u4EE3\u7801\u5E93\u662F\u4E00\u4E2A\u9879\u76EE\u7684\u5168\u90E8\u6E90\u4EE3\u7801\u3002Claude Code \u53EF\u4EE5\u4E00\u6B21\u6027\u7406\u89E3\u6574\u4E2A\u4EE3\u7801\u5E93\uFF0C\u5E2E\u4F60\u627E bug\u3001\u91CD\u6784\u6216\u6DFB\u52A0\u529F\u80FD\u3002",world:1},{id:"readme",en:"README",pinyin:"shu\u014D m\xEDng w\xE9n ji\xE0n",zh:"\u8BF4\u660E\u6587\u4EF6",explanation:"README \u662F\u9879\u76EE\u7684\u8BF4\u660E\u4E66\uFF0C\u901A\u5E38\u7528 Markdown \u5199\u6210\u3002\u5B83\u544A\u8BC9\u522B\u4EBA\u8FD9\u4E2A\u9879\u76EE\u662F\u4EC0\u4E48\u3001\u600E\u4E48\u5B89\u88C5\u3001\u600E\u4E48\u4F7F\u7528\u3002",world:1},{id:"claude-md",en:"CLAUDE.md",pinyin:"Claude p\xE8i zh\xEC w\xE9n ji\xE0n",zh:"Claude \u914D\u7F6E\u6587\u4EF6",explanation:"CLAUDE.md \u662F Claude Code \u7684\u4E13\u5C5E\u6307\u4EE4\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u5728\u91CC\u9762\u5199\u9879\u76EE\u89C4\u8303\u3001\u7F16\u7801\u98CE\u683C\u3001\u90E8\u7F72\u89C4\u5219\uFF0CClaude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\u3002",world:1},{id:"environment",en:"Environment",pinyin:"hu\xE1n j\xECng",zh:"\u73AF\u5883",explanation:"\u73AF\u5883\u662F\u4EE3\u7801\u8FD0\u884C\u7684\u914D\u7F6E\u548C\u6761\u4EF6\uFF0C\u6BD4\u5982\u5F00\u53D1\u73AF\u5883\u3001\u751F\u4EA7\u73AF\u5883\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6\u3002",world:1},{id:"prompt",en:"Prompt",pinyin:"t\xED sh\xEC c\xED",zh:"\u63D0\u793A\u8BCD",explanation:"\u63D0\u793A\u8BCD\u662F\u4F60\u7ED9 Claude Code \u7684\u6307\u4EE4\u3002\u597D\u7684\u63D0\u793A\u8BCD\u8981\u5177\u4F53\u3001\u6709\u4E0A\u4E0B\u6587\uFF0C\u6BD4\u5982\u300C\u91CD\u6784\u8FD9\u4E2A\u51FD\u6570\uFF0C\u7528 async/await \u66FF\u6362\u56DE\u8C03\u300D\u3002",world:2},{id:"scaffold",en:"Scaffold",pinyin:"ji\u01CEo sh\u01D2u ji\xE0",zh:"\u811A\u624B\u67B6",explanation:"\u811A\u624B\u67B6\u662F\u81EA\u52A8\u751F\u6210\u9879\u76EE\u57FA\u7840\u7ED3\u6784\u7684\u5DE5\u5177\u3002\u4F60\u53EF\u4EE5\u8BA9 Claude Code \u5E2E\u4F60\u642D\u5EFA\u9879\u76EE\u811A\u624B\u67B6\uFF0C\u4E00\u53E5\u8BDD\u5C31\u80FD\u521B\u5EFA\u6574\u4E2A\u9879\u76EE\u6A21\u677F\u3002",world:2},{id:"diff",en:"Diff",pinyin:"ch\u0101 y\xEC",zh:"\u5DEE\u5F02",explanation:"Diff \u663E\u793A\u6587\u4EF6\u4FEE\u6539\u524D\u540E\u7684\u533A\u522B\u3002Claude Code \u6BCF\u6B21\u7F16\u8F91\u6587\u4EF6\u540E\u4F1A\u5C55\u793A diff\uFF0C\u8BA9\u4F60\u6E05\u695A\u770B\u5230\u54EA\u4E9B\u884C\u88AB\u6539\u4E86\u3002",world:2},{id:"linting",en:"Linting",pinyin:"d\xE0i m\u01CE ji\u01CEn ch\xE1",zh:"\u4EE3\u7801\u68C0\u67E5",explanation:"Linting \u662F\u81EA\u52A8\u68C0\u67E5\u4EE3\u7801\u98CE\u683C\u548C\u6F5C\u5728\u9519\u8BEF\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u4FEE\u590D lint \u62A5\u544A\u7684\u6240\u6709\u95EE\u9898\u3002",world:2},{id:"debugging",en:"Debugging",pinyin:"ti\xE1o sh\xEC",zh:"\u8C03\u8BD5",explanation:"\u8C03\u8BD5\u662F\u627E\u51FA\u5E76\u4FEE\u590D\u4EE3\u7801\u9519\u8BEF\u7684\u8FC7\u7A0B\u3002\u4F60\u53EF\u4EE5\u628A\u62A5\u9519\u4FE1\u606F\u76F4\u63A5\u7C98\u8D34\u7ED9 Claude Code\uFF0C\u5B83\u4F1A\u5206\u6790\u9519\u8BEF\u539F\u56E0\u5E76\u63D0\u4F9B\u4FEE\u590D\u65B9\u6848\u3002",world:2},{id:"hook",en:"Hook",pinyin:"g\u014Du zi",zh:"\u94A9\u5B50",explanation:"\u94A9\u5B50\u662F\u5728\u7279\u5B9A\u4E8B\u4EF6\u53D1\u751F\u65F6\u81EA\u52A8\u6267\u884C\u7684\u811A\u672C\u3002Claude Code \u652F\u6301 pre-commit hook\uFF0C\u5728\u4F60\u63D0\u4EA4\u4EE3\u7801\u524D\u81EA\u52A8\u8FD0\u884C\u68C0\u67E5\u3002",world:2},{id:"pipeline",en:"Pipeline",pinyin:"li\xFA shu\u01D0 xi\xE0n",zh:"\u6D41\u6C34\u7EBF",explanation:"\u6D41\u6C34\u7EBF\u662F\u4E00\u7CFB\u5217\u81EA\u52A8\u5316\u6B65\u9AA4\uFF0C\u5982\u6D4B\u8BD5\u3001\u6784\u5EFA\u3001\u90E8\u7F72\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E CI/CD \u6D41\u6C34\u7EBF\u3002",world:2},{id:"dependency",en:"Dependency",pinyin:"y\u012B l\xE0i",zh:"\u4F9D\u8D56",explanation:"\u4F9D\u8D56\u662F\u4F60\u7684\u9879\u76EE\u9700\u8981\u7528\u5230\u7684\u5916\u90E8\u5E93\u6216\u5305\u3002Claude Code \u80FD\u5E2E\u4F60\u7BA1\u7406 package.json \u91CC\u7684\u4F9D\u8D56\uFF0C\u89E3\u51B3\u7248\u672C\u51B2\u7A81\u3002",world:2},{id:"agentic",en:"Agentic",pinyin:"zh\xEC n\xE9ng t\u01D0",zh:"\u667A\u80FD\u4F53",explanation:"Agentic \u6307 AI \u80FD\u81EA\u4E3B\u51B3\u7B56\u548C\u884C\u52A8\u3002Claude Code \u662F agentic \u7684\u2014\u2014\u5B83\u4E0D\u53EA\u56DE\u7B54\u95EE\u9898\uFF0C\u8FD8\u80FD\u4E3B\u52A8\u8BFB\u6587\u4EF6\u3001\u5199\u4EE3\u7801\u3001\u8FD0\u884C\u547D\u4EE4\u3002",world:3},{id:"context-window",en:"Context Window",pinyin:"sh\xE0ng xi\xE0 w\xE9n chu\u0101ng k\u01D2u",zh:"\u4E0A\u4E0B\u6587\u7A97\u53E3",explanation:"\u4E0A\u4E0B\u6587\u7A97\u53E3\u662F AI \u4E00\u6B21\u80FD\u5904\u7406\u7684\u4FE1\u606F\u91CF\u3002Claude Code \u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u5F88\u5927\uFF0C\u80FD\u540C\u65F6\u7406\u89E3\u6574\u4E2A\u9879\u76EE\u7684\u4EE3\u7801\u3002\u7528 /compact \u53EF\u4EE5\u538B\u7F29\u5BF9\u8BDD\u8282\u7701\u7A7A\u95F4\u3002",world:3},{id:"compaction",en:"Compaction",pinyin:"y\u0101 su\u014D",zh:"\u538B\u7F29",explanation:"\u538B\u7F29\u662F\u628A\u957F\u5BF9\u8BDD\u7CBE\u7B80\u6210\u5173\u952E\u4FE1\u606F\u7684\u8FC7\u7A0B\u3002\u5F53 Claude Code \u7684\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u65F6\uFF0C\u7528 /compact \u547D\u4EE4\u53EF\u4EE5\u81EA\u52A8\u538B\u7F29\uFF0C\u4FDD\u7559\u91CD\u8981\u5185\u5BB9\u3002",world:3},{id:"model",en:"Model",pinyin:"m\xF3 x\xEDng",zh:"\u6A21\u578B",explanation:"\u6A21\u578B\u662F\u8BAD\u7EC3\u597D\u7684 AI \u7A0B\u5E8F\u3002Claude Code \u9ED8\u8BA4\u4F7F\u7528 Claude Sonnet\uFF0C\u4F60\u53EF\u4EE5\u7528 /model \u5207\u6362\u5230\u66F4\u5F3A\u7684 Opus \u6216\u66F4\u5FEB\u7684 Haiku\u3002",world:3},{id:"token",en:"Token",pinyin:"l\xECng p\xE1i",zh:"\u4EE4\u724C",explanation:"\u4EE4\u724C\u662F AI \u5904\u7406\u6587\u5B57\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u5927\u7EA6 3/4 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002Claude Code \u6309 token \u6570\u8BA1\u8D39\uFF0C\u7528 /usage \u53EF\u4EE5\u67E5\u770B\u6D88\u8017\u4E86\u591A\u5C11\u3002",world:3},{id:"api",en:"API",pinyin:"ji\u0113 k\u01D2u",zh:"\u63A5\u53E3",explanation:"API\uFF08Application Programming Interface\uFF09\u662F\u7A0B\u5E8F\u4E4B\u95F4\u901A\u4FE1\u7684\u6865\u6881\u3002Claude Code \u901A\u8FC7 Anthropic API \u4E0E Claude \u6A21\u578B\u901A\u4FE1\u3002",world:3},{id:"sub-agent",en:"Sub-agent",pinyin:"z\u01D0 zh\xEC n\xE9ng t\u01D0",zh:"\u5B50\u667A\u80FD\u4F53",explanation:"\u5B50\u667A\u80FD\u4F53\u662F Claude Code \u6D3E\u51FA\u7684\u5C0F\u52A9\u624B\uFF0C\u8D1F\u8D23\u72EC\u7ACB\u5B8C\u6210\u5B50\u4EFB\u52A1\u3002\u6BD4\u5982\u5728\u5904\u7406\u590D\u6742\u91CD\u6784\u65F6\uFF0C\u4E3B\u667A\u80FD\u4F53\u4F1A\u6D3E\u5B50\u667A\u80FD\u4F53\u53BB\u5206\u6790\u4E0D\u540C\u6587\u4EF6\u3002",world:3},{id:"version-control",en:"Version Control",pinyin:"b\u01CEn b\u011Bn k\xF2ng zh\xEC",zh:"\u7248\u672C\u63A7\u5236",explanation:"\u7248\u672C\u63A7\u5236\u8BB0\u5F55\u4EE3\u7801\u7684\u6BCF\u4E00\u6B21\u4FEE\u6539\u5386\u53F2\u3002Claude Code \u80FD\u5E2E\u4F60\u5199 commit message\u3001\u521B\u5EFA\u5206\u652F\u3001\u63D0\u4EA4 PR\uFF0C\u5168\u90E8\u5728\u7EC8\u7AEF\u91CC\u5B8C\u6210\u3002",world:4},{id:"branch",en:"Branch",pinyin:"f\u0113n zh\u012B",zh:"\u5206\u652F",explanation:"\u5206\u652F\u8BA9\u4F60\u5728\u4E0D\u5F71\u54CD\u4E3B\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u5F00\u53D1\u65B0\u529F\u80FD\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u521B\u5EFA\u5206\u652F\u3001\u5207\u6362\u5206\u652F\uFF0C\u7BA1\u7406\u591A\u6761\u5F00\u53D1\u7EBF\u3002",world:4},{id:"merge",en:"Merge",pinyin:"h\xE9 b\xECng",zh:"\u5408\u5E76",explanation:"\u5408\u5E76\u662F\u628A\u4E00\u4E2A\u5206\u652F\u7684\u4EE3\u7801\u6574\u5408\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u3002\u51FA\u73B0\u51B2\u7A81\u65F6\uFF0CClaude Code \u80FD\u5E2E\u4F60\u7406\u89E3\u51B2\u7A81\u5E76\u9009\u62E9\u6B63\u786E\u7684\u5408\u5E76\u65B9\u5F0F\u3002",world:4},{id:"pull-request",en:"Pull Request",pinyin:"l\u0101 q\u01D4 q\u01D0ng qi\xFA",zh:"\u62C9\u53D6\u8BF7\u6C42",explanation:"Pull Request\uFF08PR\uFF09\u662F\u8BF7\u6C42\u628A\u4F60\u7684\u4EE3\u7801\u5408\u5E76\u5230\u4E3B\u5206\u652F\u7684\u6D41\u7A0B\u3002Claude Code \u53EF\u4EE5\u7528 gh \u547D\u4EE4\u5E2E\u4F60\u521B\u5EFA PR\u3001\u5199\u63CF\u8FF0\u3001\u751A\u81F3 review \u4EE3\u7801\u3002",world:4},{id:"commit",en:"Commit",pinyin:"t\xED ji\u0101o",zh:"\u63D0\u4EA4",explanation:"\u63D0\u4EA4\u662F\u4FDD\u5B58\u4E00\u6B21\u4EE3\u7801\u4FEE\u6539\u7684\u5FEB\u7167\u3002Claude Code \u80FD\u5E2E\u4F60\u5199\u6E05\u6670\u7684 commit message\uFF0C\u9075\u5FAA Conventional Commits \u89C4\u8303\u3002",world:4},{id:"refactoring",en:"Refactoring",pinyin:"ch\xF3ng g\xF2u",zh:"\u91CD\u6784",explanation:"\u91CD\u6784\u662F\u5728\u4E0D\u6539\u53D8\u529F\u80FD\u7684\u524D\u63D0\u4E0B\u6539\u5584\u4EE3\u7801\u7ED3\u6784\u3002Claude Code \u64C5\u957F\u5927\u89C4\u6A21\u91CD\u6784\u2014\u2014\u544A\u8BC9\u5B83\u76EE\u6807\uFF0C\u5B83\u4F1A\u5B89\u5168\u5730\u4FEE\u6539\u6240\u6709\u76F8\u5173\u6587\u4EF6\u3002",world:4},{id:"deployment",en:"Deployment",pinyin:"b\xF9 sh\u01D4",zh:"\u90E8\u7F72",explanation:"\u90E8\u7F72\u662F\u628A\u4EE3\u7801\u53D1\u5E03\u5230\u670D\u52A1\u5668\u8BA9\u7528\u6237\u4F7F\u7528\u7684\u8FC7\u7A0B\u3002Claude Code \u53EF\u4EE5\u5E2E\u4F60\u914D\u7F6E Cloudflare Pages \u90E8\u7F72\uFF0C\u4E00\u884C\u547D\u4EE4\u4E0A\u7EBF\u3002",world:4}];function Me(e){let t="";function o(){let d=P.filter(s=>{if(!t)return!0;let i=t.toLowerCase();return s.en.toLowerCase().includes(i)||s.pinyin.toLowerCase().includes(i)||s.zh.includes(i)||s.explanation.includes(i)});e.innerHTML=`
      ${k("\u8BCD\u5178 Glossary",!0)}
      <div class="screen">
        <label for="glossary-search" class="sr-only">\u641C\u7D22\u8BCD\u6761 Search terms</label>
        <input type="text" class="search-input" id="glossary-search" placeholder="\u641C\u7D22 Search (English, \u62FC\u97F3, \u4E2D\u6587)" value="${t}">
        <p style="color:var(--text-muted);font-size:var(--text-xs);margin:var(--space-sm) 0;">${d.length} \u4E2A\u8BCD\u6761</p>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-top:var(--space-sm);">
          ${d.length===0?`<div class="empty-state"><div class="empty-state-icon">${ze("xl")}</div><div class="empty-state-title">\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u8BCD\u6761</div><div class="empty-state-text">No matching terms found</div></div>`:""}
          ${d.map(s=>{let i=f.isWorldUnlocked(s.world);return`
              <div class="card" style="${i?"":"opacity:0.5;"}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                  <div style="font-weight:700;color:var(--teal);font-size:var(--text-lg);">${i?s.en:`${Q("sm")} ???`}</div>
                  <span style="font-size:var(--text-xs);color:var(--text-muted);background:var(--bg-secondary);padding:2px 8px;border-radius:var(--radius-full);">W${s.world}</span>
                </div>
                ${i?`
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">${s.pinyin}</div>
                  <div style="font-size:var(--text-base);margin-top:var(--space-xs);">${s.zh}</div>
                  <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);line-height:1.5;">${s.explanation}</div>
                `:'<div style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--space-xs);">\u5B8C\u6210\u4E16\u754C ${v.world} \u89E3\u9501</div>'}
              </div>
            `}).join("")}
        </div>
      </div>
    `;let a=e.querySelector("#glossary-search");a?.addEventListener("input",()=>{t=a.value,C("keystroke"),o()}),a?.focus()}o()}K();function Pe(e){let t=f.getDueReviewItems(10),o=0,d=0;if(t.length===0){e.innerHTML=`
      ${k("\u590D\u4E60 Review",!0)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-2xl));">
        ${q("correctAnswer")}
        <h2 style="text-align:center;">\u6CA1\u6709\u9700\u8981\u590D\u4E60\u7684\u5185\u5BB9\uFF01</h2>
        <p style="color:var(--text-secondary);text-align:center;">No items due for review. Keep learning!</p>
        <button class="btn btn-primary" id="go-back">\u8FD4\u56DE Back</button>
      </div>
    `,e.querySelector("#go-back")?.addEventListener("click",()=>T.navigate("/"));return}function a(){if(o>=t.length){s();return}let i=t[o],r="",l="",m=[],n=0;if(i.type==="vocab"){let u=P.find(c=>c.id===i.id);if(u){r=`<div class="game-question">${u.en}</div><div class="game-question-sub">\u8FD9\u4E2A\u82F1\u6587\u672F\u8BED\u7684\u4E2D\u6587\u662F\u4EC0\u4E48\uFF1F</div>`,l=u.zh;let c=$(P.filter(g=>g.id!==u.id)).slice(0,3).map(g=>g.zh);m=$([...c,u.zh]),n=m.indexOf(u.zh)}}else if(i.type==="command"){let u=W.find(c=>c.id===i.id);u&&(r=`<div class="game-question">${u.scenario}</div><div class="game-question-sub">\u9009\u62E9\u6B63\u786E\u7684\u547D\u4EE4</div>`,l=u.command,m=$([u.command,...u.wrongChoices.slice(0,3)]),n=m.indexOf(u.command))}if(m.length===0){o++,a();return}e.innerHTML=`
      ${k(`\u590D\u4E60 ${o+1}/${t.length}`,!0)}
      <div class="game-screen">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${o/t.length*100}%"></div></div>
        ${r}
        <div class="option-list" id="options">
          ${m.map((u,c)=>`
            <button class="option-btn" data-index="${c}">
              <span class="option-label">${String.fromCharCode(65+c)}</span>
              <span>${u}</span>
            </button>
          `).join("")}
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">\u4E0B\u4E00\u9898 Next \u2192</button>
        </div>
      </div>
    `;let p=()=>{let u=e.querySelector("#next-btn");u&&(u.style.display="block")};H(e,n,()=>{d++,f.markReviewCorrect(i.id),p()},()=>{p()}),e.querySelector("#next-btn")?.addEventListener("click",()=>{o++,a()})}function s(){let i=Math.round(d/t.length*100);e.innerHTML=`
      ${k("\u590D\u4E60\u5B8C\u6210",!1)}
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
        ${q(i>=80?"correctAnswer":"retry")}
        <div style="text-align:center;">
          <div style="font-size:var(--text-4xl);font-weight:700;color:var(--teal);">${i}%</div>
          <p style="color:var(--text-secondary);">${d}/${t.length} \u6B63\u786E</p>
        </div>
        <button class="btn btn-primary btn-block" id="go-home">\u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    `,e.querySelector("#go-home")?.addEventListener("click",()=>T.navigate("/")),C("levelUp")}a()}function He(e,t){let o=t?"unlocked":"locked",d=t?e.idiom:"???",a=t?e.pinyin:"";return`
    <div class="badge-item" data-badge-id="${e.id}">
      <div class="badge-icon ${o}">${e.icon}</div>
      <div class="badge-idiom">${d}</div>
      ${a?`<div class="badge-pinyin">${a}</div>`:""}
      <div class="badge-name">${e.enName}</div>
    </div>
  `}function De(e){let t=document.getElementById("toast-container");if(!t)return;let o=document.createElement("div");o.className="toast toast-badge",o.innerHTML=`
    <span style="font-size: 1.5em;">${e.icon}</span>
    <div>
      <div style="font-weight: 600; color: var(--gold);">${e.idiom}</div>
      <div style="font-size: 0.85em; opacity: 0.8;">${e.enName} unlocked!</div>
    </div>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.3s",setTimeout(()=>o.remove(),300)},3e3)}var N=[{id:"first-step",idiom:"\u5343\u91CC\u4E4B\u884C\u59CB\u4E8E\u8DB3\u4E0B",pinyin:"qi\u0101n l\u01D0 zh\u012B x\xEDng sh\u01D0 y\xFA z\xFA xi\xE0",enName:"First Step",meaning:"A journey of a thousand miles begins with a single step",unlockCondition:"Complete first level",icon:"\u{1F680}"},{id:"quick-learner",idiom:"\u4E00\u70B9\u5373\u901A",pinyin:"y\u012B di\u01CEn j\xED t\u014Dng",enName:"Quick Learner",meaning:"Understanding at the first hint",unlockCondition:"Perfect score first try",icon:"\u26A1"},{id:"persistent",idiom:"\u94C1\u6775\u78E8\u6210\u9488",pinyin:"ti\u011B ch\u01D4 m\xF3 ch\xE9ng zh\u0113n",enName:"Persistent",meaning:"An iron rod can be ground into a needle with persistence",unlockCondition:"Retry and pass failed level",icon:"\u{1F528}"},{id:"practice-master",idiom:"\u719F\u80FD\u751F\u5DE7",pinyin:"sh\xFA n\xE9ng sh\u0113ng qi\u01CEo",enName:"Practice Master",meaning:"Practice makes perfect",unlockCondition:"7-day streak",icon:"\u{1F525}"},{id:"word-collector",idiom:"\u535A\u5B66\u591A\u624D",pinyin:"b\xF3 xu\xE9 du\u014D c\xE1i",enName:"Word Collector",meaning:"Learned and talented",unlockCondition:"Learn all vocab",icon:"\u{1F4DA}"},{id:"command-king",idiom:"\u8FD0\u7B79\u5E37\u5E44",pinyin:"y\xF9n ch\xF3u w\xE9i w\xF2",enName:"Command King",meaning:"Strategize from within the command tent",unlockCondition:"Complete World 2",icon:"\u{1F451}"},{id:"prompt-sage",idiom:"\u5999\u7B14\u751F\u82B1",pinyin:"mi\xE0o b\u01D0 sh\u0113ng hu\u0101",enName:"Prompt Sage",meaning:"A masterful pen produces flowers",unlockCondition:"Score 5/5 on Prompt Builder",icon:"\u2728"},{id:"interview-ready",idiom:"\u80F8\u6709\u6210\u7AF9",pinyin:"xi\u014Dng y\u01D2u ch\xE9ng zh\xFA",enName:"Interview Ready",meaning:"Having a well-thought-out plan in mind",unlockCondition:"Complete Boss Battle",icon:"\u{1F3AF}"},{id:"unstoppable",idiom:"\u52BF\u5982\u7834\u7AF9",pinyin:"sh\xEC r\xFA p\xF2 zh\xFA",enName:"Unstoppable",meaning:"Like splitting bamboo \u2014 unstoppable momentum",unlockCondition:"21-day streak",icon:"\u{1F48E}"},{id:"completionist",idiom:"\u529F\u5FB7\u5706\u6EE1",pinyin:"g\u014Dng d\xE9 yu\xE1n m\u01CEn",enName:"Completionist",meaning:"All merits fulfilled, mission complete",unlockCondition:"Finish all 4 worlds",icon:"\u{1F3C6}"},{id:"speed-demon",idiom:"\u4E00\u76EE\u5341\u884C",pinyin:"y\u012B m\xF9 sh\xED h\xE1ng",enName:"Speed Demon",meaning:"Reading ten lines at a glance",unlockCondition:"Timed quiz >50% time remaining",icon:"\u23F1\uFE0F"},{id:"sharing-caring",idiom:"\u6559\u5B66\u76F8\u957F",pinyin:"ji\xE0o xu\xE9 xi\u0101ng zh\u01CEng",enName:"Sharing is Caring",meaning:"Teaching and learning promote each other",unlockCondition:"Send Peer Challenge",icon:"\u{1F91D}"}];function Oe(e){let t=f.get(),o=f.getStreak(),d=f.getTotalLevelsCompleted(),a=t.reviewQueue.length>0?Math.round(t.reviewQueue.reduce((r,l)=>r+l.correctCount,0)/Math.max(1,t.reviewQueue.reduce((r,l)=>r+l.correctCount+l.wrongCount,0))*100):100,s=t.badges.length,i=N.length;e.innerHTML=`
    ${k("\u6211\u7684\u6863\u6848 Profile",!0)}
    <div class="screen">
      <!-- Stats -->
      <div class="stat-grid" style="margin-bottom:var(--space-lg);">
        <div class="stat-card">
          <div class="stat-value" style="color:var(--gold);">${j("md","var(--gold)")} ${o.current}</div>
          <div class="stat-label">\u8FDE\u7EED\u5929\u6570 Streak</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--teal);">${O(!0,"md","var(--teal)")} ${d}</div>
          <div class="stat-label">\u5DF2\u5B8C\u6210\u5173\u5361 Levels</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--green);">${le("md")} ${t.totalScore}</div>
          <div class="stat-label">\u603B\u5206 Total Score</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${re("md")} ${a}%</div>
          <div class="stat-label">\u590D\u4E60\u51C6\u786E\u7387 Review</div>
        </div>
      </div>

      ${d===0?`
        <div class="empty-state">
          <div class="empty-state-icon">${O(!1,"2xl","var(--text-muted)")}</div>
          <div class="empty-state-title">\u5F00\u59CB\u4F60\u7684\u5B66\u4E60\u4E4B\u65C5</div>
          <div class="empty-state-text">\u5B8C\u6210\u5173\u5361\u6765\u89E3\u9501\u6210\u5C31\u548C\u79EF\u7D2F\u5206\u6570<br>Complete levels to earn badges and score</div>
        </div>
      `:`
        <!-- World Progress -->
        <h3 class="section-title">${le("sm")} \u4E16\u754C\u8FDB\u5EA6 World Progress</h3>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-lg);">
          ${[1,2,3,4].map(r=>{let l=f.getWorldCompletion(r);return`
              <div>
                <div style="display:flex;justify-content:space-between;font-size:var(--text-sm);margin-bottom:var(--space-xs);">
                  <span>${ve[r]}</span><span style="color:var(--text-secondary);">${l}%</span>
                </div>
                <div class="progress-bar" role="progressbar" aria-valuenow="${l}" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar-fill" style="width:${l}%"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      `}

      <!-- Badges -->
      <h3 class="section-title">${_e("sm","var(--gold)")} \u6210\u5C31\u5FBD\u7AE0 Badges (${s}/${i})</h3>
      ${s===0?`
        <div class="card" style="text-align:center;padding:var(--space-lg);color:var(--text-muted);">
          <div style="margin-bottom:var(--space-sm);">${ke("xl","var(--text-muted)")}</div>
          <div style="font-size:var(--text-sm);">\u5B8C\u6210\u5173\u5361\u6765\u89E3\u9501\u4F60\u7684\u7B2C\u4E00\u4E2A\u5FBD\u7AE0<br>Complete levels to unlock your first badge</div>
        </div>
      `:""}
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-sm);${s===0?"margin-top:var(--space-sm);":""}">
        ${N.map(r=>He(r,t.badges.includes(r.id))).join("")}
      </div>
    </div>
  `}function ne(){let e=document.createElement("div");if(e.className="hongbao-overlay",e.innerHTML=`
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
  `,!document.getElementById("hongbao-styles")){let s=document.createElement("style");s.id="hongbao-styles",s.textContent=`
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
    `,document.head.appendChild(s)}let t=e.querySelector(".hongbao-particles"),o=["#ffc107","#ff5252","#ff9800","#ffeb3b","#e53935"];for(let s=0;s<20;s++){let i=document.createElement("div");i.className="hongbao-particle",i.style.background=o[s%o.length],i.style.left="50%",i.style.top="50%",i.style.setProperty("--px",`${(Math.random()-.5)*300}px`),i.style.setProperty("--py",`${(Math.random()-.5)*300}px`),i.style.animationDelay=`${.3+Math.random()*.5}s`,t.appendChild(i)}document.body.appendChild(e);let d=()=>{clearTimeout(a),e.style.opacity="0",e.style.transition="opacity 0.3s",setTimeout(()=>e.remove(),300)};e.addEventListener("click",d);let a=setTimeout(d,3e3)}function L(e,t){let{worldId:o,levelIndex:d,score:a,total:s,gameType:i}=t,r=Math.round(a/Math.max(1,s)*100),l=r>=100?3:r>=70?2:r>=40?1:0,m=r>=100,n=r>=40;n||f.markLevelFailed(o,d),n&&f.completeLevel(o,d,r);let p=[];function u(h,b){if(b&&f.addBadge(h)){let v=N.find(y=>y.id===h);v&&p.push(v)}}u("first-step",f.getTotalLevelsCompleted()>=1),u("quick-learner",m&&d===0),u("command-king",f.getWorldCompletion(2)>=100),u("prompt-sage",m&&i==="prompt-builder"),u("interview-ready",i==="boss-battle"&&n),u("completionist",[1,2,3,4].every(h=>f.getWorldCompletion(h)>=100)),u("speed-demon",i==="trivia"&&n&&(t.timeRemainingPct??0)>50),u("practice-master",f.getStreak().current>=7),u("unstoppable",f.getStreak().current>=21),u("persistent",n&&f.hasFailedLevel(o,d)),u("word-collector",f.getLearnedVocabCount()>=29);let c=f.getWorldCompletion(o)>=100,g="correctAnswer";m?g="perfectScore":n?c&&(g="worldComplete"):g="retry",e.innerHTML=`
    ${k("\u7ED3\u679C Results",!1)}
    <div class="screen" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-lg);padding-top:calc(var(--header-height) + var(--space-xl));">
      ${q(g)}
      <div style="text-align:center;">
        <div style="display:flex;justify-content:center;gap:var(--space-sm);margin-bottom:var(--space-md);">
          ${[1,2,3].map(h=>`<span style="display:inline-flex;animation:${h<=l?`bounceIn 0.3s ${h*.2}s both`:"none"}">${O(h<=l,"xl",h<=l?"var(--gold)":"var(--text-muted)")}</span>`).join("")}
        </div>
        <div style="font-size:var(--text-4xl);font-weight:700;color:${m?"var(--gold)":"var(--teal)"};">${r}%</div>
        <p style="color:var(--text-secondary);margin-top:var(--space-xs);">${a}/${s} \u6B63\u786E</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--space-xs);">+${r} XP</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);width:100%;">
        ${n?`<button class="btn btn-primary btn-block" id="next-level">\u4E0B\u4E00\u5173 Next Level ${ee("sm")}</button>`:""}
        <button class="btn btn-secondary btn-block" id="retry">${X("sm")} \u518D\u8BD5\u4E00\u6B21 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">${Y("sm")} \u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    </div>
  `,p.forEach((h,b)=>{setTimeout(()=>De(h),(b+1)*800)}),m?(setTimeout(()=>ne(),500),C("perfect")):n?C("levelUp"):C("wrong"),e.querySelector("#next-level")?.addEventListener("click",()=>{let h=d+1,b=f.getWorldLevelCount(o);h<b?T.navigate(`/world/${o}`):o<4?T.navigate(`/world/${o+1}`):T.navigate("/")}),e.querySelector("#retry")?.addEventListener("click",()=>{T.navigate(`/game/${i}/${o}/${d}`)}),e.querySelector("#go-home")?.addEventListener("click",()=>T.navigate("/"))}function We(e,t,o){let a=P.filter(m=>m.world===t);a.length<10&&(a=[...P]);let s=$(a).slice(0,10),i=0,r=0;function l(){if(i>=s.length){L(e,{worldId:t,levelIndex:o,score:r,total:10,gameType:"flash-match"});return}let m=s[i],n=i+1;e.innerHTML=`
      ${k("\u8BCD\u5361\u7EC3\u4E60 Flash Match",!0)}
      <div class="game-screen">
        ${te(n,10,r)}
        <div class="game-instruction">\u70B9\u51FB\u5361\u7247\u7FFB\u8F6C / Tap to flip</div>
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          <div class="flip-card" id="flashcard">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div style="font-size:var(--text-2xl);font-weight:700;">${m.en}</div>
              </div>
              <div class="flip-card-back">
                <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${m.zh}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-xs);">${m.pinyin}</div>
                <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-top:var(--space-sm);line-height:1.5;text-align:center;">${m.explanation}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="game-footer" id="action-btns" style="display:none;">
          <div style="display:flex;gap:var(--space-sm);">
            <button class="btn btn-danger" id="btn-review" style="flex:1;">\u2717 \u590D\u4E60 Review</button>
            <button class="btn btn-primary" id="btn-know" style="flex:1;">\u2713 \u8BA4\u8BC6 Know it</button>
          </div>
        </div>
      </div>
    `;let p=e.querySelector("#flashcard"),u=e.querySelector("#action-btns");p.addEventListener("click",()=>{p.classList.contains("flipped")||(p.classList.add("flipped"),C("cardFlip"),u.style.display="flex")}),e.querySelector("#btn-know")?.addEventListener("click",()=>{r++,C("correct"),i++,l()}),e.querySelector("#btn-review")?.addEventListener("click",()=>{f.addToReviewQueue({id:m.id,type:"vocab"}),C("wrong"),i++,l()})}l()}function pt(e,t){let o=P.filter(a=>a.world===e);return o.length<4&&(o=[...P]),$(o).slice(0,t).map(a=>{let s=$(P.filter(l=>l.id!==a.id)).slice(0,3),i=$([a,...s]),r=i.findIndex(l=>l.id===a.id);return{question_zh:`\u300C${a.zh}\u300D\u7684\u82F1\u6587\u662F\u4EC0\u4E48\uFF1F`,question_en:`What is "${a.zh}" in English?`,options:i.map(l=>l.en),correctIndex:r,explanation:a.explanation}})}function Ne(e,t,o){let s=pt(t,10),i=0,r=0,l=null,m=0,n=10*15*10;function p(){l&&(clearInterval(l),l=null)}function u(){if(p(),i>=s.length){let w=Math.round((n-m)/n*100);L(e,{worldId:t,levelIndex:o,score:r,total:s.length,gameType:"trivia",timeRemainingPct:w});return}let c=s[i],g=i+1,h=["A","B","C","D"];e.innerHTML=`
      ${k("\u77E5\u8BC6\u95EE\u7B54 Trivia",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${g}/${s.length}</span>
          <span>\u2713 ${r}</span>
        </div>
        <div class="timer-bar">
          <div class="timer-bar-fill" id="timer-fill" style="width:100%"></div>
        </div>
        <div class="game-question">
          ${c.question_zh}
          <div class="game-question-sub">${c.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${c.options.map((w,z)=>`
              <button class="option-btn" data-index="${z}">
                <span class="option-label">${h[z]}</span>
                <span>${w}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback" style="display:none;padding:var(--space-md);border-radius:var(--radius-md);line-height:1.6;font-size:var(--text-sm);"></div>
        </div>
      </div>
    `;let b=15*10,v=e.querySelector("#timer-fill");l=setInterval(()=>{b--;let w=b/(15*10)*100;v.style.width=`${w}%`,w<=20?v.className="timer-bar-fill danger":w<=50&&(v.className="timer-bar-fill warning"),b<=0&&(p(),x())},100),T.setCleanup(()=>p());function y(w,z=""){p(),m+=15*10-b;let _=e.querySelector("#feedback");if(_.style.display="block",w)r++,_.innerHTML=M(!0,`<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${c.explanation}`);else{let I=P.find(A=>A.en===c.options[c.correctIndex]);I&&f.addToReviewQueue({id:I.id,type:"vocab"}),_.innerHTML=M(!1,`<strong>${z}\u6B63\u786E\u7B54\u6848: ${c.options[c.correctIndex]}</strong><br>${c.explanation}`)}setTimeout(()=>{i++,u()},2500)}function x(){p(),e.querySelectorAll(".option-btn").forEach((z,_)=>{z.classList.add("disabled"),_===c.correctIndex&&z.classList.add("correct")}),C("wrong"),y(!1,"\u65F6\u95F4\u5230\uFF01 Time's up! ")}H(e,c.correctIndex,()=>y(!0),()=>y(!1))}u()}K();function Ue(e){return`
    <div class="terminal" data-terminal>
      <div class="terminal-output" data-terminal-output></div>
      <div class="terminal-input-line">
        <span class="terminal-prompt">$</span>
        <input
          type="text"
          class="terminal-input"
          data-terminal-input
          value="${e||""}"
          placeholder="\u8F93\u5165\u547D\u4EE4... / Type a command..."
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <span class="terminal-cursor"></span>
      </div>
    </div>
  `}function Be(e){let t=e.querySelector("[data-terminal]");if(!t)return;let o=t.querySelector("[data-terminal-output]"),d=t.querySelector("[data-terminal-input]");if(!o||!d)return;let a={};Promise.resolve().then(()=>(K(),Re)).then(r=>{r.commands&&Array.isArray(r.commands)?r.commands.forEach(l=>{a[l.command.toLowerCase()]={terminalResponse:l.terminalResponse}}):r.commands&&typeof r.commands=="object"&&(a=r.commands)}).catch(()=>{});function s(r,l){if(!o)return;let m=document.createElement("div");m.className=l?"terminal-line terminal-command":"terminal-line terminal-response",l?m.textContent=`$ ${r}`:(m.textContent=r.replace(/<br>/g,`
`),m.style.whiteSpace="pre-wrap"),o.appendChild(m),o.scrollTop=o.scrollHeight}function i(r){let l=r.trim().toLowerCase();if(s(r,!0),l==="")return;let m=Object.keys(a).find(n=>l===n.toLowerCase()||l.startsWith(n.toLowerCase()));if(m)s(a[m].terminalResponse);else if(l==="/help"||l==="help"){let n=Object.keys(a).map(p=>`  ${p}`).join("<br>");s(`\u53EF\u7528\u547D\u4EE4 / Available commands:<br>${n||"  (loading...)"}`)}else s("\u7801\u5C0F\u7801\u8BF4\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u6211\u8FD8\u4E0D\u8BA4\u8BC6\u54E6\uFF01\u8BD5\u8BD5 /help\uFF1F")}d.addEventListener("keydown",r=>{if(r.key==="Enter"){let l=d.value;d.value="",i(l)}}),t.addEventListener("click",()=>{d.focus()})}function je(e,t,o){let a=$([...W]).slice(0,8),s=0,i=0;function r(){if(s>=a.length){L(e,{worldId:t,levelIndex:o,score:i,total:8,gameType:"charades"});return}let l=a[s],m=s+1,n=$([l.command+" \u2014 "+l.zhName,...l.wrongChoices]),p=l.command+" \u2014 "+l.zhName,u=n.indexOf(p),c=["A","B","C","D"];e.innerHTML=`
      ${k("\u573A\u666F\u731C\u8C1C Charades",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${m}/8</span>
          <span>\u2713 ${i}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${m/8*100}%"></div>
        </div>
        <div class="game-question">
          ${l.scenario}
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${n.map((b,v)=>`
              <button class="option-btn" data-index="${v}" data-text="${b}">
                <span class="option-label">${c[v]}</span>
                <span style="font-family:var(--font-mono);font-size:var(--text-sm);">${b}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback-area" style="display:none;"></div>
        </div>
      </div>
    `;let g=e.querySelector("#feedback-area");function h(b){g.style.display="block",b?(i++,g.innerHTML=`
          ${M(!0,`<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${l.zhDescription}`)}
          <button class="btn btn-secondary btn-block" id="try-terminal" style="margin-top:var(--space-sm);">\u8BD5\u8BD5\u770B Try It</button>
          <div id="terminal-sandbox" style="display:none;margin-top:var(--space-md);"></div>
          <button class="btn btn-primary btn-block" id="next-btn" style="margin-top:var(--space-sm);">\u4E0B\u4E00\u9898 Next \u2192</button>
        `,e.querySelector("#try-terminal")?.addEventListener("click",()=>{let v=e.querySelector("#terminal-sandbox");v.style.display="block",v.innerHTML=Ue(l.command),Be(v),e.querySelector("#try-terminal").style.display="none"})):(f.addToReviewQueue({id:l.id,type:"command"}),g.innerHTML=`
          ${M(!1,`<strong>\u6B63\u786E\u7B54\u6848: ${l.command}</strong><br>${l.zhDescription}`)}
          <button class="btn btn-primary btn-block" id="next-btn" style="margin-top:var(--space-sm);">\u4E0B\u4E00\u9898 Next \u2192</button>
        `),e.querySelector("#next-btn")?.addEventListener("click",()=>{s++,r()})}H(e,u,()=>h(!0),()=>h(!1))}r()}var mt=[{task_zh:"\u8C03\u8BD5\u4E00\u4E2A\u5931\u8D25\u7684\u6D4B\u8BD5",task_en:"Debug a failing test",steps:["\u8BFB\u53D6\u9519\u8BEF\u4FE1\u606F Read error","\u5206\u6790\u539F\u56E0 Analyze cause","\u4FEE\u590D\u4EE3\u7801 Fix code","\u8FD0\u884C\u6D4B\u8BD5 Run tests","\u63D0\u4EA4\u4FEE\u590D Commit fix"]},{task_zh:"\u6DFB\u52A0\u4E00\u4E2A\u65B0\u529F\u80FD",task_en:"Add a new feature",steps:["\u521B\u5EFA\u5206\u652F Create branch","\u7F16\u5199\u4EE3\u7801 Write code","\u6DFB\u52A0\u6D4B\u8BD5 Add tests","\u4EE3\u7801\u5BA1\u67E5 Code review","\u5408\u5E76\u5206\u652F Merge branch"]},{task_zh:"\u90E8\u7F72\u9879\u76EE\u5230\u751F\u4EA7\u73AF\u5883",task_en:"Deploy to production",steps:["\u8FD0\u884C\u6D4B\u8BD5 Run tests","\u6784\u5EFA\u9879\u76EE Build project","\u68C0\u67E5\u914D\u7F6E Check config","\u90E8\u7F72\u4E0A\u7EBF Deploy","\u9A8C\u8BC1\u8FD0\u884C Verify live"]},{task_zh:"\u4FEE\u590D\u4E00\u4E2A\u7D27\u6025 Bug",task_en:"Fix a critical bug",steps:["\u590D\u73B0\u95EE\u9898 Reproduce bug","\u5B9A\u4F4D\u4EE3\u7801 Locate code","\u7F16\u5199\u4FEE\u590D Write fix","\u6D4B\u8BD5\u4FEE\u590D Test fix","\u70ED\u4FEE\u590D\u90E8\u7F72 Hotfix deploy"]},{task_zh:"\u91CD\u6784\u4E00\u6BB5\u65E7\u4EE3\u7801",task_en:"Refactor legacy code",steps:["\u7406\u89E3\u73B0\u6709\u903B\u8F91 Understand logic","\u7F16\u5199\u6D4B\u8BD5 Write tests","\u91CD\u6784\u4EE3\u7801 Refactor","\u8FD0\u884C\u6D4B\u8BD5 Run tests","\u63D0\u4EA4\u66F4\u6539 Commit changes"]}];function Qe(e,t,o){let a=$([...mt]).slice(0,5),s=0,i=0;function r(){if(s>=a.length){L(e,{worldId:t,levelIndex:o,score:i,total:5,gameType:"drag-drop"});return}let l=a[s],m=s+1,n=$([...l.steps]),p=new Array(l.steps.length).fill(null);u();function u(){let c=n.filter(g=>!p.includes(g));e.innerHTML=`
        ${k("\u6D41\u7A0B\u6392\u5E8F Drag & Drop",!0)}
        <div class="game-screen">
          ${te(m,5,i)}
          <div class="game-question">
            ${l.task_zh}
            <div class="game-question-sub">${l.task_en}</div>
          </div>
          <div class="game-instruction">\u70B9\u51FB\u547D\u4EE4\u5757\u653E\u5165\u4E0B\u4E00\u4E2A\u7A7A\u69FD / Tap to place in next slot</div>
          <div class="game-body">
            <div class="workflow-slots" id="slots">
              ${p.map((g,h)=>`
                <div class="workflow-slot">
                  <span class="slot-number">${h+1}</span>
                  <div class="drop-zone ${g?"filled":""}" data-slot="${h}">
                    ${g||""}
                  </div>
                </div>
              `).join("")}
            </div>
            <div class="block-tray" id="tray">
              ${c.map(g=>`
                <div class="prompt-block" data-step="${g}">${g}</div>
              `).join("")}
            </div>
          </div>
          <div class="game-footer" id="footer">
            <button class="btn btn-secondary btn-block" id="btn-reset">\u91CD\u7F6E Reset</button>
            <button class="btn btn-primary btn-block" id="btn-submit" ${c.length>0?"disabled":""}>\u68C0\u67E5 Check</button>
          </div>
          <div id="feedback" style="display:none;"></div>
        </div>
      `,e.querySelectorAll(".prompt-block").forEach(g=>{g.addEventListener("click",()=>{let h=g.dataset.step||"",b=p.indexOf(null);b!==-1&&(p[b]=h,C("keystroke"),u())})}),e.querySelectorAll(".drop-zone.filled").forEach(g=>{g.addEventListener("click",()=>{let h=parseInt(g.dataset.slot||"-1");h>=0&&p[h]&&(p[h]=null,C("keystroke"),u())})}),e.querySelector("#btn-reset")?.addEventListener("click",()=>{p.fill(null),u()}),e.querySelector("#btn-submit")?.addEventListener("click",()=>{let g=p.every((v,y)=>v===l.steps[y]),h=e.querySelector("#feedback");h.style.display="block",g?(i++,C("correct"),h.innerHTML=M(!0,"<strong>\u6B63\u786E\uFF01 Correct!</strong><br>\u5B8C\u7F8E\u7684\u6D41\u7A0B\u987A\u5E8F\uFF01")):(C("wrong"),h.innerHTML=M(!1,`<strong>\u6B63\u786E\u987A\u5E8F Correct order:</strong><br>${l.steps.map((v,y)=>`${y+1}. ${v}`).join("<br>")}`));let b=e.querySelector("#footer");b.innerHTML='<button class="btn btn-primary btn-block" id="next-btn">\u4E0B\u4E00\u9898 Next \u2192</button>',e.querySelector("#next-btn")?.addEventListener("click",()=>{s++,r()})})}}r()}K();function Fe(e,t,o){let a=$([...W]).slice(0,8),s=$([...a.map(c=>({id:c.id+"-en",pairId:c.id,text:c.command,type:"en"})),...a.map(c=>({id:c.id+"-zh",pairId:c.id,text:c.zhName,type:"zh"}))]),i=[],r=[],l=0,m=Date.now(),n=!1;function p(){let c=Math.floor((Date.now()-m)/1e3),g=Math.floor(c/60),h=c%60;e.innerHTML=`
      ${k("\u8BB0\u5FC6\u914D\u5BF9 Memory Match",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u6B65\u6570 Moves: ${l}</span>
          <span>\u914D\u5BF9 Pairs: ${r.length}/8</span>
          <span id="timer">${g}:${h.toString().padStart(2,"0")}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${r.length/8*100}%"></div>
        </div>
        <div class="game-body" style="justify-content:center;">
          <div class="memory-grid">
            ${s.map((b,v)=>{let y=i.includes(v),x=r.includes(b.pairId),w=["memory-card"];return(y||x)&&w.push("flipped"),x&&w.push("matched"),`
                <div class="${w.join(" ")}" data-index="${v}">
                  <div class="memory-card-inner">
                    <div class="memory-card-front">?</div>
                    <div class="memory-card-back" style="font-size:${b.type==="en"?"var(--text-sm)":"var(--text-base)"};">
                      ${b.text}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `,e.querySelectorAll(".memory-card").forEach(b=>{b.addEventListener("click",()=>{if(n)return;let v=parseInt(b.dataset.index||"-1");if(!(v<0||i.includes(v)||r.includes(s[v].pairId))&&(i.push(v),b.classList.add("flipped"),C("cardFlip"),i.length===2)){l++,n=!0;let[y,x]=i,w=s[y],z=s[x];if(w.pairId===z.pairId&&w.type!==z.type){if(r.push(w.pairId),C("correct"),i=[],n=!1,e.querySelectorAll(`.memory-card[data-index="${y}"], .memory-card[data-index="${x}"]`).forEach(_=>_.classList.add("matched")),r.length===8){let _=Math.floor((Date.now()-m)/1e3),I=Math.max(20,100-(l-8)*5);setTimeout(()=>{L(e,{worldId:t,levelIndex:o,score:I,total:100,gameType:"memory-match"})},800)}}else setTimeout(()=>{i=[],n=!1,p()},800)}})})}let u=setInterval(()=>{let c=e.querySelector("#timer");if(!c){clearInterval(u);return}let g=Math.floor((Date.now()-m)/1e3),h=Math.floor(g/60),b=g%60;c.textContent=`${h}:${b.toString().padStart(2,"0")}`},1e3);T.setCleanup(()=>clearInterval(u)),p()}var G=[{id:"pe1",task_zh:"\u7ED9\u9879\u76EE\u6DFB\u52A0\u7528\u6237\u767B\u5F55\u529F\u80FD",badPrompt:"\u5E2E\u6211\u52A0\u4E2A\u767B\u5F55",goodPrompt:"\u5728 src/auth.ts \u4E2D\u6DFB\u52A0\u4E00\u4E2A login \u51FD\u6570\uFF0C\u63A5\u6536 email \u548C password \u53C2\u6570\uFF0C\u4F7F\u7528 bcrypt \u9A8C\u8BC1\u5BC6\u7801\uFF0C\u8FD4\u56DE JWT token\u3002\u53C2\u8003\u9879\u76EE\u4E2D\u5DF2\u6709\u7684 register \u51FD\u6570\u7684\u98CE\u683C\u3002",rating:{clarity:5,specificity:5,context:4,tone:5},explanation_zh:"\u597D\u7684\u63D0\u793A\u8BCD\u6307\u5B9A\u4E86\u6587\u4EF6\u4F4D\u7F6E\u3001\u51FD\u6570\u540D\u3001\u53C2\u6570\u3001\u6280\u672F\u5B9E\u73B0\u65B9\u6848\uFF0C\u8FD8\u63D0\u5230\u4E86\u53C2\u8003\u5DF2\u6709\u4EE3\u7801\u7684\u98CE\u683C\u3002Claude Code \u80FD\u7CBE\u786E\u6267\u884C\u3002"},{id:"pe2",task_zh:"\u4FEE\u590D\u4E00\u4E2A\u62A5\u9519",badPrompt:"\u4EE3\u7801\u6709 bug \u5E2E\u6211\u4FEE",goodPrompt:"\u8FD0\u884C npm test \u65F6\u62A5\u9519 TypeError: Cannot read property 'name' of undefined\uFF0C\u51FA\u73B0\u5728 src/utils.ts \u7B2C 42 \u884C\u3002\u8BF7\u5206\u6790\u539F\u56E0\u5E76\u4FEE\u590D\u3002",rating:{clarity:5,specificity:5,context:5,tone:5},explanation_zh:"\u628A\u5B8C\u6574\u7684\u62A5\u9519\u4FE1\u606F\u3001\u6587\u4EF6\u4F4D\u7F6E\u548C\u884C\u53F7\u90FD\u7ED9\u4E86 Claude Code\uFF0C\u5B83\u4E0D\u9700\u8981\u731C\u6D4B\u5C31\u80FD\u76F4\u63A5\u5B9A\u4F4D\u95EE\u9898\u3002"},{id:"pe3",task_zh:"\u91CD\u6784\u4E00\u4E2A\u590D\u6742\u51FD\u6570",badPrompt:"\u8FD9\u4E2A\u51FD\u6570\u592A\u4E71\u4E86\uFF0C\u6539\u4E00\u4E0B",goodPrompt:"\u91CD\u6784 src/parser.ts \u4E2D\u7684 parseConfig \u51FD\u6570\u3002\u5F53\u524D\u51FD\u6570\u6709 120 \u884C\uFF0C\u8BF7\u62C6\u5206\u6210\u66F4\u5C0F\u7684\u8F85\u52A9\u51FD\u6570\uFF0C\u6BCF\u4E2A\u4E0D\u8D85\u8FC7 30 \u884C\u3002\u4FDD\u6301\u6240\u6709\u73B0\u6709\u6D4B\u8BD5\u901A\u8FC7\u3002",rating:{clarity:5,specificity:4,context:4,tone:5},explanation_zh:"\u660E\u786E\u4E86\u91CD\u6784\u76EE\u6807\uFF08\u62C6\u5206\u51FD\u6570\uFF09\u3001\u5177\u4F53\u6807\u51C6\uFF08\u6BCF\u4E2A\u4E0D\u8D85\u8FC7 30 \u884C\uFF09\u548C\u7EA6\u675F\u6761\u4EF6\uFF08\u6D4B\u8BD5\u8981\u901A\u8FC7\uFF09\uFF0CClaude Code \u6709\u6E05\u6670\u7684\u65B9\u5411\u3002"},{id:"pe4",task_zh:"\u4E3A\u51FD\u6570\u6DFB\u52A0 TypeScript \u7C7B\u578B",badPrompt:"\u52A0\u7C7B\u578B",goodPrompt:"\u7ED9 src/api.ts \u4E2D\u6240\u6709\u5BFC\u51FA\u51FD\u6570\u6DFB\u52A0 TypeScript \u7C7B\u578B\u58F0\u660E\u3002\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u90FD\u8981\u6709\u660E\u786E\u7C7B\u578B\uFF0C\u4E0D\u8981\u7528 any\u3002\u53C2\u8003\u9879\u76EE\u7684 tsconfig.json \u4E2D\u7684 strict \u914D\u7F6E\u3002",rating:{clarity:4,specificity:4,context:4,tone:5},explanation_zh:"\u6307\u5B9A\u4E86\u8303\u56F4\uFF08\u6240\u6709\u5BFC\u51FA\u51FD\u6570\uFF09\u3001\u8981\u6C42\uFF08\u4E0D\u7528 any\uFF09\u548C\u53C2\u8003\u6587\u4EF6\uFF08tsconfig.json\uFF09\uFF0CClaude Code \u80FD\u6309\u89C4\u8303\u6267\u884C\u3002"},{id:"pe5",task_zh:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 API \u7AEF\u70B9",badPrompt:"\u5199\u4E2A API",goodPrompt:"\u5728 src/routes/users.ts \u4E2D\u65B0\u589E\u4E00\u4E2A GET /api/users/:id \u7AEF\u70B9\u3002\u8FD4\u56DE\u7528\u6237\u4FE1\u606F\uFF08name, email, createdAt\uFF09\uFF0C\u5982\u679C\u7528\u6237\u4E0D\u5B58\u5728\u8FD4\u56DE 404\u3002\u4F7F\u7528\u9879\u76EE\u4E2D\u5DF2\u6709\u7684 db.query \u65B9\u6CD5\u67E5\u8BE2\u6570\u636E\u5E93\u3002",rating:{clarity:5,specificity:5,context:5,tone:5},explanation_zh:"\u5B8C\u7F8E\u7684\u63D0\u793A\u8BCD\uFF1A\u6307\u5B9A\u4E86\u6587\u4EF6\u3001\u8DEF\u5F84\u3001HTTP \u65B9\u6CD5\u3001\u8FD4\u56DE\u5B57\u6BB5\u3001\u9519\u8BEF\u5904\u7406\u548C\u6570\u636E\u5E93\u65B9\u6CD5\u3002Claude Code \u51E0\u4E4E\u4E0D\u9700\u8981\u989D\u5916\u95EE\u4F60\u3002"},{id:"pe6",task_zh:"\u4F18\u5316\u9875\u9762\u52A0\u8F7D\u901F\u5EA6",badPrompt:"\u7F51\u7AD9\u592A\u6162\u4E86",goodPrompt:"\u9996\u9875\u52A0\u8F7D\u9700\u8981 5 \u79D2\uFF0C\u4E3B\u8981\u74F6\u9888\u662F src/components/Dashboard.tsx \u4E2D\u4E00\u6B21\u6027\u52A0\u8F7D\u4E86\u6240\u6709\u6570\u636E\u3002\u8BF7\u6539\u4E3A\u61D2\u52A0\u8F7D\uFF1A\u5148\u52A0\u8F7D\u9996\u5C4F\u6570\u636E\uFF0C\u6EDA\u52A8\u65F6\u518D\u52A0\u8F7D\u66F4\u591A\u3002\u4F7F\u7528 Intersection Observer API\u3002",rating:{clarity:5,specificity:5,context:5,tone:5},explanation_zh:"\u63D0\u4F9B\u4E86\u6027\u80FD\u6307\u6807\uFF085 \u79D2\uFF09\u3001\u95EE\u9898\u5B9A\u4F4D\uFF08Dashboard.tsx\uFF09\u3001\u89E3\u51B3\u65B9\u6848\uFF08\u61D2\u52A0\u8F7D\uFF09\u548C\u6280\u672F\u5B9E\u73B0\uFF08Intersection Observer\uFF09\uFF0C\u975E\u5E38\u6E05\u6670\u3002"},{id:"pe7",task_zh:"\u5199\u5355\u5143\u6D4B\u8BD5",badPrompt:"\u5199\u6D4B\u8BD5",goodPrompt:"\u4E3A src/utils/formatDate.ts \u4E2D\u7684 formatDate \u51FD\u6570\u5199\u5355\u5143\u6D4B\u8BD5\u3002\u8986\u76D6\u4EE5\u4E0B\u573A\u666F\uFF1A\u6709\u6548\u65E5\u671F\u3001\u65E0\u6548\u8F93\u5165\uFF08null, undefined, \u7A7A\u5B57\u7B26\u4E32\uFF09\u3001\u4E0D\u540C\u65F6\u533A\u3002\u4F7F\u7528\u9879\u76EE\u5DF2\u6709\u7684 vitest \u6846\u67B6\u3002",rating:{clarity:5,specificity:5,context:4,tone:5},explanation_zh:"\u5217\u51FA\u4E86\u5177\u4F53\u7684\u6D4B\u8BD5\u573A\u666F\u548C\u8FB9\u754C\u6761\u4EF6\uFF0C\u6307\u5B9A\u4E86\u6D4B\u8BD5\u6846\u67B6\u3002Claude Code \u80FD\u5199\u51FA\u5168\u9762\u7684\u6D4B\u8BD5\u7528\u4F8B\u3002"},{id:"pe8",task_zh:"\u6DFB\u52A0\u6697\u8272\u4E3B\u9898\u652F\u6301",badPrompt:"\u52A0\u4E2A\u6697\u8272\u6A21\u5F0F",goodPrompt:"\u4E3A\u5E94\u7528\u6DFB\u52A0\u6697\u8272\u4E3B\u9898\u5207\u6362\u3002\u5728 src/styles/globals.css \u4E2D\u7528 CSS \u53D8\u91CF\u5B9A\u4E49\u989C\u8272\uFF0C\u5728 src/components/Header.tsx \u6DFB\u52A0\u5207\u6362\u6309\u94AE\uFF0C\u7528 localStorage \u8BB0\u4F4F\u7528\u6237\u504F\u597D\u3002\u5F53\u524D\u6D45\u8272\u4E3B\u9898\u8272\u53F7\uFF1A\u80CC\u666F #FFFFFF\uFF0C\u6587\u5B57 #1A1A1A\u3002",rating:{clarity:5,specificity:5,context:5,tone:5},explanation_zh:"\u6307\u5B9A\u4E86\u5B9E\u73B0\u65B9\u6848\uFF08CSS \u53D8\u91CF\uFF09\u3001\u4FEE\u6539\u6587\u4EF6\u3001\u6301\u4E45\u5316\u65B9\u5F0F\uFF08localStorage\uFF09\u548C\u73B0\u6709\u914D\u8272\uFF0CClaude Code \u6709\u5B8C\u6574\u4FE1\u606F\u6765\u5B9E\u73B0\u3002"},{id:"pe9",task_zh:"\u4EE3\u7801\u5BA1\u67E5",badPrompt:"\u770B\u770B\u6709\u6CA1\u6709\u95EE\u9898",goodPrompt:"\u5BA1\u67E5 src/services/payment.ts \u4E2D\u7684 processPayment \u51FD\u6570\u3002\u91CD\u70B9\u68C0\u67E5\uFF1A1) \u9519\u8BEF\u5904\u7406\u662F\u5426\u5B8C\u5584 2) \u662F\u5426\u6709\u5B89\u5168\u6F0F\u6D1E 3) \u662F\u5426\u6B63\u786E\u5904\u7406\u4E86\u5E76\u53D1\u8BF7\u6C42\u3002",rating:{clarity:5,specificity:4,context:3,tone:5},explanation_zh:"\u6307\u5B9A\u4E86\u5BA1\u67E5\u6587\u4EF6\u548C\u4E09\u4E2A\u91CD\u70B9\u5173\u6CE8\u65B9\u5411\uFF0CClaude Code \u53EF\u4EE5\u6709\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u4EE3\u7801\u5BA1\u67E5\u3002"},{id:"pe10",task_zh:"\u914D\u7F6E CI/CD \u6D41\u6C34\u7EBF",badPrompt:"\u5E2E\u6211\u81EA\u52A8\u5316\u90E8\u7F72",goodPrompt:"\u521B\u5EFA .github/workflows/deploy.yml \u914D\u7F6E GitHub Actions\uFF1Apush \u5230 main \u5206\u652F\u65F6\u81EA\u52A8\u8FD0\u884C npm test\uFF0C\u6D4B\u8BD5\u901A\u8FC7\u540E\u7528 wrangler \u90E8\u7F72\u5230 Cloudflare Pages\u3002\u9879\u76EE\u540D\u662F my-app\u3002",rating:{clarity:5,specificity:5,context:5,tone:5},explanation_zh:"\u5305\u542B\u4E86\u6587\u4EF6\u8DEF\u5F84\u3001\u89E6\u53D1\u6761\u4EF6\u3001\u6B65\u9AA4\uFF08\u6D4B\u8BD5\u2192\u90E8\u7F72\uFF09\u3001\u5DE5\u5177\uFF08wrangler\uFF09\u548C\u9879\u76EE\u540D\uFF0CClaude Code \u80FD\u751F\u6210\u5B8C\u6574\u7684 CI/CD \u914D\u7F6E\u3002"},{id:"pe11",task_zh:"\u89E3\u91CA\u4E00\u6BB5\u4EE3\u7801",badPrompt:"\u8FD9\u662F\u4EC0\u4E48",goodPrompt:"\u8BF7\u9010\u884C\u89E3\u91CA src/middleware/auth.ts \u4E2D\u7684 verifyToken \u4E2D\u95F4\u4EF6\u51FD\u6570\u3002\u6211\u662F\u65B0\u624B\uFF0C\u8BF7\u7528\u7B80\u5355\u7684\u8BED\u8A00\uFF0C\u5E76\u89E3\u91CA\u4E3A\u4EC0\u4E48\u6BCF\u4E00\u6B65\u662F\u5FC5\u8981\u7684\u3002",rating:{clarity:5,specificity:4,context:4,tone:5},explanation_zh:"\u8BF4\u660E\u4E86\u8981\u89E3\u91CA\u7684\u5177\u4F53\u51FD\u6570\u3001\u89E3\u91CA\u65B9\u5F0F\uFF08\u9010\u884C\uFF09\u3001\u4F60\u7684\u6C34\u5E73\uFF08\u65B0\u624B\uFF09\u548C\u671F\u671B\uFF08\u7B80\u5355\u8BED\u8A00\uFF09\uFF0CClaude Code \u80FD\u7ED9\u51FA\u5408\u9002\u7684\u89E3\u91CA\u3002"},{id:"pe12",task_zh:"\u8FC1\u79FB\u6570\u636E\u5E93",badPrompt:"\u6362\u4E2A\u6570\u636E\u5E93",goodPrompt:"\u628A\u9879\u76EE\u4ECE SQLite \u8FC1\u79FB\u5230 PostgreSQL\u3002\u9700\u8981\u4FEE\u6539\u7684\u6587\u4EF6\uFF1Asrc/db/connection.ts\uFF08\u8FDE\u63A5\u914D\u7F6E\uFF09\u3001src/db/queries.ts\uFF08SQL \u8BED\u6CD5\u5DEE\u5F02\uFF09\u3002\u4FDD\u6301\u6240\u6709\u73B0\u6709\u7684 API \u63A5\u53E3\u4E0D\u53D8\u3002",rating:{clarity:5,specificity:5,context:4,tone:5},explanation_zh:"\u6307\u5B9A\u4E86\u8FC1\u79FB\u65B9\u5411\u3001\u9700\u8981\u4FEE\u6539\u7684\u6587\u4EF6\u53CA\u539F\u56E0\u3001\u7EA6\u675F\u6761\u4EF6\uFF08API \u4E0D\u53D8\uFF09\u3002Claude Code \u53EF\u4EE5\u7CFB\u7EDF\u6027\u5730\u5B8C\u6210\u8FC1\u79FB\u3002"}];function Ge(e,t,o){let a=$(G).slice(0,5),s=0,i=0;function r(){let l=a[s],m=l.goodPrompt.split(/\s+/),n=$(m),p=[];e.innerHTML=`
      ${k("\u63D0\u793A\u8BCD\u62FC\u88C5 Prompt Builder",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${s+1}/5 \u9898</span>
          <span>\u5F97\u5206: ${i}/5</span>
        </div>
        <div class="game-question">${l.task_zh}</div>
        <div class="game-instruction">\u628A\u4E0B\u9762\u7684\u8BCD\u5757\u62FC\u6210\u4E00\u4E2A\u597D\u7684\u63D0\u793A\u8BCD</div>
        <div class="game-body">
          <div class="prompt-assembly" id="assembly">
            <span style="color:var(--text-muted);font-size:var(--text-sm);" id="assembly-placeholder">\u70B9\u51FB\u4E0B\u65B9\u8BCD\u5757\u62FC\u51FA\u63D0\u793A\u8BCD...</span>
          </div>
          <div class="block-tray" id="tray">
            ${n.map((v,y)=>`<div class="prompt-block" data-index="${y}" data-word="${v}">${v}</div>`).join("")}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn" disabled>\u63D0\u4EA4 Submit</button>
        </div>
      </div>
    `;let u=e.querySelector("#tray"),c=e.querySelector("#assembly"),g=e.querySelector("#submit-btn"),h=e.querySelector("#assembly-placeholder");function b(){h&&(h.style.display=p.length>0?"none":""),g.disabled=p.length===0}u.addEventListener("click",v=>{let y=v.target.closest(".prompt-block");if(!y||y.classList.contains("placed"))return;C("keystroke"),y.classList.add("placed");let x=y.dataset.word;p.push(x);let w=document.createElement("div");w.className="prompt-block",w.textContent=x,w.dataset.trayIndex=y.dataset.index,c.appendChild(w),w.addEventListener("click",()=>{C("keystroke");let z=p.indexOf(x);z!==-1&&p.splice(z,1),w.remove(),y.classList.remove("placed"),b()}),b()}),g.addEventListener("click",()=>{let v=m,y=0,x=v.length;for(let A=0;A<Math.min(p.length,x);A++)p[A]===v[A]&&y++;let z=y/x>=.8;z?(i++,C("correct")):(C("wrong"),f.addToReviewQueue({id:l.id,type:"prompt"}));let _=l.rating,I=[["\u6E05\u6670\u5EA6 Clarity",_.clarity],["\u5177\u4F53\u6027 Specificity",_.specificity],["\u4E0A\u4E0B\u6587 Context",_.context],["\u8BED\u6C14 Tone",_.tone]];e.innerHTML=`
        ${k("\u63D0\u793A\u8BCD\u62FC\u88C5 Prompt Builder",!0)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>\u7B2C ${s+1}/5 \u9898</span>
            <span>\u5F97\u5206: ${i}/5</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${z?'<span style="color:var(--green);">\u6B63\u786E!</span>':'<span style="color:var(--red);">\u518D\u52A0\u6CB9!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4F60\u7684\u62FC\u88C5:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${p.join(" ")}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u53C2\u8003\u7B54\u6848:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${l.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-sm);">\u63D0\u793A\u8BCD\u8BC4\u5206 Rating</p>
            <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
              ${I.map(([A,D])=>`
                <div style="display:flex;align-items:center;gap:var(--space-sm);">
                  <span style="font-size:var(--text-xs);color:var(--text-secondary);min-width:100px;">${A}</span>
                  <div class="progress-bar" style="flex:1;">
                    <div class="progress-bar-fill" style="width:${D*20}%;"></div>
                  </div>
                  <span style="font-size:var(--text-xs);color:var(--teal);min-width:24px;">${D}/5</span>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="game-footer">
            <button class="btn btn-primary btn-block" id="next-btn">${s+1<5?"\u4E0B\u4E00\u9898 Next":"\u67E5\u770B\u7ED3\u679C Results"}</button>
          </div>
        </div>
      `,e.querySelector("#next-btn").addEventListener("click",()=>{s++,s<5?r():L(e,{worldId:t,levelIndex:o,score:i,total:5,gameType:"prompt-builder"})})})}r()}function Ye(e,t,o){let a=$(G).slice(0,5),s=0,i=0;function r(){let l=a[s],m=l.badPrompt.split(/\s+/),n=l.goodPrompt.split(/\s+/),p=new Set(m.map(y=>y.toLowerCase())),u=n.filter(y=>!p.has(y.toLowerCase())),c=$(u),g=m.map(y=>({word:y,removed:!1})),h=[];e.innerHTML=`
      ${k("\u63D0\u793A\u8BCD\u4FEE\u590D Prompt Repair",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${s+1}/5 \u9898</span>
          <span>\u5F97\u5206: ${i}/5</span>
        </div>
        <div class="game-question">${l.task_zh}</div>
        <div class="game-instruction">\u4FEE\u590D\u4E0B\u9762\u7684\u63D0\u793A\u8BCD\uFF1A\u70B9\u51FB\u5220\u9664\u591A\u4F59\u7684\u8BCD\uFF0C\u4ECE\u8BCD\u5E93\u6DFB\u52A0\u7F3A\u5C11\u7684\u8BCD</div>
        <div class="game-body">
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">\u70B9\u51FB\u8BCD\u8BED\u5207\u6362\u5220\u9664\u72B6\u6001</p>
          <div class="editable-prompt" id="editable">
            ${m.map((y,x)=>`<span class="word-token" data-index="${x}">${y}</span>`).join("")}
          </div>
          <p style="color:var(--text-secondary);font-size:var(--text-xs);margin-bottom:var(--space-xs);">\u8BCD\u5E93 \u2014 \u70B9\u51FB\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u672B\u5C3E</p>
          <div class="word-bank" id="bank">
            ${c.map((y,x)=>`<span class="word-token" data-bank="${x}" data-word="${y}">${y}</span>`).join("")}
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="submit-btn">\u63D0\u4EA4 Submit</button>
        </div>
      </div>
    `;let b=e.querySelector("#editable"),v=e.querySelector("#bank");b.addEventListener("click",y=>{let x=y.target.closest(".word-token");if(!x)return;let w=x.dataset.index,z=x.dataset.bank;if(w!==void 0){let _=parseInt(w);g[_].removed=!g[_].removed,x.classList.toggle("removed",g[_].removed),C("keystroke")}else if(z!==void 0){C("keystroke");let _=x.dataset.word,I=h.findIndex(D=>D.word===_);I!==-1&&h.splice(I,1),x.remove();let A=v.querySelector(`[data-bank="${z}"]`);A&&(A.classList.remove("selected"),A.style.display="")}}),v.addEventListener("click",y=>{let x=y.target.closest(".word-token");if(!x||x.classList.contains("selected"))return;C("keystroke");let w=x.dataset.word,z=x.dataset.bank;x.classList.add("selected"),x.style.display="none",h.push({word:w,afterIndex:g.length});let _=document.createElement("span");_.className="word-token selected",_.textContent=w,_.dataset.bank=z,_.dataset.word=w,b.appendChild(_)}),e.querySelector("#submit-btn").addEventListener("click",()=>{let y=[];g.forEach(R=>{R.removed||y.push(R.word)}),h.forEach(R=>y.push(R.word));let x=y.join(" ").toLowerCase(),w=new Set(n.map(R=>R.toLowerCase())),z=new Set(y.map(R=>R.toLowerCase())),_=0;w.forEach(R=>{z.has(R)&&_++});let I=m.filter(R=>!w.has(R.toLowerCase())),A=0;I.forEach(R=>{z.has(R.toLowerCase())&&A++});let ue=Math.max(0,_/w.size-A*.1)>=.5;ue?(i++,C("correct")):(C("wrong"),f.addToReviewQueue({id:l.id,type:"prompt"})),e.innerHTML=`
        ${k("\u63D0\u793A\u8BCD\u4FEE\u590D Prompt Repair",!0)}
        <div class="game-screen">
          <div class="game-score-bar">
            <span>\u7B2C ${s+1}/5 \u9898</span>
            <span>\u5F97\u5206: ${i}/5</span>
          </div>
          <div class="game-question" style="font-size:var(--text-base);">
            ${ue?'<span style="color:var(--green);">\u4FEE\u590D\u6210\u529F!</span>':'<span style="color:var(--red);">\u8FD8\u9700\u6539\u8FDB!</span>'}
          </div>
          <div style="padding:0 var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4FEE\u590D\u524D Before:</p>
            <div class="editable-prompt" style="border:1px solid var(--red);margin-bottom:var(--space-md);opacity:0.7;">${l.badPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u4F60\u7684\u4FEE\u590D Your fix:</p>
            <div class="editable-prompt" style="margin-bottom:var(--space-md);">${y.join(" ")}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-xs);">\u53C2\u8003\u7B54\u6848 Reference:</p>
            <div class="editable-prompt" style="border:1px solid var(--green);margin-bottom:var(--space-md);">${l.goodPrompt}</div>
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;">${l.explanation_zh}</p>
          </div>
          <div class="game-footer">
            <button class="btn btn-primary btn-block" id="next-btn">${s+1<5?"\u4E0B\u4E00\u9898 Next":"\u67E5\u770B\u7ED3\u679C Results"}</button>
          </div>
        </div>
      `,e.querySelector("#next-btn").addEventListener("click",()=>{s++,s<5?r():L(e,{worldId:t,levelIndex:o,score:i,total:5,gameType:"prompt-repair"})})})}r()}function Ve(e,t,o){let a=$(G),s=[];for(;s.length<10;)s.push(...a);let i=s.slice(0,10),r=0,l=0;function m(){let n=i[r],p=Math.random()<.5,u=p?n.goodPrompt:n.badPrompt,c=p?n.badPrompt:n.goodPrompt,g=p?"left":"right";e.innerHTML=`
      ${k("\u63D0\u793A\u8BCD\u5BF9\u51B3 Prompt Duel",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u7B2C ${r+1}/10 \u9898</span>
          <span>\u5F97\u5206: ${l}/10</span>
        </div>
        <div class="game-question" style="font-size:var(--text-base);">${n.task_zh}</div>
        <div class="game-instruction">\u54EA\u4E2A\u63D0\u793A\u8BCD\u66F4\u597D\uFF1F\u70B9\u51FB\u9009\u62E9</div>
        <div class="game-body">
          <div class="duel-container">
            <div class="duel-card" id="card-left" data-side="left">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">A</div>
              ${u}
            </div>
            <div class="duel-card" id="card-right" data-side="right">
              <div style="color:var(--text-muted);font-size:var(--text-xs);margin-bottom:var(--space-sm);">B</div>
              ${c}
            </div>
          </div>
          <div id="explanation" style="display:none;padding:var(--space-md);background:var(--bg-card);border-radius:var(--radius-md);margin-top:var(--space-md);">
            <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6;" id="explanation-text"></p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-primary btn-block" id="next-btn" style="display:none;">${r+1<10?"\u4E0B\u4E00\u9898 Next":"\u67E5\u770B\u7ED3\u679C Results"}</button>
        </div>
      </div>
    `;let h=e.querySelector("#card-left"),b=e.querySelector("#card-right"),v=e.querySelector("#explanation"),y=e.querySelector("#explanation-text"),x=e.querySelector("#next-btn"),w=!1;function z(_){if(w)return;w=!0,_===g?(l++,C("correct")):(C("wrong"),f.addToReviewQueue({id:n.id,type:"prompt"}));let A=g==="left"?h:b,D=g==="left"?b:h;A.classList.add("correct"),D.classList.add("wrong"),h.style.pointerEvents="none",b.style.pointerEvents="none",y.textContent=n.explanation_zh,v.style.display="",x.style.display=""}h.addEventListener("click",()=>z("left")),b.addEventListener("click",()=>z("right")),x.addEventListener("click",()=>{r++,r<10?m():L(e,{worldId:t,levelIndex:o,score:l,total:10,gameType:"prompt-duel"})})}m()}var ut=[{question_zh:"\u4F60\u4F1A\u600E\u6837\u5F00\u59CB\u4E00\u4E2A\u65B0\u9879\u76EE\uFF1F",question_en:"How would you start a new project?",correctCommand:"/init",commandOptions:["/init","/setup","/new","/config"],keywords:["scaffold","CLAUDE.md","initialize"]},{question_zh:"\u4EE3\u7801\u5E93\u592A\u5927\uFF0C\u653E\u4E0D\u8FDB\u4E0A\u4E0B\u6587\u7A97\u53E3\u3002\u4F60\u4F1A\u600E\u4E48\u505A\uFF1F",question_en:"The codebase is too large for context. What do you do?",correctCommand:"/compact",commandOptions:["/compact","/clear","/shrink","/trim"],keywords:["context","compact","window"]},{question_zh:"\u4F60\u9700\u8981\u64A4\u9500\u4E00\u4E2A\u6700\u8FD1\u7684\u6539\u52A8\u3002\u600E\u4E48\u529E\uFF1F",question_en:"You need to undo a recent change. How?",correctCommand:"/rewind",commandOptions:["/rewind","/undo","/rollback","/restore"],keywords:["revert","undo","checkpoint"]},{question_zh:"\u4F60\u60F3\u67E5\u770B API \u7528\u91CF\u3002\u600E\u4E48\u64CD\u4F5C\uFF1F",question_en:"How do you check your API usage?",correctCommand:"/usage",commandOptions:["/usage","/cost","/billing","/stats"],keywords:["token","cost","usage"]},{question_zh:"\u4EE3\u7801\u5BA1\u67E5\u6D41\u7A0B\u662F\u600E\u6837\u7684\uFF1F",question_en:"Code review process?",correctCommand:"/review",commandOptions:["/review","/lint","/check","/audit"],keywords:["review","quality","feedback"]},{question_zh:"\u5982\u4F55\u7B80\u5316\u590D\u6742\u7684\u4EE3\u7801\uFF1F",question_en:"How to simplify complex code?",correctCommand:"/simplify",commandOptions:["/simplify","/explain","/easy","/translate"],keywords:["refactor","simplify","clean"]}];function Ze(e,t,o){let s=$(ut).slice(0,3),i=0,r=0,l=!0;function m(){e.innerHTML=`
      ${k("\u9762\u8BD5\u6A21\u62DF Boss Battle",!0)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
          ${q("bossStart")}
          <div style="text-align:center;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-xl);font-weight:700;color:var(--gold);">\u9762\u8BD5\u6A21\u62DF Interview Simulation</div>
            <p style="color:var(--text-secondary);margin-top:var(--space-sm);">\u56DE\u7B54 3 \u4E2A\u573A\u666F\u9898\uFF0C\u9009\u62E9\u6B63\u786E\u547D\u4EE4\u5E76\u89E3\u91CA\u539F\u56E0</p>
            <p style="color:var(--text-secondary);">Answer 3 scenarios: pick the right command and explain why</p>
          </div>
        </div>
        <div class="game-footer">
          <button class="btn btn-gold btn-block" id="start-btn">\u5F00\u59CB\u6311\u6218 Start Challenge</button>
        </div>
      </div>
    `,e.querySelector("#start-btn")?.addEventListener("click",()=>{l=!1,n()})}function n(){if(i>=s.length){L(e,{worldId:t,levelIndex:o,score:r,total:3*100,gameType:"boss-battle"});return}let p=s[i],u=i+1,c=$(p.commandOptions);e.innerHTML=`
      ${k("\u9762\u8BD5\u6A21\u62DF Boss Battle",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u573A\u666F ${u}/3</span>
          <span>\u5F97\u5206: ${r}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${u/3*100}%"></div>
        </div>
        <div class="game-question">
          ${p.question_zh}
          <div class="game-question-sub">${p.question_en}</div>
        </div>
        <div class="game-body">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-xs);">
            \u9009\u62E9\u6B63\u786E\u7684\u547D\u4EE4 Pick the correct command:
          </div>
          <div class="option-list" id="cmd-options">
            ${c.map((v,y)=>`
              <button class="option-btn" data-cmd="${v}">
                <span class="option-label">${["A","B","C","D"][y]}</span>
                <span style="font-family:var(--font-mono);">${v}</span>
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
    `;let g="",h=!1,b=e.querySelectorAll("#cmd-options .option-btn");b.forEach(v=>{v.addEventListener("click",()=>{if(g)return;g=v.dataset.cmd||"",h=g===p.correctCommand,b.forEach(z=>z.classList.add("disabled")),h?(v.classList.add("correct"),C("correct")):(v.classList.add("wrong"),b.forEach(z=>{z.dataset.cmd===p.correctCommand&&z.classList.add("correct")}),C("wrong"));let y=e.querySelector("#explain-section");y.style.display="block";let x=e.querySelector("#cmd-feedback");x.style.display="block",h?(x.style.background="rgba(0, 212, 170, 0.1)",x.style.border="1px solid var(--green)",x.innerHTML="<strong>+50 \u547D\u4EE4\u6B63\u786E\uFF01 Command correct!</strong>"):(x.style.background="rgba(255, 107, 107, 0.1)",x.style.border="1px solid var(--red)",x.innerHTML=`<strong>\u547D\u4EE4\u9519\u8BEF\u3002\u6B63\u786E\u7B54\u6848: ${p.correctCommand}</strong>`),e.querySelector("#explanation-input")?.focus()})}),e.querySelector("#submit-explain")?.addEventListener("click",()=>{let v=e.querySelector("#explanation-input");if(!v?.value.trim()){v?.focus();return}let y=(v?.value||"").toLowerCase(),x=0;h&&(x+=50);let w=p.keywords.filter(A=>y.includes(A.toLowerCase()));w.length>0&&(x+=50),r+=x;let z=e.querySelector("#cmd-feedback"),_=w.length>0?`<br><strong style="color:var(--green);">+50 \u89E3\u91CA\u547D\u4E2D\u5173\u952E\u8BCD: ${w.join(", ")}</strong>`:`<br><strong style="color:var(--red);">\u89E3\u91CA\u7F3A\u5C11\u5173\u952E\u8BCD\u3002\u53C2\u8003: ${p.keywords.join(", ")}</strong>`;z.innerHTML+=_,z.innerHTML+=`<br><span style="color:var(--gold);">\u672C\u9898\u5F97\u5206: ${x}/100</span>`;let I=e.querySelector("#submit-explain");I.disabled=!0,I.textContent=`\u4E0B\u4E00\u9898 Next (${x} pts)`,setTimeout(()=>{i++,n()},2500)})}l?m():n()}var Ke=[{title_zh:"\u4F7F\u7528 /review \u68C0\u67E5\u4EE3\u7801",title_en:"Use /review to check code",steps:[{instruction_zh:"/review \u8BA9 Claude Code \u50CF\u4EE3\u7801\u5BA1\u67E5\u5458\u4E00\u6837\u68C0\u67E5\u4F60\u7684\u6539\u52A8\u3002",instruction_en:"/review lets Claude Code review your changes like a code reviewer."},{instruction_zh:"\u5B83\u4F1A\u68C0\u67E5\u6F5C\u5728\u7684 bug\u3001\u4EE3\u7801\u98CE\u683C\u548C\u6700\u4F73\u5B9E\u8DF5\u3002",instruction_en:"It checks for potential bugs, code style, and best practices."},{instruction_zh:"\u9002\u5408\u5728\u63D0\u4EA4 PR \u4E4B\u524D\u4F7F\u7528\uFF0C\u786E\u4FDD\u4EE3\u7801\u8D28\u91CF\u3002",instruction_en:"Best used before submitting a PR to ensure code quality.",question:"When should you use /review?",options:["After deploying","Before submitting a PR","When installing packages","When creating a new file"],correctIndex:1},{instruction_zh:"/review \u4F1A\u5206\u6790 git diff \u4E2D\u7684\u6539\u52A8\u5185\u5BB9\u3002",instruction_en:"/review analyzes the changes in your git diff.",question:"What does /review analyze?",options:["Your entire codebase","Changes in git diff","Package.json only","README file"],correctIndex:1},{instruction_zh:"\u5BA1\u67E5\u7ED3\u679C\u4F1A\u6807\u6CE8\u4E25\u91CD\u7A0B\u5EA6\uFF1A\u8B66\u544A\u548C\u5EFA\u8BAE\u3002",instruction_en:"Review results show severity levels: warnings and suggestions.",question:"What does /review output include?",options:["Only errors","Warnings and suggestions","Only line counts","File sizes"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /init \u5F00\u59CB\u65B0\u9879\u76EE",title_en:"Use /init to start a new project",steps:[{instruction_zh:"/init \u5728\u5F53\u524D\u76EE\u5F55\u521B\u5EFA CLAUDE.md \u914D\u7F6E\u6587\u4EF6\u3002",instruction_en:"/init creates a CLAUDE.md configuration file in the current directory."},{instruction_zh:"CLAUDE.md \u5305\u542B\u9879\u76EE\u7684\u6280\u672F\u6808\u3001\u7F16\u7801\u89C4\u8303\u548C\u504F\u597D\u3002",instruction_en:"CLAUDE.md contains your tech stack, coding conventions, and preferences."},{instruction_zh:"Claude Code \u6BCF\u6B21\u542F\u52A8\u90FD\u4F1A\u81EA\u52A8\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u3002",instruction_en:"Claude Code reads this file automatically every time it starts.",question:"What file does /init create?",options:["README.md","package.json","CLAUDE.md",".gitignore"],correctIndex:2},{instruction_zh:"\u4F60\u53EF\u4EE5\u624B\u52A8\u7F16\u8F91 CLAUDE.md \u6765\u8C03\u6574 Claude \u7684\u884C\u4E3A\u3002",instruction_en:"You can manually edit CLAUDE.md to adjust Claude's behavior.",question:"Can you edit CLAUDE.md after /init creates it?",options:["No, it is read-only","Yes, you can edit it anytime","Only Claude can edit it","Only during init"],correctIndex:1},{instruction_zh:"\u6BCF\u4E2A\u9879\u76EE\u53EA\u9700\u8FD0\u884C\u4E00\u6B21 /init\u3002",instruction_en:"You only need to run /init once per project.",question:"How many times should you run /init per project?",options:["Every session","Once","Twice","Never"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /debug \u6392\u67E5\u9519\u8BEF",title_en:"Use /debug to troubleshoot errors",steps:[{instruction_zh:"/debug \u663E\u793A Claude Code \u7684\u5185\u90E8\u8C03\u8BD5\u4FE1\u606F\u3002",instruction_en:"/debug shows Claude Code's internal debug information."},{instruction_zh:"\u5305\u62EC API \u8BF7\u6C42\u8BE6\u60C5\u3001token \u4F7F\u7528\u91CF\u548C\u5EF6\u8FDF\u6570\u636E\u3002",instruction_en:"Includes API request details, token usage, and latency data."},{instruction_zh:"\u5F53 Claude Code \u884C\u4E3A\u5F02\u5E38\u65F6\uFF0C/debug \u5E2E\u4F60\u627E\u539F\u56E0\u3002",instruction_en:"When Claude Code behaves unexpectedly, /debug helps you find the cause.",question:"What does /debug show?",options:["Code syntax errors","API requests and token usage","File permissions","Git history"],correctIndex:1},{instruction_zh:"\u4F60\u53EF\u4EE5\u770B\u5230\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u4E86\u591A\u5C11 token\u3002",instruction_en:"You can see how many tokens each request consumed.",question:"/debug is useful when:",options:["Writing new code","Claude Code is running slowly","Creating a new project","Reading documentation"],correctIndex:1},{instruction_zh:"\u8C03\u8BD5\u5B8C\u540E\uFF0C\u6B63\u5E38\u4F7F\u7528\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u5173\u95ED\u8C03\u8BD5\u6A21\u5F0F\u3002",instruction_en:"After debugging, just continue using Claude Code normally.",question:"What information helps diagnose slow responses?",options:["File count","Latency data","Git branch name","OS version"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /compact \u7BA1\u7406\u4E0A\u4E0B\u6587",title_en:"Use /compact to manage context",steps:[{instruction_zh:"\u4E0A\u4E0B\u6587\u7A97\u53E3\u6709\u5927\u5C0F\u9650\u5236\uFF0C\u5BF9\u8BDD\u592A\u957F\u4F1A\u88AB\u622A\u65AD\u3002",instruction_en:"The context window has a size limit \u2014 long conversations get truncated."},{instruction_zh:"/compact \u628A\u5BF9\u8BDD\u538B\u7F29\u6210\u5173\u952E\u6458\u8981\uFF0C\u91CA\u653E\u7A7A\u95F4\u3002",instruction_en:"/compact compresses the conversation into key summaries, freeing space."},{instruction_zh:"\u548C /clear \u4E0D\u540C\uFF0C/compact \u4FDD\u7559\u91CD\u8981\u4FE1\u606F\u3002",instruction_en:"Unlike /clear, /compact preserves important information.",question:"What is the difference between /compact and /clear?",options:["No difference","/compact keeps key info, /clear erases all","/clear is faster","/compact deletes files"],correctIndex:1},{instruction_zh:"\u5F53 Claude Code \u63D0\u793A\u4E0A\u4E0B\u6587\u5FEB\u6EE1\u65F6\uFF0C\u7528 /compact\u3002",instruction_en:"Use /compact when Claude Code warns context is almost full.",question:"When should you use /compact?",options:["At the start of every session","When context is almost full","After every commit","Before running tests"],correctIndex:1},{instruction_zh:"\u538B\u7F29\u540E\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5F53\u524D\u4EFB\u52A1\uFF0C\u4E0D\u4F1A\u4E22\u5931\u8FDB\u5EA6\u3002",instruction_en:"After compacting, you can continue your current task without losing progress.",question:"After running /compact, what happens?",options:["Session ends","All files are deleted","You continue working with freed space","You must restart Claude Code"],correctIndex:2}]},{title_zh:"\u4F7F\u7528 /model \u5207\u6362\u6A21\u578B",title_en:"Use /model to switch models",steps:[{instruction_zh:"Claude Code \u652F\u6301\u591A\u4E2A\u6A21\u578B\uFF1AOpus\u3001Sonnet\u3001Haiku\u3002",instruction_en:"Claude Code supports multiple models: Opus, Sonnet, Haiku."},{instruction_zh:"Opus \u6700\u5F3A\uFF0CSonnet \u5747\u8861\uFF0CHaiku \u6700\u5FEB\u6700\u4FBF\u5B9C\u3002",instruction_en:"Opus is most capable, Sonnet is balanced, Haiku is fastest and cheapest."},{instruction_zh:"\u7B80\u5355\u4EFB\u52A1\u53EF\u4EE5\u7528 Haiku \u7701\u94B1\uFF0C\u590D\u6742\u4EFB\u52A1\u7528 Opus\u3002",instruction_en:"Use Haiku for simple tasks to save cost, Opus for complex ones.",question:"Which model is the cheapest?",options:["Opus","Sonnet","Haiku","They cost the same"],correctIndex:2},{instruction_zh:"\u7528 /model \u547D\u4EE4\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u6A21\u578B\u3002",instruction_en:"Use /model to switch models at any time.",question:"Can you switch models mid-session?",options:["No, only at start","Yes, with /model","Only admins can","Only with /restart"],correctIndex:1},{instruction_zh:"\u9009\u62E9\u6A21\u578B\u8981\u8003\u8651\uFF1A\u4EFB\u52A1\u96BE\u5EA6\u3001\u901F\u5EA6\u9700\u6C42\u3001\u9884\u7B97\u3002",instruction_en:"When choosing a model, consider: task difficulty, speed needs, budget.",question:"For a quick formatting task, which model is best?",options:["Opus","Haiku","Always use Sonnet","It does not matter"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /rewind \u64A4\u9500\u6539\u52A8",title_en:"Use /rewind to undo changes",steps:[{instruction_zh:"Claude Code \u4FEE\u6539\u4EE3\u7801\u540E\uFF0C\u6709\u65F6\u7ED3\u679C\u4E0D\u7406\u60F3\u3002",instruction_en:"Sometimes Claude Code's changes don't turn out as expected."},{instruction_zh:"/rewind \u6062\u590D\u5230 Claude Code \u6700\u8FD1\u4FEE\u6539\u4E4B\u524D\u7684\u72B6\u6001\u3002",instruction_en:"/rewind restores files to the state before Claude Code's last changes."},{instruction_zh:"\u6BD4\u624B\u52A8\u7528 git checkout \u66F4\u65B9\u4FBF\u5B89\u5168\u3002",instruction_en:"More convenient and safer than manually using git checkout.",question:"What does /rewind undo?",options:["Your manual edits","Claude Code's last changes","Git commits","Package installs"],correctIndex:1},{instruction_zh:"\u6062\u590D\u540E\u4F60\u53EF\u4EE5\u7ED9\u51FA\u65B0\u7684\u6307\u4EE4\u91CD\u65B0\u5C1D\u8BD5\u3002",instruction_en:"After rewinding, you can give new instructions and try again.",question:"After /rewind, what should you do?",options:["Close Claude Code","Give new instructions","Run /clear","Delete the project"],correctIndex:1},{instruction_zh:"\u517B\u6210\u4E60\u60EF\uFF1A\u4E0D\u786E\u5B9A\u6539\u52A8\u65F6\uFF0C\u5148\u8BB0\u4F4F\u53EF\u4EE5 /rewind\u3002",instruction_en:"Good habit: when unsure about changes, remember you can /rewind.",question:"/rewind is like which everyday action?",options:["Saving a file","Pressing Ctrl+Z to undo","Closing a window","Opening a new tab"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /usage \u8FFD\u8E2A\u5F00\u9500",title_en:"Use /usage to track spending",steps:[{instruction_zh:"Claude Code \u6309 token \u6536\u8D39\uFF0C\u4E86\u89E3\u7528\u91CF\u5F88\u91CD\u8981\u3002",instruction_en:"Claude Code charges by token \u2014 understanding usage is important."},{instruction_zh:"/usage \u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u7684 token \u7528\u91CF\u548C\u8D39\u7528\u3002",instruction_en:"/usage shows current session token usage and costs."},{instruction_zh:"\u8F93\u5165\u548C\u8F93\u51FA\u7684 token \u5206\u5F00\u8BA1\u8D39\u3002",instruction_en:"Input and output tokens are billed separately.",question:"What does /usage display?",options:["File sizes","Token usage and cost","CPU usage","Network speed"],correctIndex:1},{instruction_zh:"\u957F\u5BF9\u8BDD\u6D88\u8017\u66F4\u591A token\uFF0C\u6CE8\u610F\u7BA1\u7406\u4E0A\u4E0B\u6587\u3002",instruction_en:"Longer conversations consume more tokens \u2014 manage your context.",question:"What increases token usage?",options:["Short prompts","Long conversations","Small files","Using Haiku"],correctIndex:1},{instruction_zh:"\u5B9A\u671F\u68C0\u67E5\u7528\u91CF\uFF0C\u907F\u514D\u610F\u5916\u7684\u9AD8\u989D\u8D26\u5355\u3002",instruction_en:"Check usage regularly to avoid unexpected high bills.",question:"How can you reduce token costs?",options:["Use longer prompts","Never use /compact","Use /compact and choose smaller models for simple tasks","Always use Opus"],correctIndex:2}]},{title_zh:"\u4F7F\u7528 /copy \u4FDD\u5B58\u56DE\u590D",title_en:"Use /copy to save responses",steps:[{instruction_zh:"/copy \u628A Claude Code \u6700\u540E\u7684\u56DE\u590D\u590D\u5236\u5230\u526A\u8D34\u677F\u3002",instruction_en:"/copy copies Claude Code's last response to your clipboard."},{instruction_zh:"\u65B9\u4FBF\u628A\u4EE3\u7801\u6216\u89E3\u91CA\u7C98\u8D34\u5230\u6587\u6863\u3001\u804A\u5929\u5DE5\u5177\u7B49\u3002",instruction_en:"Convenient for pasting code or explanations into docs, chat tools, etc."},{instruction_zh:"\u6BD4\u624B\u52A8\u9009\u62E9\u6587\u5B57\u66F4\u5FEB\u66F4\u51C6\u786E\u3002",instruction_en:"Faster and more accurate than manually selecting text.",question:"What does /copy put in your clipboard?",options:["The entire conversation","The last response only","Your last prompt","The CLAUDE.md file"],correctIndex:1},{instruction_zh:"\u590D\u5236\u540E\u76F4\u63A5 Ctrl+V / Cmd+V \u7C98\u8D34\u5373\u53EF\u3002",instruction_en:"After copying, just Ctrl+V / Cmd+V to paste.",question:"When is /copy most useful?",options:["When starting a session","When sharing code with teammates","When deleting files","When switching models"],correctIndex:1},{instruction_zh:"\u642D\u914D /simplify \u4F7F\u7528\uFF1A\u5148\u7B80\u5316\uFF0C\u518D\u590D\u5236\u7ED9\u540C\u4E8B\u770B\u3002",instruction_en:"Combine with /simplify: simplify first, then copy for colleagues.",question:"What is a good workflow before sharing Claude's explanation?",options:["/clear then /copy","/simplify then /copy","/debug then /copy","/init then /copy"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /simplify \u7B80\u5316\u56DE\u590D",title_en:"Use /simplify to simplify responses",steps:[{instruction_zh:"Claude Code \u6709\u65F6\u4F1A\u7528\u592A\u591A\u6280\u672F\u672F\u8BED\u56DE\u590D\u3002",instruction_en:"Sometimes Claude Code responds with too much technical jargon."},{instruction_zh:"/simplify \u8BA9\u5B83\u7528\u66F4\u7B80\u5355\u7684\u8BED\u8A00\u91CD\u65B0\u89E3\u91CA\u3002",instruction_en:"/simplify asks it to re-explain using simpler language."},{instruction_zh:"\u975E\u5E38\u9002\u5408\u5B66\u4E60\u65B0\u6982\u5FF5\u65F6\u4F7F\u7528\u3002",instruction_en:"Great to use when learning new concepts.",question:"What does /simplify do?",options:["Deletes code","Re-explains in simpler language","Compresses context","Switches model"],correctIndex:1},{instruction_zh:"\u7B80\u5316\u4E0D\u4F1A\u6539\u53D8\u4EE3\u7801\uFF0C\u53EA\u6539\u53D8\u89E3\u91CA\u65B9\u5F0F\u3002",instruction_en:"Simplifying doesn't change the code, only the explanation.",question:"Does /simplify modify your code?",options:["Yes, it removes complex code","No, only the explanation changes","It deletes comments","It rewrites everything"],correctIndex:1},{instruction_zh:"\u5982\u679C\u8FD8\u662F\u4E0D\u61C2\uFF0C\u53EF\u4EE5\u591A\u6B21\u4F7F\u7528 /simplify\u3002",instruction_en:"If still unclear, you can use /simplify multiple times.",question:"Can you use /simplify more than once?",options:["No, only once per response","Yes, as many times as needed","Only twice","Only with Opus model"],correctIndex:1}]},{title_zh:"\u4F7F\u7528 /help \u63A2\u7D22\u547D\u4EE4",title_en:"Use /help to explore commands",steps:[{instruction_zh:"/help \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u659C\u6760\u547D\u4EE4\u5217\u8868\u3002",instruction_en:"/help shows all available slash commands."},{instruction_zh:"\u6BCF\u4E2A\u547D\u4EE4\u90FD\u6709\u7B80\u77ED\u7684\u8BF4\u660E\u548C\u7528\u6CD5\u3002",instruction_en:"Each command has a brief description and usage."},{instruction_zh:"\u65B0\u624B\u6216\u5FD8\u8BB0\u547D\u4EE4\u65F6\uFF0C\u5148\u8BD5 /help\u3002",instruction_en:"When new or forgetful, try /help first.",question:"What should a beginner type first?",options:["/init","/help","/debug","/model"],correctIndex:1},{instruction_zh:"\u4F60\u4E0D\u9700\u8981\u8BB0\u4F4F\u6240\u6709\u547D\u4EE4\uFF0C/help \u968F\u65F6\u53EF\u67E5\u3002",instruction_en:"You don't need to memorize all commands \u2014 /help is always there.",question:"/help is most like:",options:["A calculator","A dictionary or manual","A compiler","A debugger"],correctIndex:1},{instruction_zh:"\u638C\u63E1 /help \u662F\u4F7F\u7528 Claude Code \u7684\u7B2C\u4E00\u6B65\u3002",instruction_en:"Mastering /help is the first step to using Claude Code.",question:"How often can you use /help?",options:["Once per session","Anytime you need it","Only at the start","Only when there is an error"],correctIndex:1}]}];function Je(e,t,o){let d=f.getDailyMissionIndex()%Ke.length,a=Ke[d],s=0,i=0,r=0,l=0;a.steps.forEach(n=>{n.question&&l++});function m(){if(s>=a.steps.length){let c=l>0?r:0,g=l>0?l:1;L(e,{worldId:t,levelIndex:o,score:c,total:g,gameType:"daily-mission"});return}let n=a.steps[s],p=s+1,u=!!n.question;if(e.innerHTML=`
      ${k("\u6BCF\u65E5\u4EFB\u52A1 Daily Mission",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>\u6B65\u9AA4 ${p}/${a.steps.length}</span>
          <span>\u2713 ${r}/${l}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${p/a.steps.length*100}%"></div>
        </div>
        <div style="text-align:center;padding:var(--space-sm) 0;">
          <span style="font-size:var(--text-sm);color:var(--gold);font-weight:600;">${a.title_zh}</span>
          <span style="font-size:var(--text-xs);color:var(--text-secondary);margin-left:var(--space-xs);">${a.title_en}</span>
        </div>
        <div class="game-body">
          <div class="card" style="line-height:1.8;">
            <p style="font-size:var(--text-base);margin-bottom:var(--space-sm);">${n.instruction_zh}</p>
            <p style="font-size:var(--text-sm);color:var(--text-secondary);">${n.instruction_en}</p>
          </div>
          ${u?`
            <div style="margin-top:var(--space-md);">
              <div class="game-question" style="font-size:var(--text-base);">
                ${n.question}
              </div>
              <div class="option-list" id="quiz-options">
                ${(n.options||[]).map((c,g)=>`
                  <button class="option-btn" data-index="${g}">
                    <span class="option-label">${["A","B","C","D"][g]}</span>
                    <span>${c}</span>
                  </button>
                `).join("")}
              </div>
              <div id="step-feedback" style="display:none;margin-top:var(--space-sm);padding:var(--space-md);border-radius:var(--radius-md);font-size:var(--text-sm);line-height:1.6;"></div>
            </div>
          `:`
            <div class="game-footer">
              <button class="btn btn-primary btn-block" id="next-step">
                ${s<a.steps.length-1?"\u4E0B\u4E00\u6B65 Next Step":"\u5B8C\u6210 Complete"} \u2192
              </button>
            </div>
          `}
        </div>
      </div>
    `,u){let c=!1,g=e.querySelectorAll("#quiz-options .option-btn");g.forEach(h=>{h.addEventListener("click",()=>{if(c)return;c=!0,i++;let v=parseInt(h.dataset.index||"-1")===n.correctIndex;g.forEach(x=>x.classList.add("disabled")),v?(r++,h.classList.add("correct"),C("correct")):(h.classList.add("wrong"),g.forEach((x,w)=>{w===n.correctIndex&&x.classList.add("correct")}),C("wrong"));let y=e.querySelector("#step-feedback");y.style.display="block",y.style.background=v?"rgba(0, 212, 170, 0.1)":"rgba(255, 107, 107, 0.1)",y.style.border=v?"1px solid var(--green)":"1px solid var(--red)",y.innerHTML=v?"<strong>\u6B63\u786E\uFF01 Correct!</strong>":`<strong>\u9519\u8BEF\u3002\u6B63\u786E\u7B54\u6848: ${(n.options||[])[n.correctIndex||0]}</strong>`,setTimeout(()=>{s++,m()},1800)})})}else e.querySelector("#next-step")?.addEventListener("click",()=>{s++,m()})}e.innerHTML=`
    ${k("\u6BCF\u65E5\u4EFB\u52A1 Daily Mission",!0)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${q("dailyMission")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">${a.title_zh}</div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">${a.title_en}</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            ${a.steps.length} \u4E2A\u6B65\u9AA4 \xB7 ${l} \u9053\u6D4B\u9A8C\u9898
            <br>${a.steps.length} steps \xB7 ${l} quiz questions
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-mission">\u5F00\u59CB\u4EFB\u52A1 Start Mission</button>
      </div>
    </div>
  `,e.querySelector("#start-mission")?.addEventListener("click",()=>{m()})}function ce(){let e=[];for(let t of[1,2,3,4])F[t]&&e.push(...F[t]);return e}function ht(e,t){return btoa(JSON.stringify({q:e,s:t}))}function gt(e){try{let t=e.startsWith("#peer=")?e.slice(6):null;if(!t)return null;let o=JSON.parse(atob(t));return!Array.isArray(o.q)||typeof o.s!="number"||!isFinite(o.s)||o.q.length>20?null:{questionIds:o.q.filter(d=>typeof d=="string"),peerScore:Math.min(Math.max(0,Math.floor(o.s)),o.q.length)}}catch{return null}}function Xe(e,t,o){let a=gt(window.location.hash),s;if(a&&a.questionIds.length>0){let n=ce();s=a.questionIds.map(p=>n.find(u=>u.id===p)).filter(p=>!!p),s.length===0&&(s=$(ce()).slice(0,5))}else s=$(ce()).slice(0,5);let i=0,r=0;function l(){if(i>=s.length){m();return}let n=s[i],p=i+1,u=["A","B","C","D"];e.innerHTML=`
      ${k("\u540C\u4F34\u6311\u6218 Peer Challenge",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${p}/${s.length}</span>
          <span>\u2713 ${r}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${p/s.length*100}%"></div>
        </div>
        <div class="game-question">
          ${n.question_zh}
          <div class="game-question-sub">${n.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${n.options.map((g,h)=>`
              <button class="option-btn" data-index="${h}">
                <span class="option-label">${u[h]}</span>
                <span>${g}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback" style="display:none;padding:var(--space-md);border-radius:var(--radius-md);line-height:1.6;font-size:var(--text-sm);"></div>
        </div>
      </div>
    `;let c=g=>{C(g?"correct":"wrong");let h=e.querySelector("#feedback");h.style.display="block",h.innerHTML=g?M(!0,`<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${n.explanation_zh}`):M(!1,`<strong>\u6B63\u786E\u7B54\u6848: ${n.options[n.correctIndex]}</strong><br>${n.explanation_zh}`),setTimeout(()=>{i++,l()},2e3)};H(e,n.correctIndex,()=>{r++,c(!0)},()=>{c(!1)})}function m(){let n=s.map(b=>b.id),p=ht(n,r),c=`${window.location.origin+window.location.pathname}#peer=${p}`,g=Math.round(r/s.length*100),h="";if(a){let b=Math.round(a.peerScore/s.length*100),v=g-b,y="";v>0?y=`\u4F60\u8D62\u4E86\uFF01 You won by ${v}%!`:v<0?y=`\u670B\u53CB\u8D62\u4E86\uFF01 Your friend won by ${Math.abs(v)}%!`:y="\u5E73\u5C40\uFF01 It's a tie!",h=`
        <div class="card" style="margin-top:var(--space-md);text-align:center;">
          <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);">
            \u5BF9\u6BD4 Comparison
          </div>
          <div style="display:flex;justify-content:center;gap:var(--space-xl);margin-bottom:var(--space-sm);">
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--teal);">${g}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">\u4F60 You</div>
            </div>
            <div style="font-size:var(--text-2xl);color:var(--text-muted);align-self:center;">VS</div>
            <div>
              <div style="font-size:var(--text-2xl);font-weight:700;color:var(--gold);">${b}%</div>
              <div style="font-size:var(--text-sm);color:var(--text-secondary);">\u670B\u53CB Friend</div>
            </div>
          </div>
          <div style="font-size:var(--text-lg);font-weight:700;color:var(--gold);">${y}</div>
        </div>
      `}e.innerHTML=`
      ${k("\u540C\u4F34\u6311\u6218 Peer Challenge",!0)}
      <div class="game-screen">
        <div class="game-body" style="align-items:center;">
          ${q("correctAnswer")}
          <div style="text-align:center;margin-top:var(--space-md);">
            <div style="font-size:var(--text-3xl);font-weight:700;color:var(--teal);">${r}/${s.length}</div>
            <div style="font-size:var(--text-lg);color:var(--text-secondary);margin-top:var(--space-xs);">${g}% \u6B63\u786E\u7387</div>
          </div>
          ${h}
          <div class="card" style="width:100%;margin-top:var(--space-lg);">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-sm);text-align:center;">
              \u5206\u4EAB\u7ED9\u670B\u53CB\u6311\u6218 Share with a friend to challenge them
            </div>
            <div style="display:flex;gap:var(--space-sm);">
              <input type="text" class="search-input" id="share-link" value="${c}" readonly
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
    `,e.querySelector("#copy-link")?.addEventListener("click",()=>{let b=e.querySelector("#share-link"),v=e.querySelector("#copy-feedback");navigator.clipboard.writeText(b.value).then(()=>{f.addBadge("sharing-caring"),v.style.display="block",v.textContent="\u5DF2\u590D\u5236\uFF01 Copied!",C("correct"),setTimeout(()=>{v.style.display="none"},2e3)}).catch(()=>{b.select(),v.style.display="block",v.textContent="\u8BF7\u624B\u52A8\u590D\u5236 Please copy manually (Ctrl+C)",v.style.color="var(--gold)"})}),e.querySelector("#view-results")?.addEventListener("click",()=>{L(e,{worldId:t,levelIndex:o,score:r,total:s.length,gameType:"peer-challenge"})})}e.innerHTML=`
    ${k("\u540C\u4F34\u6311\u6218 Peer Challenge",!0)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${q(a?"peerChallenge":"correctAnswer")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--teal);">
            ${a?"\u670B\u53CB\u5411\u4F60\u53D1\u8D77\u4E86\u6311\u6218\uFF01":"\u540C\u4F34\u6311\u6218 Peer Challenge"}
          </div>
          <div style="font-size:var(--text-base);color:var(--text-secondary);margin-top:var(--space-xs);">
            ${a?"A friend challenged you!":"Generate a shareable quiz"}
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            5 \u9053\u9898 \xB7 \u7B54\u5B8C\u540E\u53EF\u5206\u4EAB\u7ED9\u670B\u53CB
            <br>5 questions \xB7 Share with friends after completing
          </p>
          ${a?`
            <div class="card" style="margin-top:var(--space-md);padding:var(--space-sm);">
              <span style="font-size:var(--text-sm);color:var(--gold);">
                \u670B\u53CB\u7684\u6210\u7EE9: ${a.peerScore}/${s.length} \xB7 Friend's score: ${a.peerScore}/${s.length}
              </span>
            </div>
          `:""}
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-challenge">
          ${a?"\u63A5\u53D7\u6311\u6218 Accept Challenge":"\u5F00\u59CB\u6311\u6218 Start Challenge"}
        </button>
      </div>
    </div>
  `,e.querySelector("#start-challenge")?.addEventListener("click",()=>{l()})}var pe=20;function vt(){let e=[];for(let t of[1,2,3,4])F[t]&&e.push(...F[t]);return $(e).slice(0,pe)}function me(e,t,o){e.innerHTML=`
    ${k("\u6BD5\u4E1A\u8BC1\u4E66 Certificate",!0)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${q("bossStart")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--gold);">
            \u{1F393} \u6BD5\u4E1A\u8003\u8BD5 Final Assessment
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);line-height:1.8;">
            ${pe} \u9053\u9898\uFF0C\u6DB5\u76D6\u6240\u67094\u4E2A\u4E16\u754C\u7684\u77E5\u8BC6<br>
            ${pe} questions covering all 4 worlds<br><br>
            \u901A\u8FC7\u540E\u5373\u53EF\u83B7\u5F97\u6BD5\u4E1A\u8BC1\u4E66\uFF01<br>
            Pass to receive your completion certificate!
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="start-assessment">\u5F00\u59CB\u8003\u8BD5 Start Assessment</button>
      </div>
    </div>
  `,e.querySelector("#start-assessment")?.addEventListener("click",()=>{ft(e,t,o)})}function ft(e,t,o){let d=vt(),a=0,s=0;function i(){if(a>=d.length){let p=Math.round(s/d.length*100);p>=40?(f.completeLevel(t,o,p),C("perfect"),bt(e,s,d.length)):(C("wrong"),yt(e,s,d.length,t,o));return}let r=d[a],l=a+1,m=["A","B","C","D"];e.innerHTML=`
      ${k("\u6BD5\u4E1A\u8003\u8BD5 Final Assessment",!0)}
      <div class="game-screen">
        <div class="game-score-bar">
          <span>${l}/${d.length}</span>
          <span>\u2713 ${s}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${l/d.length*100}%"></div>
        </div>
        <div class="game-question">
          ${r.question_zh}
          <div class="game-question-sub">${r.question_en}</div>
        </div>
        <div class="game-body">
          <div class="option-list" id="options">
            ${r.options.map((p,u)=>`
              <button class="option-btn" data-index="${u}">
                <span class="option-label">${m[u]}</span>
                <span>${p}</span>
              </button>
            `).join("")}
          </div>
          <div id="feedback" style="display:none;"></div>
        </div>
      </div>
    `;let n=p=>{let u=e.querySelector("#feedback");u.style.display="block",u.innerHTML=p?M(!0,`<strong>\u6B63\u786E\uFF01 Correct!</strong><br>${r.explanation_zh}`):M(!1,`<strong>\u6B63\u786E\u7B54\u6848: ${r.options[r.correctIndex]}</strong><br>${r.explanation_zh}`),setTimeout(()=>{a++,i()},2e3)};H(e,r.correctIndex,()=>{s++,n(!0)},()=>{n(!1)})}i()}function yt(e,t,o,d,a){let s=Math.round(t/o*100);e.innerHTML=`
    ${k("\u6BD5\u4E1A\u8003\u8BD5 Final Assessment",!0)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;justify-content:center;flex:1;">
        ${q("retry")}
        <div style="text-align:center;margin-top:var(--space-lg);">
          <div style="font-size:var(--text-3xl);font-weight:700;color:var(--red);">${s}%</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-xs);">${t}/${o} \u6B63\u786E</p>
          <p style="color:var(--text-secondary);margin-top:var(--space-md);font-size:var(--text-sm);">
            \u9700\u898140%\u4EE5\u4E0A\u624D\u80FD\u901A\u8FC7<br>Need 40% or above to pass
          </p>
        </div>
      </div>
      <div class="game-footer">
        <button class="btn btn-primary btn-block" id="retry">${X("sm")} \u518D\u8BD5\u4E00\u6B21 Retry</button>
        <button class="btn btn-secondary btn-block" id="go-home">${Y("sm")} \u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    </div>
  `,e.querySelector("#retry")?.addEventListener("click",()=>{me(e,d,a)}),e.querySelector("#go-home")?.addEventListener("click",()=>T.navigate("/"))}function bt(e,t,o){let d=Math.round(t/o*100),a=f.getStreak(),s=f.getTotalLevelsCompleted(),i=N.filter(c=>f.hasBadge(c.id)),r=B.map(c=>`${c.icon} ${c.zh}`).join(" \xB7 "),l=f.getStudentName(),m=new Date().toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}),n=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});ne(),e.innerHTML=`
    ${k("\u6BD5\u4E1A\u8BC1\u4E66 Certificate",!0)}
    <div class="game-screen">
      <div class="game-body" style="align-items:center;">
        ${q("certificate")}

        <div style="text-align:center;margin-top:var(--space-md);">
          <div style="font-size:var(--text-3xl);font-weight:700;color:var(--gold);">\u{1F389} \u606D\u559C\u6BD5\u4E1A\uFF01</div>
          <p style="color:var(--text-secondary);margin-top:var(--space-xs);">Congratulations!</p>
        </div>

        <!-- Name input -->
        <div class="card" style="width:100%;margin-top:var(--space-md);">
          <label for="student-name" style="font-size:var(--text-sm);color:var(--text-secondary);display:block;margin-bottom:var(--space-xs);">
            \u8F93\u5165\u4F60\u7684\u540D\u5B57 Enter your name (for the certificate)
          </label>
          <input type="text" class="search-input" id="student-name" placeholder="\u4F60\u7684\u540D\u5B57 / Your Name"
            value="${de(l)}" maxlength="50" style="width:100%;" />
        </div>

        <!-- Certificate preview -->
        <div class="certificate-preview" id="cert-preview">
          <div style="font-size:12px;color:rgba(255,200,87,0.8);margin-bottom:8px;">${we("sm")} CodePlay \u7801\u73A9</div>
          <div style="font-size:20px;font-weight:700;color:#ffffff;" id="cert-name-display">${de(l)||"\u4F60\u7684\u540D\u5B57"}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:4px;">
            \u5DF2\u5B8C\u6210 CodePlay \u7801\u73A9 \u5168\u90E8\u8BFE\u7A0B
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:8px;">
            ${r}
          </div>
          <div style="font-size:11px;color:var(--teal);margin-top:4px;">
            \u8003\u8BD5\u6210\u7EE9 ${d}% \xB7 ${s} \u5173\u5361 \xB7 ${i.length} \u679A\u5FBD\u7AE0
          </div>
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:8px;">${m}</div>
          <div style="font-size:10px;color:var(--gold);margin-top:2px;">\u5B66\u4F1A\u7528AI\uFF0C\u8D62\u5F97\u672A\u6765</div>
        </div>

        <!-- Download buttons -->
        <div style="display:flex;gap:var(--space-sm);width:100%;margin-top:var(--space-md);">
          <button class="btn btn-primary" id="dl-wechat" style="flex:1;">
            ${$e("sm")} \u5FAE\u4FE1\u5361\u7247<br><span style="font-size:var(--text-xs);">1080\xD71080</span>
          </button>
          <button class="btn btn-secondary" id="dl-linkedin" style="flex:1;">
            ${Se("sm")} LinkedIn<br><span style="font-size:var(--text-xs);">1200\xD7628</span>
          </button>
        </div>

        <button class="btn btn-secondary btn-block" id="go-home" style="margin-top:var(--space-sm);">${Y("sm")} \u8FD4\u56DE\u9996\u9875 Home</button>
      </div>
    </div>
  `;let p=e.querySelector("#student-name"),u=e.querySelector("#cert-name-display");p.addEventListener("input",()=>{let c=p.value.trim()||"\u4F60\u7684\u540D\u5B57";u.textContent=c,f.setStudentName(p.value)}),e.querySelector("#dl-wechat")?.addEventListener("click",()=>{let c=p.value.trim()||"CodePlay Student";f.setStudentName(c),et(c,d,s,i.length,m,n,1080,1080,"wechat")}),e.querySelector("#dl-linkedin")?.addEventListener("click",()=>{let c=p.value.trim()||"CodePlay Student";f.setStudentName(c),et(c,d,s,i.length,m,n,1200,628,"linkedin")}),e.querySelector("#go-home")?.addEventListener("click",()=>T.navigate("/"))}function et(e,t,o,d,a,s,i,r,l){let m=document.createElement("canvas");m.width=i,m.height=r;let n=m.getContext("2d"),p=n.createLinearGradient(0,0,i,r);p.addColorStop(0,"#0a1628"),p.addColorStop(1,"#1a2a4a"),n.fillStyle=p,n.fillRect(0,0,i,r),n.strokeStyle="#ffc857",n.lineWidth=4;let u=24;n.strokeRect(u,u,i-u*2,r-u*2),n.strokeStyle="rgba(255, 200, 87, 0.3)",n.lineWidth=1,n.strokeRect(u+12,u+12,i-(u+12)*2,r-(u+12)*2);let c=i/2;if(l==="wechat"){n.fillStyle="#ffc857",n.font="bold 36px system-ui, sans-serif",n.textAlign="center",n.fillText("\u{1F393} CodePlay \u7801\u73A9",c,120),n.fillStyle="rgba(255, 255, 255, 0.6)",n.font="20px system-ui, sans-serif",n.fillText("COMPLETION CERTIFICATE",c,160),n.strokeStyle="#ffc857",n.lineWidth=2,n.beginPath(),n.moveTo(c-160,190),n.lineTo(c+160,190),n.stroke(),n.fillStyle="#ffffff",n.font="bold 52px system-ui, sans-serif",n.fillText(e,c,280),n.fillStyle="rgba(255, 255, 255, 0.8)",n.font="22px system-ui, sans-serif",n.fillText("\u5DF2\u5B8C\u6210 CodePlay \u7801\u73A9 \u5168\u90E8\u8BFE\u7A0B",c,340),n.font="18px system-ui, sans-serif",n.fillText("Has completed the CodePlay Claude Code Fluency Program",c,375);let g=["\u{1F6AA} \u7EC8\u7AEF\u4E4B\u95E8","\u2694\uFE0F \u547D\u4EE4\u738B\u56FD","\u{1F3F0} \u63D0\u793A\u5BAB\u6BBF","\u{1F916} \u667A\u80FD\u4F53\u64C2\u53F0"];n.fillStyle="rgba(255, 255, 255, 0.5)",n.font="18px system-ui, sans-serif";let h=g.join("  \xB7  ");n.fillText(h,c,440);let b=[{label:"\u8003\u8BD5\u6210\u7EE9",value:`${t}%`},{label:"\u5B8C\u6210\u5173\u5361",value:`${o}`},{label:"\u83B7\u5F97\u5FBD\u7AE0",value:`${d}`}],v=200,y=30,x=c-(v*3+y*2)/2;b.forEach((w,z)=>{let _=x+z*(v+y),I=490;n.fillStyle="rgba(255, 200, 87, 0.1)",n.beginPath(),n.roundRect(_,I,v,100,12),n.fill(),n.strokeStyle="rgba(255, 200, 87, 0.3)",n.lineWidth=1,n.beginPath(),n.roundRect(_,I,v,100,12),n.stroke(),n.fillStyle="#00d4aa",n.font="bold 36px system-ui, sans-serif",n.fillText(w.value,_+v/2,I+50),n.fillStyle="rgba(255, 255, 255, 0.6)",n.font="16px system-ui, sans-serif",n.fillText(w.label,_+v/2,I+80)}),n.fillStyle="rgba(255, 255, 255, 0.5)",n.font="18px system-ui, sans-serif",n.fillText(a,c,680),n.strokeStyle="#ffc857",n.lineWidth=2,n.beginPath(),n.moveTo(c-160,720),n.lineTo(c+160,720),n.stroke(),n.fillStyle="#ffc857",n.font="bold 28px system-ui, sans-serif",n.fillText("\u5B66\u4F1A\u7528AI\uFF0C\u8D62\u5F97\u672A\u6765",c,780),n.fillStyle="rgba(255, 255, 255, 0.3)",n.font="14px system-ui, sans-serif",n.fillText("codequest-b1p.pages.dev",c,820),n.font="60px system-ui, sans-serif",n.fillText("\u{1F916}",c,920),n.fillStyle="rgba(255, 255, 255, 0.4)",n.font="14px system-ui, sans-serif",n.fillText("\u7801\u5C0F\u7801\u8BF4\uFF1A\u6BD5\u4E1A\u5FEB\u4E50\uFF01\u53BB\u5F81\u670D\u4E16\u754C\u5427\uFF01",c,970)}else{n.fillStyle="#ffc857",n.font="bold 28px system-ui, sans-serif",n.textAlign="center",n.fillText("\u{1F393} CodePlay \u7801\u73A9 \u2014 COMPLETION CERTIFICATE",c,70),n.strokeStyle="#ffc857",n.lineWidth=2,n.beginPath(),n.moveTo(c-200,95),n.lineTo(c+200,95),n.stroke(),n.fillStyle="#ffffff",n.font="bold 44px system-ui, sans-serif",n.fillText(e,c,170),n.fillStyle="rgba(255, 255, 255, 0.8)",n.font="18px system-ui, sans-serif",n.fillText("Completed CodePlay \u7801\u73A9 \u2014 Claude Code Fluency Program",c,215),n.fillStyle="rgba(255, 255, 255, 0.5)",n.font="16px system-ui, sans-serif",n.fillText("\u{1F6AA} Terminal Gate  \xB7  \u2694\uFE0F Command Kingdom  \xB7  \u{1F3F0} Prompt Palace  \xB7  \u{1F916} Agent Arena",c,260);let g=[{label:"Score",value:`${t}%`},{label:"Levels",value:`${o}`},{label:"Badges",value:`${d}`}],h=180,b=80,v=30,y=c-(h*3+v*2)/2,x=290;g.forEach((w,z)=>{let _=y+z*(h+v);n.fillStyle="rgba(255, 200, 87, 0.1)",n.beginPath(),n.roundRect(_,x,h,b,10),n.fill(),n.strokeStyle="rgba(255, 200, 87, 0.3)",n.lineWidth=1,n.beginPath(),n.roundRect(_,x,h,b,10),n.stroke(),n.fillStyle="#00d4aa",n.font="bold 30px system-ui, sans-serif",n.fillText(w.value,_+h/2,x+38),n.fillStyle="rgba(255, 255, 255, 0.6)",n.font="14px system-ui, sans-serif",n.fillText(w.label,_+h/2,x+62)}),n.fillStyle="rgba(255, 255, 255, 0.5)",n.font="16px system-ui, sans-serif",n.fillText(s,c,430),n.strokeStyle="#ffc857",n.lineWidth=1,n.beginPath(),n.moveTo(c-160,455),n.lineTo(c+160,455),n.stroke(),n.fillStyle="#ffc857",n.font="bold 22px system-ui, sans-serif",n.fillText("\u5B66\u4F1A\u7528AI\uFF0C\u8D62\u5F97\u672A\u6765",c,495),n.fillStyle="rgba(255, 255, 255, 0.4)",n.font="14px system-ui, sans-serif",n.fillText("Learn to use AI, win the future",c,520),n.fillStyle="rgba(255, 255, 255, 0.3)",n.font="13px system-ui, sans-serif",n.fillText("\u{1F916} codequest-b1p.pages.dev",c,580)}m.toBlob(g=>{if(!g)return;let h=URL.createObjectURL(g),b=document.createElement("a");b.href=h,b.download=`codeplay-certificate-${l}.png`,b.click(),URL.revokeObjectURL(h),C("badgeUnlock")},"image/png")}var U=document.getElementById("app"),xt={"flash-match":We,trivia:Ne,charades:je,"drag-drop":Qe,"memory-match":Fe,"prompt-builder":Ge,"prompt-repair":Ye,"prompt-duel":Ve,"boss-battle":Ze,"daily-mission":Je,"peer-challenge":Xe,certificate:me};T.addRoute("/",()=>{if(!f.isPlacementDone()){T.navigate("/placement");return}f.updateStreak(),qe(U)});T.addRoute("/placement",()=>{Ee(U)});T.addRoute("/world/:id",e=>{let t=parseInt(e.id);t>=1&&t<=4?Ae(U,t):T.navigate("/")});T.addRoute("/game/:type/:worldId/:levelId",e=>{let t=e.type,o=parseInt(e.worldId),d=parseInt(e.levelId),a=xt[t];if(a){if(!f.isLevelUnlocked(o,d)){T.navigate(`/world/${o}`);return}a(U,o,d)}else T.navigate("/")});T.addRoute("/glossary",()=>{Me(U)});T.addRoute("/review",()=>{Pe(U)});T.addRoute("/profile",()=>{Oe(U)});T.start();
