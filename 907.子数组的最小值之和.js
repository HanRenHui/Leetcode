    /**
   * @param {number[]} A
   * @return {number}
   */

   // 未通过 
  var sumSubarrayMins = function (A) {
    let total = 0
    const next = arr => {
      if (!arr.length) return
      if (arr.length === 1) return total += arr[0]
      let min = Math.min(...arr)
      let minIndex = arr.findIndex(item => item === min)
      let leftArr = arr.slice(0, minIndex)
      let rightArr = arr.slice(minIndex + 1)
      // 以min为最小值的所有连续子数组的个数
      let count = (leftArr.length + 1) * (rightArr.length + 1)
      total += count * min
      next(leftArr)
      next(rightArr)
    }
    next(A)
    return total 
  };