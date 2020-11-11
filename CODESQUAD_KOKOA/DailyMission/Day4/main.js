const colors = require('colors');
const data = require('./data')


const lexer = require('./lexer');
const parser = require('./parser')
const getDepth = require('./getDepth');
const tokenizer = require('./tokenizer');
const bracketMatch = require('./bracketMatch');

function printDepth(result){
    console.log("OK : ".green,`깊이 수준은 ${result[0]}이며, 총 ${result[1]}개의 원소가 포함되어 있습니다.`)
}

function run(data){
    if (bracketMatch(data)){
        printDepth(getDepth(data))
        const result = parser(lexer(tokenizer(data)))
        console.dir(result, {depth : null})
    } else console.log(`ERROR`.yellow, ` : 닫는 괄호가 일치하지 않습니다.`)
}

for(let key in data){
    run(data[key])
}

// run(data.case1)