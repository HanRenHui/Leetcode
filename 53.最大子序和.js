/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max_ending_here = nums[0]  
  let rs = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max_ending_here = Math.max(nums[i], max_ending_here + nums[i])
    rs = Math.max(rs, max_ending_here)
  }
  return rs 
};