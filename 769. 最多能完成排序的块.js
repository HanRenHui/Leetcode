/**
 * @param {number[]} arr
 * @return {number}
 */
// 注意arr是[0, 1, 2, ... , arr.length-1]的随机排列
// 遍历arr 到下标为i的元素 那么前i个元素的最大值必须是i才能分割
var maxChunksToSorted = function(arr) {
  let rs = 0 
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(i, max)
    rs += max === i ?  1 : 0
  }
  return rs 
};