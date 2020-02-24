/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let rs = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length-2; i++) {
    if (i !== 0 && nums[i-1] === nums[i]) continue 
    let target = 0 - nums[i]
    let left = i + 1 
    let right = nums.length-1 
    while(left < right) {
      let sum = nums[left] + nums[right]
      if (sum === target) {
        rs.push([nums[i], nums[left], nums[right]])
        while(nums[left+1] === nums[left]) {left++}
        while(nums[right-1] === nums[right]) {right--}
        left++ 
        right--
      } else if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return rs 
};