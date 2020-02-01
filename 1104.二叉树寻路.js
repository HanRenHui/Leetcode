/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  // 找到label在多少层
  let count = 1 
  let max = 1 
  let i = 1 
  let min = max = 1 
  let map = {1: {min, max}}
  while(label > max ) {
    min = max + 1 
    i *= 2
    max += i  
    count++
    // 记录在这一层的最大值和最小值
    map[count] = {min,max}
  }
  count-- 
  let rs = [label]
  while(count > 0) {
    // label /= 2 
    let temp = Math.floor(label / 2 )
    // 这一层的最大值和最小值
    let {min, max} = map[count]
    let cha = Math.min(max - temp, temp - min)
    // 记录对称点
    let parent 
    if (cha === max-temp) {
      parent = min + (max-temp)
    } else {
      parent = max - (temp-min)
    }
    parent > 0 && rs.unshift(parent)
    count--
    label = parent 
  }
  return rs 
};

pathInZigZagTree(3)