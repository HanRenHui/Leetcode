/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let arr = new Array(num1.length + num2.length).fill(0) 
  for (let i = num1.length-1; i >= 0; i--) {
    for(let j = num2.length-1; j >= 0; j--){
      arr[i+j+1] += (+ num1[i]) * (+num2[j])
    }
  }
  let pre = 0 
  for (let i = arr.length-1; i >= 0; i--) {
    arr[i] += pre 
    pre = parseInt(arr[i] / 10)
    arr[i] = arr[i] % 10
  }
  while(!arr[0]) {
    arr.shift() 
  }
  return arr.join('')
};