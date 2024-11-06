const button = document.createElement("button");
button.innerText = "orange";
//button.className = "bold orange button";
button.classList.add("bold");
button.classList.add("orange");
button.classList.add("button");
//button.classList.toggle();

//console.log(button);

//document.body.appendChild(button);

//유저에게 버튼 내용을 물어보고,

//색상[orange,green,pink],글씨두께[light,bold,bolder] 2개를 입력받아서 화면에 출력 단 css 관련된건 css로

// const text = prompt("내용입력");
// const color = prompt("orange,green,pink 중 하나의 색을 선택");
// const bold = prompt("light,bold,bolder 중 하나의 두께 선택");

// makeQuiz = (text, color, bold) => {
//   const button = document.createElement("button");
//   button.innerHTML = text;
//   button.classList.add(color);
//   button.classList.add(bold);
//   button.classList.add("button");
//   return button;
// };
//document.querySelector(".box").appendChild(makeQuiz(text, color, bold));
//document.querySelector(".box").appendChild(button);
//간략화 버전
// const buttonPrompt = document.createElement("button");
// buttonPrompt.innerText = prompt("내용입력");
// [
//   prompt("orange,green,pink 중 하나의 색을 선택"),
//   prompt("light,bold,bolder 중 하나의 두께 선택"),
//   "button",
// ].forEach((v) => buttonPrompt.classList.add(v));
// document.querySelector(".box").appendChild(buttonPrompt);

makeTest = () => {
  console.log("ins");
  const buttonTest = document.createElement("button");
  buttonTest.innerHTML = "text";
  buttonTest.classList.add("green");
  buttonTest.classList.add("light");
  buttonTest.classList.add("button");
  document.querySelector(".box").appendChild(buttonTest);
};
