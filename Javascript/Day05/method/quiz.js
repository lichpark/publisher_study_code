//1.user에게 영어로 좋아하는 커피 입력받아서 콘솔로 대문자화 해서 보여주기
//const coffee = prompt("What is your favorite coffee?").toUpperCase();
//console.log(coffee);
//2. 유저에게 영어 한 문장을 입력받고 ,반복회수를 물어봐서 그만큼 문장이 반복해서 콘솔로 나오게 하기
// const sentence = prompt("What is your favorite sentence?");
// const count = Number(prompt("ins repeat"));
// console.log(sentence.repeat(count));

//유저에게 비밀번호 설정을 물어보기
// 1.비밀번호가 알파벳 IT로 시작 안하면 -> 비밀번호가 IT로 시작 안합니다.
// 2.비밀번호가 #,@,! 없으면 -> 비밀번호에 특문이 없습니다.
// 3.비밀번호의 문자길이가 4~12사이가 아니면 -> 비밀번호 길이가 짧거나 깁니다.
// 4.위 조건이 다되면 비번설정 완료

const password_validation = {
  ins_password: "",
  validate_text: "비번설정 완료!",
  max_length: 12,
  min_length: 4,
  password_prompt() {
    const password = prompt("insert password");
    this.ins_password = password;
    this.validate_pass();
  },
  validate_pass() {
    const pass = this.ins_password;
    const hasSpecialChar =
      pass.includes("#") || pass.includes("!") || pass.includes("@");
    const isLower = pass.length < this.min_length;
    const isUpper = pass.length > this.max_length;

    if (pass.indexOf("IT") < -1) {
      this.validate_text = "비밀번호가 IT로 시작 안함!";
    } else if (!hasSpecialChar) {
      this.validate_text = "비밀번호에 특문 없음!";
    } else if (isLower || isUpper) {
      this.validate_text = "비번길이가 짧거나 깁니다.";
    }
    console.log(this.validate_text);
  },
};

password_validation.password_prompt();
