/**
 * @param {number[][]} triangle
 * @return {number}
 */
function isNum(num) {
  return typeof num === 'number'
}
// 数组的每个元素只能向下或者下右方向
var minimumTotal = function (triangle) {
  let dp = []
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = new Array(triangle[i].length)
  }
  dp[0][0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
  }
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let top = isNum(dp[i - 1][j]) ? dp[i - 1][j] : Number.MAX_SAFE_INTEGER
      let topLeft = isNum(dp[i - 1][j - 1]) ? dp[i - 1][j - 1] : Number.MAX_SAFE_INTEGER
      dp[i][j] = Math.min(top, topLeft) + triangle[i][j]
    }
  }
  return Math.min(...dp[dp.length - 1])
};

