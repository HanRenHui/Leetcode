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
// 归并排序

var sortList = function(head) {
  if (!head) return null;
  const next = (head) => {
    if (!head) return 
    if (!head.next) return head 
    // 找中点
    let fast = head;
    let slow = head;
    while (slow.next && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let temp = slow.next 
    slow.next = null 
    let left = next(head)
    let right = next(temp)
    let list = merge(left, right)
    return list 
  };
  debugger 
  return next(head)
};
function merge(left, right) {
  let i = left 
  let j = right 
  let list = new ListNode(0)
  let phead = list 
  while(i && j) {
    if (i.val <= j.val) {
      list.next = i
      i = i.next 
    } else {
      list.next = j 
      j = j.next
    }
    list = list.next 
  }
  while(i) {
    list.next = i
    i = i.next 
    list = list.next 
  }
  while(j) {
    list.next = j
    j = j.next 
    list = list.next 
  }
  return phead.next 
}

function ListNode(val) {
  this.val = val 
  this.next =null 
}

n4 = new ListNode(4)
n2 = new ListNode(2)
n1 = new ListNode(1)
n3 = new ListNode(3)
n4.next = n2 
n2.next = n1 
n1.next= n3 
sortList(n4)