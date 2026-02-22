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

  type ArrowGroup = {
    elements: HTMLDivElement[];
    hoverPosition: "top" | "bottom";
    defaultValue: string;
  };

  const arrowGroups: ArrowGroup[] = [
    {
      elements: [arrowUpPosition(0), arrowUpPosition(1), arrowUpPosition(2), arrowUpPosition(3)].map((left) => {
        const arrow = document.createElement("div");
        arrow.classList.add("arrow-up");
        arrow.style.left = left;
        weldButton.appendChild(arrow);
        return arrow;
      }),
      hoverPosition: "bottom",
      defaultValue: "-65%",
    },
    {
      elements: [arrowDownPosition(0), arrowDownPosition(1), arrowDownPosition(2)].map((left) => {
        const arrow = document.createElement("div");
        arrow.classList.add("arrow-down");
        arrow.style.left = left;
        weldButton.appendChild(arrow);
        return arrow;
      }),
      hoverPosition: "top",
      defaultValue: "-65%",
    },
  ];

  function applyHoverStyles(isHover: boolean): void {
    for (const { elements, hoverPosition, defaultValue } of arrowGroups) {
      for (const arrow of elements) {
        arrow.classList.toggle("hover", isHover);
        arrow.style[hoverPosition] = isHover ? "50%" : defaultValue;
      }
    }
  }

  weldButton.addEventListener("mouseenter", () => applyHoverStyles(true));
  weldButton.addEventListener("mouseleave", () => applyHoverStyles(false));
}
