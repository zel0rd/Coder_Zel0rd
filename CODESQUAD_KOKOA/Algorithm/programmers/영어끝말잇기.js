function solution(n, words) {
    var answer = [];
    let record = [words[0]];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 
    for(let i = 0; i < words.length -1 ; i++){
        record.push(words[i])
        let endSpell = words[i][words[i].length-1]
        let startSpell = words[i+1][0]
        if (endSpell !== startSpell){
            answer.push(i+1)
            break;
        }
        if (record.includes(words[i+1])) {
            answer.push(i+1)
            break;
            }
    }
    
    
    if (answer.length === 0){
        answer = [0,0]
    } else {
        answer = [(answer[0]) % n +1 , Math.ceil((answer[0]+1)/n)]
    }
    return answer;
}