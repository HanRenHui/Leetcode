/**
 * @param {number[]} A
 * @return {number}
 */
// way 暴力
var maxScoreSightseeingPair = function(A) {
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      max = Math.max(max, A[i] + A[j] + i - j)
    }
  }
  return max 
};

// way2 dp  dp[i] 为 数组前i个元素A[i] + i 的最大值
var maxScoreSightseeingPair = function(A) {
  let dp = []
  dp[0] = A[0]
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 1; i < A.length; i++) {
    max = Math.max(max, dp[i-1] + A[i] - i) 
    dp[i] = Math.max(dp[i-1], A[i] + i)
  }
  return max 
}