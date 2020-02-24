/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let L = 0 
  let rs = 0
  for(let R = 0; R < s.length; R++) {
    let str = s.substring(L, R) 
    let cur = s[R]
    let index = str.indexOf(cur) 
    if (index !== -1) {
      L += index +1 
    }
    rs = Math.max(rs, R - L + 1)
  }
  return rs  
};

lengthOfLongestSubstring("abcabcbb")