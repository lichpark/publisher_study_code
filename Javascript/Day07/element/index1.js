const wrpSection = document.createElement("section");
wrpSection.style.display = "flex";
wrpSection.style.gap = "30px";

const imgList = [
  {
    imgSrc: "https://www.ediya.com/files/menu/IMG_1730076235563.png",
    productName: "(L) HOT 시그니처 라떼",
    absText: "new",
  },
  {
    imgSrc: "https://www.ediya.com/files/menu/IMG_1730076367601.png",
    productName: "(EX) HOT 시그니처 라떼",
    absText: "new",
  },
  {
    imgSrc: "https://www.ediya.com/files/menu/IMG_1730076504756.png",
    productName: "(L) ICED 시그니처 라떼",
    absText: "new",
  },
];

makeList = (obj) => {
  const subList = [];

  const subDiv = document.createElement("div");
  subDiv.style.cssText =
    "display:flex; align-items:center; overflow:hidden; flex-direction:column; position:relative";
  // const aTag = document.createElement("a");
  // aTag.style.cssText ="text-decoration:none; color:black; font-size:12px;";
  //subDiv.setAttribute("onclick", "alertTest('" + obj.productName + "')");
  const mImg = document.createElement("img");
  mImg.src = obj.imgSrc;
  mImg.style.cssText = "width:100%; content:object-fit;";
  const span = document.createElement("span");
  //span.style.marginTop = "15px";
  span.innerText = obj.productName;

  const absDiv = document.createElement("div");
  absDiv.innerHTML = obj.absText;
  absDiv.style.cssText =
    "width:55px; height:55px; position: absolute; top:35px; right:45px; color:white; background-color:darkblue;  font-size:20px; border-radius:9999px; display:flex; justify-content: center; align-items:center; font-weight:bold; padding:5px;";

  subList.push(mImg);
  subList.push(span);
  subList.push(absDiv);

  subList.forEach((d) => appendFunc(subDiv, d));

  return subDiv;
};

appendFunc = (mainDocu, docu) => {
  mainDocu.appendChild(docu);
};

imgList.forEach((v) => wrpSection.appendChild(makeList(v)));

document.body.appendChild(wrpSection);

const alertTest = (pName) => {
  alert(pName);
};
