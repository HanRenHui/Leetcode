/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let arr = []
  let node = root
  debugger
  while (arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.left
    } else {
      node = arr.pop()

      // 临时保存节点的右侧节点(旧右侧节点)
      let tempRight = node.right
      if (node.left) {
        // 将左侧节点放到右侧
        node.right = node.left
        // 左侧节点置空
        node.left = null 
        // 将新右侧节点的右侧叶子节点设置为旧右侧节点
        // node.right.right = tempRight 
        let tempNode = node.right
        let preNode = tempNode
        // tempNode为空时 preNode保存的刚好是右侧叶子节点
        while (tempNode) {
          preNode = tempNode
          tempNode = tempNode.right
        }
        preNode.right = tempRight
      }
      node = tempRight
    }
  }
  return root
};

class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}

node1.left = node2
rs = flatten(node1)
console.log(rs)