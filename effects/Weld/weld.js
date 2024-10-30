export function initializeWeldEffect(weldButton) {
  const arrowConfigurations = [
    {
      class: "arrow-up",
      positions: ["-21px", "25px", "71px", "117px"],
      hoverPosition: "bottom",
    },
    {
      class: "arrow-down",
      positions: ["2px", "48px", "94px"],
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
