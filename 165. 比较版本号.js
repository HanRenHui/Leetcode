/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

function trim(str) {
  if (!str) return '' 
  if (str.length <= 1) return str 
  let temp = 0 
  while(str[temp] === '0') {
    temp++ 
  }
  return parseInt(str.slice(temp, str.length))
}

var compareVersion = function(version1, version2) {
  
  let arr1 = version1.split('.') 
  let arr2 = version2.split('.') 
  let len = Math.max(arr1.length, arr2.length) 
  for (let i = 0; i < len; i++)  {
      let temp1 = trim(arr1[i])
      let temp2 = trim(arr2[i])
      if (!/\d+/.test(temp1)) {
          temp1 = '0'
      } 
      if (!/\d+/.test(temp2)) {
          temp2 = '0'
      }  
      if (temp1 === temp2) {
          continue 
      } else if (temp1 > temp2) {
          return 1 
      } else if (temp1 < temp2) {
          return -1
      }
  }
  return 0
};