/**
* @param {string} s
* @return {string}
*/
 var longestPalindrome = function (s) {
   let str = ''
   let max = Number.MIN_SAFE_INTEGER
   let dp = []
   for (let i = 0; i < s.length; i++) {
     dp[i] = []
   }
   for (let i = 0; i < s.length; i++) {
     for (let j = 0; j <= i; j++) {
       let rs = false
       if (i - j <= 2) {
         rs = s[i] === s[j] ? true : false
       } else {
         rs = s[i] === s[j] && dp[j + 1][i - 1]
       }
       if (rs) {
         if (i - j > max) {
           max = i - j
           str = s.substring(j, i + 1)
         }
       }
       dp[j][i] = rs
     }
   }
   return str
 };