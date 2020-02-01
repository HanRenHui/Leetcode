// 还是按照层序遍历 只不过偶数层的时候 把tempV数组反转一下 push进rs数组

var zigzagLevelOrder = (root) => {
  if (!root) return []
  let rs =[]
  const walk = (parentArr, flag) => {
    if (!parentArr.length) return false 
    let tempParent = []
    let tempV = []
    for (let i = 0; i < parentArr.length; i++) {
      let cur = parentArr[i]
      tempV.push(cur.val)
      let left = cur.left 
      let right = cur.right 
      if (left) tempParent.push(left)
      if (right) tempParent.push(right)
    }
    if (flag) {
      tempV.reverse() 
    }
    rs.push(tempV)
    walk(tempParent, !flag)
  }
  walk([root], false)
  return rs 
}