// calculator functions

// 1. add function
function add(num1, num2) {
  return num1 + num2;
}

// 2. subtract function
function subtract(num1, num2) {
  return num1 >= num2 ? num1 - num2 : num2 - num1;
}

// 3. multiplication function
function multiply(num1, num2) {
  return num1 * num2;
}

// 4. division function
function divide(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    return NaN;
  }
  return num2 !== 0 ? num1 / num2 : "Not Divisible By Zero";
}
// testing...
console.log(divide(0, 0));
