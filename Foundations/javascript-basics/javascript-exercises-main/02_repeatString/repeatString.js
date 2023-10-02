const repeatString = function (string, num) {
  let stringCombined = "";

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    stringCombined += string;
  }
  return stringCombined;
};

// Do not edit below this line
module.exports = repeatString;
