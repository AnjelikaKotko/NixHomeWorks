const ask = {
  1: {
    question: "Где, если верить пословице, любопытной Варваре нос оторвали?",
    1: "На базаре",
    2: "В метро",
    3: "В институте",
    4: "На площади",
    answer: 1,
    cost: 100,
  },
  2: {
    question: "Кто съел колобка?",
    1: "Дед",
    2: "Медведь",
    3: "Лиса",
    4: "Русалочка",
    answer: 3,
    cost: 200,
  },
  3: {
    question: "Что в декабре-январе делают молодые олени?",
    1: "Купаются в проруби",
    2: "Сбрасывают рога",
    3: "Идут на курсы программирования",
    4: "Играют в 'Как стать миллионером'",
    answer: 2,
    cost: 300,
  },
  4: {
    question: "Как называют манекенщицу супер-класса?",
    1: "Топ-модель",
    2: "Боттом-модель",
    3: "Лефт-модель",
    4: "Райт-модель",
    answer: 1,
    cost: 500,
  },
  5: {
    question: "Кто живёт в Австралии?",
    1: "Злыдня",
    2: "Хитрюга",
    3: "Дюдюка Барбидокская",
    4: "Ехидна",
    answer: 4,
    cost: 1000,
  },
  6: {
    question: "Сколько процентов из жизни ленивцы проводят во сне?",
    1: "50 %",
    2: "60 %",
    3: "75 %",
    4: "90 %",
    answer: 3,
    cost: 2000,
  },
  7: {
    question:
      "Как называется первый в мире высокоуровневый язык программирования?",
    1: "Фортран",
    2: "Ада",
    3: "Планкалкюль",
    4: "Паскаль",
    answer: 3,
    cost: 4000,
  },
  8: {
    question: "Для чего Джоном Маккарти был создан язык программирования Лисп?",
    1: "Для работ по искусственному интеллекту",
    2: "Для управления бытовыми приборами",
    3: "Для реализации компьютерной модели вселенной",
    4: "Для создания игры 'Как стать миллионером'",
    answer: 1,
    cost: 8000,
  },
  9: {
    question:
      "К синтаксису каких языков программирования наиболее близок синтаксис C#?",
    1: "Фортран и Паскаль",
    2: "Ruby и Python",
    3: "C++ и Java",
    4: "JavaScript",
    answer: 3,
    cost: 16000,
  },
  10: {
    question: "Сколько на данный момент существует языков программирования?",
    1: "Около 500",
    2: "Чуть более 1000",
    3: "Более 8000",
    4: "До 10",
    answer: 3,
    cost: 32000,
  },
  11: {
    question: "Какой британский монах больше всех пробыл на троне?",
    1: "Виктория",
    2: "Генрих VIII",
    3: "Елизавета I",
    4: "Ричард I",
    answer: 1,
    cost: 64000,
  },
  12: {
    question: "Найдите название ягоды?",
    1: "Цичкао",
    2: "Плмарикд",
    3: "Печаак",
    4: "Уаибкклн",
    answer: 4,
    cost: 125000,
  },
  13: {
    question: " Как называется боязнь глубины?",
    1: "Батофобия",
    2: "Кимофобия",
    3: "Гидрофобия",
    4: "Таласофобия",
    answer: 1,
    cost: 250000,
  },
  14: {
    question:
      "Олимпийская чемпионка 1994 года в женском одиночном катании - украинка Оксана Баюл. А в каком городе она родилась?",
    1: "Киев",
    2: "Днепр",
    3: "Харько",
    4: "Львов",
    answer: 2,
    cost: 500000,
  },
  15: {
    question:
      "С какого языка началась традиция использования фразы «Hello, world!» в самой первой программе при изучении нового языка программирования?",
    1: "Си",
    2: "C#",
    3: "C++",
    4: "Java",
    answer: 1,
    cost: 1000000,
  },
};

let buttonContainer = document.querySelector(".btn-container");
let question = document.querySelector(".question");
let modal = document.querySelector(".modal-info");

function createButton(num) {
  for (let i = 1; i <= 4; i++) {
    let btn = document.createElement("button");
    btn.innerText = num[i];
    btn.setAttribute("id", i);
    btn.classList.add("btn");
    buttonContainer.append(btn);
  }
}

function getBtnId() {
  let btn = document.querySelectorAll(".btn-container .btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      game.checkAnswer(i + 1);
    });
  }
}

function createCostsElements() {
  let costs = document.querySelector(".cost-container");
  for (let i = 1; i <= 15; i++) {
    let div = document.createElement("div");
    div.classList.add("cost-item");
    div.setAttribute("id", i);
    div.innerText = ask[i].cost;
    costs.append(div);
  }
}

