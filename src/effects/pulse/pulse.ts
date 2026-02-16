export function initializePulseEffect(button: HTMLButtonElement): void {
  if (!button) return;

  const edges = ["pulse-top", "pulse-bottom", "pulse-left", "pulse-right"];
  let edgesCreated = false;
  let isHovering = false;

  button.addEventListener("mouseenter", () => {
    isHovering = true;

    if (!edgesCreated) {
      edgesCreated = true;
      edges.forEach((className) => {
        const div = document.createElement("div");
        div.classList.add("pulse-edge", className);
        button.appendChild(div);
      });
    }

    const rings: HTMLDivElement[] = [];

    for (let i = 1; i <= 2; i++) {
      const div = document.createElement("div");
      div.classList.add("pulse-ring", "active");
      if (i > 1) div.classList.add(`pulse-ring-${i}`);
      button.appendChild(div);
      rings.push(div);
    }

    setTimeout(() => {
      if (isHovering) {
        button.querySelectorAll(".pulse-edge").forEach((el) => {
          el.classList.add("active");
        });
      }
    }, 200);

    const lastRing = rings[rings.length - 1];
    lastRing.addEventListener("animationend", () => {
      rings.forEach((ring) => ring.remove());
    });
  });

  button.addEventListener("mouseleave", () => {
    isHovering = false;
    button.querySelectorAll(".pulse-edge").forEach((el) => {
      el.classList.remove("active");
    });
  });
}
