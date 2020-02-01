/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let node = root 
  let arr = []
  let count = 0
  while(node || arr.length) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      if (++count === k) return node.val
      node = node.right 
    }
  }
};