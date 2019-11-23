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
    let left = arr.pop() 
    let right = arr.pop() 
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