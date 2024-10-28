export const initializeTrailEffect = (button) => {
  button.onmousemove = (e) => {
    let x = e.pageX - button.offsetLeft;
    let y = e.pageY - button.offsetTop;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");

    createFadingCircle(button, e);
  };
};

const createFadingCircle = (button, e) => {
  const fadingCircle = document.createElement("div");
  fadingCircle.className = "trail";
  fadingCircle.style.left = `${
    e.pageX - button.getBoundingClientRect().left
  }px`;
  fadingCircle.style.top = `${e.pageY - button.getBoundingClientRect().top}px`;
  fadingCircle.style.transform = "translate(-50%, -50%)";
  button.appendChild(fadingCircle);
  fadeOut(fadingCircle);
};

const fadeOut = (circle) => {
  let opacity = 1;
  const duration = 600;
  const fadeInterval = 20;
  const fadeOutStep = fadeInterval / duration;

  const fadeEffect = setInterval(() => {
    opacity -= fadeOutStep;
    if (opacity <= 0) {
      clearInterval(fadeEffect);
      circle.remove();
    } else {
      circle.style.opacity = opacity;
    }
  }, fadeInterval);
};

const button = document.querySelector(".trail-button");
initializeTrailEffect(button);
