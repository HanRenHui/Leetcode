/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  if (!grid.length) return 0
  if (grid.length === 1) return grid[0].some(item => !!item) ? 1 : 0
  let dpx = new Array(grid.length)
  let dpy = new Array(grid.length)
  let max = 0
  // 初始化
  for (let i = 0; i < grid.length; i++) {
    dpx[i] = new Array(grid[i].length)
    dpy[i] = new Array(grid[i].length)
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0) {
        dpy[i][j] = grid[i][j] ? 1 : 0
      } else {
        dpy[i][j] = grid[i][j] ? dpy[i - 1][j] + 1 : 0
      }

      if (j === 0) {
        dpx[i][j] = grid[i][j] ? 1 : 0
      } else {
        dpx[i][j] = grid[i][j] ? dpx[i][j - 1] + 1 : 0
      }
    }
  }
  // 
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {

      let len = dpx[i][j]
      if (len > 1) {
        let tempLen = 2
        while (tempLen <= len) {
          if (i + tempLen - 1 < grid.length) {
            let y1 = j - tempLen + 1
            let y2 = j
            let x1 = i
            let x2 = x1 + tempLen - 1
            // 另外三条边的长度是否满足条件
            if (dpy[x2][y1] >= tempLen && dpy[x2][y2] >= tempLen && dpx[x2][y2] >= tempLen) {
              max = Math.max(tempLen, max)
            }
          }
          tempLen++
        }
      } else if (len === 1) {
        max = Math.max(1, max)
      }
    }
  }
  return max * max
};

a = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1]
]
let rs = largest1BorderedSquare(a)