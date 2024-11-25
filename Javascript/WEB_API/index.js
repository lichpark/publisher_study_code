// local storage save
//localStorage.setItem("nation", "korea");
//localStorage.getItem("nation");

//const coffee = document.getElementById("coffee");
//coffee.innerText = localStorage.getItem("text1");
//input.value = localStorage.getItem("text1");

const save = document.getElementById("save");
const input = document.getElementById("input");
const foodList = document.getElementById("foodList");
const remove = document.getElementById("remove");

//data 가져와서 초기 세팅
const data = localStorage.getItem("data");
const saveList = data ? data.split(",") : [];

const createDiv = () => {
  foodList.innerHTML = `${saveList.map((v) => `<li>${v}</li>`).join("")}`;
};

remove.addEventListener("click", () => {
  remAll();
});

const stroageAdd = () => {
  createDiv();
};

const coffeeH1 = () => {
  //coffee.innerText = input.value;
  //coffee.innerText = localStorage.getItem("nation");
  //console.log(saveList);
  saveList.push(input.value);
  createDiv();
  localStorage.setItem("data", saveList);
  input.value = "";
};

const remAll = () => {
  localStorage.removeItem("data");
  foodList.innerHTML = "";
  saveList.length = 0;
  input.value = "";
};

// 저장 버튼 실행
save.addEventListener("click", (e) => coffeeH1());
input.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    coffeeH1();
  }
});

stroageAdd();
