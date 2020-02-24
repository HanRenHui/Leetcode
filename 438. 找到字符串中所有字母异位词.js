/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 固定窗口
function isvalid(strs1, str2) {
  if(str1.length !== str2.length) return false 
  let arr1 = str1.split('')
  let arr2 =str2.split('')
  let temp = []
  arr1.forEach(item => {
    let index = item.charCodeAt() - 97
    temp[index]  = temp[index] ? temp[index] + 1 : 1
  })
  arr2.forEach(item => {
    let index = item.charCodeAt() - 97
    temp[index]  = temp[index] ? temp[index] - 1 : 0

  })
  return temp.reduce((pre, cur) => pre + cur, 0) === 0

}
var findAnagrams = function (s, p) {
  if (s.length < p.length) return []
  let rs = []
  for (let L = 0; L < s.length; L++) {
    let R = L + p.length - 1
    let str = s.slice(L, R+1)
    if (isvalid(str, p)) rs.push(L)
  }
  return rs
};

a = "cbaebabacd"
b = "abc"

