//js htm/css 담당 => css 위임시킴 -> html위임시킴
//js -> 이벤트
//document.getElementById() or document.querySelector()

const redBtn = document.getElementById("red");
redBtn.addEventListener("click", () => alert("red"));
const blueBtn = document.querySelector("#blue");
blueBtn.addEventListener("click", () => alert("blue"));
const greenBtn = document.querySelectorAll(".btnClass")[2];
greenBtn.addEventListener("click", () => alert("green"));
greenBtn.classList.toggle("btnClass2");
