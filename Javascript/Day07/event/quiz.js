//taco 만들기
//메뉴추가 버튼 누르면 -> prompt(메뉴입력) 후 새 버튼 추가
//🦐(1$) ,🐔(3$) ,🧀(1$) ,🍳(1$) ,🍖(4$) 이 재료 누르면 타코의 총 가격이 올라갑니다.
//총가격상승
//구매하기 누르면 총가격 :~~ ,[눌렀던 이모지] 타코 완성되었습니다.!
//구매후 리셋

const tacoList = [
  { text: "shurimp", imoage: "🦐", price: 1 },
  { text: "chicken", imoage: "🐔", price: 3 },
  { text: "cheese", imoage: "🧀", price: 1 },
  { text: "egg", imoage: "🍳", price: 1 },
  { text: "beef", imoage: "🍖", price: 4 },
];

const priceArr = [];

insPrice = (text, imoage, productprice) => {
  //console.log(priceArr);
  //console.log(chk);
  const priceArridx = priceArr.findIndex((item) => item.text == text);
  //console.log(priceArridx);
  priceArridx > -1
    ? ((priceArr[priceArridx].price =
        priceArr[priceArridx].price + Number(productprice)),
      (priceArr[priceArridx].count = priceArr[priceArridx].count + 1))
    : priceArr.push({
        text: text,
        imoage: imoage,
        price: productprice,
        count: 1,
      });
  // priceArr.push({ text: text, imoage: imoage, price: price });
  //console.log(priceArr);
};

makeTacoButton = (obj) => {
  const button = document.createElement("button");
  button.innerHTML = obj.text;
  button.addEventListener("click", () =>
    insPrice(obj.text, obj.imoage, obj.price)
  );
  return button;
};

tacoList.forEach((v) => document.body.append(makeTacoButton(v)));

// priceReturn = () => {
//   const array1 = [];
//   const array2 = [];

//   priceArr.forEach((v) => {
//     array1.push(Number(v.price));
//     array2.push(v.imoage);
//   });

//   const totalsum = array1.length > 0 ? array1.reduce((x, y) => x + y) : "0";
//   const totalimo = array2.length > 0 ? array2.join() : "주문없음";

//   alert(`총가격:${totalsum} 타코 완성:${totalimo}`);
//   priceArr.length = 0;
// };

priceReturn = () => {
  const array1 = [];

  priceArr.forEach((v) => {
    array1.push({
      arrPrice: Number(v.price),
      arrImoage: v.imoage,
      arrCnt: v.count,
    });
  });

  const totalsum = Object.keys(array1).reduce(function (previous, key) {
    return previous + array1[key].arrPrice;
  }, 0);

  const totalimo = Object.keys(array1).reduce(function (previous, key) {
    const imoWithCnt =
      " / " +
      array1[key].arrImoage +
      " : " +
      array1[key].arrCnt +
      " 개 가격 : " +
      array1[key].arrPrice +
      "$ ";
    return previous + imoWithCnt;
  }, "");

  const totalSpec =
    totalimo.length > 0 ? totalimo.substring(2, totalimo.length) : "없음";
  alert(`총가격: ${totalsum}$   타코 완성 \n ${totalSpec}`);
  priceArr.length = 0;
};

const pricebutton = document.createElement("button");
pricebutton.innerHTML = "구매하기";
pricebutton.addEventListener("click", priceReturn);

document.body.appendChild(pricebutton);
