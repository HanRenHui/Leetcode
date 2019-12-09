/**
 * @param {string} S
 * @return {number}
 */
const isMatch = (left, right) => {
  return (left === '(') && (right === ')')
}

var minAddToMakeValid = function(S) {
  let stack = []
  for(let i = 0, len = S.length; i < len; i++) {
    let cur = S[i]
    if (!stack.length) {
      stack.push(cur)
    } else {
      let top = stack[stack.length-1]
      if(isMatch(top, cur)) {
        stack.pop() 
      } else {
        stack.push(cur)
      }
    }
  }  
  return stack.length 
};

minAddToMakeValid('())')