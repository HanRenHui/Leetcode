/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let rs = []
  const next = (parent) => {
    if (!parent.length) return 
    let temp = []
    let sum = parent.reduce((pre, cur) => pre + cur.val, 0) 
    let count = parent.length 
    rs.push(sum / count)
    while(parent.length) {
      let cur = parent.shift() 
      if (cur.left)temp.push(cur.left)
      if (cur.right) temp.push(cur.right)
    }
    next(temp)
  }
  next([root])
  return rs 
};