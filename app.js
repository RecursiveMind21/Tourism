const loginCLick = document.querySelector("#login");
const registerClick = document.querySelector("#register");

loginCLick.addEventListener("click", ()=> {
    window.location.href = "login.html";
});

registerClick.addEventListener("click", () => {
    window.location.href = "register.html";
});