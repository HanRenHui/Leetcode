/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let l = 0
  let r = S.lastIndexOf(S[l])
  let rs = []
  while (l <= r && r < S.length && l < S.length) {
    for (let i = l+1; i < r; i++) {
      let cur = S[i]
      let lastIndex = S.lastIndexOf(cur)
      r = Math.max(r, lastIndex)
    }
    rs.push(r - l + 1)
    l = r + 1
    r = S.lastIndexOf(S[l])
  }
  return rs 
};

s = "qiejxqfnqceocmy"

partitionLabels(s)