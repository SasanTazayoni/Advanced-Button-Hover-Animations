export const initializePixelsEffect = (button: HTMLButtonElement): void => {
  let filling = false;
  let clearing = false;
  const filledSquares = new Set<string>();

  const computedPos = getComputedStyle(button).position;
  if (computedPos === "static") button.style.position = "relative";

  button.addEventListener("mouseenter", () => {
    filling = true;
    clearing = false;

    if (button.querySelectorAll(".pixel-square").length === 0) {
      filledSquares.clear();
    }

    const width = button.clientWidth;
    const height = button.clientHeight;

    const squareSize = 5;
    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);
    const totalSquares = cols * rows;

    const fillSquare = () => {
      if (!filling) return;

      if (filledSquares.size >= totalSquares) {
        filling = false;
        return;
      }

      for (let i = 0; i < 4 && filledSquares.size < totalSquares; i++) {
        let randomCol = 0;
        let randomRow = 0;
        let found = false;

        while (!found) {
          randomCol = Math.floor(Math.random() * cols);
          randomRow = Math.floor(Math.random() * rows);
          const key = `${randomRow}-${randomCol}`;

          if (!filledSquares.has(key)) {
            found = true;

            const squareX = randomCol * squareSize;
            const squareY = randomRow * squareSize;

            const colorSquare = document.createElement("div");
            colorSquare.className = "pixel-square";
            colorSquare.dataset.row = String(randomRow);
            colorSquare.dataset.col = String(randomCol);

            colorSquare.style.position = "absolute";
            colorSquare.style.width = `${squareSize}px`;
            colorSquare.style.height = `${squareSize}px`;
            colorSquare.style.background =
              "radial-gradient(circle, rgb(175, 238, 238) 0%, rgba(64, 224, 208, 1) 70%)";
            colorSquare.style.left = `${squareX}px`;
            colorSquare.style.top = `${squareY}px`;
            colorSquare.style.zIndex = "-1";
            colorSquare.style.pointerEvents = "none";

            button.appendChild(colorSquare);
            filledSquares.add(key);
          }
        }
      }

      if (filling && filledSquares.size < totalSquares) {
        setTimeout(fillSquare, 6);
      }
    };

    fillSquare();
  });

  button.addEventListener("mouseleave", () => {
    filling = false;
    clearing = true;

    const removeSquare = () => {
      if (!clearing || filledSquares.size === 0) {
        clearing = false;
        return;
      }

      const keys = Array.from(filledSquares);

      for (let i = 0; i < 4 && filledSquares.size > 0; i++) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        const squareToRemoveKey = keys[randomIndex];
        if (!squareToRemoveKey) continue;

        const [row, col] = squareToRemoveKey.split("-").map(Number);

        const squareToRemove = button.querySelector(
          `.pixel-square[data-row="${row}"][data-col="${col}"]`,
        ) as HTMLDivElement | null;

        squareToRemove?.remove();
        filledSquares.delete(squareToRemoveKey);

        keys.splice(randomIndex, 1);
      }

      setTimeout(removeSquare, 1);
    };

    removeSquare();
  });
};
