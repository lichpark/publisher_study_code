// 함수특 ) 입력 & 출력
//return 이 없으면 null (공집합개념)

function fly(x) {
  console.log("비행기 이륙");
  console.log(`${x}로 출발!`);
}

// function add(a, b) {
//   return a + b;
// }

// //minus
// function minus(a, b) {
//   return a - b;
// }
// //multi
// function multi(a, b) {
//   return a * b;
// }
// //square(제곱)
// function square(a, b) {
//   return a ** b;
// }

//const a = add(3, 4); //7
//const b = prompt("아무거나 입력");

//화살표 함수 -호이스팅 안되게 하려고 쓴다.
const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const multi = (a, b) => {
  return a * b;
};

const square = (a, b) => {
  return a ** b;
};

const morning = {
  main: "밥",
  sub: "계란",
  cook: () => {
    console.log("요리중");
  },
};
//morning.cook();

//calc object make, add, substract,multiply,divide,square
//함수가 일급객체라서 가능 -javascript 에서만
const calc = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a, b) => a ** b,
};

let res_text = "연산자 입력이 제대로 되지 않았습니다.";

// 유저에게 두 수를 입력받고 , 연산자도 입력받아서 계산시키기

const first = Number(prompt("첫번째 수 입력"));
const second = Number(prompt("두번째 수 입력"));
const oper = prompt("연산자 입력");

const oper_sign = {
  "+": "add",
  "-": "substract",
  "*": "multiply",
  "/": "divide",
  "**": "square",
};

const oper_convert = oper_sign[oper];

if (isNaN(first) || isNaN(second)) {
  res_text = "첫번째 혹은 두번째입력시 숫자가 제대로 입력되지 않았습니다.";
}

if (oper_convert in calc) {
  if (oper_convert == "/" && second == 0) {
    res_text = "0으로 나눌수 없습니다.";
  } else {
    //소수점 기준 나누기
    const first_spl = String(first).split(".");
    const second_spl = String(second).split(".");
    let decimal = 0;
    //계산
    const res = calc[oper_convert](first, second);
    let calc_res = res;
    //소수점 자리수 맞추기
    if (!isNaN(first_spl[1]) || !isNaN(second_spl[1])) {
      decimal = parseInt(first_spl[1].length);
      if (first_spl[1].length < second_spl[1].length) {
        decimal = parseInt(second_spl[1].length);
      }

      calc_res = res.toFixed(decimal + 1);
    }

    res_text = `${first} ${oper} ${second} = ${calc_res} 입니다.`;
    //res_text = `${first} ${oper} ${second} = ${res} 입니다.`;
  }
}

alert(res_text);
