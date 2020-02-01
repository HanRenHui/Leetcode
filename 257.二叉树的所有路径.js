/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return []
  let rs = []
  const walk = (node, prefix) => {
    if (!node) {
      return rs.push(prefix.substr(0, prefix.length-2))
    }
    let left =node.left 
    let right =node.right 
    if (left && right) {
      walk(node.left, `${prefix}${node.val}->`)
      walk(node.right, `${prefix}${node.val}->`)
    } else if (left){
      walk(node.left, `${prefix}${node.val}->`)
    } else {
      walk(node.right, `${prefix}${node.val}->`)
    }

  }
  walk(root, '')
  return rs
};
