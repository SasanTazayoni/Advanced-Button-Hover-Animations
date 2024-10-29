export const initializeSpiralEffect = (button) => {
  function createCircles() {
    const buttonWidth = Math.ceil(button.offsetWidth);

    const circlesData = [
      { size: 0.1, opacity: 0.5 },
      { size: 0.2, opacity: 0.45 },
      { size: 0.3, opacity: 0.4 },
      { size: 0.4, opacity: 0.35 },
      { size: 0.5, opacity: 0.3 },
      { size: 0.6, opacity: 0.25 },
      { size: 0.7, opacity: 0.2 },
      { size: 0.8, opacity: 0.15 },
      { size: 0.9, opacity: 0.1 },
      { size: 1, opacity: 0.05 },
    ];

    const circles = createCircleElements(circlesData, buttonWidth);
    fadeInCircles(circles);

    setTimeout(() => {
      button.classList.add("active");
    }, circles.length * 30);

    handleSequentialOpacity(circles);
    setupMouseLeave(circles);
  }

  function createCircleElements(circlesData, buttonWidth) {
    const circles = [];
    circlesData.forEach((circleData) => {
      const size = circleData.size * buttonWidth;
      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.backgroundColor = `rgba(0, 120, 0, ${circleData.opacity})`;
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
          circle.style.backgroundColor.match(
            /rgba\(0, 120, 0, (\d(\.\d+)?)\)/
          )[1]
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

  function setupMouseLeave(circles) {
    button.addEventListener("mouseleave", () => {
      circles.forEach((circle) => {
        circle.style.opacity = "0";
      });
      setTimeout(() => {
        circles.forEach((circle) => {
          button.removeChild(circle);
        });
        button.classList.remove("active");
      }, 300);
    });
  }

  button.addEventListener("mouseover", createCircles);
};
