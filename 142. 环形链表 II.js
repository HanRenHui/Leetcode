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
var detectCycle = function(head) {
  let slow = head 
  let fast = head 
  let hasCircle = false 
  while(slow.next && fast.next.next) {
    slow = slow.next 
    fast = fast.next.next 
    if (slow === fast) {
      hasCircle = true 
      break 
    }
  }
  let temp = head 
  if (hasCircle) {
    while(temp !== slow) {
      slow = slow.next 
      temp = temp.next 
    }
  } else {
    return null  
  }
  return temp   
};