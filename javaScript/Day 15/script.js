function one() {
  let oneVal = 1;
  return oneVal;
}

function two() {
  let twoVal = one() + one();
  return twoVal;
}

function three() {
  let ans = two() + one();
  console.log(ans);
}


three();
