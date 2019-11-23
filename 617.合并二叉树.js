var mergeTrees = function (t1, t2) {
  const next = (t1, t2) => {
    if (!t1 && !t2) return null 
    let node 
    if (t1 && t2) {
      node = new TreeNode(t1.val + t2.val)
    } else if (t1) {
      node = new TreeNode(t1.val)
    } else if (t2) {
      node = new TreeNode(t2.val)
    }
    node.left = next(t1 ? t1.left : null, t2 ? t2.left : null)
    node.right = next(t1 ? t1.right : null, t2 ? t2.right : null)
    return node 
  }
  let root = next(t1, t2)
  return root
};