

let points = [60,60,70,80,70,60];

function get_achievement(points){
  let sum = 0;
  let number = points.length;
  for (let i=0; i < number; i++){
    sum = sum + points[i];　//←の　なぜ合計が取れるのかがわからない
  }

  if (sum >= points.length * 100 * 0.8) {
    return "A"
  } else if (sum >= points.length * 100 * 0.6) {
    return "B"
  }else if (sum >= points.length * 100 * 0.4) {
    return "c"
  }else {
    return "D"
  }
}
 //console.log(get_achievement(points));

function get_pass_or_failure(points){
  let number = points.length;
  let judge = "合格"
    for (let i = 0; i < number; i++) {
  if (points[i] < 60) {
    judge = "不合格";
    break;
  }
}
return judge;
}
//console.log(gets_pass_or_failure(points));

function judgement (points){
  let achievement = get_achievement(points);
  let pass_or_failure = get_pass_or_failure(points);
 return `あなたの成績は${achievement}です。${pass_or_failure}です `;
}

console.log(judgement(points));
/*function judgement (x,y,z){
  let achievement = get_achievement(x,y,z);
  let pass_or_failure = get_pass_or_failure(x,y,z);
  return `あなたの成績は${achievement}です。${pass_or_failure}`
}
*/
