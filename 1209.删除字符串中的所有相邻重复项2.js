/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 方法一: 正则 时间非常差 
var removeDuplicates = function (s, k) {
  let n = k - 1 
  let reg = new RegExp('(\\w)\\1{' + n + '}')
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }
  return s
}
// 方法二: 栈  时间 89.66% 空间 100%
var removeDuplicates = function (s, k) {
  let stack= []
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = s[i]
    if (!stack.length) {
      stack.push({
        item: cur, 
        count: 1 
      })
    } else {
      let top = stack[stack.length-1]
      if (cur === top.item) {
        if (++top.count === k) stack.pop()
      } else {
        stack.push({
          item: cur, 
          count: 1 
        })
      }
    }
  }
  let rs = ''
  for (let i = 0, len = stack.length; i < len; i++) {
    let curobj = stack[i]
    rs += curobj.item.repeat(curobj.count)
  }
  return rs 
}

s = "deeedbbcccbdaa", k = 3
removeDuplicates(s, k)