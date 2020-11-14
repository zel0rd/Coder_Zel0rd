function getItems(board, index){
    let item;
    let isItem = false
    for(let i = 0; i < board.length; i++){
        if ((board[i][index] !== 0) && isItem === false){
            item = board[i][index]
            board[i][index] = 0
            isItem = true
            return item
        }
    }
}

function bomb(items){
    let count = 0
    items = items.filter(function (v){ return v != null })
    for(let i = items.length - 1; i >= 0; i--){
        if(items[i] === items[i-1]){
            items.splice(i-1,1)
            items.splice(i-1,1)
            i = item.lengths - 1
            count += 2
        }
    }
    return [items, count]
}

function solution(board, moves) {
    let result = 0;
    let items = [];
    moves.forEach(function (index) {
        // console.log(board, index) // board 알아서 변함
        items.push(getItems(board, index-1))
    })
    // console.log(board)
    // console.log(items)
    
    while (bomb(items)[1]){
        [items, count] = bomb(items)
        result += count
    }
    // console.log(items)
    
    return result
}


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,4,2,1,1,1]))
