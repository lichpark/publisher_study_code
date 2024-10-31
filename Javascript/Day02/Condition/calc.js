//숫자 두개 각각 입력받고, 연산자를 입력하세요(+,-,*,/,**) 하고 연산자로 계산하게 하자
const first_num = Number(prompt("첫번째 숫자 입력"));
const second_num = Number(prompt("두번째 숫자 입력"));
const operator_ins = prompt("연산자 입력 :(+,-,*,*,/)만 입력필요");

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "**": (a, b) => a ** b,
  "/": (a, b) => a / b,
};
let alert_text = "";
let calc_res = 0;

alert_text = `허용 가능한 연산자가 입력되지 않았습니다.`;

if (isNaN(first_num) || isNaN(second_num)) {
  alert_text = "숫자입력란에 숫자가 입력되지 않았습니다.";
}
if (operator_ins in operators) {
  if (operator_ins == "/" && second_num == 0) {
    alert_text = `0 으로 나눌수 없습니다.`;
  } else {
    //소수점 자리계산용
    const first_spl = String(first_num).split(".");
    const second_spl = String(second_num).split(".");
    let decimal = 0;
    calc_res = operators[operator_ins](first_num, second_num);

    if (!isNaN(first_spl[1]) || !isNaN(second_spl[1])) {
      decimal = parseInt(first_spl[1].length);
      if (first_spl[1].length < second_spl[1].length) {
        decimal = parseInt(second_spl[1].length);
      }

      calc_res = calc_res.toFixed(decimal);
    }
    alert_text = `${first_num} ${operator_ins} ${second_num} 의 계산 결과는 ${calc_res} 입니다.`;
  }
}

alert(alert_text);
