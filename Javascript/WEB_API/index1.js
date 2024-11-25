// 시간 컨트롤(=타이머)

//특정 시간 후에 함수 실행!
// console.log("1 sec");
// setTimeout(() => {
//   console.log("3 sec");
// }, 3000); // 3초후 실행
// console.log("2 sec");

// setTimeout(() => {
//   console.log("2 sec settime");
// }, 2000);

const rocket = document.getElementById("rocket");
const sec = document.getElementById("sec");

rocket.addEventListener("click", () => countDownFunc());

const countDownFunc = () => {
  const countDown = setInterval(() => {
    // sec.innerHTML = Number(sec.innerHTML) < 1 ? 0 : Number(sec.innerHTML) - 1;
    sec.innerHTML = Number(sec.innerHTML) - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(countDown);
    alert("rocket 🚀");
  }, 5000);
};
