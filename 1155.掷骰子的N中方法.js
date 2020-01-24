/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  let dp = new Array(d)
  let mod = 10 ** 9 + 7
  for (let i = 0; i <= d; i++) {
    dp[i] = new Array(target)
  }
  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= target; j++) {
      for (let m = 1; m <= f; m++) {
        if (i === 1) {
          dp[i][j] = j <= f ? 1 : 0
        } else {
          dp[i][j] = dp[i][j] > 0 ? dp[i][j] : 0
          if (j - m > 0) {
            dp[i][j] = dp[i][j] +  dp[i-1][j-m] || 0
            dp[i][j] %= mod
          } else {
            break 
          }
        }
      }
    }
  }
  return dp[d][target]
};
d = 2, f = 5, target = 10
let rs =numRollsToTarget(d, f, target)
console.log(rs)