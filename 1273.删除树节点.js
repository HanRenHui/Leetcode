/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */

function findParentInArr(parent, node, arr) {
  let temp = parent[node]
  while(temp !== undefined) {
    if (arr.includes(temp)) return true 
    temp = parent[temp]
  }
  return false 
}

var deleteTreeNodes = function (nodes, parent, value) {
  let dp = new Array(nodes)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = {
      count: 1,
      value: value[i]
    }
  }
  
  for (let i = nodes - 1; i > 0; i--) {
    dp[parent[i]].value += dp[i].value
    dp[parent[i]].count += dp[i].count
  }
  let total = nodes
  let tempParent = []
  for (let i = 0; i < nodes; i++) {
    // 该节点所属的子树和为零 之前已经减掉了
    if (findParentInArr(parent, i, tempParent)) {
      continue
    }
    if (dp[i].value === 0) {
      let len = 0
      for (let k = 0; k < nodes; k++) {
        if (parent[k] === i) {
          len += (tempParent.includes(k) ? 0 : dp[k].count)
        }
      }
      tempParent.push(i)
      total = total - len - 1
    }
  }
  return total
};
nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-1]
let rs = deleteTreeNodes(nodes, parent, value)
console.log(rs)
