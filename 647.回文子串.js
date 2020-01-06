/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let dp = new Array(s.length) 
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
  }
  dp[0][0] = true 
  let result = 1
  for (let j = 1; j < s.length;j ++) {
    let rs = false 
    for (let i = 0; i <= j; i ++) {
      debugger
      if (j - i <= 2) {
        rs = s[i] === s[j]
        dp[i][j] = rs 
      } else {
        if (s[i] === s[j]) {
          rs = dp[i + 1][j-1]
        } else {
          rs = false 
        }
        dp[i][j] = rs 
      }
      if (rs) result ++   
    }
  }
  return result 
};
countSubstrings("aaa")