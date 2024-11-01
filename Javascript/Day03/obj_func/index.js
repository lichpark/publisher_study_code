const calc = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
};

//const,let,if,this
//this:

//this
const student_ori = {
  name: "전지현",
  hello() {
    console.log(`안녕하세요! ${this.name}`);
  },
};

//student_ori.hello();

//일반함수, 화살표함수
//오브젝트에서 함수를 넣을때
//일반함수에선 this가 먹힘
//화살표 함수에서는 this가 안먹힘

//일반함수는 리엑트에서 안씀

const student = {
  name: "전지현",
  hello: function () {
    console.log(`안녕하세요! ${this.name}`);
  },
};

const student1 = {
  name: "전지현",
  hello() {
    console.log(`안녕하세요! ${this.name}`);
  },
};
//얜 this가 안먹혀서 동작제대로 안됨
const student2 = {
  name: "전지현",
  hello: () => {
    console.log(`안녕하세요! ${this.name}`);
    //얜 나온다.
    //console.log(`안녕하세요! ${student2.name}`);
  },
};

student2.hello();

// javascript 에는 class가 2015년에 도입됨
// class 가 syntactic sugar 에 가까움
