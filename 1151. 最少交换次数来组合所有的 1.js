/**
 * @param {number[]} data
 * @return {number}
 */

var minSwaps = function (data) {
  const window = data.reduce((pre, cur) => pre + cur, 0)
  if (window === 1 || window === 0) return 0
  let max = 0
  let presum = []
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      presum[i] = data[i]
      continue
    }
    presum[i] = presum[i - 1] + data[i]
  }
  let len = data.length

  for (let i = 0; i <= len - window; i++) {
    let zeroCount
    if (i > 0) {
      zeroCount = presum[i + window - 1] - presum[i - 1]
    } else {
      zeroCount = presum[i + window-1]
    }
    max = Math.max(max, zeroCount)
  }
  return window - max
};

