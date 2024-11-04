//window.alert("");
//window.prompt("");

//함수(레시피): 기능

const coffee = "ice americano";
coffee.toUpperCase(); //대문자화! ICE AMERICANO
coffee.toLowerCase(); //소문자화! ice americano
coffee.charAt(0); //몇번째 뭔지 알려줌 =>i
coffee.indexOf("am"); //am이 몇번째있는지 알려줌 ->4
coffee.includes("ce"); // ce가 포함하는지 알려줌 -> [true]/false
coffee.startsWith("a"); // a로 시작하는지 알려줌 -> true/[false]
coffee.slice(0, 4); // 0번째 부터 3번째 까지 잘라줌 (ice)
coffee.replace("ice", "not"); // ice를 hot로 바꿔줌 -> not americano
coffee.repeat(2); //해당단어 2번 반복하기

const kidsCafe = ["타요", "하츄핑", "점핑"];

kidsCafe.push("애완");
kidsCafe.pop();
kidsCafe.unshift("무인");
kidsCafe.shift();

kidsCafe.reverse(); //순서 거꾸로
kidsCafe.sort(); //정렬하기(순서대로 줄세우기)
kidsCafe.includes("하츄핑"); //포함여부 확인
kidsCafe.splice(0, 1); //자르기
