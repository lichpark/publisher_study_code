const fruits = ["apple", "banana", "kiwi", "pineapple", "mango"];
//과일리스트에서 과인단어에 알파벳 k,m,p가 하나라도 있으면 살리기

// const hasKPM = (x) => {
//   return ["k", "p", "n"].some((y) => x.includes(y));
// };

//const aw1 = fruits.filter(hasKPM);
const aw1 = fruits.filter((x) => ["k", "p", "n"].some((y) => x.includes(y)));
console.log(aw1);
