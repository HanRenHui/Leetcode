/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  debugger
  if (!prices.length) return 0 
  let pre = prices[0]  
  let profit = 0
  for (let i = 1; i < prices.length; i++) {

    let cur = prices[i]
    if (cur > pre) {
      profit += cur - pre 
    }
    pre = cur 
  }
  return profit
};

a = [7, 1, 5, 3, 6, 4]
let rs =maxProfit(a)
console.log(rs)
