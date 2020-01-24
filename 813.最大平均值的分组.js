/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function ave(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0) / arr.length
}
var largestSumOfAverages = function (A, K) {
  let dp = []
  for (let i = 1; i <= K; i++) {
    dp[i] = new Array(A.length)
  }
  let nums = [A[0]]
  for (let i = 1; i < A.length; i++) {
    nums[i] = nums[i-1] + A[i]
  }
  for (let i = 0; i < A.length; i++) {
    dp[1][i] = nums[i] / (i + 1)
  }
  
  for (let k = 2; k <= K; k++) {
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < i; j++) {
        if (i + 1 < k) {
          continue 
        } else {
          dp[k][i] = Math.max(dp[k][i] || 0, dp[k - 1][j] +((nums[i] - nums[j]) / (i - j)))
        }
      }
    }
  }
  return dp[K][A.length-1]
};
m = [9, 1, 2, 3, 9]
n = 3
largestSumOfAverages(m, n)