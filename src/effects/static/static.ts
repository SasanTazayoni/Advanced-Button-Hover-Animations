export function initializeStaticEffect(button: HTMLButtonElement): void {
  button.addEventListener("mouseenter", () => {
    button.classList.add("static-flash");
    setTimeout(() => {
      button.classList.remove("static-flash");
    }, 300);
  });
}