let game = {
  questionNumber: 1,
  cost: 0,
  start() {
    if (this.questionNumber == 1) {
      document.getElementById("start").remove();
      question.classList.remove("hidden");
      createCostsElements();
      document.querySelector(".btn-container-help").classList.remove("hidden");
    }
    this.askQuestion(this.questionNumber);
    game.getCurrentCost();
    game.setTotalCost();
    getBtnId();
  },

  getCurrentCost() {
    let active = document.querySelectorAll(".cost-item");
    for (let n in ask) {
      if (n == this.questionNumber - 1) {
        active[n - 1].classList.add("current-cost");
      } else {
        active[n - 1].classList.remove("current-cost");
      }
    }
  },

  setTotalCost() {
    if (this.questionNumber <= 5) {
      game.cost = 0;
    } else if (this.questionNumber > 5 && this.questionNumber <= 10) {
      game.cost = 1000;
    } else if (this.questionNumber > 10 && this.questionNumber <= 15) {
      game.cost = 32000;
    }
  },

  helpFifty() {
    let btn = [];
    btn.push(
      document.querySelectorAll(
        `.btn:not(:nth-child(${ask[game.questionNumber].answer}))`
      )
    );

    let set = new Set();
    for (let i = 1; i <= 10; i++) {
      let rand = Math.floor(Math.random() * 3);
      set.add(rand);
    }

    let num = Array.from(set);
    num.length = 2;
    num.forEach((item) => {
      btn[0][item].classList.add("hidden");
    });

    document.querySelector(".btn-fifty").classList.add("not-active");
    document.querySelector(".btn-fifty").removeAttribute("onclick");
  },

  showModal() {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".modal-info").classList.remove("hidden");
    this.helpCall();
  },

  closeModal() {
    let btnThanks = document.querySelector(".btnThanks");
    btnThanks.addEventListener("click", function () {
      document.querySelector(".modal").classList.add("hidden");
      document.querySelector(".modal-info").classList.add("hidden");
    });
  },

  helpCall() {
    let friends = document.querySelectorAll(".friends a");
    for (let friend of friends) {
      friend.addEventListener("click", function () {
        modal.innerHTML = "";
        let mas = document.createElement("p");
        mas.classList.add("calling");
        mas.innerHTML = `Звоним ${friend.textContent} ...`;
        modal.append(mas);
        setTimeout(function () {
          modal.innerHTML = "";
        }, 3000);
        setTimeout(game.helpCallAns, 3000);
      });
    }
    document.querySelector(".btn-call").classList.add("not-active");
    document.querySelector(".btn-call").removeAttribute("onclick");
  },

  helpCallAns() {
    let arr = [];
    let btn = document.querySelectorAll(".btn");
    for (let b of btn) {
      if (b.classList.contains("hidden")) {
        continue;
      } else arr.push(b.id);
    }
    let randElement = arr[Math.floor(Math.random() * arr.length)];
    let ans = document.createElement("p");
    ans.classList.add("call-ans");
    ans.innerHTML = `Ваш друг считает, что правильный ответ:
     "${ask[game.questionNumber][randElement]}"`;
    modal.append(ans);

    let btnThanks = document.createElement("button");
    btnThanks.classList.add("btnThanks");
    btnThanks.innerHTML = "Спасибо, друг";
    modal.append(btnThanks);
    game.closeModal();
  },

  askQuestion(questionNumber) {
    question.innerHTML = ask[questionNumber].question;
    createButton(ask[questionNumber]);
  },

  checkAnswer(i) {
    if (i == ask[game.questionNumber].answer) {
      game.questionNumber += 1;
      buttonContainer.innerText = "";
      if (ask.hasOwnProperty(game.questionNumber)) {
        game.start();
      } else {
        question.innerText = `Вы выиграли 1 миллион гривен!!!`;
        document.querySelector(".btn-container-help").remove();
        document
          .querySelector(".cost-item:last-child")
          .classList.add("current-cost");
        document
          .querySelector(".cost-item:nth-child(14)")
          .classList.remove("current-cost");
      }
    } else {
      game.stop();
    }
  },
  stop() {
    if (this.questionNumber <= 5) {
      question.innerText = `Игра окончена! Вы ничего не выиграли!`;
    } else {
      question.innerText = `Игра окончена! Вы выиграли ${this.cost} гривен!`;
    }
    buttonContainer.remove();
    document.querySelector(".btn-container-help").remove();
  },
};
