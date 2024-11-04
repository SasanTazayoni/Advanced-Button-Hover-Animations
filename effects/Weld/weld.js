export function initializeWeldEffect(weldButton) {
  const triangleBorderWidth = 20;
  const computedStyles = getComputedStyle(weldButton);
  const borderLeftWidth = parseInt(computedStyles.borderLeftWidth, 10);
  const arrowUpPosition = (index) =>
    `${
      triangleBorderWidth * (index * 2 - 1) + index * 6 - borderLeftWidth / 2
    }px`;
  const arrowDownPosition = (index) =>
    `${index * (triangleBorderWidth * 2 + 6) + borderLeftWidth}px`;

  const arrowConfigurations = [
    {
      class: "arrow-up",
      positions: [
        arrowUpPosition(0),
        arrowUpPosition(1),
        arrowUpPosition(2),
        arrowUpPosition(3),
      ],
      hoverPosition: "bottom",
      defaultValue: "-65%",
    },
    {
      class: "arrow-down",
      positions: [
        arrowDownPosition(0),
        arrowDownPosition(1),
        arrowDownPosition(2),
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
