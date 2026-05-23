import { initializeConvergeEffect } from "./effects/converge/converge.ts";
import { initializeFusionEffect } from "./effects/fusion/fusion.ts";
import { initializeTrailEffect } from "./effects/trail/trail.ts";
import { initializeRippleEffect } from "./effects/ripple/ripple.ts";
import { initializeRadiateEffect } from "./effects/radiate/radiate.ts";
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
import { initializePulseEffect } from "./effects/pulse/pulse.ts";
import { initializeVortexEffect } from "./effects/vortex/vortex.ts";

function getButton(selector: string): HTMLButtonElement {
  const button = document.querySelector<HTMLButtonElement>(selector);
  if (!button) throw new Error(`Button not found: ${selector}`);
  return button;
}

initializeConvergeEffect(getButton(".converge-button"));
initializeFusionEffect(getButton(".fusion-button"));
initializeTrailEffect(getButton(".trail-button"));
initializeRippleEffect(getButton(".ripple-button"));
initializeRadiateEffect(getButton(".radiate-button"));
initializePixelsEffect(getButton(".pixels-button"));
initializeInterlaceEffect(getButton(".interlace-button"));
initializeWeldEffect(getButton(".weld-button"));
initializeStreamEffect(getButton(".stream-button"));
initializeShatterEffect(getButton(".shatter-button"));
initializeCascadeEffect(getButton(".cascade-button"));
initializeWaterEffect(getButton(".water-button"));
initializeStaticEffect(getButton(".static-button"));
initializeRainbowEffect(getButton(".rainbow-button"));
initializeMatrixEffect(getButton(".matrix-button"));
initializePulseEffect(getButton(".pulse-button"));
initializeVortexEffect(getButton(".vortex-button"));
