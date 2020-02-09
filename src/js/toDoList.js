const toDo = document.getElementById("toDo");
const inputToDo = document.getElementById("inputToDo");
const toDoList = document.getElementById("toDoList");

let i = 0;
let toDoArr = JSON.parse(localStorage.getItem("toDos")) || [];

const handleSubmit = e => {
  e.preventDefault();
  toDoArr.push(inputToDo.value);
  localStorage.setItem("toDos", JSON.stringify(toDoArr));
  const li = document.createElement("li");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.id = toDoArr.length - 1;
  li.innerHTML = toDoArr[toDoArr.length - 1];
  li.appendChild(span);
  span.id = toDoArr.length - 1;
  span.innerHTML = "❌";
  span.addEventListener("click", handleDelete);
};

const loadData = () => {
  const toDoArr = JSON.parse(localStorage.getItem("toDos"));
  if (toDoArr) {
    while (i < toDoArr.length) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      toDoList.appendChild(li);
      li.id = i;
      li.innerHTML = toDoArr[i];
      li.appendChild(span);
      span.id = i;
      span.innerHTML = "❌";
      span.addEventListener("click", handleDelete);
      i++;
    }
  }
};

const handleDelete = e => {
  let toDoArray = JSON.parse(localStorage.getItem("toDos"));
  const parent = e.target.parentNode;
  const child = e.target;
  toDoList.removeChild(parent);
  console.log(child.id);
  console.log(parent.id);
  const removeToDo = toDoArray.splice(1, parent.id);
  console.log(removeToDo);
  toDoArr = removeToDo;
  localStorage.setItem("toDos", JSON.stringify(toDoArr));
};

const eventListeners = () => {
  toDo.addEventListener("submit", handleSubmit);
};

const init = () => {
  loadData();
  eventListeners();
};

init();
