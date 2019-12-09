/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  while(/abc/.test(S)) {
    S = S.replace('abc', '')
  }
  return !S.length
};
let s = 'bcbcaa'
let rs = isValid(s)
console.log(rs)