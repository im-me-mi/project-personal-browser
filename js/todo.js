const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delTodo(event) {
  const delList = event.target.parentElement;
  delList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delList.id));
  saveToDos();
}
 
function paintToDo(newDo) {
  const newList = document.createElement("li");
  newList.id = newDo.id;
  const newSpan = document.createElement("span");
  newSpan.innerText = newDo.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "⛔";
  delBtn.addEventListener("click", delTodo);
  newList.appendChild(newSpan);
  newList.appendChild(delBtn);
  toDoList.appendChild(newList);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
