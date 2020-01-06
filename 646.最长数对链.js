/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  if (pairs.length === 0) return 0
  if (pairs.length === 1) return 1
  let dp = new Array(pairs.length).fill(1)
  pairs = pairs.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < pairs.length; i++) {
    for (let j = 0; j < i; j++) {
      let preEnd = pairs[j][1]
      let curStart = pairs[i][0]
      if (curStart > preEnd) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      } else {
        dp[i] = Math.max(dp[i-1], dp[i])
      }
    }
  }
  return dp[pairs.length-1]
};
