/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// [6,13,8,7,10,1,12,11]
// 6
// 5
// 37
var dietPlanPerformance = function(calories, k, lower, upper) {
  // 前缀和
  let presum = [calories[0]]
  for (let i = 1; i < calories.length; i++) {
    presum[i] = presum[i-1] + calories[i]
  }
  let index = 0
  let total = 0
  while(index < calories.length && calories.length - index >= k) {
    
    let sum = 0
    if (!index) {
      sum = presum[index+k-1]
    } else {
      sum = presum[index+k-1] - presum[index-1]
    }
    if (sum > upper) {
      total++
    } else if (sum < lower){
      total --
    }
    index++
  }
  return total 
};

rs = dietPlanPerformance([6,13,8,7,10,1,12,11], 6, 5, 37)
console.log(rs)