/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let L = 0 
  let sum = 1
  let rs =0
  for (let R = 0; R < nums.length; R++) {
    sum *= nums[R]
    
    while(sum >= k && L <= R) {
      sum /= nums[L]
      L++
    }
    rs += (R - L + 1)
  }  
  return rs 
};