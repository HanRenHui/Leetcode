/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let temp = []
  nums.forEach(item => {
    temp[item] = temp[item] ? temp[item] + 1 : 1
  })
  let dp = []
  dp[0] = 0 
  dp[1] = temp[1] || 0
  let max = dp[1] 
  for (let i = 2; i < temp.length; i++){
    if (temp[i]) {
      dp[i] = Math.max(dp[i-1], dp[i-2] + i * temp[i])
    } else {
      dp[i] = dp[i-1]
    }
    max = Math.max(max,dp[i])
  }
  return max 
};
deleteAndEarn([1,1,1,2,4,5,5,5,6])