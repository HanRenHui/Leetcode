/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0]
  let dp = []
  let dpMin = []
  dp[0] = nums[0]
  dpMin[0] = nums[0]
  let max = dp[0]
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i]
    dp[i] = Math.max(cur * dp[i-1], cur, cur * dpMin[i-1])
    dpMin[i] = Math.min(dpMin[i-1] * cur, cur, dp[i-1] * cur)

    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max 
};

let nums = [-1,-2,-9,-6]
let rs = maxProduct(nums)
console.log(rs)
