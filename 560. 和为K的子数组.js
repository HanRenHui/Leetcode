/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// way1
var subarraySum = function(nums, k) {
  if (nums.length === 1) return k === nums[0] ? 1 : 0
  let rs = 0
  nums = nums.sort((a, b) => a - b)
  for (let L = 0; L < nums.length; L++) {
    let num = 0
    for (let R = L; R < nums.length; R++) {
      num += nums[R]
      if (num === k) {
        rs ++
        break 
      }
    }
  }  
  return rs 
};

// way2 
var subarraySum = function(nums, k) {
  let map = {0: 1}
  let sum = 0
  let rs =0
  for (let i = 0; i < nums.length; i++) {

    sum += nums[i]
    if (map[sum-k]) {
      rs += map[sum-k]
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1 

  }
  return rs 
}

subarraySum([-1, -1, 1], 0)