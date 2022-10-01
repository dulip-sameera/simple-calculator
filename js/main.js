// creating the calculator object
const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num2 === 0 ? NaN : num1 / num2;
  },
  // function that take 2 numbers and an operator and operate on them
  operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return calculator.add(num1, num2);
      case "-":
        return calculator.subtract(num1, num2);
      case "*":
        return calculator.multiply(num1, num2);
      case "/":
        return calculator.divide(num1, num2);
    }
  },
};
