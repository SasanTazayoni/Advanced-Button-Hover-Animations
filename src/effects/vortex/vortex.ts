export function initializeVortexEffect(button: HTMLButtonElement): void {
  if (!button) return;

  const squareCount = Math.ceil(Math.log(2 / 140) / Math.log(0.99));

  let squares: HTMLDivElement[] = [];
  let timeoutIds: ReturnType<typeof setTimeout>[] = [];

  button.addEventListener("mouseenter", () => {
    const fragment = document.createDocumentFragment();
    let squareSize = 140;

    for (let index = 0; index < squareCount; index++) {
      const rotation = index * 12;
      const targetOpacity = (0.1 + (index / squareCount) * 0.2).toFixed(3);

      const square = document.createElement("div");
      square.classList.add("vortex-square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      square.style.setProperty("--opacity-target", targetOpacity);
      fragment.appendChild(square);
      squares.push(square);

      const timeoutId = setTimeout(() => {
        square.classList.add("active");
      }, index * 0.75);
      timeoutIds.push(timeoutId);

      squareSize *= 0.99;
    }

    button.appendChild(fragment);
  });

  button.addEventListener("mouseleave", () => {
    timeoutIds.forEach(clearTimeout);
    timeoutIds = [];
    const snapshot = [...squares];
    squares = [];

    const activeSquares: HTMLDivElement[] = [];
    snapshot.forEach((square) => {
      if (square.classList.contains("active")) {
        activeSquares.push(square);
      } else {
        square.remove();
      }
    });

    const frozenOpacities = activeSquares.map(
      (square) => window.getComputedStyle(square).opacity,
    );

    activeSquares.forEach((square, index) => {
      square.style.animation = "none";
      square.style.opacity = frozenOpacities[index];
    });

    button.getBoundingClientRect();

    activeSquares.forEach((square) => {
      square.style.transition = "opacity 0.2s ease";
      square.style.opacity = "0";
      square.addEventListener("transitionend", () => square.remove(), { once: true });
    });
  });
}
