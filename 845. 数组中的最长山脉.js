/**
 * @param {number[]} A
 * @return {number}
 */

 // way 1 
 var longestMountain = function(A) {
  let rs = 0 
  for (let i = 0; i < A.length-1; i++) {
    let l = i
    let pre = i  
    let r = i+1 
    let flag1 = false 
    let flag2 = false 
    while (A[r] > A[pre] && r < A.length) {
      pre = r 
      r++ 
      flag1 = true 
    }
    while(A[r] < A[pre] && r < A.length) {
      pre = r 
      r++ 
      flag2 = true 
    }
    if (flag1 && flag2) rs = Math.max(rs, r - l)

  }
  return rs 
};

// way2 

var longestMountain = function(A) {
  let rs =0
  if (A.length < 3) return []
  for (let i = 1; i < A.length-1; i++) {
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      let l = r = i 
      while(l > 0 && A[l] > A[l-1]) {
        l--
      }
      while(r < A.length && A[r] > A[r+1]) {
        r++
      }
      rs = Math.max(rs, r - l + 1)
    }
  }
  return rs 
}

longestMountain([2,1,4,7,3,2,5])