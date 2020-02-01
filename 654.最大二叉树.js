/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null
  const next = (arr) => {
    if (!arr.length) return null
    let max = Math.max(...arr)
    let maxIndex = arr.findIndex(item => item === max)
    let node = new TreeNode(max)
    node.left = next(arr.slice(0, maxIndex))
    node.right = next(arr.slice(maxIndex+1))
    return node 
  }
  return next(nums)
};


