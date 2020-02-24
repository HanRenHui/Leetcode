/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (!s.length) return t.length === 1
  if (!t.length) return s.length === 1
  if (s === t) return false;
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else if (s[i + 1] === t[j]) {
      if (count > 0) return false;
      count++;
      i++;
    } else if (s[i] === t[j + 1]) {
      if (count > 0) return false;
      count++;
      j++;
    } else if (s[i + 1] === t[j + 1]) {
      if (count > 0) return false;
      count++;
      i++;
      j++;
    } else {
      return false;
    }
  }
  if (i < s.length) {
    if (s.length - i  === 1) {
      return count === 0 ? true : false;
    } else {
      return false 
    }
  }
  if (j < t.length  ) {
    if (t.length - i === 1) {
      return count === 0 ? true : false;
    } else {
      return false 
    }
  } 
  return true;
};
