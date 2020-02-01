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

 // 相较于求最大深度  比如 某个结点没有左子树 则该节点的最小深度是右子树的深度+1
var minDepth = function (root) {
  if (!root) return 0
if (root.left && root.right) {
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  return Math.min(left, right) + 1
} else if (!root.left && !root.right) {
  return 1
} else if (!root.left) {
  return minDepth(root.right) + 1
} else if (!root.right) {
  return minDepth(root.left) + 1
}
};