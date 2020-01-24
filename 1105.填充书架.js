/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function (books, shelf_width) {
  let dp = []
  dp[0] = books[0][1]
  for (let i = 1; i < books.length; i++) {
    let [w, h] = books[i]
    dp[i] = dp[i - 1] + h
    let height = h
    let maxW = w
    for (let j = i - 1; j >= 0; j--) {
      let [w2, h2] = books[j]
      maxW = w2 + maxW
      if (maxW <= shelf_width) {
        height = Math.max(height, h2)
        if (j === 0) {
          dp[i] = height
        } else {
          dp[i] = Math.min(dp[i], dp[j - 1] + height)
        }
      }

    }
  }
  return dp[books.length - 1]
};

books = [[7,3],[8,7],[2,7],[2,5]], shelf_width = 10
let rs = minHeightShelves(books, shelf_width)
console.log(rs)
