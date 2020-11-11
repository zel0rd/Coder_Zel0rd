
const [LEFT_BRACKET, RIGHT_BRACKET] = ["[", "]"];

const bracketMatch = (str) => {
  const queue = [];

  for (let ch of str) {
    if (ch === LEFT_BRACKET) queue.push(ch);
    else if (ch === RIGHT_BRACKET) queue.pop();
  }

  return queue.length === 0 ? true : false
};


module.exports = bracketMatch;