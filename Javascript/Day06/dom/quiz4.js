const buttonArr = [
  {
    padding: [10, 20, 60],
    bgColor: "yellow",
    color: "white",
    border: "yellow",
    text: "button",
    tag: "button",
  },
  {
    padding: [10, 20, 60],
    bgColor: "blue",
    color: "white",
    border: "blue",
    text: "button",
    tag: "button",
  },
  {
    padding: [10, 20, 60],
    bgColor: "white",
    color: "blue",
    border: "blue",
    text: "button",
    tag: "button",
  },
  {
    padding: [10, 20, 60],
    bgColor: "pink",
    color: "white",
    border: "azure",
    text: "button",
    tag: "button",
  },
];

const makeButtons = () => {
  const buttonPaddingBasic = 10;
  const repeat = 3;
  const borderRad = 15;
  const fontSiz = 15;

  const wrpDiv = document.createElement("div");

  wrpDiv.style.width = "450px";
  wrpDiv.style.display = "grid";
  wrpDiv.style.gap = "15px";

  wrpDiv.style.gridTemplateColumns = `repeat(${repeat},1fr)`;

  buttonArr.forEach((x, index) => {
    //console.log(subArr);
    x.padding.forEach((subx, subindex) => {
      const buttonHtml = document.createElement(x.tag);
      buttonHtml.innerHTML =
        x.text[0].toUpperCase() + x.text.slice(1, x.text.length);
      buttonHtml.style.backgroundColor = x.bgColor;
      buttonHtml.style.width = `fit-content`;
      buttonHtml.style.padding = `${buttonPaddingBasic}px ${subx}px`;
      //buttonHtml.style.margin = ` ${subx}px`;
      buttonHtml.style.color = x.color;
      buttonHtml.style.border = `1px solid ${x.border}`;
      buttonHtml.style.borderRadius = `${borderRad}px`;
      buttonHtml.style.fontSize = `${fontSiz}px`;
      buttonHtml.style.fontWeight = "bold";
      wrpDiv.appendChild(buttonHtml);

      //console.log(subx);
    });
  });
  document.body.appendChild(wrpDiv);
};

makeButtons();
