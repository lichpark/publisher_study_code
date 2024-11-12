//annotation.ts
//annotation(명시)
// const num = 10;
// const coffee = "coffee";
// //react에서 꽤 필요하다. 알아두자
// const num1: Number = 10;

// //떡볶이
// //

// const food: String = "떡볶이";
// const numList: number[] = [1, 2, 3, 4];
// const numList2: Array<number> = [1, 2, 3, 4];

// console.log(numList);
// console.log(numList2);

//student  타입은 이름, 나이, 전공을 가지는 변수를 만듦

// const student: { name: string; age: number; major: string } = {
//   name: "문돌이",
//   age: 17,
//   major: "문과",
// };

//학생 타입 배열 만들어주기

const studentList: { name: string; age: number; major: string }[] = [
  { name: "문돌이", age: 17, major: "문과" },
  { name: "공돌이", age: 17, major: "이과" },
];

const helloName = (name: string) => `${name} 안녕!`;
