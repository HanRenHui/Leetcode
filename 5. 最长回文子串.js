/**
 * @param {string} s
 * @return {string}
 */
// way1 dp O(n²)
var longestPalindrome = function (s) {
  let dp = new Array(s.length)
  let rs = ''
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length)
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j]) {
        if (i - j <= 2) {
          dp[i][j] = s.slice(j, i + 1)
        } else if (dp[i - 1][j + 1].length) {
          dp[i][j] = s[i] + dp[i - 1][j + 1] + s[j]
        } else {
          dp[i][j] = ''
        }
      } else {
        dp[i][j] = ''
      }
      rs = rs.length > dp[i][j].length ? rs : dp[i][j]
    }
  }
  return rs
};

// way2  双指针


longestPalindrome(s)