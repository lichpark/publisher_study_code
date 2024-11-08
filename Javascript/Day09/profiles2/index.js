import { data } from "./data.js";
import { makeHtml } from "./rander.js";

const wrap = document.querySelector(".wrap");

wrap.insertAdjacentHTML("beforeend", data.map((v) => makeHtml(v)).join(""));

const typearr = [
  {
    class: ".card",
    type: "background-color",
    chgType: "css",
    parent: true,
  },
  {
    class: ".name_title",
    type: "color",
    chgType: "css",
    parent: false,
  },
  {
    class: ".money",
    type: "",
    chgType: "money",
    parent: false,
  },
  {
    class: ".mobile",
    type: "",
    chgType: "mobile",
    parent: false,
  },
];
// const change = (docu, obj, idx) => {
//   if (obj.parent) {
//     docu.style.cssText = `${obj.type}:${data[idx].hex_color}`;
//   } else if (obj.chgType == "css") {
//     docu.querySelector(
//       `${obj.class}`
//     ).style.cssText = `${obj.type}:${data[idx].color}`;
//   } else if (obj.chgType == "money") {
//     docu.querySelector(`${obj.class}`).innerHTML =
//       String(
//         (
//           Number(docu.querySelector(`${obj.class}`).innerHTML.substr(1)) * 1400
//         ).toFixed(0)
//       ) + " 원";
//   } else if (obj.chgType == "mobile") {
//     const inner = docu.querySelector(`${obj.class}`).innerHTML;
//     const mobile = inner.includes("Microsoft")
//       ? inner.replace("Microsoft", '<i class="fa-brands fa-windows"></i>')
//       : inner.includes("Android ")
//       ? inner.replace("Android", '<i class="fa-brands fa-android"></i>')
//       : inner;
//     docu.querySelector(`${obj.class}`).innerHTML = mobile;
//   }
// };

// document.querySelectorAll(".card").forEach((v, idx) => {
//   typearr.forEach((subv) => change(v, subv, idx));
// });

// const alertText = (idx) => {
//   alert(`name: ${data[idx].name}\njob_title: ${data[idx].job_title}`);
// };

// const card = document.querySelectorAll(".card");

// card.forEach((v, index) => {
//   v.addEventListener("click", () => alertText(index));
// });
