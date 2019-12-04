// 按先序
var serialize = function (root) {
  let arr = []
  const next = (node) => {
    if (!node) return arr.push('#')
    arr.push(node.val)
    next(node.left)
    next(node.right)
  }
  next(root)
  return arr
}

var deserialize = function (data) {
  if (!data.length) return null
  const next = (arr) => {
    let cur = arr.shift()
    if (cur !== '#') {
      let curNode = new TreeNode(cur)
      curNode.left = next(arr)
      curNode.right = next(arr)
      return curNode
    } else {
      return null
    }
  }
  return next(data)
}

