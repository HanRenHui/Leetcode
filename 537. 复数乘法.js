var complexNumberMultiply = function(a, b) {
  let [m, n] = a.split('+')
  let [x, y] = b.split('+')
  n = parseInt(n.split('i')[0]) 
  y = parseInt(y.split('i')[0])
  m = parseInt(m)
  x = parseInt(x)
  return (m * x - n * y) + '+' + (m * y + n * x + 'i')
}
