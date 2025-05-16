export function initializeCascadeEffect(button: HTMLButtonElement): void {
  const squareSize = 5;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const cols = Math.floor(buttonWidth / squareSize);
  const rows = Math.floor(buttonHeight / squareSize);
  const revealedSquares = new Set<string>();
  let isHovering = false;

  function createSquaresContainer(): HTMLDivElement {
    const squaresContainer = document.createElement("div");
    squaresContainer.className = "squares-container";
    squaresContainer.style.position = "absolute";
    squaresContainer.style.top = "0";
    squaresContainer.style.left = "0";
    squaresContainer.style.width = "100%";
    squaresContainer.style.height = "100%";
    squaresContainer.style.pointerEvents = "none";
    squaresContainer.style.overflow = "hidden";
    button.appendChild(squaresContainer);
    return squaresContainer;
  }

  function addSquares(squaresContainer: HTMLDivElement): void {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.position = "absolute";
        square.style.zIndex = "1";
        square.style.backgroundColor = "rgb(165, 0, 0)";
        square.style.opacity = "1";
        square.dataset.originalColor = square.style.backgroundColor;
        square.style.transition = "opacity 0.5s ease";
        square.style.left = `${j * squareSize}px`;
        square.style.top = `${i * squareSize}px`;
        squaresContainer.appendChild(square);
      }
    }
  }

  function fadeOutSquare(square: HTMLDivElement): void {
    square.style.opacity = "0";
  }

  function fadeInSquare(square: HTMLDivElement): void {
    square.style.opacity = "1";
  }

  function revealSquare(
    squaresContainer: HTMLDivElement,
    row: number,
    col: number
  ): void {
    if (
      revealedSquares.has(`${row},${col}`) ||
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols
    ) {
      return;
    }
    if (!isHovering) {
      return;
    }
    const index = row * cols + col;
    const square = squaresContainer.children[index] as HTMLDivElement;

    if (square) {
      fadeOutSquare(square);
      revealedSquares.add(`${row},${col}`);
      setTimeout(() => {
        revealSquare(squaresContainer, row - 1, col);
        revealSquare(squaresContainer, row + 1, col);
        revealSquare(squaresContainer, row, col - 1);
        revealSquare(squaresContainer, row, col + 1);
      }, 20);
    }
  }

  function handleMouseEnter(event: MouseEvent): void {
    isHovering = true;
    const rect = button.getBoundingClientRect();
    const startX = event.clientX - rect.left;
    const startY = event.clientY - rect.top;

    const col = Math.floor(startX / squareSize);
    const row = Math.floor(startY / squareSize);

    revealSquare(
      button.querySelector(".squares-container") as HTMLDivElement,
      row,
      col
    );
  }

  function handleMouseMove(event: MouseEvent): void {
    if (isHovering) {
      const rect = button.getBoundingClientRect();
      const startX = event.clientX - rect.left;
      const startY = event.clientY - rect.top;

      const col = Math.floor(startX / squareSize);
      const row = Math.floor(startY / squareSize);
      revealSquare(
        button.querySelector(".squares-container") as HTMLDivElement,
        row,
        col
      );
    }
  }

  function handleMouseLeave(): void {
    isHovering = false;
    const squaresContainer = button.querySelector(
      ".squares-container"
    ) as HTMLDivElement;
    revealedSquares.forEach((squareKey) => {
      const [row, col] = squareKey.split(",").map(Number);
      const index = row * cols + col;
      const square = squaresContainer.children[index] as HTMLDivElement;
      if (square) {
        fadeInSquare(square);
      }
    });
    revealedSquares.clear();
  }

  function init() {
    const squaresContainer = createSquaresContainer();
    addSquares(squaresContainer);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);
  }

  init();
}
