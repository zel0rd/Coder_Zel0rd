function solution(grades) {
  var answer = [];
  let gradesString = [
    "A+",
    "A0",
    "A-",
    "B+",
    "B0",
    "B-",
    "C+",
    "C0",
    "C-",
    "D+",
    "D0",
    "D-",
    "F",
  ];
  let answerDict = {};
  for (let i = 0; i < grades.length; i++) {
    let [subject, score] = grades[i].split(" ");
    // console.log(subject, score);
    if (answerDict[subject] == undefined) {
      answerDict[subject] = score;
    } else {
      let priorScore = answerDict[subject];
      let newScore = score;
      if (gradesString.indexOf(priorScore) > gradesString.indexOf(newScore)) {
        answerDict[subject] = score;
      }
    }
  }
  for (let i = 0; i < gradesString.length; i++) {
    for (let j = 0; j < grades.length; j++) {
      if (
        gradesString[i] === grades[j].split(" ")[1] &&
        answerDict[grades[j].split(" ")[0]] === grades[j].split(" ")[1]
      ) {
        answer.push(
          grades[j].split(" ")[0] + " " + answerDict[grades[j].split(" ")[0]]
        );
        delete answerDict[grades[j].split(" ")[0]];
      }
    }
  }
//   console.log(answer);
  return answer;
}

grades = [
  "DS7651 A0",
  "CA0055 D+",
  "AI5543 C0",
  "OS1808 B-",
  "DS7651 B+",
  "AI0001 F",
  "DB0001 B-",
  "AI5543 D+",
  "DS7651 A+",
  "OS1808 B-",
];

solution(grades);
