// js <-> document[dom] <-> html
// const btn = window.document.createElement("button");
// btn.innerHTML = "홍콩여행";
// btn.style.backgroundColor = "orange";
// window.document.body.appendChild(btn);

//유저에게 원하는 태그를 입력받고, 안에 내용도 입력받은 후에 바디태그에 나타나게 하기

// const tag = prompt("inset tag");
// const ins = prompt("insert content");

// //엘리먼트 타입! -dom객체를 위한 타입같다
// const htmlTag = window.document.createElement(tag);
// htmlTag.innerHTML = ins;
// window.document.body.appendChild(htmlTag);

// console.log(window.document);

const makeHtml = {
  tag: "",
  content: "",
  bg: "",
  ins() {
    this.tag = prompt("ins tag");
    this.content = prompt("ins content");
    this.bg = prompt("ins bg");
    //this.drow();
  },
  drow() {
    const drawHtml = window.document.createElement(this.tag);
    drawHtml.innerHTML = this.content;
    drawHtml.style.backgroundColor = this.bg;
    window.document.body.appendChild(drawHtml);
  },
  start() {
    this.ins();
    this.drow();
  },
};
makeHtml.start();
makeHtml.start();

// makeHtml.ins();
// makeHtml.ins();
