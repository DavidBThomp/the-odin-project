const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else if (Number(num) == NaN || undefined) {
    return "OOPS";
  } else {
    num = +num;
  }
  let n1 = 0;
  let n2 = 1;
  let nextNum;

  for (let sum = 1; sum <= num; sum++) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
