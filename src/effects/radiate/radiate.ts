export const initializeRadiateEffect = (button: HTMLButtonElement): void => {
  let activeIntervals: ReturnType<typeof setInterval>[] = [];
  let activeTimeouts: ReturnType<typeof setTimeout>[] = [];
  let currentCircles: HTMLDivElement[] = [];

  function createCircles() {
    const buttonWidth = Math.ceil(button.offsetWidth);

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

    currentCircles = createCircleElements(circlesData, buttonWidth);
    fadeInCircles(currentCircles);

    const activeTimeout = setTimeout(() => {
      button.classList.add("active");
    }, currentCircles.length * 30);
    activeTimeouts.push(activeTimeout);

    handleSequentialOpacity(currentCircles);
  }

  function createCircleElements(
    circlesData: { size: number; opacity: number }[],
    buttonWidth: number
  ): HTMLDivElement[] {
    const circles: HTMLDivElement[] = [];
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

  function fadeInCircles(circles: HTMLDivElement[]): void {
    circles.forEach((circle, index) => {
      const timeout = setTimeout(() => {
        circle.style.opacity = "1";
      }, index * 30);
      activeTimeouts.push(timeout);
    });
  }

  function handleSequentialOpacity(circles: HTMLDivElement[]): void {
    circles.forEach((circle, index) => {
      const timeout = setTimeout(() => {
        let opacity = parseFloat(
          circle.style.backgroundColor.match(
            /rgba\(0, 120, 0, (\d(\.\d+)?)\)/
          )?.[1] ?? "0"
        );

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

  function cleanup() {
    activeIntervals.forEach((id) => clearInterval(id));
    activeTimeouts.forEach((id) => clearTimeout(id));
    activeIntervals = [];
    activeTimeouts = [];

    currentCircles.forEach((circle) => {
      circle.style.opacity = "0";
    });
    setTimeout(() => {
      currentCircles.forEach((circle) => {
        if (button.contains(circle)) {
          button.removeChild(circle);
        }
      });
      currentCircles = [];
      button.classList.remove("active");
    }, 300);
  }

  button.addEventListener("mouseenter", createCircles);
  button.addEventListener("mouseleave", cleanup);
};
