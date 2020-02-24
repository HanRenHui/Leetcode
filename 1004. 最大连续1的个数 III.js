/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, k) {
  let max = 0
  let L = 0
  let R = 0
  let count = 0
  while (R < A.length) {
    let cur = A[R]
    if (cur) {
      count++
      R++
    } else {
      if (k) {
        k-- 
        R++ 
        count++
      } else {
        if (A[L] === 0) {
          k++
        } 
        count--
        L++ 

      }
    }
    max = Math.max(count, max)

  }
  return max
};


a = [0,0,1,1,1,0,0]
b = 0
longestOnes(a, b)