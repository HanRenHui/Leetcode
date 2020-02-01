/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const next = (mount) => {
    if (mount < 0) return false 
    if (mount === 0) return 0
    let rs = Number.MAX_SAFE_INTEGER
    let rstemp = next(mount)
    for (let i = 0; i < coins.length; i++) {
      let cur = coins[i]
      let temp = next(mount - cur) 
      if (temp !== false) {
        rs = Math.min(temp,rstemp )
      } else {
        rs = Math.min(rstemp)
      }
    }
    return rs 
  }
  return next(amount)
};



class Node {
  constructor(val) {
    this.val = val 
    this.left = this.right = null 
  }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)