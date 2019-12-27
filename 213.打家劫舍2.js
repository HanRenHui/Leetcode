/**
 * @param {number[]} nums
 * @return {number}
 */
function fn(nums) {
  let dep = []
  dep[0] = nums[0]
  dep[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dep[i] = Math.max(dep[i - 2] + nums[i], dep[i - 1])
  }
  return dep[dep.length - 1]
}

var rob = function (nums) {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  let copy = [].concat(nums)

  let first = fn(nums.slice(1))
  copy.pop()
  let second = fn(copy)
  return Math.max(first, second)
};