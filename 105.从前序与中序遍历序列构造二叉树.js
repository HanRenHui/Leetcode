var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  let root = preorder[0]
  let rootinOrderIndex = inorder.indexOf(root)
  let leftInOrder = inorder.slice(0, rootinOrderIndex)
  let rightInOrder = inorder.slice(rootinOrderIndex+1)
  let leftPreOrder = preorder.slice(1, rootinOrderIndex+1)
  let rightPreOrder = preorder.slice(rootinOrderIndex+1)
  return {
    val: root, 
    left: buildTree(leftPreOrder, leftInOrder), 
    right: buildTree(rightPreOrder, rightInOrder)
  }
};