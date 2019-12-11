/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = []
  let subStack = []
  // 标记栈里有多少未被匹配的左括号
  let count = 0 
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = s[i]
    if (cur === '(') {
      let obj = {
        item: '(',
        matched: false,
        index: i
      }
      stack.push(obj)
      subStack.push(obj)
      count++
    } else  if(cur === ')') {
      let matched = false 
      if (count) {
        count--
        matched = true 
        let obj = subStack.pop() 
        obj.matched = true 
      }
      stack.push({
        item: cur, 
        matched
      })
    } else {
      stack.push({
        item: cur,
        matched: true 
      })
    }
  }
  let str = ''
  stack.forEach(item => {
    str += item.matched ? item.item : ''
  })
  return str
};
  
s = "(a(b(c)d)"
let rs = minRemoveToMakeValid(s)
console.log(rs)

// 输入：s = "(a(b(c)d)"
// 输出："a(b(c)d)"