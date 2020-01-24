/**
 * @param {number} N
 * @return {number}
 */
// dp[i][j] 当骑士通过i步跳到j数字键 能按下的n位数字的个数
var knightDialer = function (N) {
  if (N === 1) return 10
  let dp = new Array(N)
  let flag = 10 ** 9 + 7
  let map = new Map()
  map.set(0, [4, 6])
  map.set(1, [6, 8])
  map.set(2, [7, 9])
  map.set(3, [4, 8])
  map.set(4, [0, 3, 9])
  map.set(5, [])
  map.set(6, [0, 1, 7])
  map.set(7, [2, 6])
  map.set(8, [1, 3])
  map.set(9, [2, 4])
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(10)
  }
  let total = 0
  for (let i = 0; i < 10; i++) {
    let src = map.get(i)
    dp[1][i] = 0
    src.forEach(item => {
      dp[1][i] += 1
    })
  }
  for (let j = 2; j < N; j++) {
    for (let i = 0; i <= 9; i++) {
      let src = map.get(i)
      dp[j][i] = 0
      src.forEach(item => {
        dp[j][i] += (dp[j - 1][item]) % flag  
      })
    }
  }
  for (let i = 0; i < dp[N-1].length; i++) {
    total += dp[N-1][i]
  }
  return total % flag 
};

let rs = knightDialer(161)
console.log(rs)