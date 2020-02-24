/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let root = new TreeNode(preorder[0])
  const next = (parentNode, curNode) => {
    if (!parentNode ||!curNode) return 
    if (curNode.val < parentNode.val) {
      if (!parentNode.left) {
        parentNode.left = curNode
      } else {
        next(parentNode.left, curNode)
      }
    } else {
      if (!parentNode.right) {
        parentNode.right = curNode
      } else {
        next(parentNode.right, cucrNode)
      }
    }
    
  }
  for (let i = 1; i < preorder.length; i++) {
    next(root, new Node(preorder[i]))
  }
  return root 
};