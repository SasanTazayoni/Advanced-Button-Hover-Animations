export const initializeTrailEffect = (button: HTMLButtonElement): void => {
  const LIFETIME = 600;
  const SPAWN_THROTTLE = 25;
  const POOL_SIZE = Math.ceil(LIFETIME / SPAWN_THROTTLE) + 6;

  const pool: HTMLDivElement[] = [];
  const freeList: HTMLDivElement[] = [];
  const activeCircles = new Set<HTMLDivElement>();

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < POOL_SIZE; i++) {
    const circle = document.createElement("div");
    circle.className = "trail";
    circle.style.opacity = "0";
    circle.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity" && activeCircles.has(circle)) {
        activeCircles.delete(circle);
        release(circle);
      }
    });
    fragment.appendChild(circle);
    pool.push(circle);
    freeList.push(circle);
  }
  button.appendChild(fragment);

  function acquire(): HTMLDivElement | null {
    return freeList.pop() ?? null;
  }

  function release(circle: HTMLDivElement): void {
    circle.style.transition = "";
    circle.style.opacity = "0";
    freeList.push(circle);
  }

  let lastSpawn = 0;

  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");

    const now = Date.now();
    if (now - lastSpawn < SPAWN_THROTTLE) return;
    lastSpawn = now;

    const circle = acquire();
    if (!circle) return;

    activeCircles.add(circle);
    circle.style.transition = "";
    circle.style.opacity = "1";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    void circle.offsetWidth;
    circle.style.transition = `opacity ${LIFETIME}ms linear`;
    circle.style.opacity = "0";
  });

  button.addEventListener("mouseleave", () => {
    for (const circle of activeCircles) {
      circle.style.transition = "";
      circle.style.opacity = "0";
      freeList.push(circle);
    }
    activeCircles.clear();
  });
};

const button = document.querySelector<HTMLButtonElement>(".trail-button")!;
initializeTrailEffect(button);
