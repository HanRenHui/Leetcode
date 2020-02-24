/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head
  let fast = head
  let pre = null 
  n--
  while (n) {
    fast = fast.next
    n--
  }
  while (fast.next) {
    fast = fast.next
    pre = slow 
    slow = slow.next
  }
  // 要删除的节点是头节点
  if (slow === head) {
    return head.next 
  } else {
    pre.next = slow.next 
    slow.next = null 
  }
  return head

};