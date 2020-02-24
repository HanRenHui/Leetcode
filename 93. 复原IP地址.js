/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let rs = []
  const next = (preArr, str) => {
    if (!str.length && preArr.length === 4) {
      if (preArr.join('') === s){

        return rs.push(preArr.join('.'))
      }
    }
    for (let i = 1; i <= Math.min(3, str.length); i++) {
      let tempStr = parseInt(str.slice(0, i)) 
      tempStr <= 255 && next(preArr.concat(tempStr), str.slice(i))
    }
  }
  next([], s) 
  return rs 
};
s = "010010"
restoreIpAddresses(s)