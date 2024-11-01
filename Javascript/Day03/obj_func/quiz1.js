//헬스장 멤버 오브젝트
//멤버(이름,나이,사는곳)
//리스트 모두 출력

const gym = {
  gym_list: [],
  ins() {
    const obj = {
      name: prompt("이름"),
      age: prompt("나이"),
      living: prompt("사는곳"),
    };
    this.gym_list.push(obj);
  },
  //showResult() {
  // console.log(this.name_list);
  // console.log(this.age_list);
  // console.log(this.living_list);
  // console.log(
  //   `회원리스트: ${this.name_list},회원나이 리스트: ${this.age_list},회원 사는곳: ${this.living_list}`
  // );
  // console.log(`회원리스트: ${this.gym_list}`);
  // },
};
