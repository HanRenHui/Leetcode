/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) { 
  return nums1.filter(item => nums2.includes(item) && nums2.splice(nums2.indexOf(nums1), 1))
};