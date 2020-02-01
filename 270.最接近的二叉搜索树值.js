/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */


var closestValue = function(root, target) {
  let rs = Number.MAX_SAFE_INTEGER
  let result 
  debugger
  const next = (node) => {
    if (!node) return 
    let left = node.left 
    let right =node.right 
    let temp  = Math.abs(node.val-target)

    if (target > node.val) {
      rs = Math.min(rs,temp)
      if (rs === temp) result = node.val 
      next(node.right)
    } else {
      rs = Math.min(rs, temp)
      if (rs === temp) result = node.val 
      next(node.left)
    }
  }
  next(root)
  return result
};

