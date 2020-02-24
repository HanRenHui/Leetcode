/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let count = 1 
  let target = head 
  let pre = null 
  // 找到目标点
  while(count < m) {
    pre = target 
    target = target.next 
    count++
  }

  // 开始反转
  let tempHead = target 
  while(count < n && target.next) {
    let curNode = target.next 
    let nextNode = curNode.next 
    target.next = nextNode 

    curNode.next = tempHead 
    tempHead = curNode 
    count++
    if (pre) pre.next = tempHead 
  }
  return pre ? head : tempHead  

};