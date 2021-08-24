function solution(word, cards) {
  var answer = [];
  let n = cards.length;

  search(0, 0, word, cards, n, 0);

  return answer;
}

function search(x, y, word, cards, n, count) {
  console.log(x, y, word, cards, n, count);
  //   let xMove = [0, 1];
  //   let yMove = [1, 0];
  let xMove = [-1, 0, 1, 0];
  let yMove = [0, 1, 0, -1];

  if (count > 5 || word.length == 0) {
    console.log("search all");
  } else if (word.length > 0 && cards[x][y] == word[0]) {
    console.log("FIND");
    // word change
    word = word.slice(1);

    // row deleted
    cards[x] = "00000";

    // col deleted
    for (let i = 0; i < n; i++) {
      let temp = cards[i].split("");
      temp[y] = "0";
      cards[i] = temp.join("");
    }

    for (let i = 0; i < xMove.length; i++) {
      let xPos = x + xMove[i];
      let yPos = y + yMove[i];
      if (0 <= xPos && xPos < n && 0 <= yPos && yPos < n) {
        console.log("New Search");
        search(x + xMove[i], y + yMove[i], word, cards, n, count + 1);
      }
    }
  } else {
    for (let i = 0; i < xMove.length; i++) {
      let xPos = x + xMove[i];
      let yPos = y + yMove[i];
      if (0 <= xPos && xPos < n && 0 <= yPos && yPos < n) {
        console.log("New Search");
        search(xPos, yPos, word, cards, n, count + 1);
      }
    }
  }
}

solution("APPLE", ["LLZKE", "LCXEA", "CVPPS", "EAVSR", "FXPFP"]);
