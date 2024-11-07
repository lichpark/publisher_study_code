const olive = {
  arr: [
    { product: "로션", price: 15000 },
    { product: "스킨", price: 20000 },
    { product: "립밤", price: 5000 },
  ],
  className: ".button-1",
};

sumCalc = (obj, cnt) => {
  const total = document.querySelector("#total");
  const num = Number(total.innerHTML) + Number(obj.price);
  total.innerHTML = num;
};
buttonEnchant = (v, idx) => {
  console.log(olive.className);
  console.log(idx);
  const button = document.querySelectorAll(olive.className).item(idx);
  button.addEventListener("click", () => sumCalc(v, 1));
};

olive.arr.forEach((v, idx) => buttonEnchant(v, idx));
