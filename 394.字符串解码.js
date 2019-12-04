/**
 * @param {string} s
 * @return {string}
 */
function isNumber(arr) {
  return arr > '0' && arr < '9'
}
var decodeString = function (s) {
  s = s.split('')
  let stack = []
  let numberTemp = ''
  while (s.length) {
    let cur = s.shift()
    if (/[0-9]/.test(cur)) {
      numberTemp += cur 
    } else  if (cur === '[') {
      stack.push(numberTemp)
      numberTemp = ''
    } else if (cur === ']') {
      let stackTemp = ''
      let tempRs = ''
      let temp = ''
      while (!isNumber(temp = stack.pop() )) {
        stackTemp = temp + stackTemp
      }
      tempRs = stackTemp.repeat(parseInt(temp))
      stack.push(tempRs)
    } else {
      stack.push(cur)
    }
  }
  return stack.join('')
};

