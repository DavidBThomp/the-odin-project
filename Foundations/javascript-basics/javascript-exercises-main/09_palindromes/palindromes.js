const palindromes = function (inputString) {
  const arrString = inputString
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .filter((stringChar) => stringChar !== " ")
    .join("");

  const reverseString = arrString.split("").reverse().join("");

  return reverseString === arrString;
};

// Do not edit below this line
module.exports = palindromes;
