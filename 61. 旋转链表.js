/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
  if (!head || !k) return head  
  let L = head 
  let R = head 
  let len = 0 
  let next = head 
  while(next) {
    len ++
    next = next.next 
  }
  k %= len 
  if (!k) return head 
  k-- 
  while(k--) {
    R = R.next 
  }

  let pre = null 
  while(R.next) {
    R = R.next 
    pre = L 
    L = L.next 
  }

  pre.next = null 
  R.next = head 
  return L
};

