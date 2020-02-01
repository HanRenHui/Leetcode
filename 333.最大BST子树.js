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

function isSearchTree(root) {
  let node =root 
  let arr = []
  let pre = null
  let count = 0
  while(arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      count++
      if (pre) {
        if (node.val <= pre) return {same: false, count: 0}
      } 
      pre = node.val 
      node = node.right 
    }
  }
  return {same: true, count}

}


var largestBSTSubtree = function(root) {
  if (!root) return 0
  let max = 1
  const next = (node) => {
    if (!node) return 
    // next(node.left)
    // next(node.right)
    let {same: leftSame, count: leftCount} = isSearchTree(node.left)
    let {same: rightSame, count: rightCount} = isSearchTree(node.right)
    max = Math.max(leftCount, rightCount, max)
    if (!leftSame) {
      next(node.left)
    }
    if(!rightSame) {
      next(node.right)
    }
  }
  let {same, count} = isSearchTree(root)
  if (same) return count 
  next(root) 
  return max 
};