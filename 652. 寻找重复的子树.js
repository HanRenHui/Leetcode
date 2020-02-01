function postSerilize (node, arr)  {
  if (!node) return arr.push('#')
  postSerilize(node.left, arr)
  postSerilize(node.right, arr)
  arr.push(node.val)
}

var findDuplicateSubtrees = function (root) {

  let map = new Map()
  let rs = []
  const fn = (node, key) => {
    if (key === '#') return 
    if (map.get(key)) {
      if (map.get(key) === 1) {
        rs.push(node)
      }
      map.set(key, map.get(key) + 1)

    } else {
      map.set(key, 1)
    }
  }
  const next = (node) => {
    if (!node) return 
    // 左子树序列化结果
    let leftSer = []
    // 右子树序列化结果
    let rightSer = []
    
    postSerilize(node.left, leftSer)
    postSerilize(node.right, rightSer)
    // 判断该树是否重复
    fn(node, leftSer.join() + rightSer.join() + node.val)
    next(node.left)
    next(node.right)
  }
  next(root)
  return rs 
}


class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node22 = new Node(2)
let node3 = new Node(3)
let node41 = new Node(4)
let node42 = new Node(4)
let node43 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node1.left = node2 
node1.right = node22


let rs = findDuplicateSubtrees(node1)
console.log(rs)
