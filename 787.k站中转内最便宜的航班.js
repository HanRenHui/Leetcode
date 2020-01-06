/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

// dp[k][i] 经过k次中转到达i的最低价格

var findCheapestPrice = function (n, flights, src, dst, K) {
  let dp = []
  const MAX_VALUE = Number.MAX_SAFE_INTEGER
  for (let i = 0; i <= K; i++) {
    dp[i] = new Array(n).fill(MAX_VALUE)
    dp[i][src] = 0
  }
  for (let i = 0; i < flights.length; i++) {
    let [start, end, price] = flights[i]
    if (start === src) {
      dp[0][end] = price
    }
  }
  for (let k = 1; k <= K; k++) {
    for (let i = 0; i < flights.length; i++) {
      let [start, end, price] = flights[i]
      dp[k][end] = Math.min(dp[k][end], dp[k - 1][start] + price)
    }
  }
  return dp[K][dst] === MAX_VALUE ? -1 : dp[K][dst]
};
// n = 2, edges = [[1, 0, 5]]

// src = 0, dst = 1, k = 1

n = 10
edges = [[3, 4, 4], [2, 5, 6], [4, 7, 10], [9, 6, 5], [7, 4, 4], [6, 2, 10], [6, 8, 6], [7, 9, 4], [1, 5, 4], [1, 0, 4], [9, 7, 3], [7, 0, 5], [6, 5, 8], [1, 7, 6], [4, 0, 9], [5, 9, 1], [8, 7, 3], [1, 2, 6], [4, 1, 5], [5, 2, 4], [1, 9, 1], [7, 8, 10], [0, 4, 2], [7, 2, 8]]
src = 6
dst = 0
k = 7

// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
let rs = findCheapestPrice(n, edges, src, dst, k)
console.log(rs)

即如果同时分配完（边界条件中的第一行），概率值为 1.0 的一半即为 0.5；如果汤 A 先分配完，概率值为 1.0；如果汤 B 先分配完，概率值为 0.0。