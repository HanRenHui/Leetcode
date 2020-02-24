/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  let i = 0 
  let j = i + 1 
  while(j < s.length) {
    if (s[j] === ' ') {
      reverse(arr, i, j)
      i = j+ 1 
      j = i + 1 
    } else {
      j++
    }
  }
  reverse(arr, i, j)
  return s.reverse()
};

function reverse(arr, i, j) {
  while(i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++ 
    j--
  }
}