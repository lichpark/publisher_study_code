const box = document.getElementById("box");
const add = document.getElementById("add");

add.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "🦐";
  box.appendChild(span);
});
