export {};

type User = {
  name: string;
  age?: number; //? 있을수도 없을수도 있음
  gender: "Male" | "female";
};

const user1 = {
  name: "김철수",
  age: 22,
  gender: "Male",
};

const user2: User = {
  name: "전지현",
  //age:39, //age를 넣어도되고 안넣어도 된다.
  gender: "female",
};

//커피타입  이름,가격,샷갯수는 옵셔널

type coffee = {
  name: string;
  price: number;
  shot?: number;
};

const basicaa: coffee = {
  name: "아아",
  price: 1500,
  //shot:2
};
