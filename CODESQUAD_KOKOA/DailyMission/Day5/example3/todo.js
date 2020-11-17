const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';

let toDos = [];

class Model{
  constructor() {
    this.toDos = [];
  }
  deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
  }

  saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
  }

  loadedToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos)
      parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text)
      })
    } 
  }

  init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
  }
}

let model = new Model();

// View

function paintToDo(text){
    const checkBox = document.createElement("input")
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; 

    checkBox.setAttribute("type","checkbox")
    delBtn.innerText = "🗑️";
    delBtn.addEventListener("click",deleteToDo)
    span.innerText = text;
    li.appendChild(checkBox)
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li)
    const toDoObj = {
        id: newId,
        text: text,
    }
    toDos.push(toDoObj)
    saveToDos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    if (toDoInput.value !== ""){
        paintToDo(currentValue);
    }
    toDoInput.value = "";
}

init();