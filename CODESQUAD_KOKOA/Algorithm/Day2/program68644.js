function solution(numbers) {
    const answer = new Set();
    for (let i = 0; i < numbers.length ; i++){
        for (let j = 0; j < numbers.length ; j++){
            if (i !==j){
                answer.add(numbers[i] + numbers[j])
            }
        }
    }
    return [ ...answer ].sort((a, b) => a - b)
}

console.log(solution([2,1,3,4,1]))