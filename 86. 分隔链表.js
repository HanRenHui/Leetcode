/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let VnodeL = new ListNode(0)
  let VnodeR = new ListNode(0)
  let next = head 
  let nextL = VnodeL 
  let nextR = VnodeR 
  while(next) {
    let v = next.val 
    if ( v < x) {
      nextL.next = new TreeNode(v) 
      nextL = nextL.next 
    } else {
      nextR.next = new TreeNode(v) 
      nextR = nextR.next 
    }
    next = next.next 
  }
  nextL.next = VnodeR.next 
  return VnodeL.next 
  
};
