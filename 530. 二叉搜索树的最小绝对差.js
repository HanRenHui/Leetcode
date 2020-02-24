/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let node = root 
  let arr = []
  let pre
  let min = Number.MAX_SAFE_INTEGER
  while(arr.length || node) {
    if(node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      if (pre !== undefined) {
        min = Math.min(min, Math.abs(pre - node.val))
      } 
      pre = node.val 
      node = node.right 
    }
  }
  return min
};

