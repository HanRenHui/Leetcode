/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  let dp = []
  dp[1] = []
  for (let i = 0; i < 10; i++) {
    dp[1].push(i + '')
  }
  for (let i = 2; i <= N; i++) {
    dp[i] = []
    dp[i-1].forEach(item => {
      let last = item[item.length-1]
      let first = item[0]
      if (first != 0) {
        let rs = parseInt(last) + K
        let rs2 = last - K
        rs < 10 && dp[i].push(item + '' + rs)
        K !== 0 && rs2 > -1 && dp[i].push(item + '' + rs2)
      }

    })
  }
  return dp[N]
};

let rs =numsSameConsecDiff(2, 0)
console.log(rs)