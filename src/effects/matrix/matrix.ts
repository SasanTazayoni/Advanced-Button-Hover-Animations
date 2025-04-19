export function initializeMatrixEffect(button: HTMLElement) {
  const matrixChars = [
    "ｱ",
    "ｲ",
    "ｳ",
    "ｴ",
    "ｵ",
    "ｶ",
    "ｷ",
    "ｸ",
    "ｹ",
    "ｺ",
    "ｻ",
    "ｼ",
    "ｽ",
    "ｾ",
    "ｿ",
    "ﾀ",
    "ﾁ",
    "ﾂ",
    "ﾃ",
    "ﾄ",
    "ﾅ",
    "ﾆ",
    "ﾇ",
    "ﾈ",
    "ﾉ",
    "ﾊ",
    "ﾋ",
    "ﾌ",
    "ﾍ",
    "ﾎ",
    "ﾏ",
    "ﾐ",
    "ﾑ",
    "ﾒ",
    "ﾓ",
    "ﾔ",
    "ﾕ",
    "ﾖ",
    "ﾗ",
    "ﾘ",
    "ﾙ",
    "ﾚ",
    "ﾛ",
    "ﾜ",
    "ﾝ",
  ];

  let hoverInterval: ReturnType<typeof setInterval> | null = null;
  let cooldownActive = false;
  let cooldownTimeoutId: ReturnType<typeof setTimeout> | null = null;
  let hovered = false;
  const activeXCoordinates = new Set<number>();
  let activeTrailsCount = 0;
  const cooldownTime = 600;
  type Trail = {
    x: number;
    currentY: number;
    trail: HTMLSpanElement[];
    count: number;
    delay: number;
  };

  button.addEventListener("mouseenter", () => {
    hovered = true;
    if (hoverInterval || cooldownActive) return;
    hoverInterval = setInterval(spawnTrails, 600);
    spawnTrails();
  });

  button.addEventListener("mouseleave", () => {
    hovered = false;
    if (hoverInterval !== null) {
      clearInterval(hoverInterval);
      hoverInterval = null;
    }
    hoverInterval = null;
    cooldownActive = true;

    if (cooldownTimeoutId) clearTimeout(cooldownTimeoutId);

    cooldownTimeoutId = setTimeout(() => {
      cooldownActive = false;
      cooldownTimeoutId = null;

      if (hovered && !hoverInterval) {
        hoverInterval = setInterval(spawnTrails, 600);
        spawnTrails();
      }
    }, cooldownTime);
  });

  function spawnTrails() {
    if (activeTrailsCount >= 20) return;

    const numTrails = 6 + Math.floor(Math.random() * 6);
    const fontSize = 8;
    const lineHeight = 8;
    const maxLifetime = 600;

    const trails: Trail[] = [];
    const xCoordinates: number[] = [];

    for (let i = 0; i < numTrails; i++) {
      let x = Math.floor(Math.random() * 28) * 5;
      while (activeXCoordinates.has(x)) {
        x = Math.floor(Math.random() * 28) * 5;
      }

      const delay = Math.floor(Math.random() * 250) + 100;
      activeXCoordinates.add(x);
      xCoordinates.push(x);
      trails.push({ x, currentY: 2, trail: [], count: 0, delay });
    }

    activeTrailsCount += trails.length;

    for (let i = 0; i < trails.length; i++) {
      step(i);
    }

    function step(trailIndex: number): void {
      const trail = trails[trailIndex];

      setTimeout(() => {
        if (trail.count >= 6) return;
        const char = document.createElement("span");
        char.textContent =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        char.classList.add("matrix-char");
        char.style.fontWeight = "bold";
        char.style.left = `${trail.x}px`;
        char.style.top = `${trail.currentY}px`;
        char.style.fontSize = `${fontSize}px`;
        char.style.lineHeight = `${lineHeight}px`;
        char.style.opacity = "1";
        button.appendChild(char);

        trail.trail.unshift(char);

        setTimeout(() => {
          char.remove();
          activeXCoordinates.delete(trail.x);
          activeTrailsCount--;
        }, maxLifetime);

        trail.trail.forEach((c, index) => {
          const fade = 1 - index * 0.15;
          c.style.opacity = fade > 0 ? fade.toFixed(2) : "0";
        });

        if (trail.trail.length > 10) {
          const removed = trail.trail.pop();
          if (removed) {
            removed.remove();
          }
        }

        trail.currentY += lineHeight;
        trail.count++;

        if (trail.count < 6) {
          step(trailIndex);
        }
      }, trail.delay);
    }
  }
}
