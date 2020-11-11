const lexer = require('./lexer')
const tokenizer = require("./tokenizer")

function filterBracket(token) {
    return token.type !== "LEFT_BRACKET" && token.type !== "RIGHT_BRACKET"
}

function parser(lexerArr){
    return {
        type : 'root',
        child : lexerArr.filter(filterBracket).map( function (v) {
            let { type, value } = v

            if(type === "ARRAY"){
                return { type, child: parser(lexer(tokenizer(value)))}
            }
            else return {type, value, child: []}
        })
    }
}

module.exports = parser