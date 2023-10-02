const removeFromArray = function (inputArray, ...remove) {
  return inputArray.filter((value) => !remove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
