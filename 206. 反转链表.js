/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let tempHead = head 
  let headNode = head  
  while(tempHead.next) {
    let curNode = tempHead.next 
    let curNext =curNode.next 
    curNode.next = headNode  
    tempHead.next = curNext 
    headNode = curNode 
  }
  return headNode 
};