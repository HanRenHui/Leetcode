/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
function getNum(str) {
  let count = 0 
  str.replace(/[A-Z]/g, (matched) => {
    count++ 
  })
  return count 
}
var camelMatch = function(queries, pattern) {
  let rs = []
  for (let i = 0; i < queries.length ;i ++) {
    debugger 
    let query = queries[i]
    if (getNum(query) !== getNum(pattern)) {
      rs.push(false)
      continue 
    }
    let p1 = 0 
    let p2 = 0 
    while(p1 < query.length && p2 < pattern.length) {
      if (query[p1] === pattern[p2]) {
        p1 ++ 
        p2 ++ 
      } else {
        p1 ++ 
      }
    }
    if (p2 >= pattern.length) {
      rs.push(true)
    } else {
      rs.push(false)
    }
  }
  return rs 
};
