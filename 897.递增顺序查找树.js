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
var increasingBST = function(root) {
  let node = root 
  let arr = []
  let pre = null 
  let head =null 
  while(arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      if (!head) head = node 
      if (pre) {
        pre.right = node 
        node.left = null 
      } 
      pre = node 
      node =node.right 
    }
  }
  return head
};