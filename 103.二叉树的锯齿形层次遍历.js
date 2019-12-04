var zigzagLevelOrder = function (root) {
  if (!root) return []
  let rs = []
  const next = (preLayer, flag) => {
    if (!preLayer.length) return
    let temp = []
    let nextLayer = []
    while (preLayer.length) {
      let curNode = preLayer.pop()
      let leftNode, rightNode
      leftNode = curNode.left
      rightNode = curNode.right
      temp.unshift(curNode.val)

      if (flag % 2 !== 0) {
        [leftNode, rightNode] = [rightNode, leftNode]
      }
      if (leftNode) {
        nextLayer.push(leftNode)
      }
      if (rightNode) {
        nextLayer.push(rightNode)
      }

    }
    temp.length > 0 && rs.push(temp)
    next(nextLayer, ++flag)
  }
  next([root], 1)
  return rs
};