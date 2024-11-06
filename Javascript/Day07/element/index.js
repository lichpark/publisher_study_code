//기본타입 : String, Number ,Boolean,null, undefined
//참조타입 :
//  1.Object({}), array([])
//  2.Element(tag);

const coffee = {
  name: "americano",
  type: [],
};

const div = document.createElement("div");

//1.태그의 컨텐츠 만들기
//안에 태그가 있음 태그도 해석
div.innerHTML = "<button>떡볶이</button>";
//안에 태그가 있음 태그도 텍스트화
//div.innerText = "<button>라면</button>";

//2.태그의 스타일 바꾸기
div.style.backgroundColor = "red";
div.style.setProperty("border", "1px solid green");
div.style.cssText = "margin:10ox; padding:20px; border-radius:20px;";

//3.태그의 자식추가
//div.appendChild();
//자식속성 제거
//div.removeChild();

// document.body.appendChild(div);

const wrapDiv = document.createElement("section");
wrapDiv.style.display = "flex";
wrapDiv.style.gap = "20px";
wrapDiv.style.alignItems = "center";

const list = [
  { name: "Your Story", img: "1.jpg" },
  { name: "karennne", img: "2.jpg" },
  { name: "zackjohn", img: "3.jpg" },
  { name: "kieron_d", img: "4.jpg" },
  { name: "craig_", img: "5.jpg" },
];

const portrait = (obj) => {
  const borderrad = 9999;
  const width = 120;
  const height = 160;
  const imgWidth = 100;
  const imgHeight = 100;
  const aWidth = 100;
  const aHeight = 100;
  const padding = 5;
  const fontSize = 20;
  const border = 3;

  const makeDiv = document.createElement("div");
  makeDiv.style.setProperty("border-radius", `${borderrad}px`);
  makeDiv.style.setProperty("width", `${width}px`);
  makeDiv.style.setProperty("height", `${height}px`);

  const inA = document.createElement("a");
  inA.style.setProperty("display", `block`);
  inA.style.setProperty("width", `${aWidth}%`);
  inA.style.setProperty("height", `${aHeight}%`);
  inA.style.setProperty("text-decoration", "none");
  inA.setAttribute("href", "");
  inA.setAttribute("target", "_self");
  makeDiv.appendChild(inA);

  const inImg = document.createElement("img");
  //inImg.setAttribute("src", obj.img);
  inImg.src = obj.img;
  inImg.style.objectFit = "cover";
  inImg.style.setProperty("border-radius", `${borderrad}px`);
  inImg.style.setProperty("width", `${imgWidth}px`);
  inImg.style.setProperty("height", `${imgHeight}px`);
  inImg.style.setProperty("border-radius", `${borderrad}px`);
  inImg.style.setProperty("border", `${border}px solid orange`);
  inImg.style.setProperty("padding", `${padding}px`);

  inA.appendChild(inImg);

  const subDiv = document.createElement("div");
  subDiv.innerHTML = obj.name;
  subDiv.style.setProperty("text-align", "center");
  subDiv.style.setProperty("font-size", `${fontSize}px`);
  subDiv.style.setProperty("color", "black");

  inA.appendChild(subDiv);

  return makeDiv;
};

list.forEach((v) => wrapDiv.appendChild(portrait(v)));

document.body.appendChild(wrapDiv);
