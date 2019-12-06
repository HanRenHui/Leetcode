var calPoints = function (ops) {
  let total = 0
  let stack = []
  for (let i = 0, len = ops.length; i < len; i++) {
    let cur = ops[i]
    if (/\d+/.test(cur)) {
      cur = parseInt(cur)
      total += cur
      stack.push(cur)
    } else if (cur === '+') {
      let second = stack[stack.length-1]
      let first = stack[stack.length-2]
      let temp = 0
      if (/\d+/.test(second)) temp += second
      if (/\d+/.test(first)) temp += first
      total += temp
      stack.push(temp)
    } else if (cur === 'D') {
      let pre = stack[stack.length-1]
      if (/\d+/.test(pre)) total += 2 * pre
      stack.push(2 * pre)
    } else if (cur === 'C') {
      let pre = stack.pop()
      total -= pre
    }
  }
  return total
};  