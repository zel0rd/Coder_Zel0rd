const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortAsc(arr){
  arr = arr.sort(function(a,b){
    return a - b;
  })
  return arr
}

function sortDes(arr){
  arr = arr.sort(function(a,b){
    return b - a;
  })
  return arr
}

rl.on('line', function (line) {
    line = line.split(' ').map((el) => parseInt(el));
    let jsonLine = JSON.stringify(line)
    let jsonAsc = JSON.stringify(sortAsc(line))
    let jsonDes = JSON.stringify(sortDes(line))

    if (jsonLine === jsonAsc){
      console.log("ascending")
      process.exit();
    }else if (jsonLine === jsonDes){
      console.log("descending")
      process.exit();
    }else {
      console.log("mixed")
      process.exit();
    }
  })
  .on('close', function () {
    process.exit();
  });