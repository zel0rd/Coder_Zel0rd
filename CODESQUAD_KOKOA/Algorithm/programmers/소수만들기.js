/* 
문제 : 주어진 배열 중 3개의 숫자를 뽑아서 더했을 때, 소수가 되는 경우의 수를 리턴
해결 : 주어진 배열 중 3개를 뽑는 조합을 구하고, 해당 조합의 합이 소수가 되는지를 판단

*/

function getCombination(arr, selectNumber){
    const results = []
    if (selectNumber === 1) return arr.map((v) => [v])

    arr.forEach( (fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map( (combinations) => [fixed, ...combinations])
        results.push(...attached)
    })
    return results
}

function getArrSum(arr){
    const reducer = (acc, cur) => acc + cur;
    return arr.reduce(reducer)
}

function isPrime(num){

}

function main(arr){
    let combiArr = getCombination(arr,3)
    let result = combiArr.filter( (v) => isPrime(getArrSum(v) ))
    
    return result.length
}

let arr1 = [1,2,3,4]
main(arr1)