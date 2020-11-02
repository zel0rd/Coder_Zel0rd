const PI=3.14
let sequence = [];

function getArea(shape){
    if (shape === 'circle' && arguments.length == 2){
        let area = getCircle(arguments[1]);
        console.log("원 넓이는 :",area)
        sequence.push('circle')
    }
    if (shape === 'circle' && arguments.length == 3){
        let sum = getStepCircle(arguments[1],arguments[2])
        console.log("원 넓이의 합은 :", sum)
        sequence.push('circle')
    }
    if (shape === 'rect' && arguments.length == 3){
        let area = getRect(arguments[1],arguments[2]);
        console.log("사각형의 넓이는 :",area);
        sequence.push('rect');
    }
    if (shape === 'trapezoid' && arguments.length == 4){
        let area = getTrape(arguments[1],arguments[2],arguments[3])
        console.log("사다리꼴의 넓이는 :",area)
        sequence.push('trapezoid')
    }
}

// 원의 넓이
function getCircle(length){
    return PI * length * length
}

// 반지름이 1부터 n까지 1씩 증가하는 원의 넓이
function getStepCircle(length1,length2){
    let sum = 0;
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    for (const element of range(length1,length2,1)){
        sum += getCircle(element)
    }
    return sum
}

// 사각형 넓이
function getRect(length1, length2){
    return length1 * length2
}

// 사다리꼴 넓이
function getTrape(length1, length2, length3){
    return (length1 + length2) * length3 / 2
}

// 계산수행 순서
function printExecutionSequence(){
    console.log("계산수행순서 : ",sequence.join(", "))
    // return sequence.join(", ")
}

getArea("circle", 10);
getArea("circle", 1,10);
getArea("rect", 5,10);
getArea("trapezoid", 5,10,4);
printExecutionSequence();