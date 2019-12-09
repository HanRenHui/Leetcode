/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  while(/(\w)\1/g.test(S)) {
    S = S.replace(/(\w)\1/g, '')
  }
  return S
};