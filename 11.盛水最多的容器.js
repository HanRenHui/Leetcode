/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0 
  let right = height.length-1 
  let max = Number.MIN_SAFE_INTEGER  
  while(left < right) {
    let rs = Math.min(height[left], height[right]) * ( right - left )
    max = rs > max ? rs : max 
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max 
};

let arr = [1,8,6,2,5,4,8,3,7]

maxArea(arr)