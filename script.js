import { initializeTrail } from "./effects/Trail/trail.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeCircleEffect } from "./effects/Circle/circle.js";
import { initializePixelationEffect } from "./effects/Pixel/pixel.js";

const trailButton = document.querySelector(".trail-button");
const rippleButton = document.querySelector(".ripple-button");
const circleButton = document.querySelector(".circle-button");
const pixelButton = document.querySelector(".pixel-button");

initializeTrail(trailButton);
initializeRippleEffect(rippleButton);
initializeCircleEffect(circleButton);
initializePixelationEffect(pixelButton);

function addVortexLines(button) {
  const lineHeight = 3;
  const numberOfLines = 28;

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "bottom-left-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    line.style.bottom = `${i * lineHeight}px`;
    line.style.left = `${-halfLineWidth + i * lineHeight}px`;
    line.style.transitionDelay = `${0.02 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "bottom-right-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    const buttonWidth = button.offsetWidth;
    line.style.bottom = `${i * lineHeight}px`;
    line.style.left = `${buttonWidth - halfLineWidth - i * lineHeight}px`;
    line.style.transitionDelay = `${0.02 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "top-left-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    line.style.top = `${i * lineHeight}px`;
    line.style.left = `${-halfLineWidth + i * lineHeight}px`;
    line.style.transitionDelay = `${0.02 * i}s`;
  }

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("span");
    line.classList.add("line", "top-right-line");
    button.appendChild(line);
    const halfLineWidth = line.offsetWidth / 2;
    const buttonWidth = button.offsetWidth;
    line.style.top = `${i * lineHeight}px`;
    line.style.left = `${buttonWidth - halfLineWidth - i * lineHeight}px`;
    line.style.transitionDelay = `${0.02 * i}s`;
  }
}

document.querySelectorAll(".vortex-button").forEach(addVortexLines);
