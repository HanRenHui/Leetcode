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
var deserialize = function (s) {
  if (s[0] != "[") return new NestedInteger(Number(s));
  let temp = ''
  let stack = []
  let curNestedInteger = null
  for (let i = 0, len = s.length; i < len; ++i) {
    let cur = s[i]
    if (cur === '[') {
      if (curNestedInteger) stack.push(curNestedInteger)
      let i = new NestedInteger()
      curNestedInteger = i
    } else if (cur === ']') {
      if (temp.length) curNestedInteger.add(parseInt(temp))
      let pre = curNestedInteger
      temp = ''
      if (stack.length) {
        curNestedInteger = stack.pop()
        curNestedInteger.add(pre)
      }
    } else if (/[0-9]/.test(cur)) {
      temp += cur
    } else if (cur === ',') {
      curNestedInteger.getList().add(parseInt(temp))
      temp = ''
    }
  }
  return curNestedInteger
};

