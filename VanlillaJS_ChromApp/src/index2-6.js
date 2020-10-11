// const title = document.getElementById("title");
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";


function handleResize(event) {
    console.log(event)
}

window.addEventListener("resize", handleResize);


function handleClick() {
    // title.style.color = OTHER_COLOR;
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

title.addEventListener("click", handleClick); 

function handleMouse() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

title.addEventListener("mouseenter",handleMouse);

function init() {
    title.style.color = BASE_COLOR;
    // HTML javascript DOM event MDN
}
init();

function handleOffline() {
    title.innerHTML = "You are Offlined"
    console.log("Bye bye");
}

function handleOnline() {
    title.innerHTML = "You are Onlined"
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline)