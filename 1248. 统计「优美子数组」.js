/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 滑动窗口
var numberOfSubarrays = function (nums, k) {
  let pre = []
  let map = {0: 1}
  pre[0] = nums[0] % 2 === 0  ? 0 : 1 
  for (let i = 1 ; i < nums.length; i++) {
    let cur = nums[i] % 2 === 0 ? 0 : 1 
    pre[i] = pre[i-1] + cur 
  }
  let rs = 0
  for (let i = 0; i < nums.length; i++) {
    let cur = pre[i]
    if (cur >= k && map[cur - k] !== undefined) {
      rs += map[k-cur]
    } else {
      map[cur] = map[cur] ? map[cur] + 1 : 1 
    }
  }
  return rs 
};

