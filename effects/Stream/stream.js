export function initializeStreamEffect(button) {
  let lineInterval;
  let cooldown = false;

  function createLine(
    directionClass,
    xPosition,
    positionValue,
    opacityValue,
    positionProperty
  ) {
    const line = document.createElement("div");
    line.className = directionClass;
    line.style.left = `${xPosition}px`;
    line.style.opacity = opacityValue;
    line.style.setProperty(positionProperty, `${positionValue}%`);
    button.appendChild(line);

    line.addEventListener("animationend", () => {
      line.remove();
    });
  }

  button.addEventListener("mouseover", () => {
    if (cooldown) return;
    cooldown = true;

    const buttonWidth = button.offsetWidth;

    lineInterval = setInterval(() => {
      const randomXDown = Math.random() * (buttonWidth - 1);
      const randomTopDown = Math.random() * 120;
      const randomOpacityDown = Math.random() * 0.7;
      createLine(
        "line-downwards",
        randomXDown,
        randomTopDown,
        randomOpacityDown,
        "--random-top"
      );

      const randomXUp = Math.random() * (buttonWidth - 1);
      const randomBottomUp = Math.random() * 120;
      const randomOpacityUp = Math.random() * 0.7;
      createLine(
        "line-upwards",
        randomXUp,
        randomBottomUp,
        randomOpacityUp,
        "--random-bottom"
      );
    }, 1);

    setTimeout(() => {
      clearInterval(lineInterval);
      const linesDown = button.querySelectorAll(".line-downwards");
      const linesUp = button.querySelectorAll(".line-upwards");
      linesDown.forEach((line) => line.remove());
      linesUp.forEach((line) => line.remove());

      setTimeout(() => {
        cooldown = false;
      }, 150);
    }, 600);
  });

  button.addEventListener("mouseleave", () => {
    clearInterval(lineInterval);
    const linesDown = button.querySelectorAll(".line-downwards");
    const linesUp = button.querySelectorAll(".line-upwards");
    linesDown.forEach((line) => line.remove());
    linesUp.forEach((line) => line.remove());
  });
}
