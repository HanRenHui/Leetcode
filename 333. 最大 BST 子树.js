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
var largestBSTSubtree = function (root) {
  const next = (node) => {
    if (!node) {
      return {
        size: 0,
        head: null, 
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER
      }
    }
    let leftInfo = next(node.left)
    let rightInfo = next(node.right)
    let curSize = 0
    if (leftInfo.head === node.left
      && rightInfo.head === node.right
      && node.val > leftInfo.max
      && node.val < rightInfo.min
    ) {
      curSize = leftInfo.size + rightInfo.size + 1 
    }
    let childMaxSize = Math.max(leftInfo.size, rightInfo.size)
    let curHead = leftInfo.size > rightInfo.size ? leftInfo.head : rightInfo.head 
    if (curSize > childMaxSize) {
      childMaxSize = curSize 
      curHead = node 
    }

    return {
      size: childMaxSize,
      max: Math.max(leftInfo.max, node.val, rightInfo.max), 
      min: Math.min(leftInfo.min, node.val, rightInfo.min),
      head: curHead
    }
  }
  let temp =  next(root)
  return temp.size 
};