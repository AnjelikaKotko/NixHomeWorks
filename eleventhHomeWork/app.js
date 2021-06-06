// task 1

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let sorted = arr.slice().sort();
  return sorted;
}
console.log(copySorted(arr));
console.log(arr);

// task 2

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names);

// task 3

function getAverageAge(users) {
  let usersAge =
    users.reduce((init, user) => init + user.age, 0) / users.length;
  return usersAge;
}

console.log(getAverageAge(users));

// task 4

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(strings));

// task 5

function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(-1)(5));

// task 6

let arr1 = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return (item) => a <= item && item <= b;
}

console.log(arr1.filter(inBetween(3, 6)));

function inArray(arr) {
  return (item) => arr.includes(item);
}
console.log(arr1.filter(inArray([1, 22, 5])));

// task 7

function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}
console.log(factorial(5));

// task 8

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(77));
