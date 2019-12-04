var invertTree = function(root) {
  const next = (node) => {
    if (!node) return 
    [node.left, node.right] = [node.right, node.left]  
    next(node.left)
    next(node.right)
  }
  next(root)
  return root 
};