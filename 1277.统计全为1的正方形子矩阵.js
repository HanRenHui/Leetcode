/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let dp = new Array(matrix.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[i].length)
  }

  let total = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        dp[i][j] = 0
      } else {
        if (i === 0 || j === 0) {
          let rs = matrix[i][j] 
          dp[i][j] = rs 
          total += rs 
        } else {
          debugger
          let rs = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 
          dp[i][j] = rs 
          total += rs 
        }
      }
    }
  }
  return total 
};
matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
let rs = countSquares(matrix)
console.log(rs)