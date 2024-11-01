//+, - 버튼,0 span 만들고
//conter program
// const plus = document.createElement("button");
// const minus = document.createElement("button");
// const span = document.createElement("span");
// span.innerHTML = "0";
// minus.innerHTML = "-";
// plus.innerHTML = "+";

// const counter = (oper) => {
//   const nowcount = Number(document.getElementsByTagName("span")[0].innerHTML);
//   const rescont = oper == "+" ? nowcount + 1 : nowcount - 1;
//   document.getElementsByTagName("span")[0].innerHTML = rescont;
// };

// plus.addEventListener("click", () => {
//   counter("+");
// });
// minus.addEventListener("click", () => {
//   counter("-");
// });

// document.body.appendChild(plus);
// document.body.appendChild(span);
// document.body.appendChild(minus);

const counter = {
  count: 0,
  makeTag(tagName, content, func) {
    const newTag = document.createElement(tagName);
    newTag.innerHTML = content;
    newTag.addEventListener("click", func);
    this.append(newTag);
  },
  add() {
    this.count++;
    // this.countRes(this.count);
  },
  substract() {
    this.count--;
    // this.countRes(this.count);
  },
  //   getCount() {
  //     return document.getElementsByTagName("span")[0].innerHTML;
  //   },
  //   countRes(count) {
  //     document.getElementsByTagName("span")[0].innerHTML = count;
  //   },
  append(tag) {
    document.body.appendChild(tag);
  },
};

counter.makeTag("button", "-", counter.substract);
counter.makeTag("span", counter.count, () => {});
counter.makeTag("button", "+", counter.add);
