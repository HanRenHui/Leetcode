class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}
function createTree(arr) {
  arr = [].concat(arr)
  let root = new Node(arr.shift()) 
  let temp = [root]
  while(temp.length) {
    let leftNode, rightNode 
    let curNode = temp.shift() 
    let left = arr.shift() 
    let right = arr.shift() 
    if (left) {
      leftNode = new Node(left)
      temp.push(leftNode)
      curNode.left = leftNode
    }
    if (right) {
      rightNode = new Node(right)
      temp.push(rightNode)
      curNode.right = rightNode
    }
  }
  return root 
}

let root = createTree([3, 9, 20, null, null, 15, 7]) 


var levelOrder = function(root) {
  if (!root) return []
  let rs = []  
  const next = (parentArr) => {
    if (!parentArr.length) return 
    let tempArr = []
    let valArr = []
    while(parentArr.length) {
      let curNode = parentArr.shift() 
      curNode.left && tempArr.push(curNode.left)
      curNode.right && tempArr.push(curNode.right)
      valArr.push(curNode.val)
    }
    rs.push(valArr)
    next(tempArr)
  }
  next([root])
  return rs 
};


let rs = levelOrder(root)
console.log(rs)