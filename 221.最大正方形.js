/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  if (matrix.length === 1) return Math.max(...matrix[0])
 
  let dp = []
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[i].length)
  }
  for (let i = 0; i < matrix[0].length; i++) {
    dp[0][i] = matrix[0][i]
    if (matrix[0][i] == 1) max = 1
  }
  for (let i = 0; i < matrix.length; i++) {
    dp[i][0] = matrix[i][0]
    if (matrix[i][0] == 1) max = 1
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      let rs
      if (matrix[i][j] == 1) {
        rs = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      } else {
        rs = 0
      }
      dp[i][j] = rs
      if (rs > max) max = rs
    }
  }
  return max * max
};

let arr = [[0, 1], [1, 0]]
let rs = maximalSquare(arr)
console.log(rs)