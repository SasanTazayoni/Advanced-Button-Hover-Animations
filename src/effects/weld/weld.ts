export function initializeWeldEffect(weldButton: HTMLButtonElement): void {
  const triangleBorderWidth = 20;
  const computedStyles = getComputedStyle(weldButton);
  const borderLeftWidth = parseInt(computedStyles.borderLeftWidth, 10);
  const arrowUpPosition = (index: number): string =>
    `${
      triangleBorderWidth * (index * 2 - 1) + index * 6 - borderLeftWidth / 2
    }px`;
  const arrowDownPosition = (index: number): string =>
    `${index * (triangleBorderWidth * 2 + 6) + borderLeftWidth}px`;

  type ArrowConfig = {
    class: string;
    positions: string[];
    hoverPosition: "top" | "bottom";
    defaultValue: string;
  };

  const arrowConfigurations: ArrowConfig[] = [
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

  function createArrows({ class: arrowClass, positions }: ArrowConfig): void {
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

  function applyHoverStyles(isHover: boolean): void {
    arrowConfigurations.forEach(
      ({ class: arrowClass, hoverPosition, defaultValue }) => {
        const arrows = weldButton.querySelectorAll<HTMLButtonElement>(
          `.${arrowClass}`
        )!;
        arrows.forEach((arrow) => {
          arrow.classList.toggle("hover", isHover);
          arrow.style[hoverPosition] = isHover ? "50%" : defaultValue;
        });
      }
    );
  }
}
