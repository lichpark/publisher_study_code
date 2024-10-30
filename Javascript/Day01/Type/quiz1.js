//유저에게 아메리카노 가격 입력받고, 개수 입력받은뒤 알럿으로 총개수와 총가격 alert
const price = prompt("americano price");
const count = prompt("americano count");
const totalprice = Number(price) * Number(count);
alert(`개수: ${count} , 총가격: ${totalprice.toLocaleString()}`);

// 유저에게 정사각형의 한 변의 길이를 입력받고 정사각형의 둘레와 넓이를 alert
let square_length = prompt("정사각형 한변 길이: ");
square_length = Number(square_length);
const square_extent = square_length ** 2;
const square_full = square_length * 4;
alert(`정사각형 넓이: ${square_extent} , 둘레: ${square_full}`);

// 정삼각형의 밑변 높이 입력받고 둘레와 넓이 alert
let triangle_length = prompt("정삼각형 밑변 길이: ");
let triangle_height = prompt("정삼각형 높이: ");

triangle_length = Number(triangle_length);
triangle_height = Number(triangle_height);

const triangle_extent = (triangle_length * triangle_height) / 2;
const triangle_full = triangle_length * 3;

alert(`정삼각형 넓이: ${triangle_extent} , 둘레: ${triangle_full}`);

// 반지름 길이 입력받고, 둘레와 넓이 alert

let half_circle = prompt("반지름 길이:");
half_circle = Number(half_circle);
// const circle_extent = (half_circle * half_circle * 3.14).toFixed(2);
// const circle_full = (half_circle * 2 * 3.14).toFixed(2);

const circle_extent = delsub(half_circle * half_circle * 3.14);
const circle_full = delsub(half_circle ** 2 * 3.14);

alert(`원 넓이: ${circle_extent} , 둘레: ${circle_full}`);

function delsub(number) {
  let mem = number.toString();
  let memspl = mem.split(".");
  let memsub = Number(memspl[1]);
  let res;
  if (isNaN(memsub)) {
    res = parseInt(number);
  } else {
    res = number.toFixed(2);
  }
  return res;
}
