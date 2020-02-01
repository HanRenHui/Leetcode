/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
  let dp = new Array(mat.length)
  let answer = new Array(mat.length)
  for (let i = 0; i < dp.length; i++) {
    answer[i] = new Array(mat[i].length).fill(0)
    dp[i] = new Array(mat[i].length)
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (j === 0) {
        dp[i][j] = mat[i][j]
      } else {
        dp[i][j] = dp[i][j - 1] + mat[i][j]
      }
    }
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let row1 = i - K <= 0 ? 0 : i - K
      let row2 = i + K > mat.length - 1 ? mat.length - 1 : i + K

      let col1 = j - K 
      let col2 = j + K > mat[i].length - 1 ? mat[i].length - 1 : j + K
      debugger
      for (let k = row1; k <= row2; k++) {
        answer[i][j] += dp[k][col2] - (col1 <= 0 ? 0 : dp[k][col1-1])
      }

    }
  }
  return answer

};
mat = [[67,64,78],[99,98,38],[82,46,46],[6,52,55],[55,99,45]]
K = 3 
let rs = matrixBlockSum(mat, K)
console.log(rs)


