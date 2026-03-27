export interface Badge {
  id: string;
  idiom: string;
  pinyin: string;
  enName: string;
  meaning: string;
  unlockCondition: string;
  icon: string;
}

export const badges: Badge[] = [
  {
    id: "first-step",
    idiom: "千里之行始于足下",
    pinyin: "qiān lǐ zhī xíng shǐ yú zú xià",
    enName: "First Step",
    meaning: "A journey of a thousand miles begins with a single step",
    unlockCondition: "Complete first level",
    icon: "🚀",
  },
  {
    id: "quick-learner",
    idiom: "一点即通",
    pinyin: "yī diǎn jí tōng",
    enName: "Quick Learner",
    meaning: "Understanding at the first hint",
    unlockCondition: "Perfect score first try",
    icon: "⚡",
  },
  {
    id: "persistent",
    idiom: "铁杵磨成针",
    pinyin: "tiě chǔ mó chéng zhēn",
    enName: "Persistent",
    meaning: "An iron rod can be ground into a needle with persistence",
    unlockCondition: "Retry and pass failed level",
    icon: "🔨",
  },
  {
    id: "practice-master",
    idiom: "熟能生巧",
    pinyin: "shú néng shēng qiǎo",
    enName: "Practice Master",
    meaning: "Practice makes perfect",
    unlockCondition: "7-day streak",
    icon: "🔥",
  },
  {
    id: "word-collector",
    idiom: "博学多才",
    pinyin: "bó xué duō cái",
    enName: "Word Collector",
    meaning: "Learned and talented",
    unlockCondition: "Learn all vocab",
    icon: "📚",
  },
  {
    id: "command-king",
    idiom: "运筹帷幄",
    pinyin: "yùn chóu wéi wò",
    enName: "Command King",
    meaning: "Strategize from within the command tent",
    unlockCondition: "Complete World 2",
    icon: "👑",
  },
  {
    id: "prompt-sage",
    idiom: "妙笔生花",
    pinyin: "miào bǐ shēng huā",
    enName: "Prompt Sage",
    meaning: "A masterful pen produces flowers",
    unlockCondition: "Score 5/5 on Prompt Builder",
    icon: "✨",
  },
  {
    id: "interview-ready",
    idiom: "胸有成竹",
    pinyin: "xiōng yǒu chéng zhú",
    enName: "Interview Ready",
    meaning: "Having a well-thought-out plan in mind",
    unlockCondition: "Complete Boss Battle",
    icon: "🎯",
  },
  {
    id: "unstoppable",
    idiom: "势如破竹",
    pinyin: "shì rú pò zhú",
    enName: "Unstoppable",
    meaning: "Like splitting bamboo — unstoppable momentum",
    unlockCondition: "21-day streak",
    icon: "💎",
  },
  {
    id: "completionist",
    idiom: "功德圆满",
    pinyin: "gōng dé yuán mǎn",
    enName: "Completionist",
    meaning: "All merits fulfilled, mission complete",
    unlockCondition: "Finish all 4 worlds",
    icon: "🏆",
  },
  {
    id: "speed-demon",
    idiom: "一目十行",
    pinyin: "yī mù shí háng",
    enName: "Speed Demon",
    meaning: "Reading ten lines at a glance",
    unlockCondition: "Timed quiz >50% time remaining",
    icon: "⏱️",
  },
  {
    id: "sharing-caring",
    idiom: "教学相长",
    pinyin: "jiào xué xiāng zhǎng",
    enName: "Sharing is Caring",
    meaning: "Teaching and learning promote each other",
    unlockCondition: "Send Peer Challenge",
    icon: "🤝",
  },
];
