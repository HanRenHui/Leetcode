/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
var moveZeroes = function(nums) {
  let point = -1 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(++point, i, nums)
    }
  }  
  return nums 
};
