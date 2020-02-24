/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  let rs =0
  for (let l = 0; l < nums.length; l++) {
    debugger
    let c = l + 1
    let r = nums.length - 1
    while (c < r) {
      let sum = nums[l] + nums[c] + nums[r]
      if (sum < target) {
        rs += r - c
        c++
      } else {
        r -- 
      }
    }
  }
  return rs 
}


threeSumSmaller([-2, 0, 1, 3], 2)