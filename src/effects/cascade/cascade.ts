export function initializeCascadeEffect(button: HTMLButtonElement): void {
  if (!button) return;

  const classes: string[] = [
    "cascade-bottom",
    "cascade-bottom-second",
    "cascade-bottom-third",
    "cascade-top",
    "cascade-top-second",
    "cascade-top-third",
    "cascade-right",
    "cascade-right-second",
    "cascade-right-third",
    "cascade-right-fourth",
    "cascade-left",
    "cascade-left-second",
    "cascade-left-third",
    "cascade-left-fourth",
  ];

  let hasEntered = false;

  button.addEventListener("mouseenter", () => {
    if (hasEntered) return;
    hasEntered = true;

    classes.forEach((className) => {
      const div = document.createElement("div");
      div.classList.add(className);
      button.appendChild(div);
    });
  });
}
