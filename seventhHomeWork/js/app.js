// 1 задание

let admin, name;
name = "Anjelika";
admin = name;
//alert(admin);

// 2 задание

// для BIRTHDAY логично использовать заглавные буквы, так как его значение известно до начала исполнения скрипта. Значение age неизвестно до загрузки страницы, поэтому её имя надо записывать строчными буквами.

// 3 задание

name = "Ilya";
//alert(`hello ${1}`); // 'hello 1'
//alert(`hello ${"name"}`); // 'hello name'
//alert(`hello ${name}`); // 'hello Ilya'

// 4 задание

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // Infinity
" -9 " + 5; // " -9 5"
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // NaN

// 5 задание

let a = 1,
  b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // d = 1, b = 2

// 6 задание

let a1 = 2;
let x = 1 + (a1 *= 2); // a1 = 4, x = 5

// 7 задание

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

// 8 задание

//let userName = prompt("Ваше имя?", "");
//alert(userName);

// 9 задание

// Выведется, так как "0" == true

// 10 задание

// let value = prompt('Каково "официальное" название JavaScript?');
// if (value == "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// 11 задание

// let value = prompt("Введите число");
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// 12 задание

result = a + b < 4 ? "Мало" : "Много";

// 13 задание

// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

// 14 задание

//alert( null || 2 || undefined ); // 2

// 15 задание

//alert(alert(1) || 2 || alert(3)); // выведет 1, потом 2, так как первый алерт вернет undefined

// 16 задание

//alert( 1 && null && 2 ); // null

// 17 задание

//alert( alert(1) && alert(2) ); // 1, затем undefined

// 18 задание

//alert( null || 2 && 3 || 4 ); // 3

// 19 задание
let age;

if (age >= 14 && age <= 90) {
}

// 20 задание

if (!(age >= 14 && age <= 90)) {
}
if (age < 14 && age > 90) {
}

// 21 задание

//if (-1 || 0) alert( 'first' ); // выполнится, -1
if (-1 && 0) alert("second"); // не выполнится, 0
//if (null || -1 && 1) alert( 'third' ); // выполнится, 1

// 22 задание

// let userName = prompt("Who`s there?");

// if (userName == "Админ") {
//   let password = prompt("Пароль?");
//   if (password == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (password == "" || password == null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (userName == "" || userName == null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// 23 задание

let browser;

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

// 24 задание

//let a = +prompt("a?", "");

switch (a) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log("2,3");
    break;
}

// 25 задание

let num = -1;

if (num > 0) {
  console.log(++num);
} else {
  console.log(num);
}

// 26 задание

let num1 = 2;

if (num1 > 0) {
  console.log(num1 + 1);
} else {
  console.log(num1 - 2);
}

// 27 задание

let num2 = 7;

if (num2 > 0) {
  console.log(num2 + 1);
} else if (num2 < 0) {
  console.log(num2 - 2);
} else {
  num2 = 10;
  console.log(num2);
}

// 28 задание

let counter = 0;

if (num > 0) {
  counter++;
}
if (num1 > 0) {
  counter++;
}
if (num2 > 0) {
  counter++;
}
console.log(counter);

// 29 задание

let counterNegative = 0;
let counterPositive = 0;

if (num > 0) {
  counterPositive++;
} else if (num < 0) {
  counterNegative++;
}
if (num1 > 0) {
  counterPositive++;
} else if (num1 < 0) {
  counterNegative++;
}
if (num2 > 0) {
  counterPositive++;
} else if (num2 < 0) {
  counterNegative++;
}
console.log(counterPositive, counterNegative);

// 30 задание

if (num > num1) {
  console.log(num);
} else if (num < num1) {
  console.log(num1);
}

// 31 задание

if (num1 > num2) {
  console.log("Порядковый номер меньшего числа 2");
} else if (num1 < num2) {
  console.log("Порядковый номер меньшего числа 1");
}

// 32 задание

if (num1 > num2) {
  console.log(num1);
  console.log(num2);
} else if (num1 < num2) {
  console.log(num2);
  console.log(num1);
}

// 33 задание

let A = 4;
let B = 2;

if (A > B) {
  A = A + B;
  B = A - B;
  A = A - B;
}
console.log("A = " + A, "B = " + B);

// 34 задание

let A1 = 4;
let B1 = 2;

if (A1 === B1) {
  A1 = 0;
  B1 = 0;
} else {
  A1 = B1 = A1 + B1;
}
console.log(A1, B1);

// 35 задание

let A2 = 2;
let B2 = 4;

if (A2 === B2) {
  A2 = B2 = 0;
} else if (A2 > B2) {
  B2 = A2;
} else {
  A2 = B2;
}
console.log(A2, B2);

// 36 задание

let a2 = 300;
let b2 = 80;
let c2 = 50;

if (a2 < b2 && a2 < c2) {
  console.log("Наименьшее число: a2 = " + a2);
} else if (b2 < c2 && b2 < a2) {
  console.log("Наименьшее число: b2 = " + b2);
} else {
  console.log("Наименьшее число: c2 = " + c2);
}

// 37 задание

if ((a2 < b2 && a2 > c2) || (a2 > b2 && a2 < c2)) {
  console.log("Среднее число: a2 = " + a2);
} else if ((b2 < a2 && b2 > c2) || (b2 > a2 && b2 < c2)) {
  console.log("Среднее число: b2 = " + b2);
} else {
  console.log("Среднее число: c2 = " + c2);
}

// 37 задание альтернативный вариант

if (a2 < b2) {
  if (b2 < c2) {
    console.log("Среднее число: b2 = " + b2);
  } else if (a2 < c2) {
    console.log("Среднее число: c2 = " + c2);
  } else {
    console.log("Среднее число: a2 = " + a2);
  }
} else if (b2 > c2) {
  console.log("Среднее число: b2 = " + b2);
} else if (a2 < c2) {
  console.log("Среднее число: a2 = " + a2);
} else {
  console.log("Среднее число: c2 = " + c2);
}

// 38 задание

if (a2 < b2) {
  if (b2 < c2) {
    console.log("Наименьшее число: a2 = " + a2);
    console.log("Наибольшее число: c2 = " + c2);
  } else if (a2 < c2) {
    console.log("Наименьшее число: a2 = " + a2);
    console.log("Наибольшее число: b2 = " + b2);
  } else {
    console.log("Наименьшее число: c2 = " + c2);
    console.log("Наибольшее число: b2 = " + b2);
  }
} else {
  if (b2 > c2) {
    console.log("Наименьшее число: c2 = " + c2);
    console.log("Наибольшее число: a2 = " + a2);
  } else if (a2 < c2) {
    console.log("Наименьшее число: b2 = " + b2);
    console.log("Наибольшее число: c2 = " + c2);
  } else {
    console.log("Наименьшее число: b2 = " + b2);
    console.log("Наибольшее число: a2 = " + a2);
  }
}

// 39 задание

if (a2 <= b2 && a2 <= c2) {
  console.log(`Сумма двух наибольших чисел: ${b2 + c2}`);
} else if (b2 <= c2 && b2 <= a2) {
  console.log(`Сумма двух наибольших чисел: ${a2 + c2}`);
} else {
  console.log(`Сумма двух наибольших чисел: ${a2 + b2}`);
}

// 40 задание

let a3 = 2;
let b3 = 3;
let c3 = 2;

if (a3 == b3) {
  console.log("Отличное число по номером 3");
} else if (a3 == c3) {
  console.log("Отличное число по номером 2");
} else if (c3 == b3) {
  console.log("Отличное число по номером 1");
}
