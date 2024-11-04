const list = [1, 3, 5, 7, 9];

const plusFive = (x) => {
  return x + 5;
};

//map :요소들을 바꾸기
const a = list.map(plusFive);
console.log(a);

//filtter : 요소 거르기!
// const underFive = (x) => {
//   return x < 5;
// };

// list.filter(underFive);

//3의배수만 살리기
const three = (x) => {
  return x % 3 == 0;
};
list.filter(three);

//every & some : 요소가 모두 있는지 & 요소가 하나라도 있는지 물어보기

const over5 = (x) => 5;
list.every(over5); //false
list.some(over5); //true
