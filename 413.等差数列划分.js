/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let dp = []
  for (let i = 0; i < A.length; i++) {
    dp[i] = 0
  }
  let sum = 0
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
      dp[i] = dp[i-1] + 1 
      sum += dp[i]
    }
  }
  return sum 
};

let rs = numberOfArithmeticSlices([1,2,3, 4, 5, 6])
console.log(rs)