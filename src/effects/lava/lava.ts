export const initializeLavaEffect = (button: HTMLElement): void => {
  function updateOverlay(e: MouseEvent): void {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const gradient = `radial-gradient(circle 40px at ${x}px ${y}px, transparent 0%, rgba(30, 30, 30, 0.9) 100%)`;
    button.style.setProperty("--overlay", gradient);
  }

  function clearOverlay(): void {
    button.style.removeProperty("--overlay");
  }

  button.addEventListener("mousemove", updateOverlay);
  button.addEventListener("mouseleave", clearOverlay);
};
