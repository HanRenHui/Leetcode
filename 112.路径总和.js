/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  let rs = false
  const walk = (prefix, node) => {
    if (!node) {
      if (prefix === sum) rs = true
      return
    }
       
    if (node.left && node.right) {
      walk(prefix + node.val, node.left)
      walk(prefix + node.val, node.right)
    } else if (node.left) {
      walk(prefix + node.val, node.left)
    } else {
      walk(prefix + node.val, node.right)
    }

  }
  walk(0, root)
  return rs

};