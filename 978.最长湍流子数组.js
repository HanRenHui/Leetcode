/**
 * @param {number[]} A
 * @return {number}
 *   0  1  2  3   4  5  6  7  8
a = [9, 4, 2, 10, 7, 8, 8, 1, 9]
 */
var maxTurbulenceSize = function (A) {
  if (A.length <= 1) return A.length
  let max = 1 
  let dp = new Array(A.length).fill(1)
  dp[1] = A[1] === A[0] ? 1 : 2
  for (let i = 2; i < A.length; i++) {
    if (A[i-1] > A[i-2]) {
      if (A[i-1] > A[i]) {
        dp[i] = dp[i-1] + 1
      } else if (A[i-1] < A[i]){
        dp[i] = 2 
      }
    } else if (A[i-1] < A[i-2]) {
      if (A[i-1] < A[i]) {
        dp[i] = dp[i-1] + 1
      } else if (A[i-1] > A[i]){
        dp[i] = 2
      }
    } else {
      dp[i] = A[i] == A[i-1] ? 1 : 2
    }
    max = Math.max(max, dp[i])
  }
  return max 
};

a = [37,199,60,296,257,248,115,31,273,176]

let rs = maxTurbulenceSize(a)
console.log(rs)