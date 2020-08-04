// 함수형 프로그램 다양한 표현
// 1부터 100까지 숫자 중에서 3으로 나누어 떨어지면 fizz, 5로 나누어 떨어지면 buzz, 둘 다 나눠지면 fizzbuzz를 출력하고, 나머지는 숫자를 그대로 출력하는 문제를 다양하게 풀어본다.

// 반복문과 비교문으로 절차적인 표현
function fizzbuzz1() {
    for (index=1; index<100; index++) {
        const isFizz = index % 3 === 0;
        const isBuzz = index % 5 === 0;
        switch (true) {
            case (isFizz && isBuzz):
                console.log("fizzbuzz");
                break;
            case (isFizz && !isBuzz):
                console.log("fizz");
                break;
            case (!isFizz&& isBuzz):
                console.log("buzz");
                break;
            default:
                console.log(index);
                break;
        }
    }
}

// 값을 중심으로 변환 함수 적용
function fizzbuzz2() {
    Array(100).fill().map((x,i) => i+1).forEach(
       index => {
        const isFizz = index % 3 === 0;
        const isBuzz = index % 5 === 0;
        switch (true) {
            case (isFizz && isBuzz):
                console.log("fizzbuzz");
                break;
            case (isFizz && !isBuzz):
                console.log("fizz");
                break;
            case (!isFizz&& isBuzz):
                console.log("buzz");
                break;
            default:
                console.log(index);
                break;
        }
    })
}

// 클로저 활용
function fizzclosure() {
    const fizz = (index) => (index % 3 === 0) ? "fizz" : "";
    const buzz = (index) => (index % 5 === 0) ? "buzz" : "";

    Array(100).fill().map((x,i) => i+1).forEach(
        index => {
            let result = fizz(index) + buzz(index);
            let output = (result.length == 0) ? ""+index : result;
            console.log(output);
         }
     )
}

// 모든 로직을 클로저로 선언
function fizzDeclarative() {
    const fizz = (index => { return (index % 3 == 0) ? "fizz" : ""});
    const buzz = (index => { return (index % 5 == 0) ? "buzz" : ""});
    let fizzbuzz = (index => {
        let result = fizz(index) + buzz(index);
        return (result.length == 0) ? ""+index : result;
    });
    let output = (result => { console.log(result) });

    Array(100).fill().map((x,i) => i+1).map(fizzbuzz).forEach(output);
}

// 연산자처럼 동자갛는 함수로 monadic 표현
function fizbuz(word1, word2) {
    switch (true) {
        case (word1 === undefined && word2 === undefined):
            return undefined;
        case (word1 !== undefined && word2 === undefined):
            return word1;
        case (word1 === undefined && word2 !== undefined):
            return word2;
        default:
            return word1 + word2;
    }
}

function fizzbuzzUndefined() {
    let fizz = (index => { return  (index % 3 == 0) ? "fizz" : undefined});
    let buzz = (index => { return (index % 5 == 0) ? "buzz" : undefined});
    let fizzbuzz = (index => {
        let combine = fizbuz(fizz(index), buzz(index));
        if (combine === undefined) return `${index}`;
        return combine;
    });
    let output = (result => { console.log(result) });

    Array(100).fill().map((x,i) => i+1).map(fizzbuzz).forEach(output);
}

// iterate 고차 함수 활용
function fizzbuzzIterator() {
    function iterate(array, transform) {
        array.forEach(transform);
    }
    let fizz = (index => { return  (index % 3 == 0) ? "fizz" : undefined});
    let buzz = (index => { return (index % 5 == 0) ? "buzz" : undefined});
    let fizzbuzz = (index => {
        let combine = fizbuz(fizz(index), buzz(index));
        if (combine === undefined) return `${index}`;
        return combine;
    });
    let output = (result => { console.log(result) });

    iterate(Array(100).fill().map((x,i) => i+1), (index => { output(fizzbuzz(index))}));
}

// 함수 합성 활용
const compose = (f, g) => x => g(f(x));

function fizzbuzzCompose() {
    function iterate(array, transform) {
        array.forEach(transform);
    }
    let fizz = (index => { return  (index % 3 == 0) ? "fizz" : undefined});
    let buzz = (index => { return (index % 5 == 0) ? "buzz" : undefined});
    let fizzbuzz = (index => {
        let combine = fizbuz(fizz(index), buzz(index));
        if (combine === undefined) return `${index}`;
        return combine;
    });
    let output = (result => { console.log(result) });
    const pipe = compose(fizzbuzz, output);

    iterate(Array(100).fill().map((x,i) => i+1), (index => { pipe(index); }));
}