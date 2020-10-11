// const title = document.getElementById("title");
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";


// toggle 작동원리
// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if (!hasClass) {
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
//     console.log(title.className)
// }

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();