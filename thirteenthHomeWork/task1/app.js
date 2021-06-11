function showNotification(top = 0, right = 0, html, className) {
  let div = document.createElement("div");
  div.classList.add("notification");
  div.classList.add(className);
  div.innerHTML = html;
  div.style.top = top + "px";
  div.style.right = right + "px";
  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}

showNotification(10, 10, "hello", "welcome");
