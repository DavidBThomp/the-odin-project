const reverseString = function (string) {
  let splitString = string.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  // This can be ran in one: string.split("").reverse().join("")
  // Answer help from: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  return joinString;
};

// Do not edit below this line
module.exports = reverseString;
