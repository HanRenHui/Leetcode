/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let pre = "+";
  debugger;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (cur === " ") continue;
    if (/[\+\-\*\/]/.test(cur)) {
      pre = cur;
    } else {
      let num = "";
      if (/\d/.test(s[i + 1])) {
        continue;
      }
      let index = i;
      while (/\d/.test(s[index])) {
        num = s[index] + num;
        index--;
      }
      num = +num;
      if (pre === "+") {
        stack.push(num);
      } else if (pre === "-") {
        stack.push(-num);
      } else if (pre === "*" || pre === "/") {
        stack.push(comput(stack.pop(), pre, num));
      }
    }
  }
  let rs = 0;
  while (stack.length) {
    rs += stack.pop();
  }
  return rs;
};
function comput(n1, type, n2) {
  let rs 
  switch (type) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      rs = n1 * n2;
      return rs > 0 ? Math.floor(n1 * n2) : Math.ceil(n1 * n2);
    case "/":
      rs = n1 / n2;
      return rs > 0 ? Math.floor(n1 / n2) : Math.ceil(n1 / n2);
  }
}

s = "14-3/2";
b = calculate(s);
console.log(b);
