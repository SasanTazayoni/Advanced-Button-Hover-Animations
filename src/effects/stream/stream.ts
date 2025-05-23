export function initializeStreamEffect(button: HTMLButtonElement): void {
  let lineInterval: ReturnType<typeof setInterval>;
  let opacityInterval: ReturnType<typeof setInterval>;
  let cooldown = false;
  let maxOpacity = 0.9;
  let opacityDecreaseRate = 0.09;

  type LineParams = {
    directionClass: string;
    xPosition: number;
    positionValue: number;
    opacityValue: number;
    positionProperty: string;
  };

  function createLine({
    directionClass,
    xPosition,
    positionValue,
    opacityValue,
    positionProperty,
  }: LineParams): void {
    const line = document.createElement("div");
    line.className = directionClass;
    line.style.left = `${xPosition}px`;
    line.style.opacity = `${opacityValue}`;
    line.style.setProperty("--random-top", `${positionValue}`);
    line.style.setProperty("--random-bottom", `${positionValue}`);
    line.style.setProperty(positionProperty, `${positionValue}%`);

    button.appendChild(line);

    line.addEventListener("animationend", () => {
      line.remove();
    });
  }

  function startAnimation() {
    const buttonWidth = button.offsetWidth;

    opacityInterval = setInterval(() => {
      if (maxOpacity > 0) {
        maxOpacity -= opacityDecreaseRate;
      }
    }, 60);

    lineInterval = setInterval(() => {
      if (maxOpacity <= 0) {
        clearInterval(lineInterval);
        return;
      }

      const randomXDown = Math.random() * (buttonWidth - 1);
      const randomTopDown = Math.random() * 120;
      const randomOpacityDown = Math.random() * maxOpacity;
      createLine({
        directionClass: "line-downwards",
        xPosition: randomXDown,
        positionValue: randomTopDown,
        opacityValue: randomOpacityDown,
        positionProperty: "--random-top",
      });

      const randomXUp = Math.random() * (buttonWidth - 1);
      const randomBottomUp = Math.random() * 120;
      const randomOpacityUp = Math.random() * maxOpacity;
      createLine({
        directionClass: "line-upwards",
        xPosition: randomXUp,
        positionValue: randomBottomUp,
        opacityValue: randomOpacityUp,
        positionProperty: "--random-bottom",
      });
    }, 1);
  }

  function removeLines() {
    const linesDown = button.querySelectorAll(".line-downwards");
    const linesUp = button.querySelectorAll(".line-upwards");
    linesDown.forEach((line) => line.remove());
    linesUp.forEach((line) => line.remove());
  }

  function resetCooldown() {
    setTimeout(() => {
      cooldown = false;
      maxOpacity = 0.6;
    }, 600);
  }

  button.addEventListener("mouseover", () => {
    if (cooldown) return;
    cooldown = true;

    startAnimation();

    setTimeout(() => {
      clearInterval(lineInterval);
      clearInterval(opacityInterval);

      removeLines();

      resetCooldown();
    }, 600);
  });

  button.addEventListener("mouseleave", () => {
    setTimeout(() => {
      removeLines();
    }, 600);

    if (cooldown) return;
    cooldown = true;

    resetCooldown();
  });
}
