export function initializeWaterEffect(button) {
  const buttonHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--button-height"
    )
  );

  const maxDropletHeight = buttonHeight * 0.75;

  function createDroplet() {
    const droplet = document.createElement("div");
    droplet.classList.add("droplet");

    const size = Math.random() * 5 + 10;
    droplet.style.width = `${size}px`;
    droplet.style.height = `${size}px`;

    const buttonRect = button.getBoundingClientRect();
    droplet.style.left = `${
      Math.random() * (buttonRect.width - size) + buttonRect.left
    }px`;

    droplet.style.top = `${buttonRect.top + size / 4}px`;
    droplet.style.opacity = "0.5";
    document.body.appendChild(droplet);
    const fallDuration = Math.random() * 200 + 200;

    setTimeout(() => {
      const targetTop = buttonRect.bottom - size;
      droplet.style.transition = `top ${fallDuration}ms linear`;
      droplet.style.top = `${targetTop}px`;

      let opacity = 0.5;
      const fadeOutInterval = setInterval(() => {
        opacity -= 0.1;
        droplet.style.opacity = opacity;
        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          droplet.remove();
        }
      }, 50);

      const checkDropletPosition = setInterval(() => {
        const dropletYPosition = parseFloat(droplet.style.top) + size;
        const pseudoYPosition = button.getBoundingClientRect().bottom;

        if (dropletYPosition >= pseudoYPosition) {
          clearInterval(checkDropletPosition);
        }
      }, 50);

      setTimeout(() => {
        droplet.remove();
        clearInterval(checkDropletPosition);
      }, fallDuration);
    }, 10);
  }

  let dropletInterval;
  button.addEventListener("mouseover", () => {
    dropletInterval = setInterval(() => {
      const computedStyle = getComputedStyle(button, "::after");
      const pseudoHeight = parseFloat(computedStyle.height);

      if (pseudoHeight >= maxDropletHeight) {
        clearInterval(dropletInterval);
      } else {
        createDroplet();
      }
    }, 6);
  });

  button.addEventListener("mouseleave", () => {
    clearInterval(dropletInterval);
  });
}
