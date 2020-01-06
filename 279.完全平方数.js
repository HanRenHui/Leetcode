/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = []
  for (let i = 0; i <= n; i++) {
    dp[i] = i
  }
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j * j] + 1)
    }
  }
  return dp[n]
};

let rs = numSquares(12)
console.log(rs)