var StockSpanner = function () {
  this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  if (!this.stack.length) {
    this.stack.push({
      price,
      num: 1
    })
    return 1
  } else {
    let top = this.stack[this.stack.length - 1]
    if (top.price > price) {
      this.stack.push({
        price,
        num: 1
      })
      return 1
    } else {
      let obj = { price, num: 1 }
      while (top && top.price <= price) {
        let temp = this.stack.pop()
        obj.num += temp.num
        top = this.stack[this.stack.length-1]
      }
      this.stack.push(obj)
      return obj.num
    }
  }
};
