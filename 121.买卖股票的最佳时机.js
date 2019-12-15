/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let rs = 0
  let minPrice = Number.MAX_SAFE_INTEGER
  for (let v of prices) {
    if (v < minPrice) {
      minPrice = v 
    } else if (v - minPrice > rs) {
      rs = v - minPrice 
    }
  }
  return rs 
};