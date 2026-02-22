export function initializeCascadeEffect(button: HTMLButtonElement): void {
  const squareSize = 5;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const cols = Math.floor(buttonWidth / squareSize);
  const rows = Math.floor(buttonHeight / squareSize);
  const total = rows * cols;

  const revealed = new Uint8Array(total);
  const squares: HTMLDivElement[] = [];
  let isHovering = false;
  let frontier: number[] = [];
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const squaresContainer = document.createElement("div");
  squaresContainer.className = "squares-container";
  button.appendChild(squaresContainer);

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.left = `${j * squareSize}px`;
      square.style.top = `${i * squareSize}px`;
      fragment.appendChild(square);
      squares.push(square);
    }
  }
  squaresContainer.appendChild(fragment);

  function getCursorCell(event: MouseEvent): [number, number] {
    const rect = button.getBoundingClientRect();
    const col = Math.max(0, Math.min(cols - 1, Math.floor((event.clientX - rect.left) / squareSize)));
    const row = Math.max(0, Math.min(rows - 1, Math.floor((event.clientY - rect.top) / squareSize)));
    return [row, col];
  }

  function startWave(row: number, col: number): void {
    const idx = row * cols + col;
    if (revealed[idx]) return;
    revealed[idx] = 1;
    squares[idx].style.opacity = "0";
    frontier.push(idx);
    if (!intervalId) {
      intervalId = setInterval(processWave, 20);
    }
  }

  function processWave(): void {
    if (frontier.length === 0) {
      clearInterval(intervalId!);
      intervalId = null;
      return;
    }
    const nextFrontier: number[] = [];
    for (const idx of frontier) {
      const row = Math.floor(idx / cols);
      const col = idx % cols;
      const neighbors: [number, number][] = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
      ];
      for (const [nr, nc] of neighbors) {
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          const nIdx = nr * cols + nc;
          if (!revealed[nIdx]) {
            revealed[nIdx] = 1;
            squares[nIdx].style.opacity = "0";
            nextFrontier.push(nIdx);
          }
        }
      }
    }
    frontier = nextFrontier;
  }

  button.addEventListener("mouseenter", (e) => {
    isHovering = true;
    const [row, col] = getCursorCell(e);
    startWave(row, col);
  });

  button.addEventListener("mousemove", (e) => {
    if (!isHovering) return;
    const [row, col] = getCursorCell(e);
    startWave(row, col);
  });

  button.addEventListener("mouseleave", () => {
    isHovering = false;
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    frontier = [];
    for (let i = 0; i < total; i++) {
      if (revealed[i]) {
        squares[i].style.opacity = "1";
        revealed[i] = 0;
      }
    }
  });
}
