  
// 方法1
var nextGreaterElement = function (nums1, nums2) {
  let rs = []
  for (let i = 0, len = nums1.length; i < len; i++) {
    let cur = nums1[i]
    let j = nums2.findIndex(item => item === cur)
    let flag = false
    for (len2 = nums2.length; j < len2; j++) {
      if (nums2[j] > cur) {
        flag = true
        rs.push(nums2[j])
        break
      }
    }
    if (!flag) {
      rs.push(-1)
    }
  }
  return rs
};
// 方法二 单调栈

var nextGreaterElement = function(nums1, nums2) {
  let rs = new Array(nums1.length).fill(-1)
  let stack = []

  for (let i = 0, len = nums2.length; i < len; i++) {
    let cur = nums2[i]
    if (i === 0) {
      stack.push(cur)
    } else {
      let lastone = null 

      while ( (lastone = stack[stack.length-1] ) < cur) {
        let index = nums1.indexOf(lastone)
        if (index !== -1) rs[index] = cur 
        stack.pop()
      }
      stack.push(cur)
    }
  }
  return rs 
}  