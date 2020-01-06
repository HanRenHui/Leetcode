/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function getAscii(str) {
  return str.split('').reduce((pre, cur) => pre + cur.charCodeAt(), 0)
}
var minimumDeleteSum = function (s1, s2) {
  let dp = new Array(s1.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s2.length)
  }
  dp[0][0] = s1[0] === s2[0] ? getAscii(s1[0]) : 0
  for (let i = 1; i < s1.length; i++) {
    dp[i][0] = s1[i] === s2[0] ? getAscii(s2[0]) : dp[i-1][0]
  }
  for (let j = 1; j < s2.length; j++) {
    dp[0][j] = s2[j] === s1[0] ? getAscii(s1[0]) : dp[0][j-1]
  }
  for (let i = 1; i < s1.length; i++) {
    for (let j = 1; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + getAscii(s1[i])
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return getAscii(s1 + s2) - dp[s1.length - 1][s2.length - 1] * 2
};
m = "sjfqkfxqoditw"
n = "fxymelgo"
let rs= minimumDeleteSum(m ,n)
console.log(rs)