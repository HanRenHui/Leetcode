/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.temp = []
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  let tempLast = this.temp[this.temp.length - 1]
  if (!this.temp.length || tempLast >= x) {
    this.temp.push(x)
  } else {
    this.temp.push(tempLast)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.stack.length) return 
  this.stack.pop() 
  this.temp.pop() 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.temp[this.temp.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */