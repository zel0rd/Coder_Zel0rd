function arraySum(arr){
    let sum = 0
    arr.forEach((v) => sum += v)
    return sum
}

function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (arraySum(d) > budget){
        d.pop()
    }
    return d.length;
}