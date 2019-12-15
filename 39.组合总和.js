var combinationSum = function (candidates, target) {
  let rs = []
  const next = (prefix, value) => {
    if (value === 0) return rs.push(prefix)
    if (value < 0) return 
    for (let i = 0, len = candidates.length; i < len; i++) {
      let cur = candidates[i]
      if (!prefix.length || (prefix[prefix.length-1] <= cur)) {
        let cha = value - cur 
        next(prefix.concat(cur), cha)
      }
    }
  }
  next([], target)
  return rs 
};

combinationSum([2, 3, 6, 7], 7)