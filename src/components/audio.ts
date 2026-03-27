let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (!audioCtx) {
    try {
      audioCtx = new AudioContext();
    } catch {
      return null;
    }
  }
  // Resume if suspended (user gesture required)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(
  ctx: AudioContext,
  frequency: number,
  startTime: number,
  duration: number,
  type: OscillatorType = 'sine',
  volume: number = 0.15
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function playSound(
  type: 'correct' | 'wrong' | 'levelUp' | 'perfect' | 'cardFlip' | 'keystroke' | 'badgeUnlock'
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  switch (type) {
    case 'correct':
      // Ascending two-tone beep
      playTone(ctx, 523, now, 0.15, 'sine', 0.15);
      playTone(ctx, 659, now + 0.12, 0.2, 'sine', 0.15);
      break;

    case 'wrong':
      // Descending buzz
      playTone(ctx, 350, now, 0.15, 'square', 0.08);
      playTone(ctx, 250, now + 0.12, 0.25, 'square', 0.08);
      break;

    case 'levelUp':
      // Three ascending notes
      playTone(ctx, 523, now, 0.15, 'sine', 0.12);
      playTone(ctx, 659, now + 0.15, 0.15, 'sine', 0.12);
      playTone(ctx, 784, now + 0.3, 0.3, 'sine', 0.15);
      break;

    case 'perfect':
      // Celebration fanfare — 4 ascending notes
      playTone(ctx, 523, now, 0.12, 'sine', 0.12);
      playTone(ctx, 659, now + 0.12, 0.12, 'sine', 0.12);
      playTone(ctx, 784, now + 0.24, 0.12, 'sine', 0.14);
      playTone(ctx, 1047, now + 0.36, 0.4, 'sine', 0.16);
      break;

    case 'cardFlip':
      // Quick click
      playTone(ctx, 1200, now, 0.04, 'sine', 0.08);
      break;

    case 'keystroke':
      // Soft tick
      playTone(ctx, 800, now, 0.03, 'sine', 0.05);
      break;

    case 'badgeUnlock':
      // Chime
      playTone(ctx, 784, now, 0.2, 'sine', 0.12);
      playTone(ctx, 1047, now + 0.15, 0.3, 'sine', 0.14);
      playTone(ctx, 1319, now + 0.3, 0.4, 'sine', 0.12);
      break;
  }
}
