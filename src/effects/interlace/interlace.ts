export const initializeInterlaceEffect = (button: HTMLButtonElement): void => {
  const lineHeight = 4;
  const numberOfLines = 28;

  const lineWidthProbe = document.createElement("span");
  lineWidthProbe.classList.add("line");
  button.appendChild(lineWidthProbe);
  const halfLineWidth = lineWidthProbe.offsetWidth / 2;
  lineWidthProbe.remove();

  const createLine = (
    className: string,
    position: "top" | "bottom",
    side: "left" | "right"
  ): void => {
    for (let i = 0; i < numberOfLines; i++) {
      const line = document.createElement("span");
      line.classList.add("line", className);
      line.style[position] = `${i * lineHeight}px`;
      line.style[side] = `${-halfLineWidth + i * lineHeight}px`;
      line.style.transitionDelay = `${0.025 * i}s`;
      button.appendChild(line);
    }
  };

  createLine("bottom-left-line", "bottom", "left");
  createLine("bottom-right-line", "bottom", "right");
  createLine("top-left-line", "top", "left");
  createLine("top-right-line", "top", "right");
};
