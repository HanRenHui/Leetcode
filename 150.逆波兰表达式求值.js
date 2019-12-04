/**
* @param {string[]} tokens
* @return {number}
*/
const isSign = flag => {
  return /^[+\-\*\/]$/.test(flag)
}
const comput = (flag, left, right) => {
  switch (flag) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
  }
}
var evalRPN = function (tokens) {
  if (!tokens.length) return 0
  let stack = []
  for (let i = 0, len = tokens.length; i < len; ++i) {
    let cur = tokens[i] 
    if (isSign(cur)) {
      let right = stack.pop() 
      left = stack.pop() 
      let rs = comput(cur, left, right) 
      stack.push(Math.floor(rs))
    } else { stack.push(parseInt(cur)) }
  }
  return stack[stack.length - 1]
};