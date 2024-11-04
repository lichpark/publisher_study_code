const addFood = (list) => {
  list.push("sarada");
  return list;
};

const cook = (a) => {
  console.log("요리준비");
  a();
  console.log("요리완성");
};

const ramen = () => {
  console.log("물끓이기");
  console.log("스프넣기");
  console.log("라면넣기");
};

const zapa = () => {
  console.log("물끓이기");
  console.log("물 버리기");
  console.log("스프넣기");
  console.log("비비기");
  console.log("라면넣기");
};

//cook(ramen);
//cook(zapa);

//왜 콜백함수를 쓰는가? -코드 길어지면 그걸 함수로 교체해서 가독성 편하게

//🧙,⚡,🧊,🔥
//skill 함수가 있고, 콜백으로 다양한 스킬 받아서 싱행되는 구현

// const skill = (ele) => {
//   console.log("마법사 스킬 준비🧙");
//   ele();
//   console.log("마법사 스킬 완료🧙");
// };

// const lighting = () => {
//   console.log(`⚡ 스킬 발동!`);
// };

// const attackSkill = (property) => {
//   console.log(`${property} 스킬 발동!`);
// };

// skill(lighting);

//🦐 ,🐔 ,🧀 ,🍳 ,🍖
//타코만들기 함수 만들어서 이모지 재료추가 라는 함수각각 만들어서 유저에게 타코메뉴를 서택받아 콘솔로 타코메뉴 만들어서 보여주기

const takoCook = {
  emoji_ins: "",
  emoji_obj: { 새우: "🦐", 치킨: "🐔", 치즈: "🧀", 계란: "🍳", 비프: "🍖" },
  emoji_ins_func(emoji) {
    this.emoji_ins = this.emoji_obj[emoji];
  },
  resocource(emoji_res) {
    console.log(`${emoji_res} 추가 넣기`);
    console.log(`${emoji_res} 용 소스 넣기`);
  },
  receipt(cook) {
    console.log("타코재료 세팅");
    console.log("기본재료 넣기");
    cook(this.emoji_ins);
    console.log("타코 완성");
  },
};

const ins_prompt = prompt("타코재료 입력");
takoCook.emoji_ins_func(ins_prompt);
//console.log(takoCook.emoji_ins);
takoCook.receipt(takoCook.resocource);
