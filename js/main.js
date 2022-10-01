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
};
