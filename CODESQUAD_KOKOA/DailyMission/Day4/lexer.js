function getType(token) {
    const isLeftBracket = token === "[" ? 'leftBracket' : false
    const isRightBracket = token === "]" ? 'rightBracket' : false
    const isArray = token.charAt(0) === "[" && token.charAt(token.length -1) === "]"? true : false
    const isNumber = Number(token)

    const result = 
        isLeftBracket ? 'LEFT_BRACKET' 
            : isRightBracket ? 'RIGHT_BRACKET' 
            : isArray ? 'ARRAY'
            : isNumber ? 'NUMBER' 
                : 'STRING'
    return result
}

function lexer(tokenArr) {
    return tokenArr.map(function (v) {
        return { 'type':getType(v), 'value' : v }
    })
};

module.exports = lexer;