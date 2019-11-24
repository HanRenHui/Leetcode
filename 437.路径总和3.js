// 双递归 
// 第一层递归 先序遍历节点 每遍历到一个节点, 则从该节点为根找所有路径 
var pathSum = function (root, sum) {
  let node = root
  let arr = []
  let rs = []
  let total = 0
  const getTotal = arr => {
    if (!arr.length) return 0
    return arr.reduce((pre, next) => pre + next)
  }
  const next = (prefix, node) => {
    prefix = prefix.concat(node.val)
    if (getTotal(prefix) === sum) {
      total++
    }
    if (node.left) {
      next(prefix, node.left)
    }
    if (node.right) {
      next(prefix, node.right)
    }
  }
  while (arr.length || node) {
    if (node) {
      next([], node)
      arr.push(node)
      node = node.left
    } else {
      node = arr.pop()
      node = node.right
    }
  }
  return total
};
