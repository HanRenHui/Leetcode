/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let L = 0
  let R = nums.length - 1
  while(L < R) {
    let mid = (L + R + 1) >> 1 
    if (nums[mid] > target) {
      R = mid -1 
    } else {
      L = mid 
    }
  }
  return nums[L] === target ? L : -1 
};