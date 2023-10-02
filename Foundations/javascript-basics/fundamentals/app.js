function add7(number) {
  return number + 7;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function capitalize(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

function lastLetter(inputString) {
  return inputString.slice(inputString.length - 1);
}

console.log(add7(20));

console.log(multiply(2, 3));

console.log(capitalize("heLLo WorLD!"));

console.log(lastLetter("What is last letter"));
