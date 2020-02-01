/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */

 class TreeNode {
   constructor(val) {
    this.val = val 
    this.left = this.right = null 
   }
 }
var str2tree = function (s) {
  if (!s.length) return null
  const next = (str) => {
    debugger
    if (!str.length) return null
    
    let leftCount = 0
    let end = start = 0 
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        break 
      }
      end = start = i + 1
    }
    let node = new TreeNode(str.slice(0, start))
    for (; end < str.length; end++) {
      let cur = str[end]
      if (cur === '(') {
        leftCount ++
      } else if (cur ===')'){
        leftCount --
        if (!leftCount) {
          node.left = next(str.slice(start+1, end))
          break 
        }
      }
    }
    node.right = next(str.slice(end+2, str.length-1))
    return node 
  }
  return next(s)
};
a = "-4(2(3)(1))(6(5)(7))"

rs = str2tree(a)
console.log(rs)