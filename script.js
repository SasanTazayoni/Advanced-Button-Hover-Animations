import { initializeTrailEffect } from "./effects/Trail/trail.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeSpiralEffect } from "./effects/Spiral/spiral.js";
import { initializePixelationEffect } from "./effects/Pixel/pixel.js";
import { initializeVortexEffect } from "./effects/Vortex/vortex.js";
import { initializeWeldEffect } from "./effects/Weld/weld.js";

const trailButton = document.querySelector(".trail-button");
const rippleButton = document.querySelector(".ripple-button");
const spiralButton = document.querySelector(".spiral-button");
const pixelButton = document.querySelector(".pixel-button");
const vortexButton = document.querySelector(".vortex-button");
const weldButton = document.querySelector(".weld-button");

initializeTrailEffect(trailButton);
initializeRippleEffect(rippleButton);
initializeSpiralEffect(spiralButton);
initializePixelationEffect(pixelButton);
initializeVortexEffect(vortexButton);
initializeWeldEffect(weldButton);
