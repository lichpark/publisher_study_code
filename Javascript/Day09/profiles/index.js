import { data } from "./data.js";
import { makeHtml } from "./rander.js";

const wrap = document.querySelector(".wrap");

wrap.insertAdjacentHTML("beforeend", data.map((v) => makeHtml(v)).join(""));

const alertText = (idx) => {
  alert(`name: ${data[idx].name}\njob_title: ${data[idx].job_title}`);
};

const card = document.querySelectorAll(".card");

card.forEach((v, index) => {
  v.addEventListener("click", () => alertText(index));
});

// const makeHtmlWithidx = (v, idx) => {
//       return `<div class="card" data-idx="${idx}">
//               <img src="${v.image}"/>
//               <div class="right" ">
//                 <span class="name_title">${v.name}</span>
//                 <span class="job_title">${v.job_title}</span>
//                 </div>
//               </div>
//             </div>`;
//  };

//  wrap.insertAdjacentHTML(
//     "afterbegin",
//     data.map((v, idx) => makeHtmlWithidx(v, idx)).join("")
//   );

// document.addEventListener("click", function (e) {
//   const target = e.target.closest(".card"); // Or any other selector.
//   if (target) {
//     // Do something with `target`.
//     const dataidx = target.getAttribute("data-idx");
//     alert(`name: ${data[dataidx].name}\njob_title: ${data[dataidx].job_title}`);
//   }
// });
