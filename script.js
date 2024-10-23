// Cursor light-up

const cursorLightenButton = document.querySelector(".cursor-lighten-button");

cursorLightenButton.onmousemove = (e) => {
  let x = e.pageX - cursorLightenButton.offsetLeft;
  let y = e.pageY - cursorLightenButton.offsetTop;

  cursorLightenButton.style.setProperty("--x", x + "px");
  cursorLightenButton.style.setProperty("--y", y + "px");
};
