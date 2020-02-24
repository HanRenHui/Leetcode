var subsets = function(nums) {
  if (!nums.length) return []
  let rs = [[]]
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    rs.forEach(item => {
      rs.push(item.concat(cur))
    })
  }
  return rs 
}