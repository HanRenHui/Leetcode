/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let node = root 
  let arr = []
  let rs = []
  while(arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      rs.push(node.val)
      node = node.right 
    }
  }
  return rs 
};