/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  let map = {}
  indexes.forEach((item ,index) => {
    map[item] = {
      source: sources[index],
      target: targets[index]
    }
  })
  indexes = indexes.sort((a, b) => a - b)
  for (let i = indexes.length-1; i >= 0; i--) {
    let index = indexes[i]
    const {source, target} = map[index]
    let sourceLen = source.length 
    if (source !== S.substr(index, sourceLen)) continue 
    let tmep = S 
    S = tmep.slice(0, index) + target + tmep.slice(index + sourceLen)
  }
  return S 
};
a = "vmokgggqzp"
b = [3,5,1]
c = ["kg","ggq","mo"]
d = ["s","so","bfr"]
findReplaceString(a, b, c, d)