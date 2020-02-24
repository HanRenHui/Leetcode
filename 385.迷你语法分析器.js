/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */

 //  "[123,[456,[789]]]"
var deserialize = function(s) {
  let head = null 
  const stack = []
  let numStr = ''
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    if (cur === '[') {
      stack.push('[')
    } else if (/\d/.test(cur)) {
      numStr += cur 
    } else if (cur === ']') {
      if (numStr.length) {
        stack.push(numStr)
        numStr = ''
      }
      let temp = []
      while(stack[stack.length-1] !== '[') {
        let top = stack.pop() 
        temp.unshift(top)
      }
      stack.pop() 
      let tempNi = new NestedInteger() 
      head = tempNi 
      temp.forEach(item => {
        tempNi.add(item)
      })
      stack.push(tempNi)
    } else if (cur === ',') {
      stack.push(numStr)
      numStr = ''
    }
  }
  if (numStr.length) {
    let tempNi = new NestedInteger() 
    tempNi.setInteger(numStr)
    return tempNi 
  }
  return head 
};
