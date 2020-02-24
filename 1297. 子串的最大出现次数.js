var maxFreq = function(s, maxLetters, minSize, maxSize) {
  let map = new Map() 
  debugger 
  for (let i = 0; i < s.length;i ++) {
    let str = s.slice(i, i+minSize)
    let set = new Set(str.split('')).size 
    if (set > maxLetters || str.length < minSize) continue 
    if (map.get(str)) {
      map.set(str, map.get(str)+1)
    } else {
      map.set(str, 1)
    }
  }
  
  map = [...map]
  return map.reduce((pre, cur) => Math.max(pre, cur[1]), 0)
}

a = "abcde"
b = 2
c = 3
d = 3
maxFreq(a, b, c, d)