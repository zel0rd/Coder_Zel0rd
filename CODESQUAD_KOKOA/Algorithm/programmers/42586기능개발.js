function solution(progresses, speeds) {
    var answer = [];
    let costDays = [];
    for(let i = 0; i < progresses.length; i++){
        costDays.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    // console.log(costDays)
    let today = costDays[0];
    let temp = 0;
    costDays.map(function(v){
        // console.log(v, ":",today, ":",temp)
        if(today >= v){
            temp += 1;
        } else {
            answer.push(temp)
            today = v;
            temp = 1;
        }
    })
    answer.push(temp)
    return answer;
}