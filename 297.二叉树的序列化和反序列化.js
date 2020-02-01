

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let arr = []
  const walk = (node) => {
    if (!node) {
      return arr.push('#')
    }
    arr.push(node.val)
    walk(node.left)
    walk(node.right)
  }
  walk(root)
  return arr
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return []
  const walk = (arr) => {
    if (!arr.length) return
    let cur = arr.shift() 
    if (cur === '#') {
      return null 
    } else {
      let node = new TreeNode(cur)
      node.left = walk(arr)
      node.right = walk(arr)
      return node
    }
  }
  return walk(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */