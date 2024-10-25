export const initializeCursorLighten = (button) => {
  button.onmousemove = (e) => {
    let x = e.pageX - button.offsetLeft;
    let y = e.pageY - button.offsetTop;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");
  };
};
