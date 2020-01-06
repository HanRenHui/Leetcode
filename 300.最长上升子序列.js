/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  if (!nums.length) return 0
  let max = 1
  let dp = []
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
      if (dp[i] > max) max = dp[i]
    }
  }
  return max
};

let nums = [1, 3, 6, 7, 9, 4, 10, 5, 6]
let rs = lengthOfLIS(nums)