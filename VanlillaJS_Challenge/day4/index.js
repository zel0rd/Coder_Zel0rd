const title = document.querySelector("#title")

function handleResize() {
    console.log("resized")
    if (window.innerWidth < 500){
        // changeBackground("blue");
        document.body.style.background = "blue";
    }
    else if (window.innerWidth < 600){
        // changeBackground("purple")
        document.body.style.background = "purple";
    }
    else if (window.innerWidth > 700){
        // changeBackground("yellow")
        document.body.style.background = "yellow";
    }
}

function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("resize", handleResize)
// window.addEventListener("load",function() { changeBackground('red')})
