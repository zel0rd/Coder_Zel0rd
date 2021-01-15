// 3번의 기회로 구성된 다트게임의 점수 합계를 구하라
// Single, Double, Triple일 때는 점수의 1제곱, 2제곱, 3제곱 수행
// (*)은  이전의 점수를 2배 (#) 이전의 점수를 -1배

function removeStr(dartResult){
    for(let i = dartResult.length; i > -1; i--){
        if((/[a-zA-Z]/).test(dartResult[i]) === true){
            dartResult.splice(i, 1);
        }
    }
    return dartResult
}

function SDT(dartResult){
    const BONUS = [,'S','D','T']
    for(let i = 0; i < dartResult.length; i++){
        if (dartResult[i] === "D"){
            dartResult[i-1] = Math.pow(dartResult[i-1], 2)
        } else if (dartResult[i] === "T"){
            dartResult[i-1] = Math.pow(dartResult[i-1], 3)
        } 
    }
    return removeStr(dartResult)
}

function specialChr(dartResult){
    for(let i = 0; i < dartResult.length; i++){
        if(dartResult[i] === "*"){
            dartResult[i-1] = dartResult[i-1] * 2
        }
    }
    let result = dartResult.filter(function (v){
        if(v !== "*"){
            return v
        }
    } )
    // console.log(result)
    return result
}

function sumArr(arr){
    let sum = 0;
    arr.forEach(v => sum += parseInt(v))
    return sum
}

function solution(dartResult) {
    // var answer = 0;
    let delSTR = SDT(dartResult.split(""))
    // return answer;
    // console.log(delSTR)
    let temp = specialChr(delSTR)
    let answer = sumArr(temp)
    console.log(answer)
    return answer

}

solution("1S2D*3T")