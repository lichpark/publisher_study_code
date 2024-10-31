//헬스장 인원 리스트가 있다고 가정하고, 신규회원 2명 추가 이름,나이,성별,거주지,전화번호 -각각 입력받고, 리스트에 추가해서 최종 헬스장 인원 리스트를 콘솔로

const member_list = [];
const count = 2;

for (let i = 0; i < count; i++) {
  let member = {
    member_name: prompt("이름:"),
    member_age: prompt("나이:"),
    member_gender: prompt("성별:"),
    member_house: prompt("집:"),
    member_phone: prompt("전번:"),
  };

  member_list.push(member);
}

console.log(member_list);
