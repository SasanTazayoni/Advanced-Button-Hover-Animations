export const initializeInterlaceEffect = (button: HTMLButtonElement): void => {
  const lineHeight = 4;
  const numberOfLines = 28;
  const buttonWidth = button.offsetWidth;

  const createLine = (
    className: string,
    position: "top" | "bottom",
    offset: (halfLineWidth: number, i: number) => number
  ): void => {
    for (let i = 0; i < numberOfLines; i++) {
      const line = document.createElement("span");
      line.classList.add("line", className);
      button.appendChild(line);

      const halfLineWidth = line.offsetWidth / 2;
      line.style[position] = `${i * lineHeight}px`;
      line.style.left = `${offset(halfLineWidth, i)}px`;
      line.style.transitionDelay = `${0.025 * i}s`;
    }
  };

  const bottomLeftOffset = (halfLineWidth: number, i: number): number =>
    -halfLineWidth + i * lineHeight;
  const bottomRightOffset = (halfLineWidth: number, i: number): number =>
    buttonWidth - halfLineWidth - i * lineHeight;
  const topLeftOffset = (halfLineWidth: number, i: number): number =>
    -halfLineWidth + i * lineHeight;
  const topRightOffset = (halfLineWidth: number, i: number): number =>
    buttonWidth - halfLineWidth - i * lineHeight;

  createLine("bottom-left-line", "bottom", bottomLeftOffset);
  createLine("bottom-right-line", "bottom", bottomRightOffset);
  createLine("top-left-line", "top", topLeftOffset);
  createLine("top-right-line", "top", topRightOffset);
};
