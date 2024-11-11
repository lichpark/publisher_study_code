// id input 태그 생성

// 1.id인풋 길이가 4~16이 아니면 밑에 붉은경고문구:길이 < 4 id가 짧음 , 16 이상 : id길이 너무김
// 2. 특문 !,@,#,$,* 중 하나라도 없으면 밑에 붉은 경고 문구로 !,@,#,$,* 꼭 포함해야한다.
// 3. 위 통과되면 밑에 파란색 통과문구: 해당아이디 유효합니다.

// const minLength = 4;
// const maxLength = 16;
// const strArr = ["!", "@", "#", "$", "*"];
// const msg = [{ innerH: "", msgcolor: "" }];

// const input = document.createElement("input");
// input.setAttribute("id", "idInput");
// document.body.appendChild(input);
// const div = document.createElement("div");
// document.body.appendChild(div);

// const chgMsg = (color, message) => {};

// input.addEventListener("input", (e) => {
//   const lengChk =
//     e.target.value.length < minLength
//       ? "<span style='color:red'>id가 짧음</span>"
//       : e.target.value.length > maxLength
//       ? "<span style='color:red'>id가 너무김</span>"
//       : false;
//   //   const specChk = !e.target.value.includes("!", "@", "#", "$", "*")
//   //     ? "<span style='color:red'> !,@,#,$,* 꼭 포함</span>"
//   //     : false;
//   const specChk = !strArr.some((v) => e.target.value.includes(v))
//     ? "<span style='color:red'> !,@,#,$,* 꼭 포함</span>"
//     : false;
//   const succ = "<span style='color:blue'>id가 유효</span>";

//   !lengChk && !specChk
//     ? (div.innerHTML = succ)
//     : lengChk
//     ? (div.innerHTML = lengChk)
//     : (div.innerHTML = specChk);
// });
const chgArr = [
  { icon: '<i class="fa-solid fa-eye-slash"></i>', type: "text" },
  { icon: '<i class="fa-solid fa-eye"></i></button>', type: "password" },
];
const chgtype__button = document.getElementById("chgtype__button");
const passins = document.getElementById("inputPass");

passins.style.cssText = "border:none; font-size:15px;";
chgtype__button.style.cssText =
  "border:none; background-color:white ; font-size:15px;";

chgtype__button.addEventListener("click", (e) => {
  passEvent(passins.type);
});

chgtype__button.addEventListener("mouseout", (e) => {
  passEvent(passins.type);
});

const passEvent = (type) => {
  const passtype = type;
  if (chgArr[0].type == passtype) {
    chgtype__button.innerHTML = chgArr[1].icon;
    document.getElementById("inputPass").type = chgArr[1].type;
  } else {
    chgtype__button.innerHTML = chgArr[0].icon;
    document.getElementById("inputPass").type = chgArr[0].type;
  }
};
