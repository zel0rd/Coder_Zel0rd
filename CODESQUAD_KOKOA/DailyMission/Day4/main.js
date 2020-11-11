const colors = require('colors');

const data = require('./data')
const lexer = require('./lexer');
const parser = require('./parser')
const getDepth = require('./getDepth');
const tokenizer = require('./tokenizer');
const bracketMatch = require('./bracketMatch');

function printDepth(result,key, data){
    console.log(`${key} is OK : `.green,`${data}`.blue,`\n깊이 수준은 ${result[0]}이며, 총 ${result[1]}개의 원소가 포함되어 있습니다.`)
}

function run(data, key){
    // bracketMatch(data) 
    // ? printDepth(getDepth(data))
    // : console.log(`ERROR`.yellow, ` : 닫는 괄호가 일치하지 않습니다.`)

    // bracketMatch(data)
    // ? console.log(tokenizer(data))
    // : ""

    // bracketMatch(data)
    // ? console.log(lexer(tokenizer(data)))
    // : ""

    // bracketMatch(data)
    // ? console.log(parser(lexer(tokenizer(data))))
    // : ""

    // const result = parser(lexer(tokenizer(data)))
    // console.dir(result, {depth : null})

    if (bracketMatch(data)){
        printDepth(getDepth(data), key, data)
        const result = parser(lexer(tokenizer(data)))
        console.dir(result, {depth : null})
    } else console.log(`${key} is ERROR`.yellow, ` : 닫는 괄호가 일치하지 않습니다.`)
}

for(let key in data){
    run(data[key], key)
}

// run(data.case1)