// Cursor light-up effect

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

// Spiral effect

function createCircles(button) {
  const circlesData = [
    { size: 15, opacity: 0.5 },
    { size: 30, opacity: 0.45 },
    { size: 45, opacity: 0.4 },
    { size: 60, opacity: 0.35 },
    { size: 75, opacity: 0.3 },
    { size: 90, opacity: 0.25 },
    { size: 105, opacity: 0.2 },
    { size: 120, opacity: 0.15 },
    { size: 135, opacity: 0.1 },
    { size: 150, opacity: 0.05 },
  ];

  const circles = createCircleElements(circlesData, button);
  fadeInCircles(circles);
  handleSequentialOpacity(circles);
  setupMouseLeave(button, circles);
}

function createCircleElements(circlesData, button) {
  const circles = [];
  circlesData.forEach((circleData) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${circleData.size}px`;
    circle.style.height = `${circleData.size}px`;
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.backgroundColor = `rgba(0, 120, 0, ${circleData.opacity})`;
    circle.style.opacity = "0";
    button.appendChild(circle);
    circles.push(circle);
  });
  return circles;
}

function fadeInCircles(circles) {
  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.opacity = "1";
    }, index * 30);
  });
}

function handleSequentialOpacity(circles) {
  circles.forEach((circle, index) => {
    setTimeout(() => {
      let opacity = parseFloat(
        circle.style.backgroundColor.match(/rgba\(0, 120, 0, (\d(\.\d+)?)\)/)[1]
      );
      const intervalId = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(intervalId);
        }
        circle.style.opacity = opacity;
      }, 30);
    }, index * 60 + 60);
  });
}

function setupMouseLeave(button, circles) {
  button.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.style.opacity = "0";
    });
    setTimeout(() => {
      circles.forEach((circle) => {
        button.removeChild(circle);
      });
    }, 300);
  });
}

const spiralButton = document.querySelector(".spiral-button");
spiralButton.addEventListener("mouseover", () => {
  createCircles(spiralButton);
});

// Pixelation effect

const pixelButton = document.querySelector(".pixel-button");
let filling = false;
let filledSquares = new Set();

pixelButton.addEventListener("mouseover", function () {
  filling = true;
  clearing = false;

  const width = pixelButton.clientWidth;
  const height = pixelButton.clientHeight;

  const squareSize = 5;
  const cols = Math.ceil(width / squareSize);
  const rows = Math.ceil(height / squareSize);
  const totalSquares = cols * rows;

  console.log(`Starting fill process: Total squares = ${totalSquares}`);

  const fillSquare = () => {
    if (filledSquares.size >= totalSquares) {
      filling = false;
      console.log("All squares are filled!");
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (filledSquares.size >= totalSquares) {
        break;
      }

      let randomCol, randomRow;
      let found = false;

      while (!found) {
        randomCol = Math.floor(Math.random() * cols);
        randomRow = Math.floor(Math.random() * rows);
        if (!filledSquares.has(`${randomRow}-${randomCol}`)) {
          found = true;
        }
      }

      const squareX = randomCol * squareSize;
      const squareY = randomRow * squareSize;

      const colorSquare = document.createElement("div");
      colorSquare.style.position = "absolute";
      colorSquare.style.width = `${squareSize}px`;
      colorSquare.style.height = `${squareSize}px`;
      colorSquare.style.backgroundColor = "#48d1cc";
      colorSquare.style.background = `radial-gradient(circle, rgb(175, 238, 238) 0%, rgba(64, 224, 208, 1) 70%)`;
      colorSquare.style.left = `${squareX}px`;
      colorSquare.style.top = `${squareY}px`;
      colorSquare.style.zIndex = "-1";

      pixelButton.appendChild(colorSquare);
      filledSquares.add(`${randomRow}-${randomCol}`);
      console.log(
        `Added square at row: ${randomRow}, col: ${randomCol}. Total filled: ${filledSquares.size}`
      );
    }

    if (filling && filledSquares.size < totalSquares) {
      setTimeout(fillSquare, 1);
    }
  };

  fillSquare();
});

let clearing = false;

pixelButton.addEventListener("mouseleave", function () {
  filling = false;
  clearing = true;

  console.log("Starting to clear squares...");

  const removeSquare = () => {
    const squares = pixelButton.querySelectorAll("div:not(.button)");

    if (!clearing || filledSquares.size === 0) {
      clearing = false;
      console.log("Clearing process completed or no squares left to clear.");
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (filledSquares.size === 0) {
        break;
      }

      const randomIndex = Math.floor(Math.random() * filledSquares.size);
      const squareToRemoveKey = Array.from(filledSquares)[randomIndex];
      const squareToRemove = pixelButton.querySelector(
        `div[style*="top: ${
          squareToRemoveKey.split("-")[0] * 5
        }px"][style*="left: ${squareToRemoveKey.split("-")[1] * 5}px"]`
      );
      squareToRemove.remove();
      filledSquares.delete(squareToRemoveKey);
      console.log(`Removed square. Squares left: ${filledSquares.size}`);
    }

    if (filledSquares.size === 0) {
      console.log("All squares removed.");
    }

    setTimeout(removeSquare, 1);
  };

  removeSquare();
});
