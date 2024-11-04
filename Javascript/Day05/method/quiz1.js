//유저에게 이메일 입력받고
//1.도메인 naver,gmail,daum아니면 해당도메인 안됩니다.
//2.이메일주소 길이가 4~16글자 사이가 아니면 주소길이 올바르지 않습니다.

const idValidate = {
  minWidth: 4,
  maxWidth: 16,
  domain: ["naver", "gmail", "daum"],
  email_vali(email) {
    //const email = this.email_str;
    const email_arr = email.split("@");
    const domainVali =
      email_arr[1].includes(this.domain[0]) ||
      email_arr[1].includes(this.domain[1]) ||
      email_arr[1].includes(this.domain[2]);
    const islengthChk =
      email_arr[0].length >= this.minWidth &&
      email_arr[0].length <= this.maxWidth;

    if (!domainVali) {
      console.log("해당 도메인 불가");
    } else if (!islengthChk) {
      console.log("이메일주소가 맞지 않음");
    } else {
      console.log("이메일주소 등록 완료");
    }
  },
  ins() {
    const email = prompt("이메일을 입력해주세요");
    //this.email_str = email;
    this.email_vali(email);
  },
};

idValidate.ins();
