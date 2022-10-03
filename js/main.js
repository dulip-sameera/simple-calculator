const MAX_ALLOWED_DIGITS = 14;

// calculator functions

// 1. add function
function add(num1, num2) {
  return num1 + num2;
}

// 2. subtract function
function subtract(num1, num2) {
  return num1 - num2;
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

// display the given value
function display(value) {
  displayContent.textContent = "";

  if (Array.isArray(value) && value.some((item) => operators.includes(item))) {
    previous.textContent = value[0] + value[1];
    displayContent.textContent = value[2];
  } else if (Array.isArray(value)) {
    displayContent.textContent = value.join("").toString();
  } else if (!Array.isArray(value)) {
    previous.textContent = "";
    displayContent.textContent = value;
  }
}

// get the clicked input
let finalValue = 0;
let input = ["", "", ""];
const operators = ["+", "-", "*", "/", "="];
window.addEventListener("click", function (e) {
  let value = e.target.attributes["data-key"].value;
  // issue: cant press new number after pressing =
  //        new number append to the final value
  // fixed
  if (input[1] === "=" && !operators.includes(value)) {
    input = ["", "", ""];
  } else if (input[1] === "=" && operators.includes(value)) {
    input[1] = value;
  }

  let count = 0;
  if (operators.includes(value)) {
    count++;
    // check whether input already hasn't an operator
    if (!input.some((item) => operators.includes(item))) {
      input[count] = value;
    }
  } else {
    {
      // check whether input already has an operator
      if (
        input.some((item) => operators.includes(item)) &&
        input[2].length < MAX_ALLOWED_DIGITS
      ) {
        count += 2;
        input[count] += value;
      }

      if (
        input[0].length < MAX_ALLOWED_DIGITS &&
        !operators.includes(input[1])
      ) {
        input[count] += value;
      }
    }
  }
  display(input);

  console.log("1:" + input[0].length);
  console.log("2:" + input[2].length);
  console.log(input.length);

  // runs the calculation and display the value
  if (input[2] !== "" && operators.includes(value)) {
    let num1 = input[0] === "" ? 0 : Number(input[0]);
    let operator = input[1];
    let num2 = input[2] === "" ? 0 : Number(input[2]);
    finalValue = operate(num1, num2, operator);
    input[0] = finalValue;
    input[1] = value === "=" ? "=" : value;
    input[2] = "";
    display(finalValue);
  }
});

// testing...
