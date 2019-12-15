/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  let arr = matrix
  let top = 0 
  let bottom = arr.length - 1 
  while(top <= bottom) {
    [arr[top], arr[bottom]] = [arr[bottom], arr[top]]
    top ++ 
    bottom -- 
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j > i) {
        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
      }
    }
  }
  return arr 
};
