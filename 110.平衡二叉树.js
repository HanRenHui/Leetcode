/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
  const next = (node) => {
    if (!node) return 0 
    let leftHeight = next(node.left)
    let rightHeight = next(node.right)
    // 左子树或者右子树返回了false 说明左子树或者右子树 不是平衡二叉树
    if (leftHeight === false || rightHeight === false) return false
    // 如果左右子树的高度差大于1 则该子树不是平衡二叉树
    if (Math.abs(leftHeight - rightHeight) > 1) return false
    return Math.max(leftHeight, rightHeight) + 1
  }
  let rs =next(root)
  return rs === false ? false : true 
   
};

let rs = isBalanced(node1)
console.log(rs)