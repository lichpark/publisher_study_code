const movies = [
  {
    name: "gladitor",
    genre: ["action", "drama"],
    grade: "19",
    runningTime: "148",
  },
  { name: "hear me", genre: ["drama"], grade: "all", runningTime: "109" },
  { name: "amazon", genre: ["comedy"], grade: "12", runningTime: "113" },
];
//1. 영화이름을 앞글자만 대문자화 시키고,장르에 드라마가 있으면 추가 안하고, 없으면 추가하기, 러닝타임을 시 분으로 바꾸기
const movieConv = (x) => {
  //x.name = x.name[0].toUpperCase() + x.name.substr(1);
  x.name = x.name.toUpperCase()[0] + x.name.slice(1, x.name.length);
  !x.genre.includes("drama") ? x.genre.push("drama") : "";
  x.runningTime =
    parseInt(Number(x.runningTime) / 60) +
    " 시" +
    (Number(x.runningTime) % 60) +
    " 분";
  return x;
};

const capitalize = (x) => x.toUpperCase()[0] + x.slice(1, x.length);
const hasGenre = (list, addgenre) =>
  //!list.includes(addgenre) ? list.push(addgenre) : false;
  !list.includes(addgenre) && list.push(addgenre);
const timechange = (time) =>
  parseInt(Number(time) / 60) + " 시" + (Number(time) % 60) + " 분";

const movieConv2 = (x) => {
  //x.name = x.name[0].toUpperCase() + x.name.substr(1);
  x.name = capitalize(x.name);
  hasGenre(x.genre, "drama");
  x.runningTime = timechange(x.runningTime);
  return x;
};

const aw4 = movies.map(movieConv2);
console.log(aw4);
