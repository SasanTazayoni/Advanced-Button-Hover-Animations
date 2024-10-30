export function initializeDistortionEffect(button) {
  const numColumns = 10;
  const borderWidth = 2;
  const buttonWidth = button.offsetWidth;
  const columnWidth = Math.ceil(buttonWidth / numColumns);

  for (let i = 0; i < numColumns; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.style.width = `${columnWidth}px`;
    column.style.left = `${i * columnWidth - borderWidth / 2}px`;
    button.appendChild(column);
  }

  button.addEventListener("mousemove", (e) => {
    let x = e.clientX - button.getBoundingClientRect().left;
    let y = e.clientY - button.getBoundingClientRect().top;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");
  });
}
