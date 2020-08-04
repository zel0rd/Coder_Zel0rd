// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Functioon expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// hoist X
// const print = function(){ // anonymous function
//     console.log('print');
// };
// print()
// const printAgain = print;
// printAgain()
// const sumAgain = sum;
// console.log(sumAgain(1,3,));

// hoist O
// print()
function print(){ // named function
    console.log('print');
};
// print()
// const printAgain = print;
// printAgain()

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if ( answer === 'love you' ){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
}
// named function
// better debugging indebugger's stacl traces
// recursions

const printNo = function print(){
    console.log('no!');
    print();
}
// randomQuiz('wrong', printYes, printNo);
// randomQuiz('love you',printYes,printNo)


// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

// const simplePrint = () => console.log('simplePrint!');
// // arrow
// const add = (a, b) => a + b;
// // not
// const add = function(a, b){
//     return a+b;
// }

// IIFE: immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})