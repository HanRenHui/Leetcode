/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  let dp = []
  dp[0] = 0
  for (let i = 1; i <= days[days.length-1]; i++) {
    if (days.includes(i)) {
      dp[i] = Math.min(dp[i-1] + costs[0], dp[i-7 < 0 ? 0 : i - 7] + costs[1], dp[i-30 < 0 ? 0 : i - 30] + costs[2])
    } else {
      dp[i] = dp[i-1]
    }
  }
  return dp[days[days.length-1]]
};
a = [1,4,6,7,8,20]
b = [2, 7, 15]
let rs = mincostTickets(a, b)
console.log(rs)

