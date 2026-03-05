export function initializeFusionEffect(fusionButton: HTMLButtonElement): void {
  const DURATION = 800;
  const SPIRAL_RATIO = 0.625;
  const NATURAL_RADIUS = 70;
  const START_RADIUS = 110;

  const circles = [
    { el: fusionButton.querySelector<HTMLElement>(".left-circle")!,   startAngle: Math.PI },
    { el: fusionButton.querySelector<HTMLElement>(".right-circle")!,  startAngle: 0 },
    { el: fusionButton.querySelector<HTMLElement>(".top-circle")!,    startAngle: -Math.PI / 2 },
    { el: fusionButton.querySelector<HTMLElement>(".bottom-circle")!, startAngle: Math.PI / 2 },
  ].map(({ el, startAngle }) => ({
    el,
    startAngle,
    cosStart: NATURAL_RADIUS * Math.cos(startAngle),
    sinStart: NATURAL_RADIUS * Math.sin(startAngle),
  }));

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
    direction = e.clientX - rect.left < rect.width / 2 ? -1 : 1;
    reset();
    animId = requestAnimationFrame(animate);
  });
}
