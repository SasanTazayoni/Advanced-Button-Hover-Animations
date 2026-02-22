export function initializeWaterEffect(button: HTMLButtonElement): void {
  const STOP_DELAY = 405;

  function createDroplet() {
    const droplet = document.createElement("div");
    droplet.classList.add("droplet");

    const size = Math.random() * 5 + 10;
    droplet.style.width = `${size}px`;
    droplet.style.height = `${size}px`;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    droplet.style.left = `${Math.random() * (buttonWidth - size)}px`;
    droplet.style.top = `${size / 2}px`;
    droplet.style.opacity = "0.5";
    button.appendChild(droplet);

    const fallDuration = Math.random() * 200 + 200;

    setTimeout(() => {
      droplet.style.transition = `top ${fallDuration}ms linear, opacity ${fallDuration * 0.15}ms linear ${fallDuration * 0.85}ms`;
      droplet.style.top = `${buttonHeight - size}px`;
      droplet.style.opacity = "0";

      droplet.addEventListener(
        "transitionend",
        (e) => {
          if (e.propertyName === "opacity") droplet.remove();
        },
        { once: true },
      );
    }, 10);
  }

  let dropletInterval: ReturnType<typeof setInterval> | null = null;
  let stopTimeoutId: ReturnType<typeof setTimeout> | null = null;

  button.addEventListener("mouseenter", () => {
    dropletInterval = setInterval(createDroplet, 3);
    stopTimeoutId = setTimeout(() => {
      clearInterval(dropletInterval!);
      dropletInterval = null;
    }, STOP_DELAY);
  });

  button.addEventListener("mouseleave", () => {
    if (dropletInterval !== null) {
      clearInterval(dropletInterval);
      dropletInterval = null;
    }
    if (stopTimeoutId !== null) {
      clearTimeout(stopTimeoutId);
      stopTimeoutId = null;
    }
  });
}
