function Divisors(int){
    arr = []
    for(var i = 1; i < int; i++){
        if(int % i == 0){
            arr.push(i)
        }
    }
    return arr
}

// ClassifierAlpha
function getType(int){
    let sum = Divisors(int).reduce((pre,val) => pre+val)
    if(sum < int){
        return 'Deficient'
    } else if(sum == int){
        return 'Perfect'
    } else{
        return 'Abundant'
    }
}

// PrimeAlpha
function isPrime(int){
    if(JSON.stringify(Divisors(int)) === JSON.stringify([1])) return "Prime"
    else return ""
}

// map, filter, reduce 활용
const printResult = (maxValue) => {
    return Array(100).fill().map((index,value)=>value+1).filter((v) => (v !== 1)).reduce((str,num) => {
        str += `${num} : ${getType(num)}, ${isPrime(num)}\n`;
        return str;
    })
}

console.log(printResult(100))