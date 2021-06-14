let min = document.querySelector("#min");
let max = document.querySelector("#max");
let amount = document.querySelector("#amount");
let btn = document.querySelector("button");
let output = document.querySelector("output");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let arrRandomNamber = [];
  function randomNumber(amoumt, min, max) {
    for (let i = 0; i < amoumt; i++) {
      let randomN = Math.floor(Math.random() * (max - min + 1)) + min;
      arrRandomNamber.push(randomN);
    }
  }
  randomNumber(+amount.value, +min.value, +max.value);
  output.innerHTML = arrRandomNamber;
});
