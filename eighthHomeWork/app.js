// task 1

// let i = 3;
// while (i) {
//   alert( i-- );
// }

// Последним выведет 1. При i=0 цикл остановится.

// task 2

let A = 2;
let B = 5;
let C = 4;

if (A < B && B < C) {
  A *= 2;
  B *= 2;
  C *= 2;
} else {
  A *= -1;
  B *= -1;
  C *= -1;
}
console.log(A, B, C);

// task 3

A = 2;
B = 3;
C = 4;

if ((A < B && B < C) || (A > B && B > C)) {
  A *= 2;
  B *= 2;
  C *= 2;
} else {
  A *= -1;
  B *= -1;
  C *= -1;
}
console.log(A, B, C);

// task 4

A = 4;
B = 100;
C = 15;

if (Math.abs(A - B) < Math.abs(A - C)) {
  console.log(
    `Точка В ближе, она находится на расстоянии ${Math.abs(
      A - B
    )} пунктов от точки А`
  );
} else {
  console.log(
    `Точка C ближе, она находится на расстоянии ${Math.abs(
      A - C
    )} пунктов от точки А`
  );
}

// task 5

let x = 4;
let y = 0;

if (x === 0 && y === 0) {
  console.log(0);
} else if (y === 0 && (x < 0 || x > 0)) {
  console.log(1);
} else if (x === 0 && (y < 0 || y > 0)) {
  console.log(2);
} else {
  console.log(3);
}

// task 6

x = 3;
y = -5;

if (x > 0 && y > 0) {
  console.log("Первая координатная четверть");
} else if (x < 0 && y > 0) {
  console.log("Вторая координатная четверть");
} else if (x < 0 && y < 0) {
  console.log("Третья координатная четверть");
} else if (x > 0 && y < 0) {
  console.log("Четвертая координатная четверть");
}

// task 7

let x1 = 1;
let y1 = 1;
let x2 = 5;
let y2 = 1;
let x3 = 1;
let y3 = 4;
let x4, y4;

if (x1 == x2) {
  x4 = x3;
} else if (x1 == x3) {
  x4 = x2;
} else if (x2 == x3) {
  x4 = x1;
}

if (y1 == y2) {
  y4 = y3;
} else if (y1 == y3) {
  y4 = y2;
} else if (y2 == y3) {
  y4 = y1;
}

console.log(`Координаты четвертой точки по оси Х: ${x4}, Y: ${y4}`);

// task 8

let year = 2000;
let days = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ? 366 : 365;

console.log(`В ${year} году ${days} дней.`);

// task 9

let num = -7;

if (num % 2 == 0 && num > 0) {
  console.log(`${num} - положительное четное число`);
} else if (num % 2 == 1 && num > 0) {
  console.log(`${num} - положительное нечетное число`);
} else if (num % 2 == 0 && num < 0) {
  console.log(`${num} - отрицательное четное число`);
} else if (num % 2 == -1 && num < 0) {
  console.log(`${num} - отрицательное нечетное число`);
} else {
  console.log(`${num} - нулевое число`);
}

// task 10

let number = 356;
let numberDigits;

let evenOdd = number % 2 == 0 ? "Четное " : "Нечетное ";

if (number > 0 && number < 10) {
  numberDigits = "однозначное число";
} else if (number > 9 && number < 100) {
  numberDigits = "двузначное число";
} else if (number > 99 && number < 1000) {
  numberDigits = "трехзначное число";
}

console.log(number + " - " + evenOdd + numberDigits);

// task 11

// let i = 0;
// while (++i < 5) alert( i );
// выведет от 1 до 4

// let i = 0;
// while (i++ < 5) alert( i );
// выведет от 1 до 5, так как при сравнении i++ будет участвовать значение до увелечения, а в alert выводится увеличенное

// task 12

// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );
// оба цикла выведут от 0 до 4, так как увеличение i выполняется отдельно от проверки, нет разницы между ++i и i++

// task 13

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// task 14

let i = 0;

while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// task 15

// while (true) {
//   let number = prompt("Введите число больше 100");
//   if (number > 100 || number === null) break;
// }

