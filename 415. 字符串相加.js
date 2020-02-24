/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const arr1 = num1.split('').reverse() 
  const arr2 = num2.split('').reverse() 
  let ans = []
  let len = Math.max(arr1.length, arr2.length)
  let pre = 0 
  for (let i = 0; i < len; i++) {
    let left = arr1[i] || 0
    let right = arr2[i]|| 0
    left = parseInt(left)
    right = parseInt(right)
    let rs = left + right + pre 
    if (rs >= 10) {
      pre = 1 
      rs %= 10
    } else {
      pre = 0 
    }
    ans.unshift(rs)
  }
  // 最后的进位
  if (pre === 1) ans.unshift(1)
  return ans.join('')
};

