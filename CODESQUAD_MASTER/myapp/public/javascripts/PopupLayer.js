let btn = document.querySelector(".userBtn")
let contents = document.querySelector(".containerHidden");
let containerTitle = document.querySelector(".containerTitle");

window.addEventListener("click", (event) => {
    console.log(event.target.parentElement.className)
    if (event.target.matches('#userBtn')) {
        contents.classList.toggle("containerShow");
    } 
    else if(event.target.className !== "userBtnLi") {
        contents.classList.remove("containerShow")
    } 
})