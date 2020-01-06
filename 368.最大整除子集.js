/**
 * @param {number[]} nums
 * @return {number[]}
 */
function fn(left, right) {
  return left % right === 0 || right % left === 0
}


var largestDivisibleSubset = function(nums) {
  if (!nums.length) return []
  nums = nums.sort((a, b) => a-b)
  let dp = []
  let max = 1
  for (let i = 0; i < nums.length; i++) {
    dp[i] = [nums[i]]
  }
  let rs = dp[0]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (fn(nums[i], nums[j])) {
        let tempArr = [].concat(dp[j], nums[i])
        let temp = Math.max(dp[i].length, tempArr.length )
        if (temp === tempArr.length) {
          dp[i] = tempArr 
          if (tempArr.length > max) {
            max = tempArr.length 
            rs = tempArr
          }
        }
      }
    }
  }
  return rs 
};

let rs = largestDivisibleSubset([1,2,4,8])
console.log(rs)