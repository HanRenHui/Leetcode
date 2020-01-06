/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (!nums.length) return 0
  let dp = []
  for (let i = 0; i < nums.length; i++) {
    dp[i] = {
      len: 1,
      type: -1,
    }
  }

  let rs = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j].type === -1 && nums[i] !== nums[j]) {
        dp[i].len = Math.max(dp[i].len, dp[j].len+1) 
        dp[i].type = nums[i] > nums[j] ? 1: 0
      } else if (dp[j].type === 0){
        if (nums[i] > nums[j]) {
          dp[i].len = Math.max(dp[i].len, dp[j].len+1)
          dp[i].type = 1
        }
      } else {
        if (nums[i] < nums[j]) {
          dp[i].len = Math.max(dp[i].len, dp[j].len+1)
          dp[i].type = 0
        }
      }
      if (dp[i].len > rs) rs = dp[i].len 
    }
  }
  return rs 
};

wiggleMaxLength([3, 3, 3, 2, 5])