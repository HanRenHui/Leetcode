/**
 * @param {number[]} nums
 * @return {number}
 */
// 用当前值来表示下标 并把该下标所指向的数变为负数

var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) 
    if (nums[index] < 0) {
      return index 
    } 
    nums[index] *= -1
  }
};