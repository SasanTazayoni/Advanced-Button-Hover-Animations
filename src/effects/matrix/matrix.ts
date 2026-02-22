export function initializeMatrixEffect(button: HTMLElement) {
  const matrixChars = [
    "ｱ", "ｲ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ",
    "ｻ", "ｼ", "ｽ", "ｾ", "ｿ", "ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ",
    "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ",
    "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾖ", "ﾗ", "ﾘ",
    "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ﾝ",
  ];

  const TRAIL_LENGTH = 6;
  const MAX_TRAILS = 16;

  const pool: HTMLSpanElement[] = [];
  const freeList: HTMLSpanElement[] = [];
  const activeSpans = new Set<HTMLSpanElement>();

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < TRAIL_LENGTH * MAX_TRAILS; i++) {
    const span = document.createElement("span");
    span.classList.add("matrix-char");
    fragment.appendChild(span);
    pool.push(span);
    freeList.push(span);
  }
  button.appendChild(fragment);

  function acquire(): HTMLSpanElement | null {
    const span = freeList.pop() ?? null;
    if (span) activeSpans.add(span);
    return span;
  }

  function release(span: HTMLSpanElement): void {
    if (!activeSpans.has(span)) return;
    activeSpans.delete(span);
    span.style.transition = "";
    span.style.opacity = "0";
    freeList.push(span);
  }

  let hoverInterval: ReturnType<typeof setInterval> | null = null;
  let allTimeoutIds: ReturnType<typeof setTimeout>[] = [];
  let cooldownActive = false;
  let cooldownTimeoutId: ReturnType<typeof setTimeout> | null = null;
  let hovered = false;
  let activeTrailsCount = 0;
  const activeXCoordinates = new Set<number>();
  const cooldownTime = 600;

  function resetPool(): void {
    for (const span of pool) {
      span.style.transition = "";
      span.style.opacity = "0";
    }
    activeSpans.clear();
    freeList.length = 0;
    freeList.push(...pool);
    activeXCoordinates.clear();
    activeTrailsCount = 0;
  }

  type Trail = { x: number; delay: number };

  button.addEventListener("mouseenter", () => {
    hovered = true;
    if (hoverInterval || cooldownActive) return;
    hoverInterval = setInterval(spawnTrails, 200);
    spawnTrails();
  });

  button.addEventListener("mouseleave", () => {
    hovered = false;
    if (hoverInterval !== null) {
      clearInterval(hoverInterval);
      hoverInterval = null;
    }
    allTimeoutIds.forEach(clearTimeout);
    allTimeoutIds = [];
    resetPool();
    cooldownActive = true;

    if (cooldownTimeoutId) clearTimeout(cooldownTimeoutId);

    cooldownTimeoutId = setTimeout(() => {
      cooldownActive = false;
      cooldownTimeoutId = null;

      if (hovered && !hoverInterval) {
        hoverInterval = setInterval(spawnTrails, 200);
        spawnTrails();
      }
    }, cooldownTime);
  });

  function spawnTrails() {
    if (activeTrailsCount >= MAX_TRAILS) return;

    const numTrails = 1 + Math.floor(Math.random() * 3);
    const available = Array.from({ length: 28 }, (_, i) => i * 5)
      .filter(x => !activeXCoordinates.has(x));

    for (let i = available.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [available[i], available[j]] = [available[j], available[i]];
    }

    const trails: Trail[] = available.slice(0, numTrails).map(x => ({
      x,
      delay: Math.floor(Math.random() * 300) + 50,
    }));

    for (const trail of trails) {
      activeXCoordinates.add(trail.x);
      activeTrailsCount++;
      spawnTrail(trail.x, trail.delay);
    }
  }

  function spawnTrail(x: number, delayBetweenChars: number) {
    const fadeDuration = delayBetweenChars * (TRAIL_LENGTH - 1);

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const char = acquire();
      if (!char) continue;

      char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      char.style.left = `${x}px`;
      char.style.top = `${i * 8}px`;

      allTimeoutIds.push(setTimeout(() => {
        char.style.opacity = "1";
      }, delayBetweenChars * i));

      allTimeoutIds.push(setTimeout(() => {
        char.style.transition = `opacity ${fadeDuration}ms linear`;
        char.style.opacity = "0";

        allTimeoutIds.push(setTimeout(() => {
          release(char);
          if (i === TRAIL_LENGTH - 1) {
            activeTrailsCount--;
            activeXCoordinates.delete(x);
          }
        }, fadeDuration));
      }, delayBetweenChars * (i + 1)));
    }
  }
}
