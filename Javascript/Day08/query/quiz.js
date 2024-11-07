const overStandard = 10;
const standardColor = "black";
const overColor = "red";

// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");

const minus = document.querySelectorAll(".btnClass").item(0);
const plus = document.querySelectorAll(".btnClass").item(1);

plus.addEventListener("click", () => countText("+"));
minus.addEventListener("click", () => countText("-"));

countText = (str) => {
  const inner = document.querySelector("span");
  const num =
    str == "+" ? Number(inner.innerHTML) + 1 : Number(inner.innerHTML) - 1;
  num < 0
    ? resSpan(inner, 0, standardColor)
    : num >= overStandard
    ? resSpan(inner, num, overColor)
    : resSpan(inner, num, standardColor);
};

resSpan = (docu, str, color) => {
  docu.style.color = color;
  docu.innerHTML = str;
};
