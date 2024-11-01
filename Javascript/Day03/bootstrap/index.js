const cart = {
  sum: 0,
  total_cnt: 0,
  calc() {
    const item_prices = document.querySelectorAll(".item_price");
    const item_amount = document.querySelectorAll(".item_amount");

    item_prices.forEach((el, index) => {
      item_price_replace = Number(el.innerHTML.replace(/,|원/gi, ""));

      item_price_total =
        Number(item_amount[index].innerHTML) * item_price_replace;
      this.total_cnt = this.total_cnt + Number(item_amount[index].innerHTML);
      this.sum = this.sum + item_price_total;
    });
    const total_price = document.querySelectorAll(".total_price");
    //const total_cnt_html = document.querySelectorAll(".total_cnt_html");
    //total_cnt_html.innerHTML = this.total_cnt;
    total_price.forEach((el) => {
      el.innerHTML = this.sum.toLocaleString();
    });
  },
  getAmount(index) {
    const amount = document.querySelectorAll(".item_amount")[index];
    return amount;
  },
  click_calc(oper, index) {
    const amount = this.getAmount(index).innerHTML;

    if (oper == "+") {
      const amount_numb = Number(amount) + 1;
      this.chg_amount_numb(amount_numb, index);
    } else {
      const amount_numb = Number(amount) - 1;
      if (amount_numb > 0) {
        this.chg_amount_numb(amount_numb, index);
      }
    }
    this.sum = 0;
    this.calc();
  },
  chg_amount_numb(amount, index) {
    const amount_html = this.getAmount(index);
    amount_html.innerHTML = amount;
  },
};

cart.calc();
