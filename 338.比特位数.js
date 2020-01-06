/**
 * @param {number} num
 * @return {number[]}
 */

// way 1
function binaryAdd(arr) {
  arr = [].concat(arr).reverse()
  let i = 0
  while (true) {
    let cur = arr[i]
    if (!cur) {
      arr[i] = 1
      break
    } else {
      arr[i] = 0
    }
    i++
  }
  return arr.reverse()
}



var countBits = function (num) {
  let dp = []
  dp[0] = [0]
  for (let i = 1; i <= num; i++) {
    dp[i] = binaryAdd(dp[i - 1])
  }
  let rs = []
  dp.forEach(arr => {
    rs.push(arr.reduce((pre, next) => pre += next, 0))
  })
  return rs
};

// way 2 

var countBits = function (num) {
  let dp = []
  dp[0] = 0
  let rs = [0]
  for (let i = 1; i<= num; i++) {
    if (i % 2 !== 0) {
      dp[i] = dp[i-1] + 1
    } else {
      dp[i] = dp[i / 2]
    }
    rs.push(dp[i])
  }
  return rs 
}


let rs = countBits(5)
console.log(rs)