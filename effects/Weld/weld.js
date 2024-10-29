export function initializeWeldEffect(weldButton) {
  const upArrows = [
    { class: "arrow-up", left: "-20px" },
    { class: "arrow-up", left: "26px" },
    { class: "arrow-up", left: "72px" },
    { class: "arrow-up", left: "118px" },
  ];

  upArrows.forEach(({ class: arrowClass, left }) => {
    const upArrow = document.createElement("div");
    upArrow.classList.add(arrowClass);
    upArrow.style.left = left;
    weldButton.appendChild(upArrow);
  });

  const downArrows = [
    { class: "arrow-down", left: "3px" },
    { class: "arrow-down", left: "49px" },
    { class: "arrow-down", left: "95px" },
  ];

  downArrows.forEach(({ class: arrowClass, left }) => {
    const downArrow = document.createElement("div");
    downArrow.classList.add(arrowClass);
    downArrow.style.left = left;
    weldButton.appendChild(downArrow);
  });

  weldButton.addEventListener("mouseenter", () => {
    document.querySelectorAll(".arrow-up").forEach((arrow) => {
      arrow.classList.add("hover");
    });
  });

  weldButton.addEventListener("mouseleave", () => {
    document.querySelectorAll(".arrow-up").forEach((arrow) => {
      arrow.classList.remove("hover");
    });
  });

  weldButton.addEventListener("mouseenter", () => {
    document.querySelectorAll(".arrow-down").forEach((arrow) => {
      arrow.classList.add("hover");
    });
  });

  weldButton.addEventListener("mouseleave", () => {
    document.querySelectorAll(".arrow-down").forEach((arrow) => {
      arrow.classList.remove("hover");
    });
  });
}
