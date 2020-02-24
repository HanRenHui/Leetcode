/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true 
  let fast = head 
  let slow = head 
  while(fast.next && fast.next.next) {
    fast = fast.next.next 
    slow = slow.next 
  }
  let newList = reverse(slow.next)
  slow = head 
  while(newList.next && slow.next) {
    if (newList.val !== slow.val) return false 
    newList = newList.next 
    slow = slow.next 
  }
  return true 
};

function reverse(head) {
  let tempHead = head 
  let headNode =head 
  while(tempHead.next) {
    let curNode = tempHead.next 
    let curNext = curNode.next 
    curNode.next = headNode 
    tempHead.next = curNext 
    headNode = curN0de 
  }
  return headNode
} 