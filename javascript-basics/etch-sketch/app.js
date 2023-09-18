const body = document.querySelector("body");

// Sketch Container
const div = document.createElement("div");
div.classList.add("sketch-container");
body.appendChild(div);

// New Grid Button
const button = document.querySelector("#new-button");
button.addEventListener("click", makeGrid);

function makeDivs(rows = 16) {
  const sketchContainer = document.querySelector(".sketch-container");
  // Remove Children
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }

  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${600 / rows}px`;
    div.style.height = `${600 / rows}px`;
    sketchContainer.appendChild(div);
  }

  squareHover();
}

function makeGrid() {
  let rows = prompt(`How many rows do you want?`);

  while (isNaN(rows)) {
    rows = prompt(`Not a valid number. Try again.`);
  }

  if (rows > 100) {
    rows = prompt(`Too many rows, max 100!`);
  }

  makeDivs(rows);
}

function squareHover() {
  // Hover Div
  const square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "grey";
      console.log(`hover`);
    });
  });
}

makeDivs();
