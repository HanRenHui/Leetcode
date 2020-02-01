/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
function getHeight(node) {
  if (!node) return 0
  let left = getHeight(node.left)
  let right = getHeight(node.right)
  return Math.max(left, right) + 1
}

var printTree = function (root) {
  if (!root) return []
  let height = getHeight(root)
  let rs = []
  let columns = 0
  for (let i = 0; i < height; i++) {
    columns = 2 * columns + 1
  }
  for (let i = 0; i < height; i++) {
    rs.push(new Array(columns).fill(""))
  }
  const next = (index, start, end, node) => {
    if (!node) return 
    let pos = (start+end) / 2
    let arr = rs[index++]
    arr[pos] = node.val + ''
    next(index, start, pos-1, node.left)
    next(index, pos+1, end, node.right)

  }
  next(0, 0, columns-1, root)
  return rs 
};