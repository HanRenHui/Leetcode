/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]
  let dep = []  
  dep[0] = nums[0]
  dep[1] = Math.max(nums[0], nums[1]) 
  for (let i = 2; i < nums.length; i++) {
    dep[i] = Math.max(dep[i-2] + nums[i], dep[i-1])
  }
  return dep[dep.length-1]
};