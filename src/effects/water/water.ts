export function initializeWaterEffect(button: HTMLButtonElement): void {
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

    droplet.style.top = `${buttonRect.top + size / 2}px`;
    droplet.style.opacity = "0.5";
    document.body.appendChild(droplet);

    const fallDuration = Math.random() * 200 + 200;

    setTimeout(() => {
      const targetTop = buttonRect.bottom - size;
      droplet.style.transition = `top ${fallDuration}ms linear`;
      droplet.style.top = `${targetTop}px`;

      let opacity = 0.5;
      const fadeOutInterval = setInterval(() => {
        opacity -= 0.05;
        droplet.style.opacity = opacity.toString();
        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          droplet.remove();
        }
      }, 50);
    }, 10);
  }

  let dropletInterval: ReturnType<typeof setInterval>;
  button.addEventListener("mouseover", () => {
    dropletInterval = setInterval(() => {
      const computedStyle = getComputedStyle(button, "::after");
      const pseudoHeight = parseFloat(computedStyle.height);

      if (pseudoHeight >= maxDropletHeight) {
        clearInterval(dropletInterval);
      } else {
        createDroplet();
      }
    }, 1);
  });

  button.addEventListener("mouseleave", () => {
    clearInterval(dropletInterval);
  });
}
