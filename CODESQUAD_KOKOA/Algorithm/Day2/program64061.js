function getItems(board, index){
    let item;
    let isItem = false
    for(let i = 0; i < board.length; i++){
        if ((board[i][index] !== 0) && isItem === false){
            item = board[i][index]
            board[i][index] = 0
            isItem = true
        }
    }
    if (isItem) return [board, item]
    else return [board, undefined ]
}

function bomb(items){
    let count = 0
    items = items.filter(function (v){ return v != null })
    for(let i = items.length - 1; i >= 0; i--){
        if(items[i] === items[i-1]){
            items.splice(i-1,1)
            items.splice(i-1,1)
            count += 2
        }
    }
    return [items, count]
}

function solution(board, moves) {
    let item;
    let result = 0;
    let count = 0;
    let items = [];
    moves.forEach(function (index) {
        // console.log(getItems(board, index-1))
        [board, item] = getItems(board, index-1)
        items.push(item)
    })
    
    while (bomb(items)[1]){
        count = bomb(items)[1]
        items = bomb(items)[0]
        result += count
    }
    return result
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))