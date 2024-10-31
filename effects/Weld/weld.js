export function initializeWeldEffect(weldButton) {
  const arrowConfigurations = [
    {
      class: "arrow-up",
      positions: ["-21px", "24px", "69.5px", "115px"],
      hoverPosition: "bottom",
    },
    {
      class: "arrow-down",
      positions: ["1px", "46.5px", "92px"],
      hoverPosition: "top",
    },
  ];

  function createArrows(arrowClass, positions) {
    positions.forEach((left) => {
      const arrow = document.createElement("div");
      arrow.classList.add(arrowClass);
      arrow.style.left = left;
      weldButton.appendChild(arrow);
    });
  }

  arrowConfigurations.forEach(({ class: arrowClass, positions }) => {
    createArrows(arrowClass, positions);
  });

  ["mouseenter", "mouseleave"].forEach((e) => {
    weldButton.addEventListener(e, () => {
      document.querySelectorAll(".arrow-up, .arrow-down").forEach((arrow) => {
        arrow.classList.toggle("hover", e === "mouseenter");
      });
    });
  });
}
