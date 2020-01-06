/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  // if (nums.length <= 2) return true
  // if (nums.length % 2 === 0) return true
  let dp = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    dp[i] = new Array(nums.length)
    dp[i][i] = nums[i]
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      debugger
      if (i - j > 1) {
        dp[j][i] = Math.max(nums[j] - dp[j + 1][i], nums[i] - dp[j][i - 1])
      } else {
        dp[j][i] = Math.abs(nums[i] - nums[j])
      }
    }
  }
  return dp[0][nums.length - 1] > 0
};

nums = [1,5,233,7]
let rs = PredictTheWinner(nums)
console.log(rs)