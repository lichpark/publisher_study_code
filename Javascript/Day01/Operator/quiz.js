//유저에게 몇년생인지 알아보고 2006 이후면 미성년, 아니면 성인 alert로 알려주기
const year_ins = prompt("출생연도 입력: ");
const year_standard = 2006;
const adult = Number(year_ins) >= year_standard ? "미성년" : "성인";
alert(`${adult} 입니다.`);

//유저에게 키를 물어보고 alert으로 140이상이면 탑승가능, 아니면 탑승불가
const height_ins = prompt("키 입력: ");
const height_standard = 140;
const height_res =
  Number(height_ins) >= height_standard ? "탑승 가능" : "탑승 불가";
alert(`${height_res} 입니다.`);

//유저에게 영어, 수학점수 물어본뒤 영어와 수학둘다 평균이 60이상합격,미만 탈락, 둘중 하나라도 60이하면 탈락
const score_standard = 60;
let math_score = prompt("수학점수 : ");
let eng_score = prompt("영어점수 : ");

math_score = Number(math_score);
eng_score = Number(eng_score);

//const average_score = (math_score + eng_score) / 2;

const redu = (a, b) => a + b;
const score_array = [];
score_array[0] = math_score;
score_array[1] = eng_score;

const average_score =
  score_array.reduce(redu) / score_array.length >= score_standard;
const isMathOver = math_score >= score_standard;
const isEngOver = eng_score >= score_standard;

const score_res = isMathOver && isEngOver && average_score ? "통과" : "탈락";
alert(`해당 입력자는 : ${score_res} `);

//유저에게 숫자입력 받아서 홀수인지 짝수인지 alert으로 알려주기
const even_ins = prompt("숫자를 입력해 주세요.");
const even_res = Number(even_ins) % 2 ? "홀수" : "짝수";

alert(`해당 숫자는 : ${even_res}`);
