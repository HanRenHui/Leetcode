/**
 * @param {number} n
 * @return {number}
 */
// n >= 2
var integerBreak = function(n) {
  let dp = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(isNaN(dp[i]) ? 0 : dp[i], dp[i - j] * j, (i-j) * j)
    }
  }
  return dp[n]
};
integerBreak(10)
