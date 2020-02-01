function postSerilize(node, arr) {
  if (!node)return arr.push('#')
  postSerilize(node.left, arr)
  postSerilize(node.right, arr)
  arr.push(node.val)
}

var countUnivalSubtrees = function(root) {
  let total = 0
  const next = (node) => {
    if (!node) return 
    let leftSer = []
    let rightSer = []
    postSerilize(node.left, leftSer)
    postSerilize(node.right, rightSer)
    let totalArr = [node.val, ...leftSer, ...rightSer]
    let flag = true 
    for (let i = 1; i < totalArr.length; i++) {
      if (totalArr[i] === '#'){
        continue 
      } else {
        if (totalArr[i] !== totalArr[0]) flag = false 
      }
    }
    if (flag) {
      total ++
    }
    next(node.left)
    next(node.right)
  }
  next(root)
  return total
}