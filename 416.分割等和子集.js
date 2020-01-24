/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length < 2) return false
  if (nums.length === 2) return nums[0] === nums[1]

  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  if (sum % 2 !== 0) return false
  sum = sum / 2


  let dp = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    dp[i] = new Array(sum)
  }
  dp[0][0] = true
  for (let i = 1; i <= sum; i++) {
    dp[0][i] = false
  }

  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = false
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= sum; j++) {
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false

    }
  }
  return dp[nums.length - 1][sum]

};

let rs = canPartition([1, 5, 11, 5])
console.log(rs)