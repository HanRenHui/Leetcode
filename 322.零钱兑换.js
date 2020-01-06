/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  let dp = []
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    dp[i] = -1
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] > -1) {
        let temp = dp[i - coins[j]] === -1 ? -1 : dp[i - coins[j]] + 1
        let tempArr = [dp[i], temp].filter(i => i !== -1)
        let rs = tempArr.length > 0 ? Math.min(...tempArr) : -1
        dp[i] = rs
      }
    }
  }
  return dp[amount]
};

let a1 = [1, 2, 5]
let m = 11
let rs = coinChange(a1, m)