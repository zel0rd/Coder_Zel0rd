let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = parseInt(input[0]);
let numbers = new Array(count).fill(0);

function getScore(string){
  let score = 0
  let temp = 1

  string.split("").forEach(function(n){
    if (n === "O"){
      score += temp
      temp += 1
    } 
    else{
      temp = 1
    }
  })
  console.log(score)
  return score
}

for (let i = 0; i < count; i++) {
  numbers[i] = input[i+1]
}

numbers.forEach(getScore)
