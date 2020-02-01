/**
 * @param {number[][]} intervals
 * @return {number}
 */

 // 方法一: 动态规划 最长上升子序列
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0
  intervals = intervals.sort((a, b) => {
    let [starta] = a 
    let [startb] = b 
    return starta - startb
  })
  let dp = new Array(intervals.length).fill(1)
  let total = 1
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i; j >= 0; j--) {
      let [curStart, curEnd] = intervals[i]
      let [preStart, preEnd] = intervals[j]
      if (preEnd <= curStart) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        total = Math.max(total, dp[i])
      }
    }
  }  
  return intervals.length - total 
};

