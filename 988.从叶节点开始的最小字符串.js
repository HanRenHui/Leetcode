/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
function NumToCode(num) {
  return String.fromCharCode(97 + parseInt(num))
}
var smallestFromLeaf = function(root) {
  if (!root) return ''
  let arr = []
  const next = (prefix, node) => {
    if (!node) return arr.push(prefix.split('').reverse().join(''))
    
    node.left && next(prefix + NumToCode(node.val), node.left)
    node.right && next(prefix + NumToCode(node.val), node.right)
  }  
  next('', root)
  return arr.reduce((pre, cur) => pre < cur ? pre : cur)
};