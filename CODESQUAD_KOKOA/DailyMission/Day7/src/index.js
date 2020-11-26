const FRUITS = ['grape','apple','orange','banana','kiwi','strawberry']
const BUTTON_COLORS = ["btn-two yellow rounded","btn-two green rounded","btn-two blue rounded","btn-two red rounded","btn-two purple rounded","btn-two cyan rounded"]

const dropbtn = document.querySelector("#mainBtn");
const dropdown = document.querySelector(".dropdown");
const dropdownCount = document.querySelector(".dropdownCount");
let btn0;
let btn1;
let btn2;
let btn3;
let btn4;
let btn5;

let printed;
let counting;
function printCounts() {
  FRUITS.map( function (v, i) {
    let li = document.createElement("li");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    span1.innerText = `${FRUITS[i]} : `
    span2.innerText = 0
    span2.id = `value${i}`
    li.appendChild(span1)
    li.appendChild(span2)
    dropdownCount.append(li)

  })
}

function printButtons(){
  printed = true
  FRUITS.map( function (v, i){
    let a = document.createElement('a');
    a.append(FRUITS[i])
    a.className = BUTTON_COLORS[i]
    a.id = 'btn'+i
    dropdown.appendChild(a)
  })
  printCounts()
  createQuerySelector()
}

function createQuerySelector(){
  btn0 = document.querySelector("#btn0")
  btn1 = document.querySelector("#btn1")
  btn2 = document.querySelector("#btn2")
  btn3 = document.querySelector("#btn3")
  btn4 = document.querySelector("#btn4")
  btn5 = document.querySelector("#btn5")

  btn0.addEventListener("mouseenter", function() {handleEnterCount(1)});
  btn1.addEventListener("mouseenter", function() {handleEnterCount(2)});
  btn2.addEventListener("mouseenter", function() {handleEnterCount(3)});
  btn3.addEventListener("mouseenter", function() {handleEnterCount(4)});
  btn4.addEventListener("mouseenter", function() {handleEnterCount(5)});
  btn5.addEventListener("mouseenter", function() {handleEnterCount(6)});

  btn0.addEventListener("mouseleave", handleLeaveCount);
  btn1.addEventListener("mouseleave", handleLeaveCount);
  btn2.addEventListener("mouseleave", handleLeaveCount);
  btn3.addEventListener("mouseleave", handleLeaveCount);
  btn4.addEventListener("mouseleave", handleLeaveCount);
  btn5.addEventListener("mouseleave", handleLeaveCount);
}

function handleEnter() {
  console.log('mouse enter')
  if (printed !== true){
    printed = setTimeout(printButtons, 1000);
  }
}

function handleLeave() {
  clearTimeout(printed)
}

function handleEnterCount(value) {
  counting = setTimeout(countPlus.bind(null, value),1000)
}

function handleLeaveCount() {
  clearTimeout(counting)
  
}

function countPlus(value){
  dropdownCount.childNodes[value].childNodes[1].innerText = parseInt(dropdownCount.childNodes[value].childNodes[1].innerText) + 1
}

dropbtn.addEventListener("mouseenter", handleEnter);
dropbtn.addEventListener("mouseleave", handleLeave);
