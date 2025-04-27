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
  let activeTrailsCount = 0;
  const activeXCoordinates = new Set<number>();
  const cooldownTime = 600;

  type Trail = {
    x: number;
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
    if (activeTrailsCount >= 16) return;

    const numTrails = 4 + Math.floor(Math.random() * 4);
    const trails: Trail[] = [];

    for (let i = 0; i < numTrails; i++) {
      let x = Math.floor(Math.random() * 28) * 5;
      while (activeXCoordinates.has(x)) {
        x = Math.floor(Math.random() * 28) * 5;
      }

      const delay = Math.floor(Math.random() * 250) + 100;
      trails.push({ x, delay });
      activeXCoordinates.add(x);
      activeTrailsCount++;
    }

    for (const trail of trails) {
      spawnTrail(trail.x, trail.delay);
    }
  }

  function spawnTrail(x: number, delayBetweenChars: number) {
    const trailLength = 6;
    const fadeDuration = delayBetweenChars * (trailLength - 1);
    const chars: HTMLSpanElement[] = [];

    for (let i = 0; i < trailLength; i++) {
      const char = document.createElement("span");
      char.textContent =
        matrixChars[Math.floor(Math.random() * matrixChars.length)];
      char.classList.add("matrix-char");
      char.style.left = `${x}px`;
      char.style.top = `${i * 8}px`;
      button.appendChild(char);
      chars.push(char);

      setTimeout(() => {
        char.style.opacity = "1";
      }, delayBetweenChars * i);

      setTimeout(() => {
        char.style.transition = `opacity ${fadeDuration}ms linear`;
        char.style.opacity = "0";

        setTimeout(() => {
          char.remove();
          if (i === trailLength - 1) {
            activeTrailsCount--;
            activeXCoordinates.delete(x);
          }
        }, fadeDuration);
      }, delayBetweenChars * (i + 1));
    }
  }
}
