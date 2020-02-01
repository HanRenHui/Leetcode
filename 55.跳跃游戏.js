/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // 方法一 动态规划 dp[i] 表示能否由前某个位置到达
var canJump = function(nums) {
  let dp = new Array(nums.length).fill(false)
  dp[0] = true
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let cha = i - j 
      if (nums[j] >= cha) {
        let rs = dp[j]
        if (rs) {
          dp[i] = rs 
          break 
        }
      }
    }
  }
  return dp[nums.length-1]
};


// 贪心算法 

// 从左到右遍历 判断当前遍历到的元素所能到达的最大位置 若能到达最后一个位置则返回true
// 同时需要保证 当前元素可达
var canJump = function(nums) {
  if (nums.length === 1) return true 
  let maxSearch = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > maxSearch) return false 
    maxSearch = Math.max(nums[i] + i, maxSearch) 
    if (maxSearch >= nums.length-1) return true 
  }
};
a =  [2, 3, 1, 1, 4]
let rs = canJump(a)
console.log(rs)