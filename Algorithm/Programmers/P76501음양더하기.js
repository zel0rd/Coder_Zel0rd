function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < signs.length; i++){
        signs[i] ?  answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,i) => acc + (cur * (signs[i] ? 1 : -1)), 0)
}