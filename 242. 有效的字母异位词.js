/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {}
  for (let i = 0; i < s.length;i++) {
    let temp = s[i].charCodeAt() - 97

    map[temp] =  map[temp] ? map[temp] + 1 : 1 
  }
  for (let i = 0; i < t.length;i++) {
    let temp = t[i].charCodeAt() - 97

    if (!map[temp]) return false 
    map[temp]--
  }
  for (let key in map) {
    if (map[key] !== 0) return false 
  }
  return true 
};