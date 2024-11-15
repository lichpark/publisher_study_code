// default 매개변수
const sayHello = (name = "Guest") => {
  `${name}님 안녕하세요`;
};

//object의 spread 연산자
const person = { name: "트럼프" };
const president = { person, age: 77 }; //{person:{name:"트럼프"},age:77}
// ...이거는 Object가 들어갔을때 안의 값을 빼서 뿌려준다.
const president1 = { ...person, age: 77 }; //{name:"트럼프",age:77}

const student = { name: "alice", age: 25 };
const barista = { ...student, wage: 11000 }; //{name:"alice",age:25 , wage:11000}

const test = { ...student, age: 30 }; //{name:"alice",age:30}
const test1 = { age: 30, ...student }; //{name:"alice",age:25}

const lunch = {
  lunchMain: "크리스피버거",
  lunchSide: "감자튀김",
  lunchDrink: "제로콜라",
};
const { main, side } = lunch;

const dinner = {
  DinnerMain: "안창비프머쉬룸",
  DinnerSide: "쿠키",
  DinnerDrink: "스프라이트",
};
const { DinnerSide, DinnerDrink } = dinner;

const todayFood = { ...lunch, ...dinner };

const user = {
  name: "전수효",
  address: {
    city: "인천",
    dong: "부평",
  },
};

const updateUser = {
  ...user, //전수효
  address: {
    ...user.city, //인천
    dong: "구월동",
  },
};
