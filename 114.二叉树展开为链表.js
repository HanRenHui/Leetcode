var flatten = function (root) {
  const next = (node) => {
    if (!node) return 
    next(node.left)
    next(node.right)
    let temp = node.right 
    node.right = node.left 
    node.left = null
    while(node.right) node = node.right 
    node.right = temp 
  }
  next(root)
};