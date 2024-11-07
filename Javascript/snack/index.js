const arr = [
  { sel: "burger", text: "버거", emoji: "🍔" },
  { sel: "side", text: "사이드", emoji: "🍟" },
  { sel: "drink", text: "드링크", emoji: "🥤" },
];

addRes = (str, docsel) => {
  const res = document.querySelector(`#${str}_res__span`);
  const emojiFind = arr[arr.findIndex((x) => x.sel == str)].emoji;
  res.innerHTML = docsel + emojiFind;
};

eventEnchant = (doc, str, flag) => {
  const docSel = doc.innerHTML;
  flag == "buy"
    ? doc.addEventListener("click", () => resultAlert())
    : doc.addEventListener("click", () => addRes(str, docSel));
};

evEncht = (v, str) => {
  //console.log(v);
  const selector = v.sel || "";
  const Button = document.querySelectorAll(`.${selector}`);
  Button.forEach((item) => eventEnchant(item, selector, str));
};

resultAlert = () => {
  const resSpan = document.querySelectorAll(".res__span");
  const resArr = [];
  arr.forEach((v, idx) => {
    resSpan[idx].innerHTML
      ? resArr.push(resSpan[idx].innerHTML + " " + v.text)
      : false;
  });
  const resjoin = resArr.join();
  resArr.length > 0
    ? alert(`구매하기 : ${resjoin}가 구매되었습니다.`)
    : alert(`구매하기 위해서는 하나라도 선택이 필요합니다.`);
};

arr.forEach((v) => evEncht(v, ""));
evEncht({ sel: "buy", text: "" }, "buy");
