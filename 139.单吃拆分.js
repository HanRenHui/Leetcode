var wordBreak = function (s, wordDict) {
  let dp = []
  let len = s.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (wordDict.indexOf(s.slice(i, j + 1)) != -1) {
        if (dp[i - 1] == true || i - 1 < 0) {
          dp[j] = true;
        }
      }
    }
  }
  return dp[s.length - 1] ? true : false 
};


// let s = "catsandog"
// let wordDict = ["cats","dog","sand","and","cat"]
let s = 'leetcode'
let wordDict = ['leet', 'code']

let rs = wordBreak(s, wordDict)
console.log(rs)