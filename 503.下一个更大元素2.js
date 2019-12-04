/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let rs = new Array(nums.length).fill(-1)
  let templen = nums.length
  nums = [].concat(nums, nums)
  let stack = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!stack.length) {
      stack.push(i)
    } else {
      let top = -1  
      top = stack[stack.length-1]
      while(nums[top] < nums[i]) {
        let tempIndex = stack.pop() 
        rs[tempIndex] = nums[i]
        top = stack[stack.length-1]
      }
      if (i < templen) 
        stack.push(i)
    }
  }
  return rs 

};