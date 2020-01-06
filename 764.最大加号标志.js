/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  if (N <= 2) return mines.length < N * N ? 1 : 0
  let temp = mines
  let top = new Array(N)
  let bottom = new Array(N)
  let left = new Array(N)
  let right = new Array(N)
  let arr = new Array(N)
  let dp = new Array(N)
  for (let i = 0; i < N; i++) {
    top[i] = new Array(N)
    bottom[i] = new Array(N)
    left[i] = new Array(N)
    right[i] = new Array(N)
    dp[i] = new Array(N)
    arr[i] = new Array(N).fill(1)
  }
  mines = arr
  temp.forEach(item => {
    let [x, y] = item
    mines[x][y] = 0
  })
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j === 0) {
        left[i][j] = mines[i][j] === 0 ? 0 : 1
      } else {
        left[i][j] = mines[i][j] === 0 ? 0 : left[i][j - 1] + 1
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = N - 1; j >= 0; j--) {
      if (j === N - 1) {
        right[i][j] = mines[i][j] === 0 ? 0 : 1
      } else {
        right[i][j] = mines[i][j] === 0 ? 0 : right[i][j + 1] + 1
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === 0) {
        top[i][j] = mines[i][j] === 0 ? 0 : 1
      } else {
        top[i][j] = mines[i][j] === 0 ? 0 : top[i - 1][j] + 1
      }
    }
  }
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < N; j++) {
      if (i === N - 1) {
        bottom[i][j] = mines[i][j] === 0 ? 0 : 1
      } else {
        bottom[i][j] = mines[i][j] === 0 ? 0 : bottom[i + 1][j] + 1
      }
    }
  }
  let rs
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        dp[i][j] = 0
      } else {
        if (i === 0 || i === N -1 || j === 0 || j === N-1) {
          dp[i][j] = mines[i][j] ? 1 : 0
        } else {
          dp[i][j] = Math.min(left[i][j - 1], right[i][j + 1], top[i - 1][j], bottom[i + 1][j]) + 1
        }
      }
      rs = Math.max(rs || 0, dp[i][j] || 0)
    }
  }
  return rs
};

m = 2
n = [[0,0],[0,1],[1,0]]
let rs = orderOfLargestPlusSign(m, n)
console.log(rs)