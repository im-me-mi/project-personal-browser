const loginForm = document.querySelector("form#login-form");
const loginInput = document.querySelector("form#login-form input");
const mainTitle = document.querySelector("p#main-title");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loadMainTitle(userName);
}

function loadMainTitle(userName) {
  mainTitle.innerText = `환영합니다 ${userName}님`;
  mainTitle.classList.remove(HIDDEN_CLASSNAME);
}

//localstorage에 저장하기까지의 실행과정

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogSubmit);
  //localstorage에 유저이름이 저장되어 있지 않을시 실행되는 동작
  //(form을 다시 불러와 저장하기까지의 실행과정을 거친다.)
} else {
  loadMainTitle(savedUserName);
  //localstorage에 유저이름이 저장되어 있을시 실행되는 동작
}
