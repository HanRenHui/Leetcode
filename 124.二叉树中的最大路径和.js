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
var maxPathSum = function(root) {
  if (!root) return 0
  let max = root.val
  let min = Number.MIN_SAFE_INTEGER
  debugger
  const getHeight = (node) => {
    if (!node) return min
    let left = getHeight(node.left)
    let right = getHeight(node.right)
    max = Math.max( max, left + right + node.val, left + node.val, right + node.val, node.val, left, right)
    left = left === Number.MIN_SAFE_INTEGER ? 0 : left 
    right = right === Number.MIN_SAFE_INTEGER ? 0 : right 
    return Math.max(left + node.val, right + node.val, node.val)

  }  
  getHeight(root)
  return max
};
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
// a = [5,4,8,11,null,13,4,7,2,null,null,null,1]
a = [9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]
node = createTree(a)
rs = maxPathSum(node)
console.log(rs)
