/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null 
  const walk = (parentArr) => {
    if (!parentArr.length) return 
    let pre = null 
    let parent = []
    while(parentArr.length) {
      let node = parentArr.shift() 
      let left = node.left 
      let right = node.right 
      if (left)parent.push(left)
      if (right) parent.push(right)
      if (!pre) {
        pre = node 
      } else {
        pre.next = node 
        pre = node 
      }
    }
    walk(parent)
  }
  walk([root])
  return root
};

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
node1.left = node2 
node1.right = node5
node5.right = node6 
node2.left = node3
node2.right = node4 