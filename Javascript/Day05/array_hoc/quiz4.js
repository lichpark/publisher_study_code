const menu = [
  { name: "cookie", price: 3000, kcal: 400 },
  { name: "doughhnut", price: 3500, kcal: 500 },
  { name: "yougurt", price: 2000, kcal: 200 },
  { name: "chocolatge", price: 3000, kcal: 500 },
];
//1.가격 3000이하면 살리기
const under3k = (x) => x.price <= 3000;
const menuUnder3k = [];

const q4a1 = menu.filter(under3k);
console.log(q4a1);
//console.log(menuUnder3k);

//2.칼로리 300보다 작은거만 살리기
const under3m = (x) => x.kcal < 300;
const q4a2 = menu.filter(under3m);
console.log(q4a2);
