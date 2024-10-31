// condition (조건문)
//조건이 맞으면 이코드 실행
//if - else , switch -> obj 타입쓰는거를 권장함

const num = Number(prompt("input number"));
if (num > 0) {
  console.log("양수입니다.");
} else if (num < 0) {
  console.log("음수입니다.");
} else {
  console.log("0 인거 같습니다.");
}
