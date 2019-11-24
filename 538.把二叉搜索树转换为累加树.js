// 右根中序便利
// root 是数组形式的二叉搜索树
// 如果是数组表示的树
// var convertBST = function(root) {
//   if (!root) return []
//   let temp = []
//   node = 0 
//   let total = 0 
//   while(root[node] !== undefined || temp.length) {
//     if (root[node]!==undefined) {
//       temp.push(node)
//       node = node * 2 + 2
//     } else {
//       node = temp.pop() 
//       let m = root[node]
//       root[node] += total 
//       total += m
//       node = node * 2 + 1 
//     }
//   }
//   return root 
// };
// let rs = convertBST([5, 2, 13])
// console.log(rs)

var convertBST = function(root) {
  let temp = []
  let node = root 
  let total = 0
  while(temp.length || node) {
    if (node) {
      temp.push(node)
      node = node.right
    } else {
      node = temp.pop() 
      node.val += total 
      total = node.val 
      node = node.left 
    }
  }
  return root 
}
