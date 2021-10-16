/*
Higher order function
1.be assigned to variables /
2.be passed as an argument of another function
3.be returned as a value from another function
*/
//this is a function for modify failed scores to half of full score (50/100).
function modifyFailScore(scores) {
  let score = scores;
  for (let i = 0; i < score.length; i++) { 
    if (score[i] < 50) {
      score[i] = 50;
    } else {
      score[i] = score[i];
    }
  }
  return score;
}

function modifyScore(scores, modifyFailScore) {
  return modifyFailScore(scores);
}

//Closure
//this is a function for rounding the score.
let getScore = function (scores) {
  function roundingScore() {
    return scores.map((score) => Math.round(score));
  }
  return roundingScore;
};

//Default Parameter
function attendanceScore(score, newScore = 1) {
  return score + newScore;
}

//Export list
//export {fn_modifyScore}

console.log(
  "Orginal scores : 55.6,20.7,62.4,78,47.2,39.9" +
    "\n" +
    "--------------------------------------------------"
);

let fn_modifyScore = modifyScore(
  [55.6, 20.7, 62.4, 78, 47.2, 39.9],
  modifyFailScore
);
console.log(
  "Higher order function" + "\n" + "Modify failed scores : " + fn_modifyScore
);

let fn_roundUp = getScore([55.6, 20.7, 62.4, 78, 47.2, 39.9]);
console.log(
  "Closure function" + "\n" + "Rounding the scores : " + fn_roundUp()
);

console.log("Default Parameter" + "\n" + "Attendance score : " + attendanceScore(5));
console.log("Default Parameter" + "\n" + "Attendance score : " + attendanceScore(5,2));