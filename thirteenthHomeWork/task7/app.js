let panes = document.querySelectorAll(".pane");

panes.forEach((pane) => {
  pane.insertAdjacentHTML(
    "afterBegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.addEventListener("click", () => {
    pane.remove();
  });
});
