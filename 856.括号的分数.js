/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  let stack = []
  let top
  let total = 0 
  for (let i = 0, len = S.length; i < len; i++) {
    let cur = S[i]
    let curObj = {
      symbol: cur,
      num: 0
    }
    if (cur === '(') {
      stack.push(curObj)
    } else {
      top = stack.pop()
      if (stack[stack.length - 1]) {
        stack[stack.length - 1].num += (top.num === 0 ? 1 : top.num) * 2
      } else {
        total += (top.num > 0 ? top.num : 1)
      }
    }
  }
  return total 
};