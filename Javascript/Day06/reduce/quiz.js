//user 에게 영어 문장 입력받고 각단어의 문자의 길이의 합을 구하기
//i love you -> 1,4,3, =>8

const sum =
  prompt("insert eng sentence")
    .split(" ")
    .map((x) => x.length)
    .reduce((x, y) => x + y) || 0;
console.log(sum);
