/**
 * @param {number[]} A
 * @return {number}
 */

 // 提交超时
var subarrayBitwiseORs = function (A) {
  if (!A.length) return 0
  let rsArr = new Set([A[0]])
  let preArr = [A[0]]
  for (let i = 1; i < A.length; i++) {
    let cur = A[i]
    let curArr = []
    curArr.push(cur)
    rsArr.add(cur)
    for (let j = 0; j < preArr.length; j++) {
      let temp = cur | preArr[j]
      curArr.push(temp)
      rsArr.add(temp)
    }
    preArr = curArr
  }
  return rsArr.size
};

A = [1, 1, 2]

let rs = subarrayBitwiseORs(A)
console.log(rs)