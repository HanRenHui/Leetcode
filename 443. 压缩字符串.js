/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let num = 1 
  debugger 
  for (let i = 0; i< chars.length; ) {
    if (chars[i] === chars[i+1]) {
      num++ 
      i++ 
    } else {
      if(num > 1 && num < 10) {
        chars.splice(i - num + 2, num - 1, '' + num) 
        i = i - num + 3 
        num = 1 
      } else if (num >= 10) {
        let temp = num.toString().split('')
        chars.splice(i - num + 2, num - 1, temp[0], temp[1]) 
        i = i - num + 4 
        num = 1 

      } else {
        i++
      }
    }
  }
  return chars.length
};
a = ["o","o","o","o","o","o","o","o","o","o"]

compress(a)
