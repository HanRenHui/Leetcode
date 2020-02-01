/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (p.val > q.val) {
    let temp = q 
    q = p 
    p = temp 
  }
  const next = (node) => {
    let rs 
    if (p.val <= node.val && q.val >= node.val) return node 
    if (q.val < node.val) {
      rs = next(node.left)
    } else if (p.val > node.val) {
      rs = next(node.right)
    }
    return rs 
  }
  let rs = next(root)
  return rs 
};
