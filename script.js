import { initializeCursorLighten } from "./effects/Cursor lighten/cursorLighten.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeSpiralEffect } from "./effects/Spiral/spiral.js";
import { initializePixelationEffect } from "./effects/Pixel/pixel.js";

const cursorLightenButton = document.querySelector(".cursor-lighten-button");
const rippleButton = document.querySelector(".ripple-button");
const spiralButton = document.querySelector(".spiral-button");
const pixelButton = document.querySelector(".pixel-button");

initializeCursorLighten(cursorLightenButton);
initializeRippleEffect(rippleButton);
initializeSpiralEffect(spiralButton);
initializePixelationEffect(pixelButton);
