//1. 기초적인 방법 (쌩코딩)
const btn = document.createElement("button");
btn.innerHTML = "Button";
btn.style.padding = "10px 20px";
btn.style.borderRadius = "30px";
btn.style.backgroundColor = "skyblue";
//document.body.appendChild(btn);

//2.함수로 줄이기

const makeButton = (text, color) => {
  const btn = document.createElement("button");
  btn.innerHTML = text;
  btn.style.padding = "10px 20px";
  btn.style.borderRadius = "30px";
  btn.style.backgroundColor = color;
  //document.body.appendChild(btn);
};

makeButton("button", "blue");
makeButton("button2", "skyblue");

//3.클래스 사용
class Button {
  constructor(backgroundColor) {
    this.button = document.createElement("button");
    this.button.innerText = "Button";
    this.button.style.backgroundColor = backgroundColor;
    this.button.style.padding = "10px 20px";
    this.button.style.borderRadius = "30px";
  }

  appendToHTML() {
    //document.body.appendChild(this.button);
  }
}

const pinkButton = new Button("pink");
pinkButton.appendToHTML();

const azureButton = new Button("azure");
azureButton.appendToHTML();

// ------------------

const arr = [
  {
    inputId: "ui_member_id",
    check: ["id-alphaNum-tag", "id-length-tag"],
    buttonClass: "ui_member_id_check_btn",
  },
  {
    inputId: "ui_member_pwd",
    check: [
      "password-eng-tag",
      "password-num-tag",
      "password-special-tag",
      "password-lengthp-tag",
    ],
    buttonClass: "",
  },
  { inputId: "ui_email", check: "email-email-tag", buttonClass: "" },
];
const val = {
  alphaNum: /^[A-Za-z0-9+]*$/g,
  idmin: 6,
  idmax: 20,
  passnum: /^[A-Za-z0-9+]*$/g,
  eng: /^[A-Za-z]*$/g,
  num: /^[0-9]*$/g,
  special: /[*~!^\-_@\$%]/g,
  passmin: 8,
  passmax: 20,
  //!@$%^*_+~
  ///[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g
};

const color = "green";
const basiccolor = "#999";

class joinMember {
  constructor(inputId, check, buttonClass) {
    this.inputId = inputId;
    this.check = check;
    this.buttonClass = "";
  }

  addevent() {
    arr.map((v) => {
      const eventadd = document.getElementById(v.inputId);
      eventadd.addEventListener("input", (e) => {
        this.checkval(e);
      });
    });
  }

  checkval = (e) => {
    const fidIdx = arr.findIndex((obj) => obj.inputId == e.target.id);
    //console.log(fidIdx);
    //console.log(arr[fidIdx]);
    // console.log(e.target.id);
    this.inputchk(e, arr[fidIdx]);
  };
  inputchk = (e, v) => {
    //console.log(v);
    //console.log(e.target.id);
    v.check.forEach((vv) => this.valchk(e, vv));
  };
  valchk(e, vv) {
    //console.log(spanid);
    // console.log(e);
    // console.log(vv);
    const splstr = vv.split("-")[1];
    const valstr = val[splstr];
    // console.log(vv.split("-")[1]);

    const eVal = e.target.value;
    const span = document.getElementById(vv);
    //console.log(eVal.length);
    if (splstr != "length" && splstr != "lengthp") {
      //console.log(valstr);
      if (eVal.length == 0) {
        span.style.color = basiccolor;
      } else {
        if (splstr == "eng" || splstr == "num") {
          if (eVal.match(val["passnum"])) {
            span.style.color = color;
          }
        } else {
          if (eVal.match(valstr)) {
            span.style.color = color;
          } else {
            span.style.color = basiccolor;
          }
        }

        if (eVal.match(valstr)) {
          if (splstr == "eng" || splstr == "num") {
            console.log(eVal);
            if (eVal.match(val["passnum"])) {
              span.style.color = color;
            }
          } else {
            span.style.color = color;
          }
        } else {
          span.style.color = basiccolor;
        }
      }

      //   eVal.match(valstr) ? console.log("p") : console.log("f");
    } else if (splstr == "length") {
      // console.log(splstr);
      // console.log(eVal.length);
      if (eVal.length >= val["idmin"] && eVal.length <= val["idmax"]) {
        span.style.color = color;
      } else {
        span.style.color = basiccolor;
      }
    } else if (splstr == "lengthp") {
      // console.log(splstr);
      // console.log(eVal.length);
      if (eVal.length >= val["passmin"] && eVal.length <= val["passmax"]) {
        span.style.color = color;
      } else {
        span.style.color = basiccolor;
      }
    }
  }
}

const joinmember = new joinMember();
joinmember.addevent();
