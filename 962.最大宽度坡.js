/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  let max = 0 
  let stack = [0]
  for (let i = 1, len = A.length; i< len; i++) {
    if (A[stack[stack.length-1]] > A[i]) stack.push(i)
  }
  for (let i = A.length-1; i >= 0; i--) {
    while(A[stack[stack.length-1]] <= A[i] && stack.length) {
      max = Math.max(max, i - stack.pop())
    }
  }
  return max
};