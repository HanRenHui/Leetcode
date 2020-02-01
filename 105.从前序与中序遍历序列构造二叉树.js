/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  let rootV = preorder[0]
  let rootInorderIndex = inorder.indexOf(rootV)
  let leftInorder = inorder.slice(0, rootInorderIndex)
  let rightInorder = inorder.slice(rootInorderIndex + 1)
  let leftPreOrder = preorder.slice(1, rootInorderIndex+1)
  let rightPreOrder = preorder.slice(rootInorderIndex + 1)
  return {
    val: rootV,
    left: buildTree(leftPreOrder, leftInorder),
    right: buildTree(rightPreOrder, rightInorder)
  }
};
