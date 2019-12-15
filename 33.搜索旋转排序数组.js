/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    debugger
    let mid = (left + right) >> 1
    if (nums[mid] === target) return mid
    // 左侧有序
    if (nums[left] <= nums[mid]) {
      if (target <= nums[mid] && target >= nums[left]) {
        right = mid - 1 
      } else {
        left = mid + 1 
      }
      // 右侧有序
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1 
      } else {
        right = mid - 1 
      }
    }
  }
  return -1  
};

let rs = search([1, 3], 1)
console.log(rs)