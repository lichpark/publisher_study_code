//function(함수) : 레시피
// function ramen(x) {
//   console.log("-------------");
//   console.log("물 끓이기");
//   console.log("면넣기");
//   console.log("스프넣기");
//   console.log(`${x} 넣기`);
//   console.log("3분 기다리기");
//   console.log("라면 완성");
//   console.log("-------------");
// }

// ramen("떡");
// ramen("가쓰오부시");
// ramen("대파");
//김밥재료 입력받아서 나오게 console.log에 나오게하기

const basic = ["큰김", "밥"];

const matter = prompt("김밥재료를 입력해 주세요");

//basic.push(matter);

function kimbap(matter) {
  //   console.log(basic[0]);
  //   console.log(basic[1]);
  //   console.log(basic[2]);
  //   basic.forEach((currentElement) => {
  //     console.log(`${currentElement}`);
  //   });
  console.log("김펼치기");
  console.log("밥펼치기");
  console.log("일반재료넣기");
  console.log(`${matter} 넣기`);
  console.log("김밥말기");
  console.log(`${matter} 김밥 완성`);
}

kimbap(matter);
