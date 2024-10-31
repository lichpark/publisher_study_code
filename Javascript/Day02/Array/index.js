//참조타입:object, array
//Array (=리스트)
//1.
const num = new Array(1, 3, 5, 7, 9);
console.log(num);
console.log(num[2]); // 5
//2.
const num1 = [1, 3, 5, 7, 9];
console.log(num1[4]);

num1.push(11); // 맨 뒤에 추가 해줘
num1.pop(); // 맨 뒤에거 빼줘
num1.unshift(0); // 맨앞에 추가해줘
num1.shift(0); // 맨앞꺼 빼줘

//과일 리스트 = []
// const fruits = ["사과", "배", "바나나", "귤"];
// console.log(fruits[2]); //바나나
