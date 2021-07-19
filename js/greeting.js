// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButtom = loginForm.querySelector("buttom");
// if(username === "") {
//     alert("Please write your name");
// } else if(username.length > 15) {
//     alert("Your name is too long.")
// }


const loginForm =document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    if(hours >= 00 && hours < 12){
    greeting.innerText = `Good Morning, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if(hours >= 12 && hours < 19){
        greeting.innerText = `Good Afternoon, ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {
        greeting.innerText = `Good Evening, ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    };
    //greeting.innerText = "Hello " + username;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}