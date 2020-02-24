/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  let sortA = A.sort((a, b) => a - b)
  let sortB = B.map((item, index) => ({v: item, index})).sort((a, b) => b.v - a.v)
  let rs =[]
  sortB.forEach(({v, index}) => {
    let r = findMinBig(sortA, v)
    if (r !== undefined) {
      rs[index] = r
    } else {
      rs[index] = sortA[0]
      sortA.splice(0, 1)
    }
  })
  return rs 
}
function findMinBig(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      let temp = arr[i]
      arr.splice(i, 1)
      return temp 
    }
  }
}
