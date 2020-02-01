/**
 * @param {number[]} preorder
 * @return {boolean}
 */
// way1
// 先序遍历中 第一个值便是root 找到序列中第一个比root值大的, 从这个值往后的所有值都在右子树上，这个值和root之间的值都在左子树上,
// 对左右子树递归地验证就可以了 (好像会爆栈)
var verifyPreorder = function (preorder) {

  const next = (arr) => {
    if (!arr.length) return true
    let root = arr[0]
    let index = -1
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > root) {
        index = i
        break
      }
    }
    if (index !== -1) {
      let rs = arr.slice(index).every(item => item > root)
      if (rs === false) return false
      let Lrs = next(arr.slice(1, index))
      if (Lrs === false) return false
      let Rrs = next(arr.slice(index))
      if (Rrs === false) return false
    } else {
      // index 为-1 说明没有右子树
      let Lrs = next(arr.slice(1))
      if (Lrs === false) return false
    }

  }
  let rs = next(preorder)
  return rs === false ? false : true
};


