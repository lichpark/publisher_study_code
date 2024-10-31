//입력값 홀수,짝수 if로 체크
//시험점수 입력시 90이상 a, 80이상 b , 70이상 c , 60이상 d , 그외 탈락

// const num_ins = parseInt(prompt("insert number: "));

// if (isNaN(num_ins)) {
//   alert("숫자가 입력된게 아닌거 같습니다.");
// } else if (num_ins == 0) {
//   alert("0 입력");
// } else if (num_ins % 2 ) {
//   alert("홀수");
// } else {
//   alert("짝수");
// }

// const score_ins = parseInt(prompt("시험점수 입력"));

// if (isNaN(score_ins)) {
//   alert("숫자가 입력된게 아닌거 같습니다.");
// } else if (score_ins > 100) {
//   alert("시험점수 최대점수인 100점 초과");
// } else if (score_ins >= 90) {
//   alert("A");
// } else if (score_ins >= 80) {
//   alert("B");
// } else if (score_ins >= 70) {
//   alert("C");
// } else if (score_ins >= 60) {
//   alert("D");
// } else {
//   alert("Fail");
// }

const numchk_ins = parseInt(prompt("insert number: "));
let text = "";
const Postive = numchk_ins > 0;
const Negative = numchk_ins < 0;
const odd = numchk_ins % 2;
const even = numchk_ins % 2 == 0;

if (isNaN(numchk_ins)) {
  text = "숫자가 입력된게 아닌거 같습니다.";
} else if (Postive && odd) {
  text = "양의 홀수";
} else if (Postive && even) {
  text = "양의 짝수";
} else if (Negative && odd) {
  text = "음의 홀수";
} else if (Negative && even) {
  text = "음의 짝수";
} else {
  text = "0 입력";
}

alert(text);
