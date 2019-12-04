/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let arr = preorder.split(',')
  if (arr[arr.length-1] === '#') arr.pop()
  let stack = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let cur = arr[i]
    if (cur  === '#') {
      if (!stack.length) return false 
      stack.pop() 
    } else {
      stack.push(cur)
    }
  }
  return !stack.length
};
isValidSerialization('1,#,#,1')