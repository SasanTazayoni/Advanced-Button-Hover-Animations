export function initializeShatterEffect(button) {
  const squareSize = 5;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const totalSquares = Math.ceil(
    (buttonWidth / squareSize) * (buttonHeight / squareSize)
  );

  const removalStages = [0.2, 0.3, 1];
  const removalDelays = [0, 200, 400];
  let removalTimeouts = [];
  let restorationTimeout;

  function createSquaresContainer() {
    const squaresContainer = document.createElement("div");
    squaresContainer.className = "squares-container";
    squaresContainer.style.position = "absolute";
    squaresContainer.style.top = "0";
    squaresContainer.style.left = "0";
    squaresContainer.style.width = "100%";
    squaresContainer.style.height = "100%";
    squaresContainer.style.pointerEvents = "none";
    button.appendChild(squaresContainer);
    return squaresContainer;
  }

  function addSquares(squaresContainer) {
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.backgroundColor = "#fff";
      square.style.opacity = "0.6";
      square.style.position = "absolute";
      square.style.zIndex = 2;
      square.style.transition = "transform 0.6s, opacity 0.6s";

      const x = (i % Math.floor(buttonWidth / squareSize)) * squareSize;
      const y =
        Math.floor(i / Math.floor(buttonWidth / squareSize)) * squareSize;

      square.style.left = `${x}px`;
      square.style.top = `${y}px`;
      squaresContainer.appendChild(square);
    }
  }

  function removeRandomSquares(percentage) {
    const squares = Array.from(button.querySelectorAll(".square"));
    const squaresToRemove = Math.floor(totalSquares * percentage);
    const removedSet = new Set();

    while (removedSet.size < squaresToRemove) {
      const randomIndex = Math.floor(Math.random() * totalSquares);
      if (!removedSet.has(randomIndex)) {
        removedSet.add(randomIndex);
        const square = squares[randomIndex];
        const randomSpin = Math.random() * 720 - 360;
        square.style.transform = `translateY(40px) rotate(${randomSpin}deg)`;

        setTimeout(() => {
          square.style.opacity = "0";
        }, 600);
      }
    }
  }

  function startRemovalStages() {
    removalStages.forEach((percentage, index) => {
      const timeoutId = setTimeout(() => {
        removeRandomSquares(percentage);
      }, removalDelays[index]);

      removalTimeouts.push(timeoutId);
    });
  }

  function resetSquares() {
    const squares = button.querySelectorAll(".square");
    squares.forEach((square) => {
      square.style.opacity = "0.6";
      square.style.transform = "translateY(0) rotate(0deg)";
    });
  }

  function addEventListeners() {
    button.addEventListener("mouseenter", () => {
      clearTimeout(restorationTimeout);
      startRemovalStages();
    });

    button.addEventListener("mouseleave", () => {
      removalTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      restorationTimeout = setTimeout(resetSquares, 1000);
    });
  }

  function init() {
    const squaresContainer = createSquaresContainer();
    addSquares(squaresContainer);
    addEventListeners();
  }

  init();
}
