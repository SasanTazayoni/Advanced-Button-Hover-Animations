export const initializeRadiateEffect = (button: HTMLButtonElement): void => {
  let activeIntervals: ReturnType<typeof setInterval>[] = [];
  let activeTimeouts: ReturnType<typeof setTimeout>[] = [];
  let runId = 0;

  const circleConfigs: { size: number; opacity: number }[] = [
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

  circleConfigs.forEach((circleData) => {
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

  function clearTimers(): void {
    activeIntervals.forEach(clearInterval);
    activeTimeouts.forEach(clearTimeout);
    activeIntervals = [];
    activeTimeouts = [];
  }

  function hardResetCircles(): void {
    circles.forEach((c) => (c.style.opacity = "0"));
    void button.offsetHeight;
  }

  function startAnimation(): void {
    runId += 1;
    const capturedRunId = runId;

    clearTimers();
    hardResetCircles();
    button.classList.remove("active");

    circles.forEach((circle, index) => {
      const t = setTimeout(() => {
        if (runId !== capturedRunId) return;
        circle.style.opacity = "1";
      }, index * 30);
      activeTimeouts.push(t);
    });

    const activeTimeout = setTimeout(() => {
      if (runId !== capturedRunId) return;
      button.classList.add("active");
    }, circles.length * 30);
    activeTimeouts.push(activeTimeout);

    circles.forEach((circle, index) => {
      const t = setTimeout(
        () => {
          if (runId !== capturedRunId) return;

          let opacity = circleConfigs[index].opacity;

          const intervalId = setInterval(() => {
            if (runId !== capturedRunId) {
              clearInterval(intervalId);
              return;
            }

            opacity -= 0.1;
            if (opacity <= 0) {
              opacity = 0;
              clearInterval(intervalId);
            }
            circle.style.opacity = String(opacity);
          }, 30);

          activeIntervals.push(intervalId);
        },
        index * 60 + 60,
      );

      activeTimeouts.push(t);
    });
  }

  function cleanup(): void {
    runId += 1;
    clearTimers();
    circles.forEach((circle) => (circle.style.opacity = "0"));
    button.classList.remove("active");
  }

  button.addEventListener("mouseenter", startAnimation);
  button.addEventListener("mouseleave", cleanup);
};
