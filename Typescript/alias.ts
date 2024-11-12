//const kim: {name:string,age:number,major:string} ={} 이거 너무 길다
type Student = { name: string; age: number; major: string };
const kim: Student = {
  name: "하비",
  age: 22,
  major: "물리학과",
};

const list1: Student[] = [
  { name: "하비", age: 22, major: "물리학과" },
  { name: "하빈", age: 25, major: "화학과" },
];

//coffee 타입 alias 만들고  이름,.샷개수, 성분 문자열 배열
type coffee = { name: string; shot: number; element: string | string[] };

const coffeeList: coffee[] = [
  { name: "americano", shot: 1, element: "espresso" },
  { name: "latte", shot: 1, element: "milk" },
  { name: "vanilla latte", shot: 1, element: ["milk", "vanllia bean"] },
];

type person = { name: string; age: number };
type University = { major: string; studentId: string };
type PartTime = { place: string; wage: number };

const song: person & University = {
  name: "송유빈",
  age: 24,
  major: "컴공",
  studentId: "20081111",
};

const lee: person & PartTime = {
  name: "lee",
  age: 24,
  place: "물류센터",
  wage: 100000,
};

type Hamburger = { hamburgerName: string; hamburgerKcal: number };
type SideMenu = { sideName: string; sideKcal: number };
type Drink = { drinkName: string; drinkKcal: number };

const guest1: Hamburger = { hamburgerName: "상하이버거", hamburgerKcal: 400 };
const guest2: Hamburger & Drink = {
  hamburgerName: "상하이버거",
  hamburgerKcal: 400,
  drinkName: "제로코크",
  drinkKcal: 0,
};

//이렇게 하면 안에 들어가는 값이 타입에 있는 값만 들어가게 한다.
type Kimbap = "치즈김밥" | "일반김밥" | "참치김밥";
type MainColor = "red" | "pink" | "blue";

const kimbap: Kimbap = "일반김밥";
const color: MainColor = "pink";

// 샌드위치 = {빵,치즈,토핑,소스1,소스2}
//쿠키 = {이름}
//음료 = {이름}

type Bread = "화이트" | "하티" | "파마산" | "위트" | "허니오트" | "플랫브레드";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type Topping =
  | "토마토"
  | "올리브"
  | "아보카도"
  | "양상추"
  | "양파"
  | "계란"
  | "피망"
  | "피클";
type source = "렌치" | "머스터드";

type Cookie = { cookiename: "더블 초코칩" | "오트밀" | "라즈베리" | "초코칩" };

type Juice = { juicename: "콜라" | "사이다" | "탄산수" };

type sandwitch = {
  bread: Bread;
  cheese: Cheese;
  topping: Topping[];
  source: source;
  source1: source;
};

const subwayguest1: sandwitch & Cookie & Juice = {
  bread: "플랫브레드",
  cheese: "모짜렐라",
  topping: ["피망", "피클"],
  source: "렌치",
  source1: "머스터드",
  cookiename: "초코칩",
  juicename: "사이다",
};
