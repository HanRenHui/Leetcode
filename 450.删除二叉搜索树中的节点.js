var deleteNode = function (root, key) {
  debugger
  if (!root) return null
  let node = root
  if (key > root.val) {
    node.right = deleteNode(root.right, key)
  } else if (key < root.val) {
    node.left = deleteNode(root.left,key)
  } else {
    if (root.left && root.right) {
      let {rs, flag} = findMinNode(root.right)
      // 
      if (!flag) {
        deleteMinNode(root, root.right, rs)
        node.val = rs.val
      } else {
        let tempLeft = node.left 
        node = rs 
        rs.left = tempLeft 
      }

    } else if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    }
  }
  return node
}

function findMinNode(node) {
  let rs = node
  let flag = true  
  // flag为true表示没有左子树
  if (node.left) {
    flag = false 
    while (node) {
      rs = node
      node = node.left
    }
  } 

  // 返回最小节点
  return {
    rs, 
    flag
  }
}
function deleteMinNode(parent, node, target) {
  let pre = null
  while (node) {
    if (node.val === target.val) {
      if (pre) {
        pre.left = target.right 
      } else {
        parent.right = null 
      }
      return 
    }
    pre = node 
    node = node.left

  }
}

