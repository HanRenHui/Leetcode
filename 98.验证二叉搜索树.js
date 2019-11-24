var isValidBST = function(root) {
  let node = root 
  let arr = []
  let pre = Number.MIN_SAFE_INTEGER
  while(arr.length || node) {
    if (node) {
      arr.push(node) 
      node = node.left 
    } else {
      node = arr.pop() 
      if (node.val <= pre) return false 
      pre = node.val 
      node = node.right 
    }
  }
  return true 
};
console.log(Number.MIN_SAFE_INTEGER)