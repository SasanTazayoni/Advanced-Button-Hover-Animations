// Cursor light-up

const cursorLightenButton = document.querySelector(".cursor-lighten-button");

cursorLightenButton.onmousemove = (e) => {
  let x = e.pageX - cursorLightenButton.offsetLeft;
  let y = e.pageY - cursorLightenButton.offsetTop;

  cursorLightenButton.style.setProperty("--x", x + "px");
  cursorLightenButton.style.setProperty("--y", y + "px");
};

// Ripple effect

const rippleButton = document.querySelector(".ripple-button");

function createRipple(e) {
  let x = e.clientX - e.target.getBoundingClientRect().left;
  let y = e.clientY - e.target.getBoundingClientRect().top;
  let ripples = document.createElement("span");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 600);
}

rippleButton.addEventListener("mouseover", createRipple);
