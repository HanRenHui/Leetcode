/**
 * @param {number[][]} A
 * @return {number}
 */

// dp[i][j] 以A[i][j]元素结尾的下降路径最小和
var minFallingPathSum = function(A) {
  let dp = new Array(A.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(A[i].length)
  }

  // 初始化
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = A[0][i]
  }

  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j+1]) + A[i][j]
      } else if (j === A.length-1) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + A[i][j]
      } else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i-1][j+1]) + A[i][j]
      }
    }
  }
  return Math.min(...dp[A.length-1])
};
