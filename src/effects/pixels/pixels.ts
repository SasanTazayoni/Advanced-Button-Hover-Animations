export const initializePixelsEffect = (button: HTMLButtonElement): void => {
  let filling = false;
  let clearing = false;
  const squareElements = new Map<string, HTMLDivElement>();

  const positionValue = getComputedStyle(button).position;
  if (positionValue === "static") button.style.position = "relative";

  button.addEventListener("mouseenter", () => {
    filling = true;
    clearing = false;

    const width = button.clientWidth;
    const height = button.clientHeight;

    const squareSize = 5;
    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);
    const unfilled: Array<[number, number]> = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!squareElements.has(`${r}-${c}`)) unfilled.push([r, c]);
      }
    }
    for (let i = unfilled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unfilled[i], unfilled[j]] = [unfilled[j], unfilled[i]];
    }

    const fillSquare = () => {
      if (!filling) return;

      if (unfilled.length === 0) {
        filling = false;
        return;
      }

      for (let i = 0; i < 4 && unfilled.length > 0; i++) {
        const [randomRow, randomCol] = unfilled.pop()!;
        const key = `${randomRow}-${randomCol}`;
        if (squareElements.has(key)) continue;

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
        squareElements.set(key, colorSquare);
      }

      if (filling && unfilled.length > 0) {
        setTimeout(fillSquare, 6);
      }
    };

    fillSquare();
  });

  button.addEventListener("mouseleave", () => {
    filling = false;
    clearing = true;

    const removeSquare = () => {
      if (!clearing || squareElements.size === 0) {
        clearing = false;
        return;
      }

      const positionKeys = Array.from(squareElements.keys());

      for (let i = 0; i < 4 && squareElements.size > 0; i++) {
        const randomIndex = Math.floor(Math.random() * positionKeys.length);
        const squareToRemoveKey = positionKeys[randomIndex];
        if (!squareToRemoveKey) continue;

        squareElements.get(squareToRemoveKey)?.remove();
        squareElements.delete(squareToRemoveKey);

        positionKeys.splice(randomIndex, 1);
      }

      setTimeout(removeSquare, 4);
    };

    removeSquare();
  });
};
