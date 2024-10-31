//점심메뉴 오브젝트 만들기
// const menu = {
//   name: "밥버거",
//   price: "6000",
//   kcal: 500,
//   returant: {
//     1: "봉구스",
//     2: "롯데리아",
//     3: "개인가게",
//   },
// };

// console.log(menu);

//후식메뉴 (name,price,kcal) prompt 로 각각 입력받아서 콘솔로

// const desert_name = prompt("후식메뉴는? ");
// const price = prompt("가격은? ");
// const kcal = prompt("칼로리는? ");

// const dessert = {
//   name: desert_name,
//   price: price,
//   kcal: kcal,
// };

// console.log(dessert);

//유저에게 태어난 년도를 물어보고, 무슨띠인지 알려주기
//2000년생 -용띠 , 89년생 -뱀띠

const year_ins = parseInt(prompt("태어난 년도를 입력해 주세요"));
const thisyear = new Date().getFullYear();
const heavenly_standard = 12;
const earthly_standard = 10;

const heavenlyStems = {
  0: { 0: "원숭이", 1: "신" },
  1: { 0: "닭", 1: "유" },
  2: { 0: "개", 1: "술" },
  3: { 0: "돼지", 1: "해" },
  4: { 0: "쥐", 1: "자" },
  5: { 0: "소", 1: "축" },
  6: { 0: "호랑이", 1: "인" },
  7: { 0: "토끼", 1: "묘" },
  8: { 0: "용", 1: "진" },
  9: { 0: "뱀", 1: "사" },
  10: { 0: "말", 1: "오" },
  11: { 0: "양", 1: "미" },
};

const EarthlyBranches = {
  0: "경",
  1: "신",
  2: "임",
  3: "계",
  4: "갑",
  5: "을",
  6: "병",
  7: "정",
  8: "무",
  9: "기",
};

res_text = "탄생 년도는 숫자로 입력해주시기 바랍니다.";

if (!isNaN(year_ins)) {
  if (year_ins == 0) {
    res_text = "0 으로 입력하실 수는 없습니다.";
  } else {
    const heavenly = year_ins % heavenly_standard;
    const earthly = year_ins % earthly_standard;
    const age = thisyear - year_ins;

    res_text = `나이가 ${age}인 ${year_ins}년생인 당신의 띠는 ${heavenlyStems[heavenly][0]}띠 이고 ${EarthlyBranches[earthly]}${heavenlyStems[heavenly][1]}생 입니다.`;
  }
}

alert(res_text);
