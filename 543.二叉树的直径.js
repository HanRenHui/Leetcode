var diameterOfBinaryTree = function(root) {
  let max = 0 
  const getHeight = (node) => {
    if (!node) return 0 
    let left = getHeight(node.left)
    let right = getHeight(node.right)
    max = Math.max(max, left+right)
    return Math.max(left, right) + 1 
  } 
  getHeight(root)
  return max
};