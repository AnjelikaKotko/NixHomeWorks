function showModal() {
  let div = document.createElement("div");
  div.classList.add("modal");
  div.classList.add("block");
  document.body.style.overflow = "hidden";
  document.body.append(div);
}

function closeModal() {
  document.querySelector(".modal").remove();
  document.body.style.overflow = "";
}

function showPrompt(html, callback) {
  showModal();

  let form = document.querySelector(".form");
  let question = document.querySelector(".question");

  question.innerHTML = html;
  form.text.value = "";

  form.classList.add("open");
  form.text.focus();

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == "Tab" && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  function complete(value) {
    closeModal();
    form.classList.remove("open");
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == "") return false;
    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == "Escape") {
      complete(null);
    }
  };
}

document.querySelector("button").onclick = function () {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
};
