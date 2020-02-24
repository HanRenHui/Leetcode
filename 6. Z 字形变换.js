/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) return s 
  let arr = new Array(numRows)
  for (let i = 0; i < arr.length;i ++) {
    arr[i] = []
  }
  let flag = 1 
  let index = 0 
  for (let v of s) {
    arr[index].push(v)
    if (index === numRows-1) {
      flag = -1
    } else if (index === 0){
      flag = 1 
    }
    index+=flag
  }
  return arr.reduce((pre, cur) => pre + cur.join(''),'')
};