/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if (!root) return null 
  let arr = []
  let node = root 
  let pre = null 
  let head = null 
  while(arr.length || node) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      if (!head) {
        head = node 
      }
      if (pre) {
        pre.right = node 
        node.left = pre 
        pre = node 
      } else {
        pre = node 
      }
      node = node.right 
    }
  }
  // 寻找尾部
  let tempNode =head
  let tail = head 
  while(tempNode) {
    tail = tempNode
    tempNode = tempNode.right 
  }
  head.left = tail 
  tail.right = head 
  return head 
};
