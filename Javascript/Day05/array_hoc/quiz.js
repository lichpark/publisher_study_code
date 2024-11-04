const list = [1, 3, 5, 7, 9];

const consolelog = (x) => {
  console.log(x);
};

//consolelog(list);

// //1. 각각 요소를 3배해서 콘솔로
// const triple = (x) => x * 3;
// const console1 = list.map(triple);
// consolelog(console1);
// //2. 각요소 100더해서 콘솔로
// const hundred = (x) => x + 100;

// const console2 = list.map(hundred);
// consolelog(console2);
// //3. 각각요소를 6보다 작으면 두배, 크면 세배해서 콘솔로
// const if1 = (x) => (x < 6 ? x * 2 : x * 3);
// const console3 = list.map(if1);
// consolelog(console3);
// //4.각 요소를 3의배수가 아니면 +10, 맞으면 2배
// const if2 = (x) => (x % 3 != 0 ? x + 10 : x * 3);

// const console4 = list.map(if2);
// consolelog(console4);

const list1 = [10, 20, 30, 40, 50];

//30보다 작으면 각 요소를 두배, 아니면 그대로
//30이면 "🍔" , 아니면 "🍕"로 바꾸기
const list1If1 = (x) => (x < 30 ? x * 2 : x);
const list1If2 = (x) => (x == 30 ? "🍔" : "🍕");

const list1Res = list1.map(list1If1);
const list2Res = list1.map(list1If2);

consolelog(list1Res);
consolelog(list2Res);
