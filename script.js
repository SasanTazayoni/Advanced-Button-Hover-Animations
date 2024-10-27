import { initializeTrail } from "./effects/Trail/trail.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeCircleEffect } from "./effects/Circle/circle.js";
import { initializePixelationEffect } from "./effects/Pixel/pixel.js";
import { initializeVortexEffect } from "./effects/Vortex/vortex.js";

const trailButton = document.querySelector(".trail-button");
const rippleButton = document.querySelector(".ripple-button");
const circleButton = document.querySelector(".circle-button");
const pixelButton = document.querySelector(".pixel-button");
const vortexButton = document.querySelector(".vortex-button");

initializeTrail(trailButton);
initializeRippleEffect(rippleButton);
initializeCircleEffect(circleButton);
initializePixelationEffect(pixelButton);
initializeVortexEffect(vortexButton);
