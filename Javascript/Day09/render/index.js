import { menu } from "./data.js";
import { makeCard } from "./render.js";

const container = document.querySelector(".container");

//1.innerHtml = "<div>빵</div>"
//배열을 문자열로 바꾸기 위해 join 사용
//container.innerHTML = `${menu.map((v) => makeCard(v.imgSrc, v.name)).join("")}`;

//2. insertAdjacentHTML
container.insertAdjacentHTML(
  "afterbegin",
  menu.map((v) => makeCard(v.imgSrc, v.name)).join("")
);

container.insertAdjacentHTML(
  "beforeend",
  menu.map((v) => makeCard(v.imgSrc, v.name)).join("")
);

//스타일 안먹음
container.insertAdjacentHTML(
  "afterend",
  menu.map((v) => makeCard(v.imgSrc, v.name)).join("")
);
//스타일 안먹음
container.insertAdjacentHTML(
  "beforebegin",
  menu.map((v) => makeCard(v.imgSrc, v.name)).join("")
);
