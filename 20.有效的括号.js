const match = (left, right) => {
  if ((left === '[' && right === ']')|| (left === '{' && right === '}') || (left === '(' && right === ')') ) {
    return true 
  } else {
    return false 
  }
}
var isValid = function(s) {
  let arr = s.split('')
  let stack = []
  while(arr.length) {
    let cur = arr.shift() 
    let stackLast = stack[stack.length-1]
    if (match(stackLast, cur)) {
      stack.pop()
    } else {
      stack.push(cur)
    }
  }
  return !stack.length
};