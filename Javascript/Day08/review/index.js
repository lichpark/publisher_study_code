//타코 만들기
//메뉴추가 버튼 누르면 -> prompt(메뉴입력) 후 새 버튼 추가
//🦐(1$) ,🐔(3$) ,🧀(1$) ,🍳(1$) ,🍖(4$) 이 재료 누르면 타코의 총 가격이 올라갑니다. 버튼에도 표시

//총가격상승 , 총가격:0$ 표시가 화면에 있음
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

// const divMake = document.createElement("div");
// const befMake = document.createElement("span");

// befMake.innerHTML = "총가격: ";
// divMake.appendChild(befMake);

// const spanMake = document.createElement("span");
// spanMake.innerHTML = "0";
// spanMake.classList = "total";
// divMake.appendChild(spanMake);

// const afMake = document.createElement("span");
// afMake.innerHTML = "$";
// divMake.appendChild(afMake);

const divMake = document.createElement("div");
const spanMake = document.createElement("span");
spanMake.innerHTML = "총가격 : <span class='total'>0</span>$";
divMake.appendChild(spanMake);
document.body.appendChild(divMake);

const insPrice = (text, imoage, price) => {
  const priceArridx = priceArr.findIndex((item) => item.text == text);
  priceArridx > -1
    ? ((priceArr[priceArridx].price =
        priceArr[priceArridx].price + Number(price)),
      (priceArr[priceArridx].count = priceArr[priceArridx].count + 1))
    : priceArr.push({
        text: text,
        imoage: imoage,
        price: price,
        count: 1,
      });
  //총가격이 위에 표시되어야 한다.
  const sum = totalSum();
  document.querySelector(".total").innerText = sum;
};

totalSum = () => {
  const totalsum = Object.keys(priceArr).reduce(function (previous, key) {
    return previous + priceArr[key].price;
  }, 0);

  return totalsum;
};

priceReturn = () => {
  const totalsum = totalSum();

  const totalimo = Object.keys(priceArr).reduce(function (previous, key) {
    const imoWithCnt =
      priceArr[key].imoage +
      " : " +
      priceArr[key].count +
      " 개 가격 : " +
      priceArr[key].price +
      "$ \n";
    return previous + imoWithCnt;
  }, "");

  const totalSpec = totalimo.length > 0 ? totalimo : "없음";
  alert(`총가격: ${totalsum}$   타코 완성 \n${totalSpec}`);
  priceArr.length = 0;
  document.querySelector(".total").innerText = "0";
};

maketacoButton = (obj) => {
  const button = document.createElement("button");
  button.innerText = obj.imoage + " : " + String(obj.price) + "$";
  button.addEventListener("click", () =>
    insPrice(obj.text, obj.imoage, obj.price)
  );

  return button;
};

tacoList.forEach((v) => document.body.appendChild(maketacoButton(v)));

const pricebutton = document.createElement("button");
pricebutton.innerHTML = "구매하기";
pricebutton.addEventListener("click", priceReturn);

document.body.appendChild(pricebutton);
