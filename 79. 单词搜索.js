/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function copy(arr) {
  return JSON.parse(JSON.stringify(arr))
}

var exist = function (board, word) {
  const next = (prefix, i, j, board) => {
    if (prefix.startsWith(word)) return true
    if (!word.startsWith(prefix)) return false
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) { return false }
    if (board[i][j] === '*') return false

    let temp =  board[i][j]
    board[i][j] = '*'
    let rs = next(prefix + temp, i - 1, j, board) ||
      next(prefix + temp, i + 1, j, board) ||
      next(prefix + temp, i, j - 1, board) ||
      next(prefix + temp, i, j + 1, board)
    board[i][j] = temp

    return rs
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let rs = next('', i, j, board)
      if (rs) return true
    }
  }
  return false
};