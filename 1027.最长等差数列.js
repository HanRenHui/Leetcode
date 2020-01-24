/**
 * @param {number[]} A
 * @return {number}
 */

// dp[i] 是个对象 表示 数组前i个元素 所有等差数列的差和长度的对应关系 
var longestArithSeqLength = function (A) {
  let dp = new Array(A.length)
  for (let i = 0; i < dp.length; i++){
    dp[i] = {}
  }
  let max = 2
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = A[i] - A[j]
      let rs = dp[j][temp]
      dp[i][temp] = rs ? rs + 1 : 2
      max = Math.max(dp[i][temp], max)
    }
  }
  return max
};

a = [83,20,17,43,52,78,68,45]
let rs = longestArithSeqLength(a)