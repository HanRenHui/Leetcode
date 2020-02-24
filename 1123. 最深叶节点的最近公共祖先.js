/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function getHeight(node) {
  if (!node) return 0 
  let left = getHeight(node.left)
  let right = getHeight(node.right)
  return Math.max(left, right) + 1
}

var lcaDeepestLeaves = function(root) {
  if(!root) return null
  const next = node => {
    if (!node) return 
    let left = getHeight(node.left)
    let right = getHeight(node.right)
    if (left === right) {
      return node
    } else if (left > right) {
      return next(node.left)
    } else {
      return next(node.right)
    }
  }
  return next(root)
};