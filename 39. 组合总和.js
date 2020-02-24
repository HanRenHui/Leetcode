/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let rs = []
  const next = (t, prefix, index) => {
    if (t === 0) return rs.push(prefix) 
    if (t < 0) return 
    for (let i = index; i < candidates.length; i++) {
      next(t - candidates[i], prefix.concat(candidates[i]), i)
    }
  }
  next(target, [], 0) 
  return rs 
};