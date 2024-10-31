import { initializeTrailEffect } from "./effects/Trail/trail.js";
import { initializeRippleEffect } from "./effects/Ripple/ripple.js";
import { initializeSpiralEffect } from "./effects/Spiral/spiral.js";
import { initializePixelationEffect } from "./effects/Pixels/pixels.js";
import { initializeVortexEffect } from "./effects/Vortex/vortex.js";
import { initializeWeldEffect } from "./effects/Weld/weld.js";
import { initializeStreamEffect } from "./effects/Stream/stream.js";
import { initializeShatterEffect } from "./effects/Shatter/shatter.js";

const trailButton = document.querySelector(".trail-button");
const rippleButton = document.querySelector(".ripple-button");
const spiralButton = document.querySelector(".spiral-button");
const pixelsButton = document.querySelector(".pixels-button");
const vortexButton = document.querySelector(".vortex-button");
const weldButton = document.querySelector(".weld-button");
const streamButton = document.querySelector(".stream-button");
const shatterButton = document.querySelector(".shatter-button");

initializeTrailEffect(trailButton);
initializeRippleEffect(rippleButton);
initializeSpiralEffect(spiralButton);
initializePixelationEffect(pixelsButton);
initializeVortexEffect(vortexButton);
initializeWeldEffect(weldButton);
initializeStreamEffect(streamButton);
initializeShatterEffect(shatterButton);
