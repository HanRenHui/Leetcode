var dailyTemperatures = function (T) {
  let length = T.length 
  let stack = []
  let rs = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    while(stack.length && T[stack[stack.length-1]] < T[i]) {
      let index = stack.pop() 
      rs[index] = i - index
    }
    stack.push(i)
  }
  return rs 
};