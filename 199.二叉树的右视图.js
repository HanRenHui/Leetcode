/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // 层序遍历 每一层的最后一个添加到结果里
var rightSideView = function (root) { 
  if (!root) return []
  let rs = [root.val]
  const walk = parent => {
    if (!parent.length) return 
    let temp = []
    while(parent.length) {
      let cur = parent.shift() 
      let left =cur.left 
      let right = cur.right 
      if (left) temp.push(left)
      if (right) temp.push(right)
    }
    if (temp.length)
    rs.push(temp[temp.length-1].val)
    walk(temp)
  }
  walk([root])

};