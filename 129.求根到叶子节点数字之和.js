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
var sumNumbers = function(root) {
  if (!root) return 0
  let rs = []
  const walk = (prefix, node) => {
    if (!node) return rs.push(prefix)
    if (node.left && node.right) {
      walk(prefix + node.val, node.left)
      walk(prefix + node.val, node.right)
    } else if (node.left) {
      walk(prefix + node.val, node.left)
    } else {
      walk(prefix + node.val, node.right)
    }
  }
  walk('', root)
  rs = rs.map(item => parseInt(item))
  return rs.reduce((pre, cur) => pre + cur, 0)
};