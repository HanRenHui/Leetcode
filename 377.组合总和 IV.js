/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let dp = []  
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    let total = 0
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        total += dp[i - nums[j]]
      }
    }
    dp[i] = total 
  }
  return dp[target]
};

combinationSum4([1, 2, 3], 4)