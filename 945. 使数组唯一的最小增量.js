/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  if (!A.length) return 0
  let temp = [].concat(A).sort((a, b) => a - b)
  for (let i = 1; i < A.length; A++) {
    if (A[i] <= A[i - 1]) {
      A[i] = A[i - 1] + 1
    }
  }
  let preSum = A.reduce((pre, cur) => pre + cur, 0)
  let sum = temp.reduce((pre, cur) => pre + cur, 0)
  return sum - preSum
};