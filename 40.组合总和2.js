/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let rs = []
  candidates = [].concat(candidates).sort((a, b) => a - b)
  const next = (prefix, value, _arr, index) => {
    if (value === 0) return rs.push(prefix)
    if (value < 0) return
    for (let i = index, len = _arr.length; i < len; i++) {
      let cur = _arr[i]
      if (cur === _arr[i-1]) continue 
      let copy = [].concat(_arr)
      copy.splice(i, 1)
      next(prefix.concat(cur), value - cur, copy, i)
    }
  }
  next([], target, candidates, -1)
  return rs
};
candidates = [1, 1, 2, 5, 6, 7, 10], target = 8

combinationSum2(candidates, target)