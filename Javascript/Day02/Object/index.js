//기본타입: String,Number,Boolean, Underfined(초기화안함) ,Null(없음)
//참조타입: Object

//Object[key-value]형태
//key: string , 정수 만 가능
//value:아무거나
//1.생성자 사용
const car = new Object();
car.name = "캐스퍼";
car.maxSpeed = 300;
car.company = "현대";

// console.log(car);

//make coffee object
//name: americano , shot:2shot , 칼로리:5 ,price:2500 , bean:colombian

const coffee = new Object();
// const coffee = {};
coffee.name = `americano`;
coffee.shot = 2;
coffee.calorie = 5;
coffee.price = 2500;
coffee.bean = "콜롬비아산";

const coffee1 = {
  name: `라떼`,
  shot: 3,
  kcal: 5,
  price: 2500,
  bean: "베트남산",
  isDecaffein: false,
  recipe: {
    1: "로스팅",
    2: "컵에얼음",
    3: "샷넣기",
    4: "뚜껑닫고 제공",
  },
};

console.log(coffee);
console.log(coffee1);
// value 찾기
console.log(coffee1.bean); //점 연산자
console.log(coffee1["kcal"]); //괄호 연산자
//-개인적으로 괄호연산자가 더 편하다..
console.log(coffee1["recipe"][3]);
console.log(coffee1.recipe[3]);
console.log(coffee1.maker); //undefined
coffee1.maker = "빽다방";
// coffee1["maker"] = "동네다방";
console.log(coffee1.maker); //나온다
