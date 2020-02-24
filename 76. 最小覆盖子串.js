/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 固定窗口
function initMap(str, map) {
  for (let i = 0; i < str.length; i++) {
    let cur = str[i]
    map[cur] = map[cur] ? map[cur] + 1 : 1
  }
}
function valid(left, right) {
  let Lkeys = Object.keys(left)
  let Rkeys = Object.keys(right)
  if (Lkeys.length !== Rkeys.length) return false
  
  Lkeys.forEach(item => {
    if (left[item] !== right[item]) return false
  })
  return true
}

var findAnagrams = function (s, p) {
  if (s.length < p.length) return []
  let rs = []
  let needs = {}
  let window = {}
  initMap(p, needs)
  for (let L = 0; L < s.length - 2; L++) {
    let cur = s[L]
    window[cur] = 1 
    let R = L + p.length - 1
    let str = s.slice(L, R + 1)
    if (L === 0) initMap(str, window)
    delete window[cur]
  }
  return rs
};
s = "cbaebabacd"
p = "abc"
findAnagrams(s, p)