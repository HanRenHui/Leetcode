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
var countNodes = function(root) {
  if (!root) return 0
  let total = 0
  const walk = node => {
    if (!node) return 
    total += 1 
    walk(node.left)
    walk(node.right)
  }
  walk(root)
  return total 
};