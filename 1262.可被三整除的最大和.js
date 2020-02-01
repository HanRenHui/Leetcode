// 先加上所有的和，然后减去模对应的数字 模对应的分为三种情况
//  1.总和模为0直接返回，即所有数相加可以被3整除。
//  2.总和模为1，减去一个最小的模为1的数或者两个最小模为2的数。
//  3.总和模为2，

// 减去一个最小的模为2的数或者两个最小模为1的数。 注意边界处理即可。

/**
 * @param {number[]} nums
 * @return {number}
 */
function process1(nums, sum) {
  let max = Number.MAX_SAFE_INTEGER
  let min = max 
  let first = max 
  let second = max 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 1) min = Math.min(min, nums[i])
      
    if (nums[i] % 3 === 2) {
      if (nums[i] === 8 || nums[i] === 14) {
        debugger
      }
      if (first === max) {
        first = nums[i]
      } else if (second === max) {
        second = nums[i]
      } else {

        if (first > nums[i]) {
          second = Math.min(second, first)
          first = nums[i]
        } else if (second > nums[i]) {
          second = nums[i]
        }

      }
    }
  }
  return sum - Math.min(min, first + second)
}

function process2(nums, sum) {
  let max = Number.MAX_SAFE_INTEGER
  let min = max
  let first = max
  let second = max
  // 最小的模为2
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 3 === 2) {
      min = Math.min(min, nums[i])

    }
    if (nums[i] % 3 === 1) {
      if (first === max) {
        first = nums[i]
      } else if (second === max) {
        second = nums[i]
      } else {
        if (nums[i] < first) {
          second = Math.min(second, first)
          first = nums[i]
        } else if (nums[i] < second) {
          second = nums[i]
        }
      }
    }
  }
  return sum - Math.min(min, first + second)

}

var maxSumDivThree = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  let rs = sum % 3
  switch (rs) {
    case 0:
      return sum
    case 1:
      return process1(nums, sum)
    case 2:
      return process2(nums, sum)
    default:
      return 0
  }
};
rs = maxSumDivThree([4, 1, 5, 3, 1])
console.log(rs)