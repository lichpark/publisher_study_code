// event:상호작용 하는거
//클릭,글쓰기,스크롤, 데이터가져오기....
//버튼 생성
const btn = document.createElement("button");
//버튼에 글넣기
btn.innerHTML = "button";
//hello func 생성
const hello = () => {
  alert("hello");
};
//버튼에 이벤트 삽입(이벤트,이벤트시 실행될 함수)
btn.addEventListener("click", hello);
//html에 버튼 추가
document.body.appendChild(btn);
