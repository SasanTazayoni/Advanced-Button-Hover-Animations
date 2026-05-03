export function initializeWeldEffect(weldButton: HTMLButtonElement): void {
  function buildArrows(): void {
    weldButton
      .querySelectorAll<HTMLElement>(".arrow-up, .arrow-down")
      .forEach((arrowElement) => arrowElement.remove());

    const style = getComputedStyle(weldButton);
    const columns = parseFloat(style.getPropertyValue("--weld-columns").trim());
    const gapRatio = parseFloat(
      style.getPropertyValue("--weld-gap-ratio").trim(),
    );
    const haloPadding = parseFloat(
      style.getPropertyValue("--weld-halo-padding").trim(),
    );

    const height = weldButton.offsetHeight;
    const width = weldButton.offsetWidth;
    const arrowHalfWidth = Math.round(width / (columns * (2 + gapRatio)));
    const gapWidth = Math.round((arrowHalfWidth * gapRatio) / 2) * 2;
    const patternWidth = arrowHalfWidth * 2 + gapWidth;

    weldButton.style.setProperty("--button-height", `${height}px`);
    weldButton.style.setProperty("--weld-arrow-border", `${arrowHalfWidth}px`);
    weldButton.style.setProperty(
      "--weld-halo-border",
      `${arrowHalfWidth + haloPadding}px`,
    );

    const arrowCount = Math.ceil(width / patternWidth) + 1;

    for (let i = 0; i <= arrowCount; i++) {
      const up = document.createElement("div");
      up.classList.add("arrow-up");
      up.style.left = `${i * patternWidth - arrowHalfWidth}px`;
      weldButton.appendChild(up);

      const down = document.createElement("div");
      down.classList.add("arrow-down");
      down.style.left = `${i * patternWidth + gapWidth / 2}px`;
      weldButton.appendChild(down);
    }
  }

  buildArrows();
  new ResizeObserver(buildArrows).observe(weldButton);

  weldButton.addEventListener("mouseenter", () => {
    weldButton
      .querySelectorAll<HTMLElement>(".arrow-up, .arrow-down")
      .forEach((arrowElement) => arrowElement.classList.add("hover"));
  });

  weldButton.addEventListener("mouseleave", () => {
    weldButton
      .querySelectorAll<HTMLElement>(".arrow-up, .arrow-down")
      .forEach((arrowElement) => arrowElement.classList.remove("hover"));
  });
}
