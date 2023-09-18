const body = document.querySelector("body");

// Sketch Container
const div = document.createElement("div");
div.classList.add("sketch-container");
body.appendChild(div);

// Hover Div
div.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "red";
});

// New Grid Button
const button = document.querySelector("#new-button");
button.addEventListener("click", makeGrid);

function makeDivs() {
  const sketchContainer = document.querySelector(".sketch-container");
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    sketchContainer.appendChild(div);
  }
}

function makeGrid() {
  console.log("Connected to Button!");
}

makeDivs();
