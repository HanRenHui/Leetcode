/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let dp = new Array(arr.length).fill(1)
  let max = 1 
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1;  j>= 0; j--) {
      if (arr[i] - arr[j] === difference) {
        dp[i] = dp[j] + 1 
        max = Math.max(max, dp[i])
        break
      }
    }
  }
  return max 
};
arr = [1, 3, 5, 7], difference = 1
let rs = longestSubsequence(arr, difference)
console.log(rs)