var removeOuterParentheses = function (S) {
  let temp = ''
  let rs = ''
  let stack = []
  for (let i = 0, len = S.length; i < len; i++) {
    let cur = S[i]
    if (!stack.length) {
      stack.push(cur)
    } else {
      if (cur === '(') {
        temp += cur 
        stack.push(cur)
      } else {
        if (stack.length === 1) {
          stack.pop()
          rs += temp 
          temp = ''
        } else {
          stack.pop() 
          temp += cur 
        }
      }
    }
  }
  return rs
};