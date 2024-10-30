//mbti성향 물어보기
//결과 보여주기
let ei = prompt("e에요? i에요?").toUpperCase();
let sn = prompt("s에요? n에요?").toUpperCase();
let tf = prompt("t에요? f에요?").toUpperCase();
let pj = prompt("p에요? j에요?").toUpperCase();

let res_arr = [];

res_arr[0] = ei;
res_arr[1] = sn;
res_arr[2] = tf;
res_arr[3] = pj;

const mbti_arr = ["E", "I", "S", "N", "T", "F", "P", "J"];
const mbti_res_arr = [
  "외향형",
  "내향형",
  "감각형",
  "직관형",
  "사고형",
  "감정형",
  "인식형",
  "판단형",
];
let ei_res = [];

for (let i = 0; i < res_arr.length; i++) {
  let ii = i * 2;
  let iii = ii + 1;

  ei_res[i] =
    res_arr[i] == mbti_arr[ii]
      ? mbti_res_arr[ii]
      : res_arr[i] == mbti_arr[iii]
      ? mbti_res_arr[iii]
      : "error";
}

// ei_res[0] =
//   res_arr[0] == mbti_arr[0]
//     ? mbti_res_arr[0]
//     : res_arr[0] == mbti_arr[1]
//     ? mbti_res_arr[1]
//     : "error";
// ei_res[1] =
//   res_arr[1] == mbti_arr[2]
//     ? mbti_res_arr[2]
//     : res_arr[1] == mbti_arr[3]
//     ? mbti_res_arr[3]
//     : "error";
// ei_res[2] =
//   res_arr[2] == mbti_arr[4]
//     ? mbti_res_arr[4]
//     : res_arr[2] == mbti_arr[5]
//     ? mbti_res_arr[5]
//     : "error";
// ei_res[3] =
//   res_arr[3] == mbti_arr[6]
//     ? mbti_res_arr[6]
//     : res_arr[3] == mbti_arr[7]
//     ? mbti_res_arr[7]
//     : "error";

alert(
  `당신의 성향은 ${ei_res[0]},${ei_res[1]},${ei_res[2]},${ei_res[3]} 입니다.`
);

//10000~99999 정수 입력받고 각 숫자단위 붙여서 나타내기
const ins = prompt("input number: ");
const ins_num = parseInt(ins);

const first = parseInt(ins_num / 10000);
const second = parseInt((ins_num % 10000) / 1000);
const third = parseInt((ins_num % 1000) / 100);
const forth = parseInt((ins_num % 100) / 100);
const fifth = parseInt(ins_num % 10);

alert(`${first}만 ${second}천 ${third}백 ${forth}십 ${fifth}`);

const number_res =
  ins_num < 10000 || ins_num > 99999
    ? " 범위안 숫자가 아님 "
    : numberspl(ins_num);

function numberspl(int) {
  const str = String(int);
  const new_arr = Array.from(str);
  const numberspl = ["만", "천", "백", "십"];

  let res = "";
  for (let i = 0; i < numberspl.length; i++) {
    if (parseInt(new_arr[i]) > 0) {
      res = res + new_arr[i] + numberspl[i] + " ";
    }
  }

  if (parseInt(new_arr[4]) > 0) {
    res = res + new_arr[4];
  }

  return res;
}

alert(`입력하신 숫자는 ${number_res}`);

//정수 입력받고 시분초로 나타내기

const ins_time = prompt("시간을 입력하세요");
let ins_int = parseInt(ins_time);

const time_res = humanReadable(ins_int);

alert(`해당 정수를 시간으로 변환하면 ${time_res}초 입니다.`);

function humanReadable(seconds) {
  if (seconds < 61) {
    return addZero(seconds);
  }
  // sec
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - hours * 3600) / 60);
  const secs = seconds - hours * 3600 - mins * 60;

  return addZero(hours) + "시" + addZero(mins) + "분" + addZero(secs);

  function addZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
}
