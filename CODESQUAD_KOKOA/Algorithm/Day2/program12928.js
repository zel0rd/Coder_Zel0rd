function solution(n){
    return Array.from({length:parseInt(n/2)}, (x,i) => i + 1)
    .filter(v => n % v === 0)
    .reduce((acc, val) => acc + val, n)
}

console.log(solution(12))