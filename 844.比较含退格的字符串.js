/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function fn(str) {
  let stack = []
  for (let i = 0, len = str.length;  i< len; i++) {
    let cur = str[i]
    if (cur === '#') {
      stack.pop() 
    } else {
      stack.push(cur)
    }
  }
  return stack.join('')
}
var backspaceCompare = function(S, T) {
    S = fn(S)
    T = fn(T)
    console.log(S, T)
    return S === T
};
