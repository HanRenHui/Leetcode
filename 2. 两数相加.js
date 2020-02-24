/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let head1 = l1;
  let head2 = l2;
  let rs = null 
  let pre = 0 
  let val = l1.val + l2.val
  if (val >= 10) {
    val %= 10 
    pre = 1 
  }
  let next = new ListNode(val);
  rs =next 
  head1 = head1.next 
  head2 = head2.next 
  while (head1 && head2) {
    let val = (head1.val + head2.val + pre);
    if (val >= 10) {
      val %= 10 
      pre = 1
    } else {
      pre = 0
    }
    next.next = new ListNode(val)
    next = next.next;
    head1 = head1.next 
    head2 = head2.next 
  }
  while(head1) {
    let val = head1.val + pre
    if (val >= 10) {
      val %= 10 
      pre = 1 
    } else {
      pre = 0 
    }
    next.next = new ListNode(val);
    next = next.next 
    head1 = head1.next 
  }
  while(head2) {
    let val = head2.val + pre
    if (val >= 10) {
      val %= 10 
      pre = 1 
    } else {
      pre = 0
    }
    next.next = new ListNode(val);
    next = next.next 
    head2 = head2.next 
  }
  if (pre) next.next = new ListNode(1)
  return rs 
};