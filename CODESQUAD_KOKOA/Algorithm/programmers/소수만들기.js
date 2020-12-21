/* 
문제 : 주어진 배열 중 3개의 숫자를 뽑아서 더했을 때, 소수가 되는 경우의 수를 리턴
해결 : 주어진 배열 중 3개를 뽑는 조합을 구하고, 해당 조합의 합이 소수가 되는지를 판단

*/

function getCombination(arr){

}

function getArrSum(arr){

}

function isPrime(num){

}

function main(){
    let CombiArr = getCombination()
    let result = CombiArr.filter( (v) => isPrime(getArrSum(v) ))
    return result.length
}