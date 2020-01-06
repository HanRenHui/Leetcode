/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n < 1) return 1
  let dp = []
  dp[0] = 1
  let i2 = 0
  let i3 = 0
  let i5 = 0
  for (let i = 1; i < n; i++) {
    let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5)
    if (min === dp[i2] * 2) i2++
    if (min === dp[i3] * 3) i3++
    if (min === dp[i5] * 5) i5++
    dp[i] = min
  }
  return dp[n-1]
};