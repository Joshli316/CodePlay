export function showHongbao(): void {
  const overlay = document.createElement('div');
  overlay.className = 'hongbao-overlay';
  overlay.innerHTML = `
    <div class="hongbao-envelope">
      <div class="hongbao-top">
        <div class="hongbao-seal">🧧</div>
      </div>
      <div class="hongbao-body">
        <div class="hongbao-text">恭喜！</div>
        <div class="hongbao-subtext">Congratulations!</div>
      </div>
    </div>
    <div class="hongbao-particles"></div>
  `;

  // Inject styles if not already present
  if (!document.getElementById('hongbao-styles')) {
    const style = document.createElement('style');
    style.id = 'hongbao-styles';
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

  // Create particles
  const particleContainer = overlay.querySelector('.hongbao-particles')!;
  const colors = ['#ffc107', '#ff5252', '#ff9800', '#ffeb3b', '#e53935'];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'hongbao-particle';
    particle.style.background = colors[i % colors.length];
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.setProperty('--px', `${(Math.random() - 0.5) * 300}px`);
    particle.style.setProperty('--py', `${(Math.random() - 0.5) * 300}px`);
    particle.style.animationDelay = `${0.3 + Math.random() * 0.5}s`;
    particleContainer.appendChild(particle);
  }

  document.body.appendChild(overlay);

  // Dismiss on click or after 3 seconds
  const dismiss = () => {
    clearTimeout(autoDismissTimer);
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s';
    setTimeout(() => overlay.remove(), 300);
  };

  overlay.addEventListener('click', dismiss);
  const autoDismissTimer = setTimeout(dismiss, 3000);
}
