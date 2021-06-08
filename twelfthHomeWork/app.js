// task 1

console.log(document.querySelector("div"));
console.log(document.querySelector("ul"));
console.log(document.querySelector("ul li:last-child"));

// task 2

let table = document.querySelector("table.task2");

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}

// task 3

console.log(document.querySelector("table#age-table"));
console.log(document.querySelectorAll("table#age-table label"));
console.log(document.querySelector(`table#age-table tr td`));
console.log(document.querySelector(`form[name="search"]`));
console.log(document.querySelector(`form[name="search"] label input`));
console.log(document.querySelector(`form[name="search"] input[type="submit"]`));

// task 4

// for (let li of document.querySelectorAll(".task4 li")) {
//   console.log(li.firstChild.data.trim());
//   console.log(
//     `В "${li.firstChild.data.trim()}" - ${
//       li.getElementsByTagName("li").length
//     } вложенных элементов li`
//   );
// }

// task 5

let elem = document.querySelector("#elem");

function clear(elem) {
  elem.innerHTML = "";
}
clear(elem);

console.log(elem);

// task 6

let containerTask6 = document.querySelector(".task6");

let ul = document.createElement("ul");
containerTask6.appendChild(ul);

// while (true) {
//   let text = prompt("Введите текст для элемента списка");
//   if (!text) break;
//   let li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// };

// task 7

for (let li of document.querySelectorAll(".task7 li")) {
  if (li.childNodes[1]) {
    let num = document.createElement("span");
    num.innerHTML = `[${li.getElementsByTagName("li").length}]`;
    li.childNodes[0].after(num);
  }
}

// task 8

let containerTask8 = document.querySelector(".task8");

function createCalendar(elem, year, month) {
  let newMonth = month - 1;
  let date = new Date(year, newMonth);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  for (let i = 0; i < getDay(date); i++) {
    table += "<td></td>";
  }

  while (date.getMonth() == newMonth) {
    table += "<td>" + date.getDate() + "</td>";

    if (getDay(date) % 7 == 6) {
      table += "</tr><tr>";
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += "<td></td>";
    }
  }

  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(d) {
  let day = d.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(containerTask8, 2021, 6);

// task 9 первый вариант

// let liTask9 = document.querySelector("#ul li:last-child");

// for (let i = 2; i <= 3; i++) {
//   let newLi = document.createElement("li");
//   newLi.innerHTML = `${i}`;
//   liTask9.before(newLi);
// }

// task 9 второй вариант

let ulTask9 = document.querySelector("#ul");
let li4 = document.querySelector("#two");

li4.insertAdjacentHTML("beforeBegin", "<li>2</li><li>3</li>");
