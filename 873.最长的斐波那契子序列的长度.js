/**
 * @param {number[]} A
 * @return {number}
 */

 // 暴力法 
var lenLongestFibSubseq = function(A) {
  let count = 0
  let max = 0
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
    
      let right = A[i]
      let left = A[j]
      let sum = left + right 
      count = 2
      while(A.includes(sum)) {
        left = right 
        right = sum 
        sum = left + right 
        count ++
      }
      max = Math.max(max, count > 2 ? count : 0)
    }
  }
  return max 
};
// 4 14 18 32 50 
a = [1, 3, 5]
lenLongestFibSubseq(a)