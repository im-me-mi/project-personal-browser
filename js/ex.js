const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const mainTitle = document.querySelector("#main-title");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  sessionStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loadMainTitle(userName);
}

function loadMainTitle(userName) {
  mainTitle.innerText = `Hello ${userName}`;
  mainTitle.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = sessionStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogSubmit);
} else {
  loadMainTitle(savedUserName);
}

if (window.closed) {
  sessionStorage.removeItem(USERNAME_KEY);
}
