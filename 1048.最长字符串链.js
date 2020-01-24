/**
 * @param {string[]} words
 * @return {number}
 */
function isPre(left, right) {
  if (right.length - left.length !== 1) return false
  let rs = false 
  let i = 0 
  let index = 0
  while(i < left.length) {
    let cur = left[i]
    index = right.indexOf(cur, index)
    if (index === -1) return false 
    i++
  }
  return true 
}
var longestStrChain = function(words) {
  words = words.sort((a, b) => a.length - b.length)
  let dp = new Array(words.length).fill(1)
  let max = 1 
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isPre(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
      max = Math.max(dp[i], max)
    }
  }

  return max 
};
a = ["wnyxmflkf","xefx","usqhb",
"ttmdvv","hagmmn","tmvv","pttmdvv",
"nmzlhlpr","ymfk","uhpaglmmnn","zckgh",
"hgmmn","isqxrk","isqrk","nmzlhpr","uysyqhxb",
"haglmmn","xfx","mm","wymfkf","tmdvv","uhaglmmn","mf",
"uhaglmmnn","mfk","wnymfkf","powttkmdvv","kwnyxmflkf","xx",
"rnqbhxsj","uysqhb","pttkmdvv","hmmn","iq","m","ymfkf",
"zckgdh","zckh","hmm","xuefx","mv","iqrk","tmv","iqk","wnyxmfkf","uysyqhb","v","m","pwttkmdvv","rnqbhsj"]


// a = ["bqtmbnugq","bjqtmbnuwsgq","m","btmnugq","czlhk",
// "ihkgszexnh","wiszechhcxldcrow","kgszn","lhk","zlzfgmjurcntwvn",
// "jjvodlrsmdmie","tm","ihqkgpszexnh","wnwpxg","zmun","hkgszenh",
// "zmucnwn","kgzn","yjmk","wiszechcxldcrow","fnnh","yjm","jjvodlrmdmie",
// "bqtmnugq","hkgszen","wehcxdrow","nhed","zmucn","wisehcxdrow","fnnlh",
// "wehcxdro","zlzgmjurcntwvn","wnwg","jjvodlmde","wisechcxldcrow","wiehcxdrow",
// "nhxyeedlcqxw","wehcxr","zzgmjurcnwvn","btmgq","nwdhslknbwpxg","ihqkgszexnh",
// "jjvodlrsmdmhie","jjvodlmd","wdhslknbwpxg","nhedxw","wisehcxldcrow","btmugq",
// "mfnnlfh","bqtmbnuwgq","nhedcxw","bqtmbnuwsgq","nhe","zzgmjurcntwvn","jjvodlrmdie",
// "whslknwpxg","wdhslknwpxg","wsnwpxg","jjvodlm","hkgszexnh","zzgmjucnwvn","nhxyeedlcxw",
// "nhxedcxw","zzmucnwn","hkgszn","zmucnw","whsnwpxg","czlmhk","whsknwpxg","wehcxro","wnwpg",
// "nhxeedcxw","nwdhslknbjwpxg","nhedw","tmg","zlhk","zlzfgmjurcntwvnr",
// "jjvodlmdie","zzmjucnwvn","mfnnlh","zzmjucnwn","wisehcxldrow","tmgq","nhxyeedcxw"]
let rs = longestStrChain(a)
console.log(rs)
