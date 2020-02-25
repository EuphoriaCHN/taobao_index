function formatMainListStringToJSON(str) {
  let ans = [];
  for (let i = 0; i < arguments.length; i++) {
    let eachAns = [];
    arguments[i].split(' ').forEach(value => {
      eachAns.push(
        {name: value, h: false}
      );
    });
    ans.push(eachAns);
  }
  return ans;
}

console.log(JSON.stringify());
