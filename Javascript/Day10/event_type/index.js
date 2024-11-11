const btn = document.getElementById("btn");
//[1,2,3,4].map((v)=>v+1)
//여기서 e는 이벤트 타입
// btn.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const inputID = document.getElementById("inputID");
inputID.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const inputQuiz = document.getElementById("inputQuiz");
const inputQuiz__Span = document.getElementById("inputQuiz__Span");

//1. input안에 몇글자가 쳐졌는지 콘솔로 나타내기

//2. input옆에 span만들고 현재input에 몇글자인지
inputQuiz.addEventListener("input", (e) => {
  console.log(e.target.value.length);
  inputQuiz__Span.innerHTML = e.target.value.length;
});

//input tag 태그 두개만들고, 확인버튼 만듦.
//두 인풋이 똑같은 밸류면 통과 alert , else alert 에러.

const inputArr = ["inputFirst", "inputSecond"];

inputArr.forEach((v) => {
  const inputval = document.createElement("input");
  inputval.setAttribute("id", v);
  document.body.appendChild(inputval);
});

const button = document.createElement("button");
button.innerHTML = "button";
button.addEventListener("click", (e) => {
  const resArr = [];
  let alertText = "성공!";
  inputArr.forEach((v, idx) => {
    //console.log(idx);
    const resIns = document.getElementById(`${v}`).value;
    resArr.push(resIns);
    if (idx > 0) {
      if (resArr[idx] != resArr[idx - 1]) {
        alertText = "에러!";
      }
    }
  });
  alert(alertText);
});
document.body.appendChild(button);

//인풋의 value가 4~12글자 사이면 오른쪽버트 태그가 확인, 아니면 안됨으로 바뀌기

const inputval2 = document.createElement("input");
const lengSpan = document.createElement("span");
lengSpan.innerHTML = "안됨";

inputval2.setAttribute("id", "lengthInput");
inputval2.addEventListener("input", (e) => {
  const isValid = e.target.value.length >= 4 && e.target.value.length <= 12;
  lengSpan.innerText = isValid ? "확인" : "안됨";
});

document.body.appendChild(inputval2);
document.body.appendChild(lengSpan);

//인풋밸류가 5자 넘지 못하게 하기
const inputQuiz2 = document.getElementById("inputQuiz2");
inputQuiz2.addEventListener("input", (e) => {
  if (e.target.value.length > 5) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});
