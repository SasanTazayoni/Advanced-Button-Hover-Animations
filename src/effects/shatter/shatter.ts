export function initializeShatterEffect(button: HTMLButtonElement): void {
  const squareSize: number = 5;
  const removalStages: number[] = [0.2, 0.3, 1];
  const removalDelays: number[] = [0, 200, 400];

  let cols: number = 0;
  let rows: number = 0;
  let totalSquares: number = 0;
  let squares: HTMLDivElement[] = [];
  let removalTimeouts: ReturnType<typeof setTimeout>[] = [];
  let restorationTimeout: ReturnType<typeof setTimeout> | null = null;
  let resizeTimer: ReturnType<typeof setTimeout> | null = null;

  const squaresContainer = document.createElement("div");
  squaresContainer.className = "squares-container";
  squaresContainer.style.position = "absolute";
  squaresContainer.style.top = "0";
  squaresContainer.style.left = "0";
  squaresContainer.style.width = "100%";
  squaresContainer.style.height = "100%";
  squaresContainer.style.pointerEvents = "none";
  button.appendChild(squaresContainer);

  function buildGrid(): void {
    const newCols = Math.floor(button.offsetWidth / squareSize);
    const newRows = Math.floor(button.offsetHeight / squareSize);
    if (newCols === cols && newRows === rows) return;

    removalTimeouts.forEach(clearTimeout);
    removalTimeouts = [];
    if (restorationTimeout !== null) {
      clearTimeout(restorationTimeout);
      restorationTimeout = null;
    }

    cols = newCols;
    rows = newRows;
    totalSquares = cols * rows;
    squares = [];

    squaresContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.backgroundColor = "#fff";
      square.style.opacity = "0.6";
      square.style.position = "absolute";
      square.style.zIndex = "2";
      square.style.transition = "transform 0.6s, opacity 0.4s 0.6s";
      square.style.left = `${(i % cols) * squareSize}px`;
      square.style.top = `${Math.floor(i / cols) * squareSize}px`;
      fragment.appendChild(square);
      squares.push(square);
    }
    squaresContainer.appendChild(fragment);
  }

  buildGrid();

  function removeRandomSquares(percentage: number): void {
    const squaresToRemove: number = Math.floor(totalSquares * percentage);
    const removedIndices: Set<number> = new Set();

    while (removedIndices.size < squaresToRemove) {
      const randomIndex = Math.floor(Math.random() * totalSquares);
      if (!removedIndices.has(randomIndex)) {
        removedIndices.add(randomIndex);
        const square = squares[randomIndex];
        const randomSpin = Math.random() * 720 - 360;
        square.style.transform = `translateY(40px) rotate(${randomSpin}deg)`;
        square.style.opacity = "0";
      }
    }
  }

  function startRemovalStages(): void {
    removalStages.forEach((percentage, index) => {
      const timeoutId = setTimeout(() => {
        removeRandomSquares(percentage);
      }, removalDelays[index]);
      removalTimeouts.push(timeoutId);
    });
  }

  function resetSquares(): void {
    for (const square of squares) {
      square.style.opacity = "0.6";
      square.style.transform = "translateY(0) rotate(0deg)";
    }
  }

  button.addEventListener("mouseenter", () => {
    if (restorationTimeout !== null) {
      clearTimeout(restorationTimeout);
      restorationTimeout = null;
    }
    startRemovalStages();
  });

  button.addEventListener("mouseleave", () => {
    removalTimeouts.forEach(clearTimeout);
    removalTimeouts = [];
    restorationTimeout = setTimeout(resetSquares, 1000);
  });

  const resizeObserver = new ResizeObserver(() => {
    if (resizeTimer !== null) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildGrid, 100);
  });
  resizeObserver.observe(button);
}
