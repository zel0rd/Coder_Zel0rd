const getDepth = require('./getDepth');
const bracketMatch = require('./bracketMatch');

const [LEFT_BRACKET, RIGHT_BRACKET, COMMA, BLANK] = ["[", "]", ",", " "]

function isQuote(ch){
    ch === SINGLE_QUOTE || ch === DOUBLE_QUOTE ? true : false 
}

function tokenizer(str){
    const tokenArr = [];
    let token = "";
    const bracketStack = [];

    tokenArr.push(str.charAt(0))
    for (let i = 1; i < str.length-1; i++){
        const ch = str.charAt(i)
        
        if (ch === BLANK) continue;
        if (ch === LEFT_BRACKET) bracketStack.push(ch);
        if (ch === RIGHT_BRACKET) bracketStack.pop()
        if (ch === COMMA) {
            if (bracketStack.length === 0){
                tokenArr.push(token);
                token = ""
                continue
            }
        }
        token += ch
    }
    tokenArr.push(token)
    tokenArr.push(str.charAt(str.length - 1))
    return tokenArr
}

module.exports = tokenizer;