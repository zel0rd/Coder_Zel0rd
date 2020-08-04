// 고차함수
// 함수를 더 추상화하면 차원이 높아지는 고차함수로 표현할 수 있다.
// 그 중에서도 여러 값이 들어있는 콜랙션을 탐색하고, 비교하고, 찾아서 정리하는 기능은 자주 사용한다.

// JS 콜랙션 인터페이스
// map
var arr = ['foo', 'hello', 'diamond', 'A']
// 각 요소의 글자 길이값 반환
var arr2 = arr.map((v) => v.length)
console.log(arr2)     // [3, 5, 7, 1]

// filter
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.filter((v) => (v % 5 === 0))
console.log(arr2)    // [15, 395, 400, 3000]

// reduce
let arr = [9, 2, 8, 5, 7]
let sum = arr.reduce((pre, val) => pre + val)
console.log(sum)    // 31

// map
var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.reduce((pre, value) => {
    pre.push(value.length)
    return pre
}, [])
console.log(arr2)   // [3, 5, 7, 1]

// filter
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (value % 5 == 0) {
        pre.push(value);
    }
    return pre;
}, []);
console.log(arr2)    // [15, 395, 400, 3000]

// find
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (typeof pre == 'undefined' && value % 5 == 0) {
        pre = value;
    }
    return pre;
}, undefined);
console.log(arr2)  // 15