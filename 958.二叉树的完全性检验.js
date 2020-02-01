/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  if (!root) return false 
  let flag = false 
  const walk = (parent) => {
    if (!parent.length) return 
    let temp = []
    while(parent.length) {
      let node = parent.shift() 
      let left = node.left 
      let right = node.right 
      if (left) {
        if (flag) return false 
        temp.push(left)
      } else {
        flag = true 
      }
      if (right) {
        if (flag) return false 
        temp.push(right)
      } else {
        flag = true 
      }
    }
    return walk(temp)
  }
  let rs = walk([root])
  return rs === false ? false : true 
};