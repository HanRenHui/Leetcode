/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSame(left, right) {
  if (!left && !right) return true 
  if ((left && !right) || (!left && right)) return false 
  if (left.val !== right.val) return false 
  return isSame(left.left, right.left) && isSame(left.right, right.right)
}

var isSubtree = function(s, t) {
  if (!s && !t) return true
  if (!s || !t) return false 
  if (s.val !== t.val) {
    let rs =  isSubtree(s.left, t)
    if(rs) return rs 
    return isSubtree(s.right, t)
  } else {
    let rs = isSame(s, t)
    if (rs) return rs 
    let temp = isSubtree(s.left, t)
    if (temp) return true 
    return isSubtree(s.right, t)
  }
};
class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}
let node1 = new Node(1)
let node2 = new Node(1)
node1.left =node2 
rs = isSubtree(node1, node2)
console.log(rs)