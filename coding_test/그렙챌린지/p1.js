infos = ["kim password", "lee abc"];
actions = [
  "ADD 30",
  "LOGIN kim abc",
  "LOGIN lee password",
  "LOGIN kim password",
  "LOGIN kim password",
  "LOGIN lee abc",
  "ADD 30",
  "ORDER",
  "ORDER",
  "ADD 40",
  "ADD 50",
];

function solution(infos, actions) {
  let answer = [];
  let status = 0;
  for (let i = 0; i < actions.length; i++) {
    let results = execute(actions[i], status, infos);
    let result = results[0];
    status = results[1];
    answer.push(result);
  }
  console.log(answer);
  return answer;
}

function execute(action, status, infos) {
  //   console.log("executed ", action);
  let [command, ...params] = action.split(" ");

  if (command === "LOGIN" && status == 0) {
    status += 1;
    return infos.includes(params.join(" ")) ? [true, 1] : [false, 0];
  }
  if (command === "ADD" && status == 1) {
    return [true, 2];
  }
  if (command === "ADD" && status == 2) {
    return [true, 2];
  }
  if (command === "ORDER" && status == 2) {
    return [true, 1];
  }
  return [false, status];
}

solution(infos, actions);
