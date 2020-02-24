/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0
  let total = 0
  const next = (node, flag) => {
    if (!node.left&&!node.right) {
      if (flag) total += node.val
      return 
    } 
    if (node.left) next(node.left, true)
    if (node.right) next(node.right, false)
  }
  next(root, false)
  return total 
};