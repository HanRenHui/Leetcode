/**
 * @param {number} n
 * @return {number}
 */

 // 动态规划 dp[n] 表示有n个节点时能组成的二叉搜索树
 // 转移方程 dp[n] = dp[0] * dp[n-1] + dp[1] + d[n-2] + ... + dp[n-1] * dp[0]
var numTrees = function(n) {
  let dp = new Array(n+1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i-j-1]
    }
  }
  return dp[n]
};

let rs = numTrees(3)
console.log(rs)