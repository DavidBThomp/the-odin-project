let op1 = ``;
let op2 = ``;
let operator;
let displayValue;

function buttonListener() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayEquation(e);
    });
  });
}

function displayEquation(e) {
  const screen = document.querySelector(".screen");
  let inputData = String(e.target.innerText);

  if (inputData === "Clear") {
    clearData();
  } else if (inputData === "=") {
    operate(+op1, +op2, operator);
    op1 = String(screen.innerText);
    op2 = ``;
  } else if (
    inputData === "/" ||
    inputData === "-" ||
    inputData === "+" ||
    inputData === "*"
  ) {
    if (op1 && op2) {
      operate(+op1, +op2, operator);
      op1 = String(screen.innerText);
      op2 = ``;
      operator = inputData;
    }
    operator = inputData;
  } else if (operator) {
    op2 += inputData;
    if (screen.innerText === op1) {
      screen.innerText = ``;
    }
    screen.innerText += inputData;
  } else {
    op1 += inputData;
    screen.innerText += inputData;
  }
}

function clearData() {
  const screen = document.querySelector(".screen");
  screen.innerText = ``;
  return (op1 = ``), (op2 = ``), (operator = ``);
}

function operate(op1, op2, operator) {
  const screen = document.querySelector(".screen");

  if (operator === "+") {
    screen.innerText = add(op1, op2).toFixed(6);
  } else if (operator === "-") {
    screen.innerText = subtract(op1, op2).toFixed(6);
  } else if (operator === "*") {
    screen.innerText = multiply(op1, op2).toFixed(6);
  } else if (operator === "/") {
    screen.innerText = divide(op1, op2).toFixed(6);
  } else {
    screen.innerText = "Operation Failed!";
  }
}

function add(op1, op2) {
  return (op1 += op2);
}

function subtract(op1, op2) {
  return (op1 -= op2);
}

function multiply(op1, op2) {
  return (op1 *= op2);
}

function divide(op1, op2) {
  return (op1 /= op2);
}

buttonListener();
