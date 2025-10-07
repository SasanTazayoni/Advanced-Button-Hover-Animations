import { initializeTrailEffect } from "./effects/trail/trail.ts";
import { initializeRippleEffect } from "./effects/ripple/ripple.ts";
import { initializeSpiralEffect } from "./effects/spiral/spiral.ts";
import { initializePixelsEffect } from "./effects/pixels/pixels.ts";
import { initializeInterlaceEffect } from "./effects/interlace/interlace.ts";
import { initializeWeldEffect } from "./effects/weld/weld.ts";
import { initializeStreamEffect } from "./effects/stream/stream.ts";
import { initializeShatterEffect } from "./effects/shatter/shatter.ts";
import { initializeCascadeEffect } from "./effects/cascade/cascade.ts";
import { initializeWaterEffect } from "./effects/water/water.ts";
import { initializeStaticEffect } from "./effects/static/static.ts";
import { initializeRainbowEffect } from "./effects/rainbow/rainbow.ts";
import { initializeMatrixEffect } from "./effects/matrix/matrix.ts";

const trailButton = document.querySelector<HTMLButtonElement>(".trail-button")!;
const rippleButton =
  document.querySelector<HTMLButtonElement>(".ripple-button")!;
const spiralButton =
  document.querySelector<HTMLButtonElement>(".spiral-button")!;
const pixelsButton =
  document.querySelector<HTMLButtonElement>(".pixels-button")!;
const interlaceButton =
  document.querySelector<HTMLButtonElement>(".interlace-button")!;
const weldButton = document.querySelector<HTMLButtonElement>(".weld-button")!;
const streamButton =
  document.querySelector<HTMLButtonElement>(".stream-button")!;
const shatterButton =
  document.querySelector<HTMLButtonElement>(".shatter-button")!;
const cascadeButton =
  document.querySelector<HTMLButtonElement>(".cascade-button")!;
const waterButton = document.querySelector<HTMLButtonElement>(".water-button")!;
const staticButton =
  document.querySelector<HTMLButtonElement>(".static-button")!;
const rainbowButton =
  document.querySelector<HTMLButtonElement>(".rainbow-button")!;
const matrixButton =
  document.querySelector<HTMLButtonElement>(".matrix-button")!;

initializeTrailEffect(trailButton);
initializeRippleEffect(rippleButton);
initializeSpiralEffect(spiralButton);
initializePixelsEffect(pixelsButton);
initializeInterlaceEffect(interlaceButton);
initializeWeldEffect(weldButton);
initializeStreamEffect(streamButton);
initializeShatterEffect(shatterButton);
initializeCascadeEffect(cascadeButton);
initializeWaterEffect(waterButton);
initializeStaticEffect(staticButton);
initializeRainbowEffect(rainbowButton);
initializeMatrixEffect(matrixButton);
