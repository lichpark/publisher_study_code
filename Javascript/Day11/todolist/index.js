const button = document.getElementById("todoButton");
const todoIns = document.getElementById("todoIns");
const todo__ul = document.getElementById("todo__ul");
const todoList = [];
button.addEventListener("click", (e) => addtodo(e));

const addtodo = (e) => {
  //   const todo__ul = document.getElementById("todo__ul");
  //   const makeli = document.createElement("li");
  //   if (todoIns.value != "") {
  //     //몇번째인지 어떻게 할까?
  //     const lis = document.querySelectorAll(".todo__li");
  //     //console.log(lis.length);
  //     makeli.innerHTML = `<li class="todo__li">${
  //       lis.length + 1
  //     } : <span class="li__span">${todoIns.value}</span></li>`;

  //     todo__ul.appendChild(makeli);
  //     todoIns.value = "";
  //     todoIns.focus();
  //   }
  if (todoIns.value != "") {
    todoList.push(todoIns.value);
    todo__ul.innerHTML = todoList
      .map(
        (v, idx) =>
          `<li class="todo__li">${
            idx + 1
          } : <span class="li__span">${v}</span></li>`
      )
      .join(" ");
    todoIns.value = "";
    todoIns.focus();
  }
};

todoIns.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addtodo(e);
  }
});
