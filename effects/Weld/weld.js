export function initializeWeldEffect(weldButton) {
  const upArrows = [
    { class: "arrow-up", left: "-21px" },
    { class: "arrow-up", left: "25px" },
    { class: "arrow-up", left: "71px" },
    { class: "arrow-up", left: "117px" },
  ];

  upArrows.forEach(({ class: arrowClass, left }) => {
    const upArrow = document.createElement("div");
    upArrow.classList.add(arrowClass);
    upArrow.style.left = left;
    weldButton.appendChild(upArrow);
  });

  const downArrows = [
    { class: "arrow-down", left: "2.5px" },
    { class: "arrow-down", left: "48px" },
    { class: "arrow-down", left: "94px" },
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
