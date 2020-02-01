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
var convertBST = function (root) {
  if (!root) return null
  let node = root
  let arr = []
  let pre = null
  while (arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.right
    } else {
      node = arr.pop()
      if (pre) {
        node.val = node.val + pre.val
      }
      pre = node
      node = node.left
    }
  }
  return root
};
