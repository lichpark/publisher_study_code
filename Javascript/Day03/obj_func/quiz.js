//유저에게 구매물품, 가격을 총 3번 물어보고
//총구매상품 리스트, 금액 보여줄려고한다.
//오브젝트타임, 함수 이용해서 만들것

// const first_product = prompt("첫번째: 풀품:");
// const first_price = Number(prompt("첫번째: 가격:"));
// const second_product = prompt("두번째: 풀품:");
// const second_price = Number(prompt("두번째: 가격:"));
// const third_product = prompt("세번째: 풀품:");
// const third_price = Number(prompt("세번째: 가격:"));

// const res = {
//   list: [first_product, second_product, third_product],
//   sum() {
//     console.log(first_price + second_price + third_price);
//   },
// };

// console.log(res["list"]);
// res.sum();

// const getItem = () =>{
//     const item_name = prompt("풀품:");
//     const item_price = Number(prompt("가격:"));
//     return {item:item_name , price:item_price};
// }

const cart = {
  purchasedItem: [],
  total_price: 0,
  getItem() {
    const item_name = prompt("풀품:");
    const item_price = Number(prompt("가격:"));
    this.purchasedItem.push(item_name);
    this.total_price = this.total_price + item_price;
  },
  showItem() {
    console.log(
      `총 구매 리스트:${this.purchasedItem} , 총 금액: ${this.total_price}`
    );
  },
};

cart.getItem();
cart.getItem();
cart.getItem();
cart.showItem();

const cart2 = {
  list: [],
  sum: 0,
  shopping() {
    const item = prompt("물품");
    const price = Number(prompt("물품"));
    this.list.push(item);
    this.sum = this.sum + price;
  },
  show() {
    console.log(`리스트: ${this.list} , 금액: ${this.sum}`);
  },
};
