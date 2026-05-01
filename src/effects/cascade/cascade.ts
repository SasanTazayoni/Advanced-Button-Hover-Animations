export function initializeCascadeEffect(button: HTMLButtonElement): void {
  const squareSize = 5;

  let colCount = 0;
  let rowCount = 0;
  let tileCount = 0;
  let revealedTiles = new Uint8Array(0);
  let tiles: HTMLDivElement[] = [];
  let isHovering = false;
  let waveFrontier: number[] = [];
  let waveInterval: ReturnType<typeof setInterval> | null = null;
  let resizeTimer: ReturnType<typeof setTimeout> | null = null;

  const tileContainer = document.createElement("div");
  tileContainer.className = "squares-container";
  button.appendChild(tileContainer);

  function buildGrid(): void {
    const newColCount = Math.floor(button.offsetWidth / squareSize);
    const newRowCount = Math.floor(button.offsetHeight / squareSize);
    if (newColCount === colCount && newRowCount === rowCount) return;

    if (waveInterval !== null) {
      clearInterval(waveInterval);
      waveInterval = null;
    }
    waveFrontier = [];

    colCount = newColCount;
    rowCount = newRowCount;
    tileCount = rowCount * colCount;
    revealedTiles = new Uint8Array(tileCount);
    tiles = [];

    tileContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        const tile = document.createElement("div");
        tile.className = "square";
        tile.style.left = `${col * squareSize}px`;
        tile.style.top = `${row * squareSize}px`;
        fragment.appendChild(tile);
        tiles.push(tile);
      }
    }
    tileContainer.appendChild(fragment);
  }

  buildGrid();

  function getCursorCell(event: MouseEvent): [number, number] {
    const rect = button.getBoundingClientRect();
    const col = Math.max(0, Math.min(colCount - 1, Math.floor((event.clientX - rect.left) / squareSize)));
    const row = Math.max(0, Math.min(rowCount - 1, Math.floor((event.clientY - rect.top) / squareSize)));
    return [row, col];
  }

  function startWave(row: number, col: number): void {
    const tileIndex = row * colCount + col;
    if (revealedTiles[tileIndex]) return;
    revealedTiles[tileIndex] = 1;
    tiles[tileIndex].style.opacity = "0";
    waveFrontier.push(tileIndex);
    if (!waveInterval) {
      waveInterval = setInterval(processWave, 20);
    }
  }

  function processWave(): void {
    if (waveFrontier.length === 0) {
      clearInterval(waveInterval!);
      waveInterval = null;
      return;
    }
    const nextFrontier: number[] = [];
    for (const tileIndex of waveFrontier) {
      const row = Math.floor(tileIndex / colCount);
      const col = tileIndex % colCount;
      const neighbors: [number, number][] = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
      ];
      for (const [neighborRow, neighborCol] of neighbors) {
        if (neighborRow >= 0 && neighborRow < rowCount && neighborCol >= 0 && neighborCol < colCount) {
          const neighborIndex = neighborRow * colCount + neighborCol;
          if (!revealedTiles[neighborIndex]) {
            revealedTiles[neighborIndex] = 1;
            tiles[neighborIndex].style.opacity = "0";
            nextFrontier.push(neighborIndex);
          }
        }
      }
    }
    waveFrontier = nextFrontier;
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
    if (waveInterval !== null) {
      clearInterval(waveInterval);
      waveInterval = null;
    }
    waveFrontier = [];
    for (let i = 0; i < tileCount; i++) {
      if (revealedTiles[i]) {
        tiles[i].style.opacity = "1";
        revealedTiles[i] = 0;
      }
    }
  });

  const resizeObserver = new ResizeObserver(() => {
    if (resizeTimer !== null) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildGrid, 100);
  });
  resizeObserver.observe(button);
}
