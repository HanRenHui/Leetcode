/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let shortStr = str1 > str2 ? str2 : str1 
  let longStr = str1 > str2 ? str1 : str2 
  let str = ''
  for (let i = shortStr.length-1; i >= 0; i--) {
    str = shortStr.slice(0, i+1)
    if (canRepeat(str, longStr, shortStr))
      return str 
  }
  return '' 

};

function canRepeat(str, longT, shortT) {
  let temp = str 
  let index = 1
  let flag = false 
  while(str.length <= longT.length) {
    if (str === shortT) flag = true 
    if (str === longT && flag ) return true 
    str = temp.repeat(++index)
  }
  return false 
}