// 1. factorial_calculator
const data = require('./data')

function getArrayMultiple(num){
    let temp = 1;
    let arr = [...Array(num)].map((v,i) => i + 1)
    arr.forEach(function (n) {
        temp *= n
    });
    return temp
}

function factorial(n){
    if(n === 0){ return [ 0 ] }
    return Array.from({ length: n }, (_,i) => getArrayMultiple(i + 1))
}

function calculate(n){
    console.log(factorial(n))
}

calculate(4)
// ************************************************** //


// 2. 배열 거르기 (forEach, filter, map)
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

// case1.
function checkSpecial(str){ 
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    if(special_pattern.test(str) == false){ return str } 
}

function replaceNumber(str){
    return str.replace(/[0-9]/g,'');
}

function filterId(peoples){
    result = peoples.filter(checkSpecial).map(replaceNumber)
    console.log(result)
}

filterId(peoples)

// case2.
function filterId2(peoples){
    result = []
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    for(let i=0;i < peoples.length ; i++){
        if(special_pattern.test(peoples[i]) == false){
            result.push(peoples[i].replace(/[0-9]/g,''))
        }
    }
    console.log(result)
}
filterId2(peoples)

// ************************************************** //


// 3. 평균 구하기
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

function getAverage(arr){
    return parseInt(arr.reduce((a,b) => (a+b)) / arr.length);
}

function getBestArr(arr){
    let max = arr.reduce(function(a,b) {
        return Math.max(a,b);
    })
    return max;
}

function getAverageObj(obj){
    let sum = 0
    for(key in obj){
        sum += obj[key]
    }
    return parseInt(sum / obj.length)
}


let averages = grades.map(function(v) {
    return getAverage(v)
});
console.log(averages)

let bestScores = grades.map(function(v) {
    return getBestArr(v)
})

let bestAverage = getAverageObj(bestScores)

console.log(bestAverage)
// ************************************************** //


// 4. 배열 만들기

const arrayData = data.arrayData

result = []
for (key in arrayData){
    const sub = arrayData[key]
    for (a in sub){
        if (typeof sub[a] === 'number'){
            result.push(a)
        }
    }
}
console.log(result)

// ************************************************** //


// // 5. 배열 결과 출력
const nodeData = data.nodeData

// function getChildNode(v){
//     node.map(function (v){
//         return v.childnode
//     })
// }

console.log(nodeData)

// ************************************************** //


// 6. reduce 만들기
// const myReduce = (arr, callback, initialValue) => {
//     //여기에 구현
// }

// const result = myReduce(arr, (next,prev) => {...}, []);


// ************************************************** //


// 7. 추가미션

// ************************************************** //
