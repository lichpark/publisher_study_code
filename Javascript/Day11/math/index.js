//랜덤(1~45) 숫자 뽑기 버튼을 누르면 아래 아무숫자 나오게

// const min = 1;
// const max = 45;

// const button = document.createElement("button");
// button.innerText = "random";
// const span = document.createElement("span");
// span.innerText = "0";
// span.setAttribute("id", "resSpan");

// document.body.appendChild(button);
// document.body.appendChild(span);

// button.addEventListener("click", () => {
//   const randNum = Math.floor(Math.random() * (max - min - 1)) + min;
//   document.getElementById("resSpan").innerText = randNum;
// });

// class makebutton {
//   constructor() {
//     const div2 = document.createElement("div");
//     const button2 = document.createElement("button");
//     button2.innerText = "random";
//     button2.setAttribute("id", "resbutton");

//     const span2 = document.createElement("span");
//     span2.innerText = "0";
//     span2.setAttribute("id", "resSpan2");

//     div2.appendChild(button2);
//     div2.appendChild(span2);

//     document.body.appendChild(div2);
//   }
//   makebasichtml(idstr, spanstr) {
//     const button = document.getElementById(idstr);
//     const span = document.getElementById(spanstr);
//     button.addEventListener("click", () => {
//       const emarr = ["🍕", "🍔", "🍟", "🌭", "🍦", "🧂", "🥞", "🥓"];
//       const emmin = 0;
//       const emmax = emarr.length;

//       const randNum = Math.floor(Math.random() * (emmax - emmin - 1)) + emmin;
//       span.innerText = emarr[randNum];
//     });
//   }
// }
// const button2 = new makebutton();
// button2.makebasichtml("resbutton", "resSpan2");

//제비뽑기 프로그램
//div 사람이름 리스트
//input 사람이름넣기
//button 추가하기
//랜덤 제비뽑기

const resArr = [];

const resDiv = document.createElement("div");
resDiv.setAttribute("id", "resDiv");
document.body.appendChild(resDiv);
const wrpDiv = document.createElement("div");
const input = document.createElement("input");
input.setAttribute("id", "ins");

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    insfunc();
  }
  //   if(window.event.keyCode ==13){
  //     insfunc();
  //   }
});

const insbutton = document.createElement("button");
insbutton.innerHTML = "입력";

const insfunc = (e) => {
  const ins = document.getElementById("ins");
  resArr.push(ins.value);
  //   resDiv.innerHTML = "";
  //   resDiv.insertAdjacentHTML(
  //     "beforeend",
  //     resArr.map((v) => `<span>${v}</span>`).join(" ")
  //   );
  resDiv.innerHTML = resArr.map((v) => `<span>${v}</span>`).join(" ");
  ins.value = null;
  ins.focus();
};

insbutton.addEventListener("click", (e) => insfunc(e));

const button = document.createElement("button");

button.innerHTML = "rolling!";
const res = document.createElement("div");
res.setAttribute("id", "res");

button.addEventListener("click", (e) => {
  const min = 0;
  const max = resArr.length;
  document.getElementById("res").innerHTML =
    resArr[Math.round(Math.random() * (max - 1))];
});

wrpDiv.appendChild(input);
wrpDiv.appendChild(insbutton);
wrpDiv.appendChild(button);
document.body.appendChild(wrpDiv);
document.body.appendChild(res);
