/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = 0 
  let p2 = 0 
  debugger
  let copy = [...nums1]
  let p = 0
  while(p1 < m && p2 < n) {
    
    if (copy[p1] === nums2[p2]) {
      nums1[p++] = copy[p1]
      nums1[p++] = copy[p1]
      p1++ 
      p2 ++
    } else {
      nums1[p++] = copy[p1] < nums2[p2] ? copy[p1++] : nums2[p2++] 
    }
  }
  while(p1 < m) {
    nums1[p++] = copy[p1++]
  }
  while(p2 < n) {
    nums1[p++] = nums2[p2++]
  }
};
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
merge(nums1, m, nums2, n)
console.log(nums1)