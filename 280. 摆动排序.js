/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 先排好序，然后奇数和奇数位交换位置即可
var wiggleSort = function (nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length-1; i++) {
    if (i % 2 !== 0) {
      [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
    }
  }
  return nums 
};