// const toDoForm = document.querySelector("form#todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.querySelector("#todo-list");

// let toDos = [];

// const TODOS_KEY = "toDos";

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }
// function delTodo(event) {
//   const delList = event.target.parentElement;
//   delList.remove();
// }

// function paintToDo(newDo) {
//   const newList = document.createElement("li");
//   const newSpan = document.createElement("span");
//   newSpan.innerText = newDo;
//   const delBtn = document.createElement("button");
//   delBtn.innerText = "❌";
//   delBtn.addEventListener("click", delTodo);
//   newList.appendChild(newSpan);
//   newList.appendChild(delBtn);
//   toDoList.appendChild(newList);
// }

// function handleTodoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleTodoSubmit);

// const savedToDos = localStorage.getItem("toDos");

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintToDo);
// }
