const ins = prompt("innerhtml");

function addText(text) {
  // 추가할 <div> 요소 생성

  const newElement = document.createElement("div");

  // <div> 요소 안에 html 요소 추가

  newElement.innerHTML = `<p>${text}</p>`;

  // 생성된 <div> 요소를 추가할 부모요소(container div) 선택

  const container = document.getElementById("container");
  // 생성된 <div> 요소를 기존의 container div에 자식 요소로 추가

  container.appendChild(newElement);
}

addText(ins);
