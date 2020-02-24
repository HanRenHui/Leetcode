/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxPos = 0
  let lastPos = nums.length-1 
  for (let i = 0; i < nums.length; i++) {
    if (maxPos >= i) {
      maxPos = Math.max(i + nums[i], maxPos)
      if (maxPos >= lastPos) return true 
    } else {
      return false 
    }
  }
};