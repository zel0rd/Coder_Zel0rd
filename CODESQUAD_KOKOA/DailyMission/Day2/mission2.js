function getArrayMultiple(num){
    let temp = 1;
    let arr = [...Array(num)].map((v,i) => i + 1)
    arr.forEach(function (n) {
        temp *= n
    });
    return temp
}

function factorial(n){
    if(n === 0){ return [ 0 ] }
    return Array.from({ length: n }, (_,i) => getArrayMultiple(i + 1))
}

function calculate(n){
    console.log(factorial(n))
}

// calculate(4)

function checkSpecial(str){ 
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    if(special_pattern.test(str) == false){ return str } 
}

function replaceNumber(str){
    return str.replace(/[0-9]/g,'');
}

function filterId(peoples){
    let result = []
    peoples.forEach(function (n) {
        if (checkSpecial(n) !== undefined){
            result.push(replaceNumber(n))
        }
    })
    console.log(result)
}

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples)

function filterId2(peoples){
    result = []
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    for(let i=0;i < peoples.length ; i++){
        if(special_pattern.test(peoples[i]) == false){
            result.push(peoples[i].replace(/[0-9]/g,''))
        }
    }
    console.log(result)
}
filterId2(peoples)