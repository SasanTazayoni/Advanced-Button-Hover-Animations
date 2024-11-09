export const initializePixelationEffect = (button: HTMLButtonElement): void => {
  let filling = false;
  let clearing = false;
  let filledSquares = new Set<string>();

  button.addEventListener("mouseover", function () {
    filling = true;
    clearing = false;

    const width = button.clientWidth;
    const height = button.clientHeight;

    const squareSize = 5;
    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);
    const totalSquares = cols * rows;

    const fillSquare = () => {
      if (filledSquares.size >= totalSquares) {
        filling = false;
        return;
      }

      for (let i = 0; i < 4; i++) {
        if (filledSquares.size >= totalSquares) {
          break;
        }

        let randomCol: number, randomRow: number;
        let found = false;

        while (!found) {
          randomCol = Math.floor(Math.random() * cols);
          randomRow = Math.floor(Math.random() * rows);

          if (!filledSquares.has(`${randomRow}-${randomCol}`)) {
            found = true;

            const squareX = randomCol * squareSize;
            const squareY = randomRow * squareSize;

            const colorSquare = document.createElement("div");
            colorSquare.style.position = "absolute";
            colorSquare.style.width = `${squareSize}px`;
            colorSquare.style.height = `${squareSize}px`;
            colorSquare.style.backgroundColor = "#48d1cc";
            colorSquare.style.background = `radial-gradient(circle, rgb(175, 238, 238) 0%, rgba(64, 224, 208, 1) 70%)`;
            colorSquare.style.left = `${squareX}px`;
            colorSquare.style.top = `${squareY}px`;
            colorSquare.style.zIndex = "-1";
            button.appendChild(colorSquare);
            filledSquares.add(`${randomRow}-${randomCol}`);
          }
        }
      }

      if (filling && filledSquares.size < totalSquares) {
        setTimeout(fillSquare, 1);
      }
    };

    fillSquare();
  });

  button.addEventListener("mouseleave", function () {
    filling = false;
    clearing = true;

    const removeSquare = () => {
      if (!clearing || filledSquares.size === 0) {
        clearing = false;
        return;
      }

      for (let i = 0; i < 4; i++) {
        if (filledSquares.size === 0) {
          break;
        }

        const randomIndex = Math.floor(Math.random() * filledSquares.size);
        const squareToRemoveKey = Array.from(filledSquares)[randomIndex];
        const squareToRemove = button.querySelector(
          `div[style*="top: ${
            parseInt(squareToRemoveKey.split("-")[0], 10) * 5
          }px"][style*="left: ${
            parseInt(squareToRemoveKey.split("-")[1], 10) * 5
          }px"]`
        ) as HTMLDivElement;
        squareToRemove?.remove();
        filledSquares.delete(squareToRemoveKey);
      }

      setTimeout(removeSquare, 1);
    };

    removeSquare();
  });
};
