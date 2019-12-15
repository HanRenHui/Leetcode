/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length 
  let n = grid[0].length 
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i-1][0]
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = grid[0][i] + dp[0][i-1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
    }
  }
  return dp[m-1][n-1]
};
let arr = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
minPathSum(arr)