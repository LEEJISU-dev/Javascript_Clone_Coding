const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// login form submit
function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings();
}
// 로그인시의 화면세팅
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY) ;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUsername = localStorage.getItem(USERNAME_KEY) ;
// username이 없는경우
if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
// username이 있는경우
} else {
    paintGreetings();
}

