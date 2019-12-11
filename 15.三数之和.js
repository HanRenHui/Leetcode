// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function (nums) {
  let rs = []
  nums = [].concat(nums).sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    
    let cur = nums[i]
    if (cur > 0) break 
    // 去重
    if (nums[i] === nums[i-1]) {
      continue 
    }
    let left = i + 1 
    let right = nums.length - 1 
    while(left < right) {
      let sum = cur + nums[left] + nums[right]
      if (sum === 0) {
        rs.push([cur, nums[left], nums[right]])
        while(left < right && nums[left] === nums[left+1]) {
          left ++ 
        }
        while(left < right && nums[right] === nums[right-1]) {
          right --
        }
        left++ 
        right--
      } else if(sum > 0) {
        right --
      } else {
        left ++
      }
    }
  }
  return rs 
};


