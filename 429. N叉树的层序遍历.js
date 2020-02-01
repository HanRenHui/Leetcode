/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let rs = []
  const next = (parent) => {
    if (!parent.length) return
    let temp = []
    let tempV = []
    while (parent.length) {
      let curNode =parent.shift() 
      tempV.push(curNode.val)
      curNode.children.forEach(child => {
        child && temp.push(child)
      })
    }
    tempV.length > 0 && rs.push(tempV)
    next(temp)
  }
  next([root])
  return rs
};