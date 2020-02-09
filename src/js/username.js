

const nameInput = document.getElementById("username");
const nameSubmit = document.getElementById("nameSubmit");
const showUsername = document.getElementById("showUsername");
const deleteBtn = document.getElementById("deleteBtn");

function getUsername(e) {
  e.preventDefault();
  localStorage.setItem("username", nameInput.value);
  showUsername.innerHTML = `반갑습니다 ${localStorage.getItem("username")}님!`;
  deleteBtn.innerHTML = `edit name ❌`;
  nameInput.style.display = "none";
}
const disableSubmit = () => {
  if (localStorage.getItem("username")) {
    nameInput.style.display = "none";
    deleteBtn.innerHTML = "edit name ❌";
  }
};

const loadData = () => {
  if (localStorage.getItem("username")) {
    showUsername.innerHTML = `오늘도 힘찬 하루되세요, ${localStorage.getItem(
      "username"
    )}님!`;
  }
};

const deleteName = () => {
  localStorage.removeItem("username");
  showUsername.innerHTML = "";
  deleteBtn.innerHTML = "";
  nameInput.style.display = "block";
};
const eventsListeners = () => {
  nameSubmit.addEventListener("submit", getUsername);
  deleteBtn.addEventListener("click", deleteName);
};

function init() {
  disableSubmit();
  eventsListeners();
  loadData();
}

init();
