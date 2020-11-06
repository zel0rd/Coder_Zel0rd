const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    Array.from({length: line}, (x,i) => i+1)
    .forEach(function(v){
      console.log("*".repeat(v))
    });
    process.exit();
  })
  .on('close', function () {
    // console.log(input[0] / input[1]);
    process.exit();
  });