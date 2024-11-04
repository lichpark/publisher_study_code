const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //짝수만 살리기
// const two = (x) => x % 2 == 0;
// const anwq3a1 = list.filter(two);
// console.log(anwq3a1);
// //5보다 크면 살리기
// const overFive = (x) => x > 5;
// const anwq3a2 = list.filter(overFive);
// console.log(anwq3a2);

// //3. 각수를 제곱한뒤 50보다 작으면 살리기
// const double = (x) => x ** 2;
// const underFifty = (x) => x <= 50;
// const anwq3a3 = list.map(double).filter(underFifty);
// console.log(anwq3a3);

const fruits = ["apple", "banana", "kiwi", "melon", "wapermelon", "grape"];
//1.문자길이 5글자 이상
const overFive = (x) => x.length >= 5;
const anwq3a4 = fruits.filter(overFive);
console.log(anwq3a4);

//2. 알파벳 i 들어간 과일만
const alphaI = (x) => x.includes("i") == true;
const anwq3a5 = fruits.filter(alphaI);
console.log(anwq3a5);
//3.melon들어간 과일만
const alphaMelon = (x) => x.includes("melon") == true;
const anwq3a6 = fruits.filter(alphaMelon);
console.log(anwq3a6);
