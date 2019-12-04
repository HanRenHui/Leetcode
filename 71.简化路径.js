var simplifyPath = function (path) {
  path = path + '/'
  let len = path.length
  let stack = []
  let temp = ''

  for (let i = 0; i < len; ++i) {
    let cur = path[i]
    if (cur === '/') {
      if (temp) {
        if ('..' === temp) {
        // stack.push(temp)
          stack.pop() 
        } else if ('.' === temp) {

        } else {
          stack.push(temp)
        }
        temp = ''
      } 
    } else {
      temp += cur 
    }
  }
  return '/' + stack.join('/')
};