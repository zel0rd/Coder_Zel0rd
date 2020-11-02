const toDoForm = document.querySelector(".js-toDoFrom")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDOList")

const TODOS_LS = "toDos"

const toDos = [];

function paintToDO(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    delBtn.innerText = "❌"
    const span = document.createElement("span")
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBtn)
    toDoList.appendChild(li);
    const toDoObj = {
        text: text
        
    }
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue)
    toDoInput.value = ""
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS)
    if (toDos !== null){

    } else {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init()