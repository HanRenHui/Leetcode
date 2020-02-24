 
var splitIntoFibonacci = function(S) {
  let rs = []
  const next = (prefix, str) =>{
    if (!str.length) {
      if (prefix.length >= 3) rs = prefix 
      return 
    }
    for (let i = 1; i <= str.length; i++) {
      let subStr = str.slice(0, i) 
      if (subStr.startsWith('0') && subStr !== '0') continue 
      let nextV = parseInt(subStr)
            if (nextV > 2 ** 31 - 1) continue 
      let preOne = prefix[prefix.length-2]
      let preTwo = prefix[prefix.length-1]
      if (prefix.length >= 2 &&  preOne + preTwo === nextV) {
        next(prefix.concat(nextV), str.slice(i))
      } else if (prefix.length < 2) {
        next(prefix.concat(nextV), str.slice(i))
      }
    }
  }
   next([], S)
   return rs 
};