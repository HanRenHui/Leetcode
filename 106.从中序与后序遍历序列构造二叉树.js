/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null 
  let rootV = postorder[postorder.length-1] 
  let rootInorderIndex = inorder.indexOf(rootV)
  let leftInorder = inorder.slice(0, rootInorderIndex)
  let rightInorder = inorder.slice(rootInorderIndex+1)
  let leftPostorder = postorder.slice(0, rootInorderIndex)
  let rightPostorder = postorder.slice(rootInorderIndex, postorder.length-1)
  return {
    val: rootV, 
    left: buildTree(leftInorder, leftPostorder),
    right: buildTree(rightInorder, rightPostorder)
  }
};

a = [9,3,15,20,7]
b = [9,15,7,20,3]
rs = buildTree(a, b)
console.log(rs)