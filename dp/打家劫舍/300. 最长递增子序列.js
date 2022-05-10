/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let dp = new Array(nums.length+1).fill(1)
    dp[0] = 1
    let rs = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            dp[i] = dp[i-1] + 1
            rs = Math.max(dp[i], rs)
        } else {
            dp[i] = 1
        }
    }
    return rs
};