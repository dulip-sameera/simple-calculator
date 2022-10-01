const MAXIMUM_DIGITS_ALLOWED = 14;

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

//display the digits in the calculator display
function display(string) {
  displayContent.textContent = "";
  displayContent.textContent = string;
}

let equationString = "";
const operators = ["+", "-", "/", "*"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//listen for a click in the window
window.addEventListener("click", function (e) {
  //get the element clicked
  let dataKey = e.target.attributes["data-key"].value;
  if (operators.includes(dataKey) || nums.includes(dataKey)) {
    if (equationString.length !== MAXIMUM_DIGITS_ALLOWED) {
      equationString += e.target.attributes["data-key"].value;
    }
    display(equationString);
  }
});

// clear display
window.addEventListener("click", function (e) {
  if (e.target.attributes["data-key"].value === "clear") {
    equationString = "";
    display("");
  }
});

// delete display values
window.addEventListener("click", function (e) {
  if (e.target.attributes["data-key"].value === "delete") {
    equationString = equationString.slice(0, equationString.length - 1);
    display(equationString);
  }
});
