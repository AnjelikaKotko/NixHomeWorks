//10-1

let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
//alert(fruits.length); // выводит 4, так как массив является обьектом, и эти два массива - ссылки на один и тот же массив

//10-2

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

//10-3

let arr = ["a", "b"];
arr.push(function () {
  //alert(this);
});
arr[2](); // выводит массив, в котором 3 элемента. arr[2]() по сути является вызовом метода объекта, поэтому в качестве this он получает arr

// task 1

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let testObject = { 1: "a" };
console.log(isEmpty(testObject));

// task 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// task 3

// function readNumber() {
//   let number;
//   do {
//     number = prompt("Введите числовое значение");
//   } while (!isFinite(number));
//   if (number === null || number === "") return null;
//   return +number;
// }
// console.log(readNumber());

// task 4

function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(10, 20));

// task 5

function randomInteger(min, max) {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}
console.log(randomInteger(10, 20));

// task 6

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

// task 7

function checkSpam(str) {
  return (
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
  );
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// task 8

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "...";
  }
  return str;
}
console.log(truncate("Какая-то длинная строка", 15));

// task 9

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue("$120") === 120);

// task 10

// function sumInput() {
//   let array = [];
//   while (true) {
//     let num = prompt("Введите число");
//     if (!isFinite(num) || num == "" || num == null) break;

//     array.push(+num);
//   }
//   let total = 0;
//   for (let arrayNum of array) {
//     total += arrayNum;
//   }
//   return total;
// }

// console.log(sumInput());

// task 11

function getMaxSubSum(arr) {
  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSubSum = Math.max(maxSubSum, sum);
    }
  }

  return maxSubSum;
}
console.log(getMaxSubSum([2, -1, 2, 3, -9]));

// task 12

// обе функции работают одинаково

// task 13

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// task 14

function min(a, b) {
  return a > b ? b : a;
}

console.log(min(20, 3));

// task 15

function pow(x, n) {
  let total = x;

  for (let i = 1; i < n; i++) {
    total *= x;
  }
  return total;
}
// let x = +prompt("Введите число");
// let y = +prompt("Введите степень");
// console.log(pow(x, y));

// task 16

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// task 17

function calcHowLong(pricePalm, salary, cost) {
  let time = Math.ceil(pricePalm / (salary - cost));
  console.log(pricePalm, salary, cost);
  return time;
}
console.log(
  "Прийдется подождать приблизительно " +
    calcHowLong(8000, 3333, 1750) +
    " месяцев"
);

// task 18

function calcNegativeTotal() {
  let total = 0;
  for (let i = 0; i < 10; i++) {
    let num = +prompt("введите число");
    if (num < 0) {
      total += num;
    }
  }
  return total;
}
console.log(calcNegativeTotal());
