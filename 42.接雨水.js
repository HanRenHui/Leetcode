const getTop = arr => {
  return arr[arr.length - 1]
}
var trap = function (height) {
  debugger
  if (!height) return 0
  let total = 0
  let stack = [height[0]]
  let index = 1
  while (index < height.length) {
    let cur = height[index]
    while(height[getTop(stack)] < cur) {
      stack.pop()
      if (stack.length) {
      total += (Math.min(height[getTop(stack)], cur) * (index - getTop(stack)-1))
        
      }
    }
    stack.push(index)
    index++
  }
  return total 
};
let rs = trap([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(rs)