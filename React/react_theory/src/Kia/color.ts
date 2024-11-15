export const colorObj: { [key in "grey90" | "grey80" | "grey70"]: string } = {
  grey90: "#1E2C35",
  grey80: "#374c3c",
  grey70: "#505b62",
};

const obj: { coffee: string } = { coffee: "아메리카노" };
//[keyName in string] : 문자열인 키값
const obj1: { [coffee in string]: string } = { coffee: "우유" };
//인덱스 시그니처
const obj2: { [key in "name" | "nickname"]: string } = {
  name: "우유",
  nickname: "티모",
};

//key값은 red & pink 이고 value값은 string타입잡기!

const tObj: { [key in "red" | "pink"]: string } = { red: "red", pink: "pink" };
