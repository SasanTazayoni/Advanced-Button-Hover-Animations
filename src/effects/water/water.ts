export function initializeWaterEffect(button: HTMLButtonElement): void {
  const STOP_DELAY = 405;
  const BASE_POOL_SIZE = 140;

  const pool: HTMLDivElement[] = [];
  const freeList: HTMLDivElement[] = [];

  function growPool(count: number): void {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const droplet = document.createElement("div");
      droplet.classList.add("droplet");
      droplet.style.top = "0";
      droplet.style.transition = "none";
      droplet.style.opacity = "0";
      fragment.appendChild(droplet);
      pool.push(droplet);
      freeList.push(droplet);
    }
    button.appendChild(fragment);
  }

  growPool(BASE_POOL_SIZE);

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

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const dropletSize = Math.random() * 5 + 10;
    droplet.style.width = `${dropletSize}px`;
    droplet.style.height = `${dropletSize}px`;

    droplet.style.left = `${Math.random() * (buttonWidth - dropletSize)}px`;
    droplet.style.transform = `translateY(${dropletSize / 2}px) rotate(45deg)`;
    droplet.style.opacity = "0.5";

    const fallDuration = Math.random() * 200 + 200;
    const fadeDuration = Math.round(fallDuration * 0.25);
    const fadeDelay = Math.round(fallDuration * 0.75);

    setTimeout(() => {
      droplet.style.transition = `transform ${fallDuration}ms linear, opacity ${fadeDuration}ms ${fadeDelay}ms linear`;
      droplet.style.transform = `translateY(${buttonHeight - dropletSize}px) rotate(45deg)`;
      droplet.style.opacity = "0";

      setTimeout(() => release(droplet), fallDuration);
    }, 10);
  }

  let dropletInterval: ReturnType<typeof setInterval> | null = null;
  let stopTimeoutId: ReturnType<typeof setTimeout> | null = null;

  button.addEventListener("mouseenter", () => {
    const spawnCount = Math.max(1, Math.round((button.offsetWidth * button.offsetHeight) / 7000));
    const neededPoolSize = BASE_POOL_SIZE * spawnCount;
    if (pool.length < neededPoolSize) growPool(neededPoolSize - pool.length);

    dropletInterval = setInterval(() => {
      for (let i = 0; i < spawnCount; i++) spawnDroplet();
    }, 3);
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
