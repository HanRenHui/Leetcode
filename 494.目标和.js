/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let dp = []
  dp[0] = [nums[0], -nums[0]]
  for (let i = 1; i < nums.length; i++) {
    let tempArr = [nums[i], -nums[i]]
    dp[i] = []
    for (let j = 0; j < tempArr.length; j++) {
      for (let m = 0; m < dp[i-1].length; m++) {
        dp[i].push(tempArr[j] + dp[i-1][m])
      }
    }
  }
  return dp[nums.length-1].reduce((pre, cur) => {
    return pre += cur === S ? 1 : 0
  }, 0)
};

