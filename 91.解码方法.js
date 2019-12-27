/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s.length) return 0
  if (s[0] == 0) return 0
  if (s.length === 1) return s[0] > 0 ? 1 : 0
  let dp = []
  dp[0] = 1
  if (parseInt(s[0] + s[1]) > 26) {
    dp[1] = s[1] != '0' ? 1 : 0
  } else if (s[0] > 0) {
    dp[1] = s[1] === '0' ? 1 : 2
  } else if (s[0] == 0) {
    dp[1] = 0
  }
  if (s.length === 2) return dp[1]
  for (let i = 2; i < s.length; i++) {
    // X00这种情况
    if (s[i] == 0 && s[i - 1] == 0) {
      return 0
    }
    if (parseInt(s[i - 1] + s[i]) <= 26) {
      // XXXX..0这种情况
      if (s[i] == 0) {
        dp[i] = dp[i - 2]
        // XXXX...0X这种情况
      } else if (s[i-1] == 0 ){
        dp[i] = dp[i - 1]
      }else {
        // 正常情况
        dp[i] = dp[i-1] + dp[i-2]
      }
    } else {
      // XXX...X30这种情况
      if (s[i] == 0) return 0
      dp[i] = dp[i - 1]
    }
  }
  return dp[dp.length - 1]
};
