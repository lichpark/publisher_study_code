export const changeWon = (price: number) => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    price
  );
};

export const numToLocal = (num: number) => {
  return num.toLocaleString();
};
