export const exchangeRate = (money) =>
  String((parseInt(money.slice(1, money.length)) * 1400).toLocaleString()) +
  " 원";
export const changeIcon = (mobile) => {
  if (mobile.includes("Android")) {
    return '<i class="fa-brands fa-android"></i>';
  } else if (mobile.includes("Microsoft")) {
    return '<i class="fa-brands fa-windows"></i>';
  } else if (mobile.includes("Feature")) {
    return '<i class="fa-solid fa-mobile-retro"></i>';
  } else {
    return '<i class="fa-solid fa-question"></i>';
  }
};
