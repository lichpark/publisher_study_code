//map , filter , every , some ,reduce ,forEach

const list = [1, 2, 3, 4, 5];
console.log(list);
//reduce : 요소들을 누적시키기!
const red = list.reduce((x, y) => {
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  console.log(`x+y: ${x + y}`);
  console.log("----------------");
  return x + y;
});
console.log(red);
list.forEach((x) => console.log(x));
