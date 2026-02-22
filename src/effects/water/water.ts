export function initializeWaterEffect(button: HTMLButtonElement): void {
  const STOP_DELAY = 405;
  const POOL_SIZE = 140;

  const freeList: HTMLDivElement[] = [];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < POOL_SIZE; i++) {
    const droplet = document.createElement("div");
    droplet.classList.add("droplet");
    droplet.style.transition = "none";
    droplet.style.opacity = "0";
    fragment.appendChild(droplet);
    freeList.push(droplet);
  }
  button.appendChild(fragment);

  function acquire(): HTMLDivElement | null {
    return freeList.pop() ?? null;
  }

  function release(droplet: HTMLDivElement): void {
    droplet.style.transition = "none";
    droplet.style.opacity = "0";
    freeList.push(droplet);
  }

  function spawnDroplet(): void {
    const droplet = acquire();
    if (!droplet) return;

    const size = Math.random() * 5 + 10;
    droplet.style.width = `${size}px`;
    droplet.style.height = `${size}px`;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    droplet.style.left = `${Math.random() * (buttonWidth - size)}px`;
    droplet.style.top = `${size / 2}px`;
    droplet.style.opacity = "0.5";

    const fallDuration = Math.random() * 200 + 200;

    setTimeout(() => {
      droplet.style.transition = `top ${fallDuration}ms linear, opacity ${fallDuration * 0.15}ms linear ${fallDuration * 0.85}ms`;
      droplet.style.top = `${buttonHeight - size}px`;
      droplet.style.opacity = "0";

      droplet.addEventListener(
        "transitionend",
        (e) => {
          if (e.propertyName === "opacity") release(droplet);
        },
        { once: true },
      );
    }, 10);
  }

  let dropletInterval: ReturnType<typeof setInterval> | null = null;
  let stopTimeoutId: ReturnType<typeof setTimeout> | null = null;

  button.addEventListener("mouseenter", () => {
    dropletInterval = setInterval(spawnDroplet, 3);
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
