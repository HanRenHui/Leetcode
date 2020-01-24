/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let sum = stones.reduce((pre, cur) => pre + cur, 0)
  let halfSum = parseInt(sum / 2)
  let dp = new Array(stones.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(halfSum).fill(0)
  }
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j <= halfSum; j++) {
      if (i === 0) {
        dp[i][j] = stones[i] <= j ? stones[i] : 0
      } else {
        if (j - stones[i] >= 0){
          // 当前物件能放下
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i])
        }else {
          // 当前物件放不下
          dp[i][j] = dp[i-1][j]
        }
      }
    }
  }
  return sum - 2 * dp[stones.length - 1][halfSum]
};
a = [1,2,4,8,16,32,64,12,25,51]
let rs = lastStoneWeightII(a)
console.log(rs)