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
var boundaryOfBinaryTree = function(root) {
  if (!root) return[]
  let res = [root.val]
  let node = root.left 
  if (!root.left && !root.right) return res 
  // 添加左边界
  while(node) {
    if (node.left||node.right)
    res.push(node.val)
    if (node.left) {
      node = node.left 
    } else if (node.right){
      node = node.right 
    } else {
      node = null 
    }
  }
  // 添加叶子节点
  let arr = []
  let temp = root 
  while(arr.length || temp) {
    if (temp) {
      arr.push(temp)
      temp = temp.left 
    } else {
      temp = arr.pop() 
      if (!temp.left && !temp.right) res.push(temp.val)
      temp = temp.right 
    }
  }
  // 添加右边界
  let stack = []
  node = root.right 
  while(node) {
    if (node.left ||node.right)
    stack.push(node.val)
    if (node.right) {
      node = node.right 
    } else if (node.left) {
      node = node.left 
    } else {
      node = null 
    }
  }
  while(stack.length) {
    res.push(stack.pop())
  }
  return res 
};