// task 16

let n = 10;

label: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label;
  }
  console.log(i);
}

// task 17

// let a = +prompt("Введите число");
// let b = +prompt("Введите число");

// console.log((a + b) / 2);

// task 18

// let a1 = +prompt("Введите число");
// console.log(`Квадрат числа ${a1} = ${Math.pow(a1, 2)}`);

// task 19

// let a2 = +prompt("Введите число");
// let b2 = +prompt("Введите число");
// let c2 = +prompt("Введите число");

// console.log(
//   `Разница наибольшего и наименьшего из введенных чисел = ${
//     Math.max(a2, b2, c2) - Math.min(a2, b2, c2)
//   }`
// );

// task 20

// let a3 = +prompt("Введите число");
// if (a3 % 2 == 0) {
//   console.log("Введено четное число");
// } else if (a3 % 2 == 1) {
//   console.log("Введено нечетное число");
// }

// task 21

let num3 = 78;
let total;
let digits = num3.toString();

if (digits.length == 2) {
  total = +digits[0] + +digits[1];
  console.log(`В числе ${digits.length} цифры. Сумма цифр = ${total}`);
} else if (digits.length == 1) {
  total = +digits[0];
  console.log(`В числе ${digits.length} цифра. Это цифра - ${total}`);
}

// task 22

// let coefficient = 2.54;

// let centimeter = +prompt("Введите сантиметры");
// let toInch = centimeter / coefficient;
// alert(`${centimeter} сантиметра = ${toInch.toFixed(1)} дюйма`);
// let inch = +prompt("Введите дюймы");
// let toCentimeter = inch * coefficient;
// alert(`${inch} дюйма =  ${toCentimeter.toFixed(1)} сантиметра`);

// task 23  Пока базово, в рамках пройденного материала, буду расширять))

// let answer;
// let questions = {
//   1: {
//     question: "Сколько будет 2 + 2?",
//     answers: {
//       correct: 4,
//       uncorrect: 6,
//     },
//   },
//   2: {
//     question: "Сколько будет 4 * 2?",
//     answers: {
//       correct: 8,
//       uncorrect: 6,
//     },
//   },
// };

// for (let key in questions) {
//   answer = prompt(`${questions[key].question}
//   Варианты ответа: ${questions[key].answers.correct} или ${questions[key].answers.uncorrect}
//   `);
//   if (answer == questions[key].answers.correct) {
//     alert("Правильно!");
//   } else if (answer == questions[key].answers.uncorrect) {
//     alert("Не правильно!");
//   } else {
//     alert("Таких вариантов не было!");
//   }
// }

// task 24

let num4 = 145;
let digitsNum4 = num4.toString();

if (num4 % 2 == 0) {
  console.log(
    `Сумма цифр четного трехзначного числа ${num4} = ${
      +digitsNum4[0] + +digitsNum4[1] + +digitsNum4[2]
    }`
  );
} else if (num4 % 2 == 1) {
  console.log(
    `Произведение цифр нечетного трехзначного числа ${num4} = ${
      +digitsNum4[0] * +digitsNum4[1] * +digitsNum4[2]
    }`
  );
}

// task 25

let AB = 20;
let BC = 5;
let AC = 6;

if (AB + BC > AC && BC + AC > AB && AC + AB > BC) {
  console.log("Треугольник существует");
} else {
  console.log("Треугольник не существует");
}

// task 26

x = 4;
y = 9;
let r = 10;
let hyp = Math.sqrt(x ** 2 + y ** 2);

if (hyp > r) {
  console.log("Точка не лежит внутри окружности");
} else {
  console.log("Точка лежит внутри окружности");
}

// task 27

let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

// task 28

const user1 = {
  name: "John",
};
user1.name = "Pete";

// можно изменить содержимое объекта, не меняется только сама переменная

// task 29

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// task 30

// let i = 0;
// while (i != 10) {
// i += 0.2;
// }

// Цикл бесконечный, потому что i никогда не будет равен 10 из-за потери точности вычислений с десятичными дробями
