const trim = (s) => s.trim()
const isDigit = (str) => /^\d+$/.test(str);

function makeObj({type,value}){
    if(type === "array") return { type, child: [] }
    return {
        type : type,
        value : value,
        child : []
    }
}

// tokenizer
function tokenizer(s){
    const operators = ['[', ']', '{', '}', ',', ':'];
    let _tmpStr = "";
    const tokenArray = [];

    for(let i=0; i < s.length; i++){
        let ch = s[i]

        if(ch === " ") continue;

        if(operators.indexOf(ch) > -1){
            tokenArray.push(ch)
            continue;
        }

        _tmpStrp = s.substr(i).match( /^('[^']+') | (\d+) | (null)/);
        if(_tmpStr){
            tokenizer.push(_tmpStr[0]);
            i += _tmpStr[0].length-1;
        } else{
            if(/'\w+.*/.test(s.substr(i))){
                throw new Error("올바른 문자형태가 아니네요");
            }
        }
    }
    return tokenArray
}

// lexer
function lexer(a) {
    const lexerTokens = [];
    for (el of a){
        if(el === "["){
            lexerTokens.push(makeObj({ "type": "array"}))
        }else if(el === "]"){
            lexerTokens.push(makeObj({ "type": "arrayClose", "value": el}))
        }else if(/^'.*'$/.test(el)){
            lexerTokens.push(makeObj({ "type": "string", "value": el}))
        }else if(/\d+/.test(el)){
            lexerTokens.push(makeObj({ "type": "number", "value": el}))
        }else if(el === 'null') {
            lexerTokens.push(makeObj({ "type": "NULL", "value": el}))
        }else {
            // console.log("what is token",el);
        }
    }
    return lexerTokens;
}

//parser