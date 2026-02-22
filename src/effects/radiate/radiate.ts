export const initializeRadiateEffect = (button: HTMLButtonElement): void => {
  let activeIntervals: ReturnType<typeof setInterval>[] = [];
  let activeTimeouts: ReturnType<typeof setTimeout>[] = [];

  const circlesData: { size: number; opacity: number }[] = [
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

  const buttonWidth = Math.ceil(button.offsetWidth);
  const fragment = document.createDocumentFragment();
  const circles: HTMLDivElement[] = [];

  circlesData.forEach((circleData) => {
    const size = circleData.size * buttonWidth;
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = `rgba(0, 120, 0, ${circleData.opacity})`;
    fragment.appendChild(circle);
    circles.push(circle);
  });
  button.appendChild(fragment);

  function fadeInCircles(): void {
    circles.forEach((circle, index) => {
      const timeout = setTimeout(() => {
        circle.style.opacity = "1";
      }, index * 30);
      activeTimeouts.push(timeout);
    });
  }

  function handleSequentialOpacity(): void {
    circles.forEach((circle, index) => {
      const timeout = setTimeout(() => {
        let opacity = circlesData[index].opacity;

        const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
          opacity -= 0.1;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(intervalId);
          }
          circle.style.opacity = opacity.toString();
        }, 30);
        activeIntervals.push(intervalId);
      }, index * 60 + 60);
      activeTimeouts.push(timeout);
    });
  }

  function startAnimation(): void {
    fadeInCircles();

    const activeTimeout = setTimeout(() => {
      button.classList.add("active");
    }, circles.length * 30);
    activeTimeouts.push(activeTimeout);

    handleSequentialOpacity();
  }

  function cleanup(): void {
    activeIntervals.forEach((id) => clearInterval(id));
    activeTimeouts.forEach((id) => clearTimeout(id));
    activeIntervals = [];
    activeTimeouts = [];

    circles.forEach((circle) => {
      circle.style.opacity = "0";
    });
    button.classList.remove("active");
  }

  button.addEventListener("mouseenter", startAnimation);
  button.addEventListener("mouseleave", cleanup);
};
