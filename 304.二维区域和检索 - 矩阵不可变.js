/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.dp = new Array(matrix.length)
  for (let i = 0; i < matrix.length; i++) {
    this.dp[i] = new Array(matrix[i].length)
    this.dp[i][0] = matrix[i][0]
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      this.dp[i][j] = this.dp[i][j-1] + matrix[i][j]
    }
  }
};


NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let total = 0
  for (let i = row1; i <= row2; i++) {
    if (col1-1 >= 0) {
      total += this.dp[i][col2] - this.dp[i][col1-1]
    } else {
      total += this.dp[i][col2]
    }
  }
  return total 
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */