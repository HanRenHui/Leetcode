// 单调递减栈
var nextLargerNodes = function (head) {
  let index = 0
  let node = head
  let stack = []
  let rs = []
  while (node) {
    if (!stack.length) {
      stack.push({
        i: index,
        val: node.val
      })
      rs[index] = 0
    } else {
      let top = stack[stack.length - 1]
      while (top && top.val < node.val) {
        let { i } = stack.pop()
        rs[i] = node.val
        top = stack[stack.length - 1]
      }
      stack.push({
        i: index,
        val: node.val
      })
    }
    index++
    node = node.next
  }
  while (stack.length) {
    let { i } = stack.pop()
    rs[i] = 0
  }
  return rs
}