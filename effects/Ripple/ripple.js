export const initializeRippleEffect = (button) => {
  function createRipple(e) {
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    button.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 600);
  }

  button.addEventListener("mouseover", createRipple);
};
