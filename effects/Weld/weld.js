export function initializeWeldEffect(weldButton) {
  const borderWidth = 20;

  const arrowConfigurations = [
    {
      class: "arrow-up",
      positions: [
        `-${borderWidth + 1}px`,
        `${borderWidth + 5}px`,
        `${borderWidth * 3 + 11}px`,
        `${borderWidth * 5 + 17}px`,
      ],
      hoverPosition: "bottom",
      defaultValue: "-65%",
    },
    {
      class: "arrow-down",
      positions: [
        "2px",
        `${borderWidth * 2 + 8}px`,
        `${borderWidth * 4 + 14}px`,
      ],
      hoverPosition: "top",
      defaultValue: "-65%",
    },
  ];

  function createArrows({ class: arrowClass, positions }) {
    positions.forEach((left) => {
      const arrow = document.createElement("div");
      arrow.classList.add(arrowClass);
      arrow.style.left = left;
      weldButton.appendChild(arrow);
    });
  }

  arrowConfigurations.forEach(createArrows);

  weldButton.addEventListener("mouseenter", () => applyHoverStyles(true));
  weldButton.addEventListener("mouseleave", () => applyHoverStyles(false));

  function applyHoverStyles(isHover) {
    arrowConfigurations.forEach(
      ({ class: arrowClass, hoverPosition, defaultValue }) => {
        const arrows = weldButton.querySelectorAll(`.${arrowClass}`);
        arrows.forEach((arrow) => {
          arrow.classList.toggle("hover", isHover);
          arrow.style[hoverPosition] = isHover ? "50%" : defaultValue;
        });
      }
    );
  }
}
