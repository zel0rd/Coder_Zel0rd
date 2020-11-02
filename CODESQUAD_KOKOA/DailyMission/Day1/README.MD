# 코드스쿼드 마스터즈 코코아 JS


## Daily Mission
getArea 함수를 만들어 여러 도형의 넓이를 구하여라.

## CODE
    
    const PI=3.14
    let sequence = [];

    function Logging(func, result){
        this.func = func
        this.result = result
    }

    function getArea(shape){
        if (shape === 'circle' && arguments.length == 2){
            let area = getCircle(arguments[1]);
            console.log("원 넓이는 :",area)
            sequence.push(new Logging('circle', area))
        }
        if (shape === 'circle' && arguments.length == 3){
            let sum = getStepCircle(arguments[1],arguments[2])
            console.log("원 넓이의 합은 :", sum)
            sequence.push(new Logging('circle', sum))
        }
        if (shape === 'rect' && arguments.length == 3){
            let area = getRect(arguments[1],arguments[2]);
            console.log("사각형의 넓이는 :",area);
            sequence.push(new Logging('rect', area))
        }
        if (shape === 'trapezoid' && arguments.length == 4){
            let area = getTrape(arguments[1],arguments[2],arguments[3])
            console.log("사다리꼴의 넓이는 :",area)
            sequence.push(new Logging('trapezoid', area))
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
        // console.log("계산수행순서 : ",sequence.keys.join(", ")) 
        console.log("\n\n##### 계산수행순서 #####")
        // sequence.forEach(element => console.log(element.func, ":",element.result))
        sequence.forEach(function(element, index){
            console.log(`${index+1}번째 [실행] : ${element.func} / [결과] : ${element.result}`)
        })
        console.log("#######################\n")
        // return sequence.join(", ")
    }

    console.log("\n")
    getArea("circle", 10);
    getArea("circle", 1,10);
    getArea("rect", 5,10);
    getArea("trapezoid", 5,10,4);
    printExecutionSequence();


## 수행결과
![](img1.png)


## [미션] 다각형의 넓이 구하기
1. getArea함수 만들기 [O]
2. printExecutionSequence 함수만들기 [O]
3. printExecutionSequence 함수 수정 [O]
    - 수행순서 뿐 아니라, 함수의 결과까지 순서대로 같이 출력하는 기능을 만들어보자.
4. debug 기술문서 정리하기
5. 학습 체크포인트
    - Node.js를 통해서 JavaScript개발을 할 수 있다
    - 함수의 역할은 한가지에 집중하고 있다.
    - 일관된 변수명과 함수이름을 짓고 있다.
    - 함수는 늘 동일한 입력값에 동일한 출력을 보장한다.
    - 개발과정에서 breakpoint나 'debugger;' 키워드를 사용해서 디버깅을 했다.