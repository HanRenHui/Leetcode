/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = []
  let i = 0 
  let j = 0 
  while(i < pushed.length) {
    let cur = pushed[i++]
    stack.push(cur)
    while(stack[stack.length-1] === popped[j] && j < popped.length) {
      j++ 
      stack.pop() 
    }
  }
  return !stack.length 
};
