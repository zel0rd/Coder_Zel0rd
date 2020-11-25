// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const FRUITS = ['grape','apple','orange','banana','kiwi','strawberry']
// const FRUITS = ['김은실','사랑해','김은실','사랑해','김은실','사랑해']
const BUTTON_COLORS = ["btn-two yellow rounded","btn-two green rounded","btn-two blue rounded","btn-two red rounded","btn-two purple rounded","btn-two cyan rounded"]

const dropbtn = document.querySelector("#mainBtn");
const dropdown = document.querySelector(".dropdown");
let btn0;
let btn1;
let btn2;
let btn3;
let btn4;
let btn5;

console.log("dropdown", dropdown)
console.log("dropbtn", dropbtn)
// const h2 = document.querySelector("h2");
let printed;

function print(){
  printed = true
  FRUITS.map( function (v, i){
    let a = document.createElement('a');
    a.append(FRUITS[i])
    a.className = BUTTON_COLORS[i]
    a.id = 'btn'+i
    dropdown.appendChild(a)
  })
  createQuerySelector()
}

function createQuerySelector(){
  btn0 = document.querySelector("#btn0")
  btn1 = document.querySelector("#btn1")
  btn2 = document.querySelector("#btn2")
  btn3 = document.querySelector("#btn3")
  btn4 = document.querySelector("#btn4")
  btn5 = document.querySelector("#btn5")

  btn0.addEventListener("mouseenter", handleEnterCount);
  btn1.addEventListener("mouseenter", handleEnterCount);
  btn2.addEventListener("mouseenter", handleEnterCount);
  btn3.addEventListener("mouseenter", handleEnterCount);
  btn4.addEventListener("mouseenter", handleEnterCount);
  btn5.addEventListener("mouseenter", handleEnterCount);

}

function handleEnter() {
  console.log('mouse enter')
  if (printed !== true){
    printed = setTimeout(print, 1000);
  }
}


function handleLeave(countOneSec) {
  console.log('mouse leave')
  clearTimeout(printed)

}

function handleEnterCount() {
  console.log("AAA")
}


dropbtn.addEventListener("mouseenter", handleEnter);
dropbtn.addEventListener("mouseleave", handleLeave);
