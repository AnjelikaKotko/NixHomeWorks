field.addEventListener("click", (e) => {
  let field = document.querySelector("#field");
  let ball = document.querySelector("#ball");
  let coordsOfField = field.getBoundingClientRect();

  ball.classList.add("animation");
  setTimeout(() => ball.classList.remove("animation"), 1500);

  let leftBallsCoord =
    e.clientX - coordsOfField.left - field.clientLeft - ball.clientHeight / 2;
  let topBallsCoord =
    e.clientY - coordsOfField.top - field.clientTop - ball.clientHeight / 2;

  if (leftBallsCoord < 0) leftBallsCoord = 0;
  if (topBallsCoord < 0) topBallsCoord = 0;
  if (leftBallsCoord + ball.clientWidth > field.clientWidth) {
    leftBallsCoord = field.clientWidth - ball.clientWidth;
  }
  if (topBallsCoord + ball.clientHeight > field.clientHeight) {
    topBallsCoord = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = leftBallsCoord + "px";
  ball.style.top = topBallsCoord + "px";
});
