const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;
let base = 0;
let exp = 0;
let result = 0;

function getSet(number){
    let mySet = new Set();
    if (parseInt(number) === 10) { mySet.add(0) }
    else { mySet.add(parseInt(number)) }

    let SetSize = mySet.size
    let before = parseInt(number);
    while (true){
        before = (before * number) % 10
        mySet.add(before)
        if (SetSize === mySet.size){
            break;
        } else {
            SetSize = mySet.size
        }
    }
    return mySet
}


rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    count = parseInt(input[0])
    for(let i = 1; i < count+1; i++){
        [base, exp] = input[i].split(' ')
        mySet = getSet(base)
        // console.log(mySet)
        // console.log(exp % mySet.size)
        if (mySet.size === 1){
            console.log([...mySet][0])
        }else if (exp % mySet.size === 0) {
            console.log([...mySet][mySet.size - 1])
        }else {
            console.log([...mySet][exp % mySet.size - 1])
        }
    }
    process.exit();
  });

// Set { 1 }
// 0
// Set { 3, 9, 7, 1 }
// 3
// Set { 6 }
// 0
// Set { 7, 9, 3, 1 }
// 0
// Set { 9, 1 }
// 1