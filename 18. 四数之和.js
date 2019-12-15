var fourSum = function(nums, target) {
  let rs = []
  nums = [].concat(nums).sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len - 3; i++) {
    if (nums[i] === nums[i-1]) continue 
    for (let j = i + 1; j < len - 2; j++) {
      if (nums[j] === nums[j-1] && j - 1 !== i) continue 
      let left = j + 1 
      let right = len - 1 
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right] 
        if (sum === target) {
          // debugger
          rs.push([nums[i], nums[j], nums[left], nums[right]])
          while (nums[left] === nums[left+1] && left < right) {
            left++
          }
          while(nums[right] === nums[right-1] && left < right) {
            right--
          }
          left++ 
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return rs
};