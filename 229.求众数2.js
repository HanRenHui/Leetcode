/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 摩尔投票法
var majorityElement = function(nums) {
  let a = Number.MAX_SAFE_INTEGER  
  let b = Number.MAX_SAFE_INTEGER  
  let count_a = 0 
  let count_b = 0 
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (a === cur) {
      count_a ++
    } else if (b === cur) {
      count_b ++
    } else if(count_a === 0) {
      a = cur 
      count_a = 1 
    } else if (count_b === 0) {
      b = cur 
      count_b = 1
    } else {
      count_a -- 
      count_b --
    }
  }
  count_a = 0
  count_b = 0 
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (cur === a) count_a ++ 
    if (cur === b) count_b ++
  }
  let rs = []
  let len = nums.length 
  if (count_a > len / 3) rs.push(a)
  if (count_b > len / 3) rs.push(b)
  return rs 
};