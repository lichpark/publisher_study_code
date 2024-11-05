//김밥, 참치김밥,멸추김밥,소고기김밥  ,돈까스김밥, 제육김밥, 오뎅김밥, 치즈김밥

//버튼 8개 만들고, 색 flatui 에서 8개 가져와 배셩색 입히고 화면에 나오게 , 코드 20개 넘기지 마셈

const makehtmlObj = {
  textObj: {
    김밥: "#1abc9c",
    참치김밥: "#2ecc71",
    멸추김밥: "#3498db",
    소고기김밥: "#9b59b6",
    돈까스김밥: "#34495e",
    제육김밥: "#16a085",
    오뎅김밥: "#2980b9",
    치즈김밥: "#8e44ad",
  },
  makehtml(html) {
    Object.keys(this.textObj).forEach((key) => {
      const creButton = document.createElement(html);
      creButton.innerHTML = key;

      //creButton.style.backgroundColor = this.textObj[key];
      //creButton.style.textAlign = "center";
      creButton.style.cssText = `text-align:center; background-color:${this.textObj[key]}`;

      document.body.appendChild(creButton);
    });
  },
};

makehtmlObj.makehtml("button");
makehtmlObj.makehtml("div");

const kimbapList = [
  { name: "김밥", color: "#1abc9c" },
  { name: "참치김밥", color: "#2ecc71" },
  { name: "멸추김밥", color: "#3498db" },
  { name: "소고기김밥", color: "#9b59b6" },
  { name: "돈까스김밥", color: "#34495e" },
  { name: "제육김밥", color: "#16a085" },
  { name: "오뎅김밥", color: "#2980b9" },
  { name: "치즈김밥", color: "#8e44ad" },
];

const makeKimbap = (x, y) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  //btn.style.backgroundColor = y;
  btn.style.cssText = `text-align:center; background-color:${y}`;
  document.body.appendChild(btn);
};

kimbapList.forEach((x) => makeKimbap(x.name, x.color));
