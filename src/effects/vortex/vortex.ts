export function initializeVortexEffect(button: HTMLButtonElement): void {
  if (!button) return;

  const squareCount = Math.ceil(Math.log(4 / 140) / Math.log(0.96));
  button.style.setProperty("--n", String(squareCount - 1));

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < squareCount; i++) {
    const square = document.createElement("div");
    square.classList.add("vortex-square");
    square.style.setProperty("--i", String(i));
    fragment.appendChild(square);
  }

  button.appendChild(fragment);
}
