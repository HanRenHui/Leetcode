/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function fn(nums, target, flag) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) {
      if (flag) {
        if (mid === 0 || nums[mid] !== nums[mid - 1]) return mid 
        right = mid - 1 
      } else {
        if (mid === nums.length - 1 || nums[mid] !== nums[mid + 1]) return mid 
        left = mid + 1 
      }
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1 
}

var searchRange = function (nums, target) {
  let first = fn(nums, target, true)
  let last = fn(nums, target, false)
  return [first, last]
};

nums = [5,7,7,8,8,10], target = 8
let rs = searchRange(nums, target)
console.log(rs)