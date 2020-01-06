/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  if (!text1.length || !text2.length) return 0
  let dp = new Array(text1.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(text2.length)
  }
  dp[0][0] = text1[0] === text2[0] ? 1 : 0
  for (let i = 1; i < text2.length; i++) {
    dp[0][i] = text1[0] === text2[i] ? 1 : dp[0][i-1]
  }
  for (let i = 1; i < text1.length; i++) {
    dp[i][0] = text1[i] === text2[0] ? 1 : dp[i-1][0]
  }
  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[text1.length - 1][text2.length - 1]
};
m = "sjfqkfxqoditw"
n = "fxymelgo"
let rs = longestCommonSubsequence(m, n)
console.log(rs)
// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 1, 2]
// ]
