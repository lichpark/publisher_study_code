// class: 변수들 + 함수들
//student:[이름,성별,나이,수강목록] + []

class Student {
  //   name = "전수효";
  //   age = 32;
  //   courses = "";

  // constructor(name,  gender, age, courses){
  //     this.name = name ;
  //     this.gender = gender ;
  //     this.age = age ;
  //     this.courses = courses ;
  // }

  constructor(name, age, courses) {
    this.name = name;
    this.age = age;
    this.pastAge = age - 10;
    this.courses = courses;
  }
  // }

  hello_old() {
    console.log(
      `안녕하세요, 저는 ${this.name} 이고, 나이는 ${this.age} 입니다.`
    );
  }
  hello() {
    console.log(
      `안녕하세요, 저는 ${this.name} 이고, 나이는 ${this.age}이고, 전공은 ${this.courses}입니다.`
    );
  }
  past() {
    console.log(
      `안녕하세요, 저는 ${this.name} 이고, 나이는 ${this.age}이고,10년전 나이는 ${this.pastAge}  전공은 ${this.courses}입니다.`
    );
  }
}

const a = new Student("률미", "32");
a.hello_old();
const b = new Student("나으리", "21");
b.hello_old();
const c = new Student("박종률", "40", "교육학");
c.hello();
c.past();

//커피 클래스
//변수: 이름,가격,성분
//함수: 주문하기: 주문하신 ~커피, 가격은 ~ 입니다.

class coffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.ingredient = [];
  }

  order() {
    console.log(`주문하신 ${this.name} 커피, 가격은 ${this.price} 입니다.`);
  }
  plus(something) {
    this.ingredient.push(something);
  }
  info() {
    console.log(`들어간 성분은 ${this.ingredient} 입니다.`);
  }
}
//const arr = new Array(5);
//console.log(arr);

const coff = new coffee("아메으리카노", "5000");
coff.order();
coff.plus("🍋");
coff.plus("🧊");
coff.info();

// 피자 클래스
//변수 : 이름, 가격,기본값0 ,토핑:기본 빈배열
//  -토핑:토핑이름, 가격
// -금액:토핑에 쓰인 종류와 총가격을 알려주는 함수

class pizza {
  constructor(name, price) {
    this.name = name;
    this.price = 0;
    this.topping = [];
  }
  toppingFunc(name, price) {
    this.topping.push({ name: name, price: price });
  }
  info() {
    console.log(this.topping);
  }
}

// const p = new pizza("슈프림 피자");

// p.toppingFunc("치즈", 3000);
// p.toppingFunc("올리브", 1000);
// p.toppingFunc("치즈크러스트", 2000);
// p.info();

//영화관 theater
//변수:영화제목, 상영관,현재관람객(기본값 0)
//함수: 관람객 추가함수->관람객 n 명 들어오면 늘어나는 함수
//영화정보 함수: 영화제목, 상영관 ,현재 총 관람객 알려주는 함수

class theater {
  constructor(title, room, people) {
    this.title = title;
    this.room = room;
    this.people = 0;
    this.movieinfo = [];
  }
  add(n) {
    this.people = this.people + n;
  }
  info() {
    console.log(
      `영화제목: ${this.title} 상영관:${this.room} 관랙수:${this.people}`
    );
  }
}
const m1 = new theater("머나먼 쏭바강", "5관");
const m2 = new theater("글래디 에이터", "4관");
m1.add(300);
m2.add(100);
m1.info();
m2.info();
