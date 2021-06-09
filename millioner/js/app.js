const ask = {
  1: {
    question: "Сколько на данный момент существует языков программирования?",
    1: "Около 500",
    2: "Чуть более 1000",
    3: "Более 8000",
    4: "До 10",
    answer: 3,
  },
  2: {
    question:
      "Как называется первый в мире высокоуровневый язык программирования?",
    1: "Фортран",
    2: "Ада",
    3: "Планкалкюль",
    4: "Паскаль",
    answer: 3,
  },
  3: {
    question: "Для чего Джоном Маккарти был создан язык программирования Лисп?",
    1: "Для работ по искусственному интеллекту",
    2: "Для управления бытовыми приборами",
    3: "Для реализации компьютерной модели вселенной",
    4: "Для создания игры 'Как стать миллионером'",
    answer: 1,
  },
  4: {
    question:
      "К синтаксису каких языков программирования наиболее близок синтаксис C#?",
    1: "Фортран и Паскаль",
    2: "Ruby и Python",
    3: "C++ и Java",
    4: "JavaScript",
    answer: 3,
  },
  5: {
    question:
      "С какого языка началась традиция использования фразы «Hello, world!» в самой первой программе при изучении нового языка программирования?",
    1: "Си",
    2: "C#",
    3: "C++",
    4: "Java",
    answer: 1,
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
let game = {
  questionNumber: 1,
  start() {
    if (this.questionNumber == 1) {
      document.getElementById("start").remove();
      question.classList.remove("hidden");
      document.querySelector(".btn-container-help").classList.remove("hidden");
    }
    this.askQuestion(this.questionNumber);
    getBtnId();
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
    this.helpCall();
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
    console.log(arr, randElement);
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

  closeModal() {
    let btnThanks = document.querySelector(".btnThanks");
    let modal = document.querySelector(".modal");
    btnThanks.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
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
        question.innerText = `Вы победили!`;
      }
    } else {
      game.stop();
    }
  },
  stop() {
    question.innerText = `Игра окончена!`;
    buttonContainer.remove();
    document.querySelector(".btn-container-help").remove();
  },
};
