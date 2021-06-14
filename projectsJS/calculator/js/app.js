let calculator = document.querySelector(".calculator");

"C%/789*456-123+0.=".split("").map((symbol) => {
  document
    .querySelector(".buttons-container")
    .insertAdjacentHTML(
      "beforeend",
      `<button value="${symbol}">${symbol}</button>`
    );
});

let nums = document.querySelectorAll(`button`);
nums.forEach((num) => {
  if ((num.value >= 0 && num.value <= 9) || num.value == ".") {
    num.classList.add("num");
  } else if (
    num.value == "+" ||
    num.value == "-" ||
    num.value == "/" ||
    num.value == "*"
  ) {
    num.classList.add("operator");
  }
});

let output = document.querySelector("output");
let equal = document.querySelector('[value="="]');
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let currentNumber = "";
let firstNumber = "";
let result;
let operator;

function setNum() {
  if (result) {
    currentNumber = this.value;
    result = "";
  } else {
    currentNumber += this.value;
  }
  output.innerHTML = currentNumber;
}

function moveNum() {
  firstNumber = currentNumber;
  currentNumber = "";
  operator = this.getAttribute("value");
}

function displayNum() {
  firstNumber = parseFloat(firstNumber);
  currentNumber = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = firstNumber + currentNumber;
      break;

    case "-":
      result = firstNumber - currentNumber;
      break;

    case "*":
      result = firstNumber * currentNumber;
      break;

    case "/":
      result = firstNumber / currentNumber;
      break;

    default:
      result = currentNumber;
  }

  output.innerHTML = result;

  firstNumber = 0;
  currentNumber = result;
}
document.querySelector("[value='%']").addEventListener("click", () => {
  if (operator == "+" || operator == "-") {
    currentNumber = (currentNumber / 100) * firstNumber;
  } else if (operator == "*" || operator == "/") {
    currentNumber = currentNumber / 100;
  }
  output.innerHTML = currentNumber;
});
function clearAll() {
  currentNumber = "";
  firstNumber = "";
  output.innerHTML = "0";
}

for (let i = 0, l = numbers.length; i < l; i++) {
  numbers[i].onclick = setNum;
}
for (let i = 0, l = operators.length; i < l; i++) {
  operators[i].onclick = moveNum;
}
equal.onclick = displayNum;
document.querySelector('[value="C"]').onclick = clearAll;
