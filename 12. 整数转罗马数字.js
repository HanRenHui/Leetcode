/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let maps = ['M', 'CM', 'D', 'CD','C', 'XC','L','XL','X','IX', 'V', 'IV','I']
  let rs = ''
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      rs += maps[i]
      num -= values[i]
    }
  }
  return rs 
};