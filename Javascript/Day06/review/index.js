const list = [3, 10, 23, 77, 99];

//1. list에서 50이하면 살리기
const aw1 = list.filter((x) => x <= 50);
console.log(aw1);
//2. list에서 제곱하고 10 더하기
const aw2 = list.map((x) => x ** x + 10);
console.log(aw2);
//3.list에서 십의자리와 일의 자리가 같은 숫자만 살리기
const aw3 = list.filter((x) => x % 10 == Math.floor(x / 10));
const aw31 = list.filter((x) => String(x)[0] == String(x)[1]);
console.log(aw3);
console.log(aw31);
