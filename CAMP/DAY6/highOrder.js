// Higher-Order Function

// 일급 객체(First-class citizens)
// - 변수 혹은 데이터 구조에 담을 수 있다
// - 파라미터로 전달할 수 있다.
// - 반환값으로 사용할 수 있다.
// - 자바스크립트에서는 숫자,문자, 함수도 일급 객체이다

// 숫자를 변수에 저장하듯이 함수도 변수에 저장
let one = 1;
let two = () => 2;
let arr = [1, () => 2]

// 함수를 함수에 전달
// const fun(n, f) => n + f();
const fun = ( n, f ) => n + f();
console.log(fun(1, () => 2))
// fun(1, () => 2)

// 함수를 파라미터로 받는 함수
function repeat(times, value){
    arr = [...Array(times).keys()]
    arr2 = [...Array(10).keys()]
    // console.log(arr)
    // console.log(arr2)
    return [...Array(times).keys()].map(i=>value)
}    
// console.log(repeat(5,'foo'))

// repeatedly()
function repeatedly(times, fun){
    return [...Array(times).keys()].map(fun)
}
console.log(repeatedly(3, () => 'foo'));
console.log(repeatedly(3, (i) => `foo${i}`));

// repeatUntil()
function repeatUntil(fun, check, seed){
    let ret = [],
    result = fun(seed)
    while (check(result)){
        ret.push(result)
        result = fun(result)
    }
    return ret;
}
console.log(repeatUntil(n => n+n,
                    n => n <= 1024,
                    1))