const timeList = [
  { id: "swiss", diff: -8 },
  { id: "frace", diff: -8 },
  { id: "taiwan", diff: -1 },
  { id: "italy", diff: -8 },
  { id: "usa", diff: -14 },
];

timeList.forEach((v) => {
  const button = document.getElementById(v.id);
  const timeId = document.getElementById("timeRes");
  button.addEventListener("click", (e) => {
    const date = new Date();
    const time = Number(date.getHours()) + v.diff;
    timeId.innerHTML = time + "시간";
  });
});

// let targetFirst = document.querySelectorAll(".timeButton");

// const timeSearch = (target) => {
//   //   console.log(target.target);
//   //console.log(target.target.id);
//   const idstr = document.getElementById(target.target.id);
//   const timesel = idstr.getAttribute("data");
//   console.log(timesel);

//   const todayUTC = new Date(); // 2024-04-03T06:51:22.287Z
//   const country_offset = Number(timesel) * 60;
//   const country_time = todayUTC.setMinutes(
//     todayUTC.getMinutes() + country_offset
//   );
//   const timeres = new Date(country_time);

//   document.getElementById("timeRes").innerHTML = `시간: ${timeres
//     .toString()
//     .replace("GMT+0900 (한국 표준시)", "")}`;
// };

// targetFirst.forEach((target) => target.addEventListener("click", timeSearch));
