function solution(answers) {
    const answer = []
    const METHOD = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const correct = Array.from({length: METHOD.length}, () => 0);

    for(let i = 0; i < answers.length; i++){
        for(let j = 0; j < METHOD.length; j++){
            if (METHOD[j][i % (METHOD[j].length)] === answers[i]){
                correct[j] += 1
            }
        }
    }
    
    for(let i = 0; i < correct.length; i++) {
        if(Math.max(...correct) == correct[i]) answer.push(i + 1);
    }
    
    return answer
}

// function solution2(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};


//     return answer;
// }

console.log(solution([1,2,3,4,5]))