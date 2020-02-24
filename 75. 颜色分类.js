/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0
  let p2 = nums.length - 1
  function swap(left, right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
  }
  let cur = 0
  while (cur <= p2) {
    if (nums[cur] === 0) {
      swap(p0++, cur)
      cur++ 
    } else if (nums[cur] === 2) {
      swap(p2--, cur)
    } else {
      cur ++
    }
  }
  return nums
};

a = [1, 2, 0]
sortColors(a)