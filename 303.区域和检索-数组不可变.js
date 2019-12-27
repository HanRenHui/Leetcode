/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums   
  this.dep = []
  this.dep[0] = this.nums[0]
  for (let i = 1; i < this.nums.length; i++) {
    this.dep[i] = this.dep[i-1] + this.nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.dep[j]
    return this.dep[j] - this.dep[i-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */