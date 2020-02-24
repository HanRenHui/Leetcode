/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1 === word2) return 0
  if (!word1.length) return word2.length
  if (!word2.length) return word1.length
  let dp = new Array(word1.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length)
  }

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = word1[i] === word2[j] ? 1 : 0
      } else if (i === 0) {
        dp[i][j] = word1[i] === word2[j] ? 1 : dp[i][j - 1]
      } else if (j === 0) { 
        dp[i][j] = word1[i] === word2[j] ? 1 : dp[i-1][j]
      } else {
        if (word1[i] === word2[j]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
      }

    }
  }
  let maxCommon = dp[word1.length - 1][word2.length - 1]
  return (word1.length - maxCommon) + (word2.length - maxCommon)
};