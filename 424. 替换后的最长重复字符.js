/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0 
  let map = {}
  let rs  = 0
  let maxCount  = 0

  for (let right = 0; right < s.length; right++) {
    let cur = s[right]
    map[cur] = map[cur] ? map[cur] + 1 : 1 
    maxCount  = Math.max(maxCount , map[cur])
    if(right - left + 1 - maxCount > k) {
      map[s[left]] --
      left ++ 
    }
    rs = Math.max(right -left  + 1, rs)
  }
  return rs 
};