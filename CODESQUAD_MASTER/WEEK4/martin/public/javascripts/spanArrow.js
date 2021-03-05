const arrowImg = document.querySelector(".arrowImg")


arrowImg.addEventListener("click", function({target}){
    arrowImg.style.WebkitTransform ="rotate(10deg) scale(0.1)"
    console.log(target)
})