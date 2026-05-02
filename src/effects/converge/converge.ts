export function initializeConvergeEffect(convergeButton: HTMLButtonElement): void {
  for (let i = 1; i <= 4; i++) {
    const span = document.createElement("span");
    span.classList.add("circular-span");
    span.dataset.spanId = String(i);
    convergeButton.appendChild(span);
  }

  function updateWidth(): void {
    convergeButton.style.setProperty("--button-width", `${convergeButton.offsetWidth}px`);
  }

  updateWidth();
  new ResizeObserver(updateWidth).observe(convergeButton);
}
