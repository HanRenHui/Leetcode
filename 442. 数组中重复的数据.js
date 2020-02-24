/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 把nums里的元素看作下标 
var findDuplicates = function(nums) {
  let rs = []
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i])
    if (nums[index-1]  < 0 ) {
      rs.push(index)
    } else {
      nums[index-1] *= -1
    }
  }
  return rs 
};