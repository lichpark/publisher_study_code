const change_box = (x) => {
  const box = document.querySelector(".box");
  box.style.backgroundColor = x;
};

const change_boxsize = (x, y) => {
  const boxSize = document.querySelector(".box");
  const nowBoxWidth = boxSize.offsetWidth;
  const nowBoxHeight = boxSize.offsetHeight;

  let resWidth = nowBoxWidth;
  let resHeight = nowBoxHeight;
  if (x == "+") {
    resWidth = Number(resWidth) - 2 + Number(y);
    resHeight = Number(resHeight) - 2 + Number(y);
  } else {
    resWidth = Number(resWidth) - 2 - Number(y);
    resHeight = Number(resHeight) - 2 - Number(y);
  }
  boxSize.style.width = resWidth + "px";
  boxSize.style.height = resHeight + "px";
};
