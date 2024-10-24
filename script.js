// Cursor light-up effect

const cursorLightenButton = document.querySelector(".cursor-lighten-button");

cursorLightenButton.onmousemove = (e) => {
  let x = e.pageX - cursorLightenButton.offsetLeft;
  let y = e.pageY - cursorLightenButton.offsetTop;

  cursorLightenButton.style.setProperty("--x", x + "px");
  cursorLightenButton.style.setProperty("--y", y + "px");
};

// Ripple effect

const rippleButton = document.querySelector(".ripple-button");

function createRipple(e) {
  let x = e.clientX - e.target.getBoundingClientRect().left;
  let y = e.clientY - e.target.getBoundingClientRect().top;
  let ripples = document.createElement("span");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 600);
}

rippleButton.addEventListener("mouseover", createRipple);

// Spiral effect

function createCircles(button) {
  const circlesData = [
    { size: 15, opacity: 0.5 },
    { size: 30, opacity: 0.45 },
    { size: 45, opacity: 0.4 },
    { size: 60, opacity: 0.35 },
    { size: 75, opacity: 0.3 },
    { size: 90, opacity: 0.25 },
    { size: 105, opacity: 0.2 },
    { size: 120, opacity: 0.15 },
    { size: 135, opacity: 0.1 },
    { size: 150, opacity: 0.05 },
  ];

  const circles = createCircleElements(circlesData, button);
  fadeInCircles(circles);
  handleSequentialOpacity(circles);
  setupMouseLeave(button, circles);
}

function createCircleElements(circlesData, button) {
  const circles = [];
  circlesData.forEach((circleData) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${circleData.size}px`;
    circle.style.height = `${circleData.size}px`;
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.backgroundColor = `rgba(0, 120, 0, ${circleData.opacity})`;
    circle.style.opacity = "0";
    button.appendChild(circle);
    circles.push(circle);
  });
  return circles;
}

function fadeInCircles(circles) {
  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.opacity = "1";
    }, index * 30);
  });
}

function handleSequentialOpacity(circles) {
  circles.forEach((circle, index) => {
    setTimeout(() => {
      let opacity = parseFloat(
        circle.style.backgroundColor.match(/rgba\(0, 120, 0, (\d(\.\d+)?)\)/)[1]
      );
      const intervalId = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(intervalId);
        }
        circle.style.opacity = opacity;
      }, 30);
    }, index * 60 + 60);
  });
}

function setupMouseLeave(button, circles) {
  button.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.style.opacity = "0";
    });
    setTimeout(() => {
      circles.forEach((circle) => {
        button.removeChild(circle);
      });
    }, 300);
  });
}

const circleButton = document.querySelector(".circle-button");
circleButton.addEventListener("mouseover", () => {
  createCircles(circleButton);
});
