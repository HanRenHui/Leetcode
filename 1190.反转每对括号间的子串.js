/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = []
  let temp = ''
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = s[i]
    if (cur === '(') {
      stack.push({
        str: '',
        type: cur
      })
    } else if (cur === ')') {
      let lastone = stack.pop()
      let str = lastone.str.split('').reverse().join('')
      if (stack.length > 0) {
        stack[stack.length - 1].str += str
      } else {
        temp += str
      }
    } else {
      if (stack.length) {
        stack[stack.length - 1].str += cur
      } else {
        temp += cur
      }
    }
  }
  return temp
};