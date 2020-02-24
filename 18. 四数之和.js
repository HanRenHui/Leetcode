/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  debugger 
  nums = nums.sort((a, b) => a - b)
  let rs = []
  for (let i = 0; i < nums.length-3; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue 
    for (let j = i + 1; j < nums.length-2; j++) {
      if (nums[j] === nums[j-1] && j - i > 1) continue 
      let left = j + 1 
      let right = nums.length-1 
      while(left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right] 
        if (sum === target) {
          rs.push([nums[i], nums[j], nums[left], nums[right]])
          while(nums[left] === nums[left+1]){
            left++ 
          }
          while(nums[right] === nums[right-1]) {
            right--
          } 
          left++ 
          right-- 
        } else if (sum < target) {
          left++
        } else {
          right -- 
        }
      }
    }
  }
  return rs 
};

a = [1,0,-1,0,-2,2]
b = 0

fourSum(a, b)