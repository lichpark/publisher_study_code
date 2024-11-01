const calc = (oper) => {
  const nowCount = document.querySelector(".counter").innerHTML;
  let resCount = 0;
  if (oper == "+") {
    resCount = Number(nowCount) + 1;
  } else {
    resCount = Number(nowCount) - 1;
  }
  document.querySelector(".counter").innerHTML = resCount;
};
