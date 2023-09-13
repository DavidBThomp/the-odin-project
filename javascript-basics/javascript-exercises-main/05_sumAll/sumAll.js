const sumAll = function (num1, num2) {
  let sum = 0;
  if (num1 > num2) {
    let tempNum = num2;
    num2 = num1;
    num1 = tempNum;
  } else if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  for (; num1 <= num2; ++num1) {
    sum += num1;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
