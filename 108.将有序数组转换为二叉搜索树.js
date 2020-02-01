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

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var sortedArrayToBST = function (nums) {
  const next = (arr) => {
    if (!arr.length) return null
    let head = parseInt(arr.length/2)
    let root = new TreeNode(arr[head])
    let leftarr = arr.slice(0, head)
    let rightarr = arr.slice(head + 1)
    root.left = next(leftarr)
    root.right = next(rightarr)
    return root
  }
  return next(nums)
};

rs = sortedArrayToBST([-10, -3, 0, 5, 9])
console.log(rs)