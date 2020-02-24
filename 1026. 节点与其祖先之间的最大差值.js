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
var maxAncestorDiff = function(root) {
  if (!root) return 0
  let max = Number.MIN_SAFE_INTEGER
  const next = (prefix, node) => {
    if (!node) {
      let tempMax = Math.max(...prefix)
      let tempMin = Math.min(...prefix)
      return max = Math.max(max, Math.abs(tempMax-tempMin))
    }
    if (node.left) next(prefix.concat(node.val), node.left)
    if (node.right) next(prefix.concat(node.val), node.right)
  }
  next([], root)
  return max
};