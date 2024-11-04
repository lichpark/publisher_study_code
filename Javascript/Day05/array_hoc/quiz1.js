const fruits = ["orange", "strawberry", "melon", "peach", "pineapple"];
console.log(fruits);
//1.각요소를 문자의 길이로 바꾸기
const func1 = (x) => x.length;
const anw1 = fruits.map(func1);
console.log(anw1);
//2.각요소 대문자화
const func2 = (x) => x.toUpperCase();
const anw2 = fruits.map(func2);
console.log(anw2);
//3.각 요소에서 문자길이가 5글자 이하면 "🍎" 아니면 "🍋"
const func3 = (x) => (x.length <= 5 ? "🍎" : "🍋");
const anw3 = fruits.map(func3);
console.log(anw3);
