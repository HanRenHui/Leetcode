/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  let arr = []  
  let node = root 
  this.rs = []
  this.index = 0
  while(node || arr.length) {
    if (node) {
      arr.push(node)
      node = node.left 
    } else {
      node = arr.pop() 
      this.rs.push(node.val)
      node = node.right 
    }
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (!this.hasNext()) return null 
  return this.rs[this.index++]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.rs.length 
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */