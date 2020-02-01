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

 // 
var widthOfBinaryTree = function(root) {
  if (!root) return 0
  let rs = 1
  root.num = 0
  let M = 10 ** 7
  const next = (parent) => {
    if (!parent.length) return 
    let temp = []
    let start = -1 
    let end = -1

    while(parent.length) {
      let cur = parent.shift() 
      if (start === -1) {
        start = cur.num 
        end = cur.num 
      } else {
        end = cur.num
      }
      let left = cur.left 
      if (left) {
        left.num = (cur.num * 2 + 1) % M
        temp.push(left)
      }
      let right = cur.right 

      if (right) {
        right.num = (cur.num * 2 + 2) % M
        temp.push(right)
      }

    }
    rs = Math.max(rs, end - start + 1)
    // 把temp两侧的null都去掉
    next(temp)
  }
  next([root])
  return rs 
};

