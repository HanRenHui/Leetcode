/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  hours = hours.map(i => i > 8 ? 1 : -1)
  let temp = []
  // 
  for (let i = 0, len = hours.length; i < len; i++) {
    if (!temp.length) {
      temp.push(hours[i])
    } else {
      temp[i] = hours[i] + temp[i-1]
    }
  }
  temp.shift(0)
  let max = 0 
  let stack = [0]
  for (let i = 1, len = temp.length; i < len; i++) {
    if (temp[stack[stack.length-1]] > temp[i]) {
      stack.push(i)
    }
  }

  for (let i = temp.length-1;  i>=0; i--) {
    while(temp[stack[stack.length-1]] < temp[i] && stack.length) {
      max = Math.max(max, i - stack.pop())
    }
  }
  return max 
};



let arr = [9, 9, 6, 0, 6, 6, 9]
longestWPI(arr)