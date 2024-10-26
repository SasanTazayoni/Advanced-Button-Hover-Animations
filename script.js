import { initializeCursorLighten } from "./effects/Cursor lighten/cursorLighten.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeCircleEffect } from "./effects/Circle/circle.js";
import { initializePixelationEffect } from "./effects/Pixel/pixel.js";

const cursorLightenButton = document.querySelector(".cursor-lighten-button");
const rippleButton = document.querySelector(".ripple-button");
const circleButton = document.querySelector(".circle-button");
const pixelButton = document.querySelector(".pixel-button");

initializeCursorLighten(cursorLightenButton);
initializeRippleEffect(rippleButton);
initializeCircleEffect(circleButton);
initializePixelationEffect(pixelButton);
