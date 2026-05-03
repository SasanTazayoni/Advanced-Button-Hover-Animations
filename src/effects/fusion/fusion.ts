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
    const span = document.createElement('span');
    span.className = `${position}-circle`;
    fusionButton.appendChild(span);
    return { span, startAngle, startX: 0, startY: 0 };
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

    for (const { span, startAngle, startX, startY } of circles) {
      const angle = startAngle + direction * Math.PI * spiralEased;
      const dx = radius * Math.cos(angle) - startX;
      const dy = radius * Math.sin(angle) - startY;
      span.style.transform = `translate(${dx}px, ${dy}px)`;
      span.style.opacity = String(opacity);
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
    for (const { span } of circles) {
      span.style.transform = "";
      span.style.opacity = "0";
    }
  }

  fusionButton.addEventListener("mouseenter", (e: MouseEvent) => {
    const rect = fusionButton.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    fusionButton.style.setProperty('--fusion-circle-size', `${rect.height}px`);

    for (const circle of circles) {
      const cr = circle.span.getBoundingClientRect();
      circle.startX = (cr.left - rect.left + cr.width / 2) - cx;
      circle.startY = (cr.top - rect.top + cr.height / 2) - cy;
    }

    direction = e.clientX - rect.left < cx ? -1 : 1;
    reset();
    animId = requestAnimationFrame(animate);
  });
}
