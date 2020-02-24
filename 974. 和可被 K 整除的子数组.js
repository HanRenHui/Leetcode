/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var subarraysDivByK = function(A, K) {
  let pre = []
  let total = 0
  for (let i = 0; i < A.length; i++) {
    let cur = A[i]
    if (cur % K === 0) total ++
    let curArr = []
    pre.forEach(item => {
      let temp = item+cur
      if(temp % K === 0)  total ++ 
      curArr.push(temp)
    })
    curArr.push(cur)
    pre = curArr 
  }
  return total 
};
