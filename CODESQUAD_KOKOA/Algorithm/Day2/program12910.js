function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach(function (v){
        ((v % divisor) == 0 ) ? answer.push(v) : ""
    })
    
    if (answer.length === 0) answer.push(-1)
    
    return answer.sort((a,b) => a - b)
}

console.log(solution([5, 9, 7, 10], 5))