Setting = () => {
  const tempArr = [];
  document.querySelectorAll(".itemPrice").forEach((item, idx, arr) => {
    // console.log(item);
    // console.log(idx);
    // console.log(arr);
    const price = item.innerHTML.replace(/,|원/g, "");
    const cnt = document.querySelectorAll(".count").item(idx);
    const totPrice = price * cnt;
  });
};

Setting();
