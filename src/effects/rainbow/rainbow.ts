export function initializeRainbowEffect(button: HTMLButtonElement): void {
  let isHovering = false;

  function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  button.addEventListener("mousemove", (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    x = clamp(x, 2, 98);

    if (isHovering) {
      button.style.backgroundPosition = `${x}% center`;
      button.style.color = x < 50 ? "black" : "white";
      button.style.opacity = "1";
    }
  });

  button.addEventListener("mouseenter", () => {
    isHovering = true;
  });

  button.addEventListener("mouseleave", (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    x = clamp(x, 2, 98);

    button.style.backgroundPosition = `${x}% center`;
    button.style.color = x < 50 ? "black" : "white";
    button.style.opacity = "0.4";
    isHovering = false;
  });
}
