const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const body = document.querySelector("body");
const todoList = document.querySelector("#todoList");

let counter = 1;

function addTodo() {
  let inputVal = inputEl.value;

  const newTodoEl = document.createElement("h4");
  const newDelete = document.createElement("button");

  newTodoEl.innerText = inputVal;
  newDelete.innerText = "delete";

  newDelete.setAttribute("onclick", `deleteTodo(${counter + 1})`);
  newTodoEl.setAttribute("id", `'${counter}'`);

  todoList.appendChild(newTodoEl);
  newTodoEl.appendChild(newDelete);

  inputEl.value = "";
  counter++;
}

function deleteTodo(counter) {
  console.log("delete called");
  //   const todoList = document.querySelector("#todoList");
  const targetH4 = document.getElementById(`'${counter}'`);

  todoList.removeChild(targetH4);
}
