/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  S = S.replace(/\s/, '')
  if (isEmail(S)) {
    S = S.toLowerCase().split('@');
    return S[0][0] + '*****' + S[0][S[0].length-1] + '@' + S[1]

  }
  S = S.replace(/\(|\)/g, "");
  S = S.replace(/\-/g, "");

  let numCount =  0 
  for (let v of S) {
    if (isNum(v)) numCount++
  }
  if (numCount === 10) {
    return '***-***-' + S.slice(S.length-4)
  } else if (numCount > 10) {
    let flag = '+'
    if (S.startsWith('-')) flag = '-'
    let prefix = '*'.repeat(numCount-10)
    return flag +prefix+ '-***-***-' + S.slice(S.length-4)
  }

};

function isEmail(str) {
  return /@/.test(str);
}

function isNum(num) {
  return /\d/.test(num);
}

"+*-***-***-3774"