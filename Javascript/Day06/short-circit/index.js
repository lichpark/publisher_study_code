const a = true && false; //false
const a1 = true || false || false; //true
const a2 = true || "요거트"; //true

// 0 ,"",null,undenfined , [] ->falsy
//그외 truthy

const a3 = false || "요거트"; //요거트
//
// const user = prompt("고객이름");
// const name = user || "guest";
// console.log(`${name}님이 들어왔습니다.+`);

//
const c = true && "cola"; //콜라
const c2 = true && "cola" && true; //true
const d = false && "water"; //false

//유저에게 프롬프트로 비번입력받고 비번 1234일시 로그인 성공 아니면 안일어남

//const q1 = prompt("password?") == "1234" ? alert("login success") : false;

const password = prompt("password?");
const isLogin = password == "1234";
isLogin && alert("login success");
