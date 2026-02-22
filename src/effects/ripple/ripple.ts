export const initializeRippleEffect = (button: HTMLButtonElement): void => {
  function createRipple(e: MouseEvent): void {
    if (e.target === button) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span") as HTMLSpanElement;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  }

  button.addEventListener("mouseenter", createRipple);
};
