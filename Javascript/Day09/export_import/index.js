import { minus, plus } from "./calc.js";
import { buttonAlert } from "./greeting.js";

console.log(plus(2, 3));
console.log(minus(10, 1));

//클릭시 안녕하세요 함수
//클릭시 수고하세요 함수
//html에 안녕버튼, 수고버튼 만들고 index.js 두 함수 이벤트 처리하고 실행되게
//함수는 greeting.js 에
//script module 일때는 함수앞에 const 같은거 선언 안해주면 에러난다!!

const greetingEventArr = [
  { name: "hello", text: "안녕하세요" },
  { name: "bye", text: "수고하세요" },
];

const eventEnchant = (obj) => {
  const Ele = document.getElementById(`${obj.name}`);
  Ele.addEventListener("click", () => buttonAlert(obj.text));
};

greetingEventArr.forEach((v) => eventEnchant(v));
