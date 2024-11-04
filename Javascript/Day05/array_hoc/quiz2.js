const list = [
  { name: "hot americano", price: 2000, shot: 2 },
  { name: "ice americano", price: 2500, shot: 2 },
  { name: "hot latte", price: 3000, shot: 2 },
  { name: "ice latte", price: 3500, shot: 2 },
  { name: "ice mocha", price: 3500, shot: 3 },
];

//list 에서 이름 모두 대문자화
//const nameUpper = (x) => x.name.toUpperCase();
// const nameUpper = (x) => {
//   x.name = x.name.toUpperCase();
//   return x.name;
// };
// const anw1 = list.map(nameUpper);
// console.log(anw1);

//2.리스트에서 가격 인플레이션 으로 10% 인상
//const priceInple = (x) => Math.round(x.price * 1.1);
// const priceInflation = (x) => {
//   x.price = Math.round(x.price * 1.1);
//   return x.price;
// };
// const anw2 = list.map(priceInflation);
// console.log(anw2);

//리스트에서 샷 투샷 추가하기
const twoplue = (x) => {
  x.shot = x.shot + 2;
  return x.shot;
};
const anw3 = list.map(twoplue);
console.log(anw3);
//price를 엔화를 적용한 yenPrice 추가

const yenPrice = (x) => {
  x.yenPrice = Math.round(x.price * 0.11);
  return x.yenPrice;
};
const anw4 = list.map(yenPrice);
console.log(anw4);

console.log(list);
