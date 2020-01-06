/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  let max = 1
  let dp = []
  let count = []
  for (let i = 0; i< nums.length;i++) {
    dp[i] = 1
    count[i] = 1 
  }
  for (let i = 1; i < nums.length ; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        if (dp[i] === dp[j] + 1) {
          count[i] += count[j]
        } else if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1 
          max = Math.max(dp[i], max)
          count[i] = count[j]
        }
      }
    }
  }
  return dp.reduce((pre, cur, i) => {
    if (cur === max) return pre + count[i]
    return pre 
  }, 0)
};

rs = findNumberOfLIS([2, 2, 2, 2, 2])
console.log(rs)