class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}
function createTree(arr) {
  arr = [].concat(arr)
  let root = new Node(arr.shift()) 
  let temp = [root]
  while(temp.length) {
    let leftNode, rightNode 
    let curNode = temp.shift() 
    let left = arr.shift() 
    let right = arr.shift() 
    if (left) {
      leftNode = new Node(left)
      temp.push(leftNode)
      curNode.left = leftNode
    }
    if (right) {
      rightNode = new Node(right)
      temp.push(rightNode)
      curNode.right = rightNode
    }
  }
  return root 
}

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
var isSymmetric = function(root) {
  if (!root) return true
  const next = (left, right) => {
    if (!left && !right) return true 
    if (!left || !right) return false 
    if (left.val !== right.val) return false 
    return next(left.left, right.right) && next(left.right, right.left)
  }
  return next(root.left, root.right) 
};