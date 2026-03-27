// SVG icon system — replaces emoji icons for cross-platform consistency
// Icons based on Lucide icon set (24x24 viewBox, stroke-based)

type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const SIZES: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
};

function svg(paths: string, size: IconSize = 'md', color = 'currentColor', fill = 'none'): string {
  const s = SIZES[size];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;display:inline-block;vertical-align:middle;">${paths}</svg>`;
}

// Navigation
export const iconBack = (size: IconSize = 'md') =>
  svg('<path d="m15 18-6-6 6-6"/>', size);

export const iconHome = (size: IconSize = 'md') =>
  svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', size);

// User & Profile
export const iconUser = (size: IconSize = 'md') =>
  svg('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', size);

export const iconUsers = (size: IconSize = 'md') =>
  svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', size);

// Learning & Content
export const iconBook = (size: IconSize = 'md') =>
  svg('<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>', size);

export const iconGraduationCap = (size: IconSize = 'md') =>
  svg('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>', size);

export const iconBrain = (size: IconSize = 'md') =>
  svg('<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/><path d="M6.5 9h11"/>', size);

// Game & Progress
export const iconStar = (filled = false, size: IconSize = 'md', color = 'currentColor') =>
  filled
    ? svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', size, color, color)
    : svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', size, color);

export const iconTrophy = (size: IconSize = 'md', color = 'currentColor') =>
  svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>', size, color);

export const iconAward = (size: IconSize = 'md', color = 'currentColor') =>
  svg('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>', size, color);

export const iconFlame = (size: IconSize = 'md', color = 'currentColor') =>
  svg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>', size, color);

export const iconTarget = (size: IconSize = 'md') =>
  svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', size);

export const iconZap = (size: IconSize = 'md', color = 'currentColor') =>
  svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', size, color);

// Status & Feedback
export const iconCheck = (size: IconSize = 'md', color = 'var(--green)') =>
  svg('<path d="M20 6 9 17l-5-5"/>', size, color);

export const iconX = (size: IconSize = 'md', color = 'var(--red)') =>
  svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>', size, color);

export const iconLock = (size: IconSize = 'md') =>
  svg('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', size);

export const iconUnlock = (size: IconSize = 'md') =>
  svg('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>', size);

// Actions
export const iconRefresh = (size: IconSize = 'md') =>
  svg('<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>', size);

export const iconDownload = (size: IconSize = 'md') =>
  svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>', size);

export const iconSearch = (size: IconSize = 'md') =>
  svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>', size);

export const iconShare = (size: IconSize = 'md') =>
  svg('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>', size);

// UI Elements
export const iconChevronRight = (size: IconSize = 'md') =>
  svg('<path d="m9 18 6-6-6-6"/>', size);

export const iconArrowRight = (size: IconSize = 'md') =>
  svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', size);

export const iconClock = (size: IconSize = 'md') =>
  svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', size);

export const iconBarChart = (size: IconSize = 'md') =>
  svg('<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>', size);

export const iconGrid = (size: IconSize = 'md') =>
  svg('<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>', size);

export const iconMessageCircle = (size: IconSize = 'md') =>
  svg('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>', size);

export const iconTerminal = (size: IconSize = 'md') =>
  svg('<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>', size);

export const iconSwords = (size: IconSize = 'md') =>
  svg('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/>', size);

export const iconCastle = (size: IconSize = 'md') =>
  svg('<path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/><path d="M18 11V4H6v7"/><path d="M15 22v-4a3 3 0 0 0-6 0v4"/><path d="M3 11h18"/><path d="M4 1v4"/><path d="M8 1v4"/><path d="M16 1v4"/><path d="M20 1v4"/>', size);

export const iconBot = (size: IconSize = 'md') =>
  svg('<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>', size);

export const iconDoorOpen = (size: IconSize = 'md') =>
  svg('<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>', size);

// World icons as SVG alternatives
export const iconWorld = (worldId: number, size: IconSize = 'lg'): string => {
  switch (worldId) {
    case 1: return iconDoorOpen(size);
    case 2: return iconSwords(size);
    case 3: return iconCastle(size);
    case 4: return iconBot(size);
    default: return iconTarget(size);
  }
};

// Smartphone icon for WeChat
export const iconSmartphone = (size: IconSize = 'md') =>
  svg('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>', size);

// Briefcase for LinkedIn
export const iconBriefcase = (size: IconSize = 'md') =>
  svg('<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>', size);

// Play icon
export const iconPlay = (size: IconSize = 'md') =>
  svg('<polygon points="5 3 19 12 5 21 5 3"/>', size);
