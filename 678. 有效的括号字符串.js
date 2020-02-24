/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const left = []
  const star = []
  for(let i = 0; i < s.length; i++) {
    let cur = s[i]
    if (cur === '(') {
      left.push(i)
    } else if (cur === '*') {
      star.push(i)
    } else if (cur === ')') {
      if (!left.length) {
        if (!star.length) return false 
        star.pop() 
      } else {
        left.pop() 
      }
    }
  }
  while(left.length && star.length) {
    let leftT = left.pop() 
    let StartT = star.pop() 
    if (leftT > StartT) return false 
  }
  return true 
};

