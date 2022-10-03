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

// does a operation to given numbers based on the given operator
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// testing...
// console.log(operate(num1, num2, operator));
