/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let dp = new Array(s.length)
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length)
  }
  let max = 1
  for (let j = 0; j < s.length; j++) {
    for (let i = j; i >= 0 ; i--) {
      if (i === j) {
        dp[i][j] = 1
      } else if (j - i === 1) {
        if (s[i] === s[j]) {
          dp[i][j] = 2
        } else {
          dp[i][j] = 1
        }
      }else if (s[j] === s[i]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else if (s[j] !== s[i]) {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
      if(dp[i][j] > max) max = dp[i][j]
    }
  }
  return max 
};
