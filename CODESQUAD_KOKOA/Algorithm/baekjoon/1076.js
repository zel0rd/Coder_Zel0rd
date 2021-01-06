const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input = []
result = ''
COLORSET = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    result += COLORSET.indexOf(input[0])
    result += COLORSET.indexOf(input[1])
    result *= 10 ** COLORSET.indexOf(input[2])
    console.log(result)
    process.exit();
  });
