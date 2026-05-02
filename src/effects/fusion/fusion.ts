export function initializeFusionEffect(fusionButton: HTMLButtonElement): void {
  const DURATION = 800;
  const SPIRAL_RATIO = 0.625;
  const START_RADIUS = 110;

  const circles = [
    { position: 'left',   startAngle: Math.PI },
    { position: 'right',  startAngle: 0 },
    { position: 'top',    startAngle: -Math.PI / 2 },
    { position: 'bottom', startAngle: Math.PI / 2 },
  ].map(({ position, startAngle }) => {
    const el = document.createElement('span');
    el.className = `${position}-circle`;
    fusionButton.appendChild(el);
    return { el, startAngle, cosStart: 0, sinStart: 0 };
  });

  let animId: number | null = null;
  let startTime: number | null = null;
  let direction = 1;

  function ease(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const t = Math.min((timestamp - startTime) / DURATION, 1);

    const opacity = 1 - t;
    const spiralEased = t <= SPIRAL_RATIO ? ease(t / SPIRAL_RATIO) : 1;
    const radius = t <= SPIRAL_RATIO ? START_RADIUS * (1 - spiralEased) : 0;

    for (const { el, startAngle, cosStart, sinStart } of circles) {
      const angle = startAngle + direction * Math.PI * spiralEased;
      const dx = radius * Math.cos(angle) - cosStart;
      const dy = radius * Math.sin(angle) - sinStart;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.opacity = String(opacity);
    }

    if (t < 1) {
      animId = requestAnimationFrame(animate);
    } else {
      reset();
    }
  }

  function reset() {
    if (animId !== null) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    startTime = null;
    for (const { el } of circles) {
      el.style.transform = "";
      el.style.opacity = "0";
    }
  }

  fusionButton.addEventListener("mouseenter", (e: MouseEvent) => {
    const rect = fusionButton.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    fusionButton.style.setProperty('--fusion-circle-size', `${rect.height}px`);

    for (const circle of circles) {
      const cr = circle.el.getBoundingClientRect();
      circle.cosStart = (cr.left - rect.left + cr.width / 2) - cx;
      circle.sinStart = (cr.top - rect.top + cr.height / 2) - cy;
    }

    direction = e.clientX - rect.left < cx ? -1 : 1;
    reset();
    animId = requestAnimationFrame(animate);
  });
}
