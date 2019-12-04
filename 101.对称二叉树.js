var isSymmetric = function(root) {
  if (!root) return true 
  const next = (left, right) => {
    if (!left && !right) return true 
    if ((left && !right) || (!left && right)) return false 
    if (left.val !== right.val) return false 
    return next(left.left, right.right) && next(left.right, right.left) 
  } 
  return next(root.left, root.right) 
};