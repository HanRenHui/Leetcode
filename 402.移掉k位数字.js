    /**
   * @param {string} num
   * @param {number} k
   * @return {string}
   */
  var removeKdigits = function (num, k) {
    if (num.length === k) return '0'
    let stack = []
    let index = 0
    for (let i = 0, len = num.length; i < len; i++) {
      let cur = num[i]
      if (!stack.length) {
        stack.push(cur)
      } else {
        // 单调递增栈
        while (stack[stack.length - 1] > cur && index < k) {
          stack.pop()
          ++index
        }
        stack.push(cur)
      }
    }

    let rs = stack.join('')
    if (rs.length > num.length-k) {
      rs = rs.substring(0, num.length-k)
    }
    // 全零的情况
    if (/^0*$/.test(rs)) return '0' 
    while (rs[0] === '0' && rs.length > 2) {
      rs = rs.substr(1)
    }
    return rs
  };