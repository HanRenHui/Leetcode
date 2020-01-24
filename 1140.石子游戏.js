/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) { 
  let dp = new Array(piles.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = []
  }
  let M = 1 

  let sum = piles.reduce((pre, cur) => pre + cur, 0)
  for (let i = piles.length-1; i >= 0; i--) {
    for (let x = 1; x <= 2 * M; x++) {
      for (let m = 1; m <= 2 * x; m++) {
        dp[i][x] = Math.max(dp[i][x], sum - dp[i+x][m])
      }
    }
  }
  console.log(dp)
  return dp[0][1]
};