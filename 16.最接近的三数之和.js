/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = [].concat(nums).sort((a, b) => a - b)
  let temp = Number.MAX_SAFE_INTEGER
  let rs 
  for (let i = 0, len = nums.length; i < len; i++) {
    debugger
    let cur = nums[i]
    let left = i + 1 
    let right = len - 1 
    
    while(left < right) {
      let sum = cur + nums[left] + nums[right]
      if (sum === target) {
        return sum 
      } else if (sum < target) {
        if (Math.abs(sum - target) < temp) {
          temp = Math.abs(sum - target)
          rs = sum 
        }
        left ++
      } else {
        if (Math.abs(sum - target) < temp) {
          temp = Math.abs(sum - target)
          rs = sum 
        }
        right -- 
      }
    }
  }
  return rs 
};

let rs = threeSumClosest([0,5,-1,-2,4,-1,0,-3,4,-5], 1)
console.log(rs)