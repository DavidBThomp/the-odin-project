const body = document.querySelector("body");

// Sketch Container
const div = document.createElement("div");
div.classList.add("sketch-container");
body.appendChild(div);

// Hover Div
div.addEventListener("mouseover", (e) => {
  console.log(e);
});

function makeDiv() {
  const sketchContainer = document.querySelector(".sketch-container");
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    sketchContainer.appendChild(div);
  }
}

function makeColor() {}

makeDiv();
