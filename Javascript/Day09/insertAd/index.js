// js로 HTML 다루기
//1. 태그 생성! - createElement , insertAdjaction
//2. 태그 찾기! - querySelector , getElementBy
//3. 이벤트 넣기! - addEventlistner , onclick ="~"

const box = document.querySelector(".box");
const name = "아메리카노";
const menu = ["아메리카노", "라떼", "모카"];
const order = "주문";
//box.innerHTML = `<div class= "card"><span>${name}</span><button>${order}</button></div>`;
box.innerHTML = `<div class= "card">
<ul>${menu.map((v) => `<li>${v}</li>`).join("")}
</ul>
<button>${order}</button>
</div>`;
