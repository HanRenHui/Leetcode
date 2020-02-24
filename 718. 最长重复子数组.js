/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

// dp[i][j] 表示A中前i个元素和B中前j个元素的最长重复子数组
var findLength = function (A, B) {
  let dp = new Array(A.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(B.length)
  }
  let max = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = A[i] === B[j] ? 1 : 0
        continue
      }
      if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = 0
      }
      max = Math.max(dp[i][j], max)
    }
  }
  return max 
};