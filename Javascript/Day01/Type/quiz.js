//유저에게 첫번째 ,두번째 숫자 물어보고 alert로 더해서 나타내기
// const first = prompt("input first number: ");
// const second = prompt("input second number: ");

// let sum = Number(first) + Number(second);
// alert(
//   `first number : ${first}, second number: ${second}, sum number is: ${sum}`
// );

//유저에게 나이 물어보고, 몇년생인지 alert
//유저가 원화 입력하면 엔화로 바궈서 alert

const age = prompt("나이 입력");

const year = 2025 - Number(age);
alert(`나이: ${age} ,출생년도: ${year}`);

const won = prompt("원화입력");
const wonrate = 0.1108;
const yen = Number(won) * wonrate;

alert(`원화: ${won} ,엔화: ${yen.toFixed(2)} 엔`);

const btc = prompt("비트코인");
const btcrate = 99851484.21;
const btctocoin = Number(btc) * btcrate;

alert(`비트코인: ${btc} ,원화: ${Math.round(btctocoin)} 원`);
