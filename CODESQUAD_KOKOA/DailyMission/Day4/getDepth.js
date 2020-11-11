function getDepth(str){
    let depth = 0;
    let eleCount = 0;
    let maxDepth = 0;

    str.split("").map(function (v){
        if (v === "["){
            depth += 1
            if (depth > maxDepth){
                maxDepth = depth
            }
        }
        else if (v === ","){
            eleCount += 1
        }
        else if (v === "]"){
            depth -= 1
        }
    })
    eleCount = eleCount ? eleCount += 1 : eleCount 
    return [maxDepth, eleCount]

    // return `깊이 수준은 ${maxDepth}이며, 총 ${eleCount}개의 원소가 포함되어 있습니다.`
}

module.exports = getDepth
