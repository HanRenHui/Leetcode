/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let maps = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let rs = 0;
  debugger;
  for (let i = 0; i < s.length; ) {
    let index;
    let temp = s[i];
    if (i < s.length - 1) temp += s[i + 1];
    index = maps.findIndex(item => item === temp);
    if (index > -1) {
      rs += values[index];
      i+=2
    } else {
      index = maps.findIndex(item => item === s[i]);
      rs += values[index];
      i++
    }
  }
  return rs;
};