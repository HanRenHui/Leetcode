var find132pattern = function (nums) {
  let stack = []
  let temp = nums[0]
  let len = nums.length 
  for (let i = 1; i < len-1; i++) {
    let cur = nums[i]
    if (cur > temp) {
      for (let j = i + 1; j < len; j++) {
        if (nums[j] < nums[i] && nums[j] > temp) return true 
      }
    } else if(cur < temp){
      temp = cur 
    }
  }
  return false 
};