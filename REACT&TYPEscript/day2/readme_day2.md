# DAY2

let x = 10;

function foo() {
    return 0;
}
let y = foo;


// 이름 있는 함수 vs 이름없는 함수
// 함수를 값으로 취급할때는 이름을 생략할 수 있다.
const bar = function bar(){

};

const bar = function (){

};
// Error ()로 묶으면 객체로 이해함
// function() {

// }

// 즉시실행 함수
// 이미디에이트 펑션 콜 
(function() {

}) ()  // 함수를 딱 한번만 실행



function foo2(x) {
    return 0;
    // 함수식도 리턴할 수 있다.
    // return function(){

    // };
}

// 함수에 인자로 변수와 같이 함수를 넣을 수 있다.
foo2(function(){

})

// 콜백함수 // 함수의 호출을 위임하는 것
// 함수합성
// 일급함수 HOC

// 함수 : 코드로 묶어있는 값 (호출 가능 = 실행)
// 재귀호출?


// 화살표 함수
// const bar = function (x) {}
const bar = (x) => {}
// 모든 자바스크립트 코드를 식, 문으로 나눌수 있다
// 코드실행 결과가 값으로 나오면 식 (세미콜론 O)
// 코드샐행 결과가 값이 안나오면 문 (세미콜론 X) => if, while

const bar = x => x * 2;
console.log(bar(10))

const x = 10;
const y = (x) => x * 2 // 괄호는 변수가 2개 이상일 때 필요


new 연산자란
this라는 instance 객체를 만들어 낸다
constructor
prototype
...args
prettier
javascript 스펙?
redux
클로저
bind

function bar() {
    this.name = 10;
}

class bar {
    constructor() {
        this.name = 10;
    }
}

new bar()
// 함수와 클래스의 차이 constructor(생성자)가 명확하게 보인다
// function은 new bar(), bar() 둘다 호출이 된다.
// 함수명의 첫글자가 대문자면 new로 호출하고 아니면 그냥 호출
// class로 만들면 무조건 new로 호출해야 한다.

const person = {
    name : '김민태',
    getName() {
        return this.name;
    }
}
console.log(person.getName())

const man = person.getName;
console.log(man())

button.addEventListener('click', person.getName.bind(person))


call vs apply?? bind??


## 클로저
function foo(x) {
    return function bar() {
        return x;
    }
}

const f = foo(10); // f= bar()

console.log(f())


## 모듈 패턴, 클로저
const person = {
    age: 10,
}

function makePerson(){
    let age = 10;

    return {
        getAge() {
            return age;
        },
        setAge(x) {
            age = x > 1 && x < 130 ? x : age;
        }
    }
}

person.age = 500;

getter vs setter

## 동기 vs 비동기 (callback, promise)

const p1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("응답");
    }, 1000)
});

p1.then(function(r){
    console.log(r);
}).catch(function(){

})

resolve => then
reject => catch


setTimeout(function(x) {
    console.log('앗싸')
    setTimeout(function(y) {
        console.log('웃싸')
    }, 2000)
}, 1000);

-----
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async functino main() {
    console.log('1');
    try{
        await delay(2000)
    } catch(e) {
        console.error(e);
    }
    console.log('2');
}
// pending 상태

main();

클로저는 커링을 사용한다??

## 리덕스