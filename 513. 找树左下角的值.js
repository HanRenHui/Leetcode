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
var findBottomLeftValue = function(root) {
  let v = root.val 
  const next = parent => {
    if (!parent.length) return 
    let temparr = []
    while(parent.length) {
      let cur = parent.shift() 
      if (cur.left) {
        temparr.push(cur.left)
      } 
      if(cur.right) {
        temparr.push(cur.right)
      }
    }
    if(temparr.length)
    v = temparr[0].val
    next(temparr)
  } 
  next([root]) 
  return v
};