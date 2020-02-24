/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// 滑动窗口
var minSubArrayLen = function (s, nums) {
  if (!nums.length) return 0
let left = 0 
let sum = 0
let rs = Number.MAX_SAFE_INTEGER
for (let right = 0; right < nums.length; right++) {
  sum += nums[right]
  while(sum >= s) {
    rs = Math.min(rs, right-left+1)
    sum -= nums[left]
    left++
  }
}
return rs === Number.MAX_SAFE_INTEGER ? 0 : rs 
};

let reg = /\.[^.]+/ 
let str = 'click.native.prevent'
rs = str.match(reg)
console.log(rs)