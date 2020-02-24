/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分法，最小的数一定在无序的部分，每次判断mid右边的部分是否有序，然后来不断的缩小边界进行判断。

var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = parseInt((right + left) / 2)
    if (nums[mid] < nums[mid - 1]) return nums[mid]
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return nums[left]
};