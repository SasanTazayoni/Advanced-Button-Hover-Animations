export function initializePulseEffect(button: HTMLButtonElement): void {
  if (!button) return;

  const edgeClassNames = ["pulse-top", "pulse-bottom", "pulse-left", "pulse-right"];
  let isHovering = false;

  const pulseEdges: HTMLDivElement[] = edgeClassNames.map((className) => {
    const div = document.createElement("div");
    div.classList.add("pulse-edge", className);
    button.appendChild(div);
    return div;
  });

  button.addEventListener("mouseenter", () => {
    isHovering = true;

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
        pulseEdges.forEach((el) => el.classList.add("active"));
      }
    }, 200);

    const lastRing = rings[rings.length - 1];
    lastRing.addEventListener("animationend", () => {
      rings.forEach((ring) => ring.remove());
    });
  });

  button.addEventListener("mouseleave", () => {
    isHovering = false;
    pulseEdges.forEach((el) => el.classList.remove("active"));
  });
}
