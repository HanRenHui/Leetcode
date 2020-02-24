/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let rs = []
  const next = (preStr, Lcount, Rcount) => {
    if (Rcount > Lcount) return 
    if (Lcount > n || Rcount > n) return 
    if (Lcount === n && Rcount === n) {
      return rs.push(preStr)
    }
    next(preStr + '(', Lcount + 1, Rcount)
    next(preStr + ')', Lcount, Rcount + 1)
  }
  next('', 0, 0)
};