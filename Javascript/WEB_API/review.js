const cnt_ins = document.getElementById("cnt_ins");
const cnt_button = document.getElementById("cnt_button");
const cnt_span = document.getElementById("cnt_span");

cnt_ins.addEventListener("input", (e) => {
  cnt_span.innerText = cnt_ins.value;
});

cnt_button.addEventListener("click", () => {
  const countDown = setInterval(() => {
    cnt_span.innerText = Number(cnt_span.innerText) - 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(countDown);
  }, Number(cnt_span.innerText) * 1000);
});

const nowTime = document.getElementById("nowTime");

setInterval(() => {
  const time = new Date().toLocaleTimeString();
  nowTime.innerHTML = time;
}, 1000);
