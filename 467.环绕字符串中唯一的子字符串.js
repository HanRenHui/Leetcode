/**
 * @param {string} p
 * @return {number}
 */
function getAscii(str) {
  return str.charCodeAt()
}

var findSubstringInWraproundString = function(p) {
  if (!p.length) return 0
  if (p.length === 1) return 1
  let dp = new Array(26).fill(0)
  dp[getAscii(p[0]) - 97] = 1
  let len =1 
  for (let i = 1; i < p.length; i++) {
    if (
      (getAscii(p[i]) - getAscii(p[i-1]) === 1) 
      || (getAscii(p[i]) - getAscii(p[i-1]) === -25)
    ) {
      len ++
    } else {
      len = 1
    }
      dp[getAscii(p[i]) - 97] = Math.max(len, dp[getAscii(p[i]) - 97])

  }
  return dp.reduce((pre, cur) => cur + pre, 0 )
};
