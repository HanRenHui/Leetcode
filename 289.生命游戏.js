/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let top = 0,
        bottom = 0,
        left = 0, right = 0, leftTop = 0, rightTop = 0, leftBottom = 0, rightBottom = 0
      cur = board[i][j]
      if (i > 0 && j > 0) {
        leftTop = board[i - 1][j - 1] % 2
      }
      if (i > 0 && j < board[0].length - 1) {
        rightTop = board[i - 1][j + 1] % 2
      }
      if (i < board.length - 1 && j > 0) {
        leftBottom = board[i + 1][j - 1] % 2
      }
      if (i < board.length - 1 && j < board[0].length - 1) {
        rightBottom = board[i + 1][j + 1] % 2
      }
      if (i > 0) {
        top = board[i - 1][j] % 2
      }
      if (i < board.length - 1) {
        bottom = board[i + 1][j] % 2
      }
      if (j > 0) {
        left = board[i][j - 1] % 2
      }
      if (j < board[0].length - 1) {
        right = board[i][j + 1] % 2
      }
      let count = right + left + bottom + top + rightBottom + leftBottom + rightTop + leftTop
      if (!cur) {
        if (count === 3) {
          board[i][j] += 2
        }
      } else {
        if (count === 2 || count === 3) {
          board[i][j] += 2
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 2 || board[i][j] === 3) {
        board[i][j] = 1
      } else {
        board[i][j] = 0
      }
    }
  }
  return board
};


a = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]

// [
//   [0, 1, 0],
//   [2, 0, 1],
//   [1, 3, 1],
//   [0, 0, 0]
// ]
gameOfLife(a)