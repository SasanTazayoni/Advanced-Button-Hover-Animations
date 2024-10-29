export const initializeVortexEffect = (button) => {
  addVortexLines(button);
};

const addVortexLines = (button) => {
  const lineHeight = 4;
  const numberOfLines = 28;

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "bottom-left-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    line.style.bottom = `${i * lineHeight}px`;
    line.style.left = `${-halfLineWidth + i * lineHeight}px`;
    line.style.transitionDelay = `${0.025 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "bottom-right-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    const buttonWidth = button.offsetWidth;
    line.style.bottom = `${i * lineHeight}px`;
    line.style.left = `${buttonWidth - halfLineWidth - i * lineHeight}px`;
    line.style.transitionDelay = `${0.025 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "top-left-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    line.style.top = `${i * lineHeight}px`;
    line.style.left = `${-halfLineWidth + i * lineHeight}px`;
    line.style.transitionDelay = `${0.025 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "top-right-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    const buttonWidth = button.offsetWidth;
    line.style.top = `${i * lineHeight}px`;
    line.style.left = `${buttonWidth - halfLineWidth - i * lineHeight}px`;
    line.style.transitionDelay = `${0.025 * i}s`;
  }
};
