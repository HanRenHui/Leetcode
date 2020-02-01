/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */


var generateTrees = function (n) {
  let temp = []
  for (let i = 1; i<= n; i++) {
    temp.push(i)
  }
  let rs = []
  const next = (curRoot, restNode, prefix) => {
    if (!restNode.length) rs.push(prefix)
    prefix.push(curRoot)

    // 存放比根节点小的节点
    let left = []
    // 存放比根节点大的节点
    let right =[]

    restNode.forEach(item => {
      if (item < curRoot) {
        left.push(item)
      } else {
        right.push(item)
      }
    })
    for (let i = 0; i < left.length; i++) {
      next(left[i], restNode.filter(item => item!== left[i]), prefix)
    }
    
    
  }
  let copy = []
  for (let i = 0; i < temp.length; i++) {
    copy = [].concat(temp)
    copy.splice(i, 1)
    next(i+1, copy, prefix = [])
  }
};
let rs = generateTrees(3)
console.log(rs)