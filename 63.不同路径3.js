/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let arr = obstacleGrid
  let dp = new Array(arr.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(arr[i].length)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      debugger
      if (i === 0 && j === 0) {
        dp[i][j] = arr[i][j] ? 0 : 1
        continue  
      } else if (i === 0) {
        let hasOne = arr[0].slice(0, j+1).some(item => item === 1)
        dp[i][j] = hasOne ? 0 : 1
        continue 
      } else if (j === 0) {
        let hasOne = false 
        for (let k = 0; k <= i; k++) {
          if (arr[k][0]) hasOne = true 
        }
        dp[i][j] = hasOne ? 0 : 1
        continue 
      }
      if (arr[i][j]) {
        dp[i][j] = 0
        continue 
      }
      let left = arr[i][j-1]
      let top = arr[i-1][j]
      if (left && top) {
        dp[i][j] = 0
      } else if (!left && !top) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      } else if (!left) {
        dp[i][j] = dp[i][j-1]
      } else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[arr.length-1][arr[0].length-1]
};
arr =[[0,0],[0,1]]
let rs = uniquePathsWithObstacles(arr)
console.log(rs)