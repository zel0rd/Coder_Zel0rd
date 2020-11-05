// (사람 수 * 갯수) 해당 진법으로 변환하여 문자열로 리턴
function arrayToString(base, range, numOfPeople){
    let result = "";
    const decRange = [...(Array(range * numOfPeople).keys())]

    decRange.forEach(function (n){
        result += n.toString(base)
    })

    return result
}

// 문자열에서 차례에 해당하는 숫자를 배열로 리턴
function getTurns(string, numOfPeople, turn){
    let result = [];
    let index = Array.from({ length: parseInt(string.length / numOfPeople) }, (_,i) => i * numOfPeople).map(function(v){
        return v + turn - 1
    }).forEach(function(element, index){
        result.push(string[element])
    })

    return result
}

function solution(base, range, numOfPeople, turn){
    const string = arrayToString(base, range, numOfPeople)
    
    if(turn === undefined){ // turn이 없을 경우는 말해야하는 수만 출력
        console.log(`${base}진수일 때, ${range}개씩 ${numOfPeople}명이 말해야하는 수`)
        console.log(string.split(""))
    } else{ // turn이 있는 경우 string에서 말해야하는 수만 출력
        result = getTurns(string, numOfPeople, turn)
        console.log(`${base}진수일 때, ${turn}번째 사람이 말해야하는 수`)
        console.log(result)
    }
}

solution(2,4,2)
solution(16,4,3)
solution(16,4,3,1)
solution(16,4,3,2)
solution(16,4,3,3)