/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function getSum(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0)
}

var pathSum = function(root, sum) {
  if (!root) return []
  let rs = []
  const walk = (prefix, node) => {
    if (!node) {
      if (getSum(prefix) === sum) {
        rs.push(prefix)
      }
      return 
    }
    if (node.left && node.right) {
      walk(prefix.concat(node.val), node.left)
      walk(prefix.concat(node.val), node.right)
    } else if (node.left) {
      walk(prefix.concat(node.val), node.left)
    } else {
      walk(prefix.concat(node.val), node.right)
    }

  }
  walk([], root)
  return rs 
};