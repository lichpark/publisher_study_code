// const button = document.createElement("button");
// button.innerText = "yogurt";

// const hello = () => alert("hello");

// button.addEventListener("click", hello);
// document.body.appendChild(button);

textalert = (imo) => {
  alert(`${imo} 발동`);
};

const list = ["🔥", "🧊", "⚡"];
makebutton = (imoage) => {
  const button = document.createElement("button");
  button.innerHTML = imoage;
  // button.addEventListener("click", () => alert(`${imoage} 발동`));
  button.addEventListener("click", () => textalert(imoage));

  return button;
};
list.forEach((v) => document.body.appendChild(makebutton(v)));
