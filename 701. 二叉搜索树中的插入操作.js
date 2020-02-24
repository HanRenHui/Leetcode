/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  const next = (curNode, parentNode) => {
    if (!parentNode || !curNode) return 
    if (curNode.val < parentNode.val) {
      if(!parentNode.left) {
        parentNode.left = curNode
      } else {
        next(curNode, parentNode.left)
      }
    }
    if (curNode.val > parentNode.val) {
      if(!parentNode.right) {
        parentNode.right = curNode
      } else {
        next(curNode, parentNode.right)
      }
    }
  }
  next(new TreeNode(val), root)
  return root 
};