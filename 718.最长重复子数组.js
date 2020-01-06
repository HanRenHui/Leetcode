/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let max = 0
  if (!A.length || !B.length) return 0
  let dp = new Array(A.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(B.length)
  }
  dp[0][0] = A[0] === B[0] ? 1 : 0
  for (let i = 1; i < A.length; i++) {
    dp[i][0] = A[i] === B[0] ? 1 : 0
  }
  for (let j = 1; j < B.length; j++) {
    dp[0][j] = A[0] === B[j] ? 1 : 0
  }
  for (let i = 1; i < A.length; i++) {
    for (let j = 1; j < B.length; j++) {
      if (A[i] === B[j]) {
        if(A[i-1] === B[j-1]) {
          dp[i][j] = dp[i-1][j-1] + 1
        } else {
          dp[i][j] =1
        }
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
      max = Math.max(max, dp[i][j])
    }
  }
  return max
};

// a = [0,0,0,0,0,0,1,0,0,0]
// b = [0,0,0,0,0,0,0,1,0,0]

a = [0,1,1,1,1]
b = [1,0,1,0,1]

let rs = findLength(a, b)
console.log(rs)